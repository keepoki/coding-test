const fs = require("fs");
const path = require("path");

const rootDir = __dirname; // leetcode 폴더 기준
const difficulties = ["1-easy", "2-medium", "3-hard"];

// tags.json 읽기
const tagsPath = path.join(rootDir, "tags.json");
let tags = {};
if (fs.existsSync(tagsPath)) {
  tags = JSON.parse(fs.readFileSync(tagsPath, "utf-8"));
}

// 난이도 문자열에서 숫자- 제거
function cleanDifficulty(diff) {
  return diff.replace(/^\d+-/, ""); // "1-easy" -> "easy"
}

// 태그를 마크다운 뱃지로 변환
function renderTagsBadge(tagList) {
  if (!tagList || tagList.length === 0) return "미정";

  // 하이픈 뒤 단어를 대문자로 변환
  const toCamelCase = (str) =>
    str
      .split("-")
      .map((s, i) => (i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)))
      .join("");

  return tagList
    .map(tag => {
      const camelTag = toCamelCase(tag);
      const safeTag = encodeURIComponent(camelTag);
      return `![${tag}](https://img.shields.io/badge/${safeTag}-blue?style=flat)`;
    })
    .join(" ");
}


let rows = [];

difficulties.forEach(diff => {
  const diffDir = path.join(rootDir, diff);
  if (!fs.existsSync(diffDir)) return;

  const topics = fs.readdirSync(diffDir).filter(f =>
    fs.statSync(path.join(diffDir, f)).isDirectory()
  );

  topics.forEach(topic => {
    const topicDir = path.join(diffDir, topic);
    const files = fs.readdirSync(topicDir).filter(f => f.endsWith(".js"));

    files.forEach(file => {
      const number = parseInt(file.split(".")[0]);
      const relPath = path.join(diff, topic, file).replace(/\\/g, "/");
      const tagList = tags[number] || [];
      const tagBadges = renderTagsBadge(tagList);

      rows.push(`| [${file}](${relPath}) | ${cleanDifficulty(diff)} | ${tagBadges} |`);
    });
  });
});

// 테이블 정렬
rows.sort((a, b) => {
  const numA = parseInt(a.match(/^\| \[(\d+)/)[1]);
  const numB = parseInt(b.match(/^\| \[(\d+)/)[1]);
  return numA - numB;
});

// README 상단 내용
const readmeHeader = `# LeetCode

<https://leetcode.com/>

LeetCode 코딩 테스트 문제 풀이를 기록합니다.
`;

// 테이블 헤더
const tableHeader = "| 파일 | 난이도 | 태그 |\n|------|--------|------|";
const table = [readmeHeader, tableHeader, ...rows].join("\n");

// README.md 저장
fs.writeFileSync(path.join(rootDir, "README.md"), table, "utf-8");
console.log("✅ README.md 테이블 생성 완료!");
