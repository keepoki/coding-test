/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start

const convert = function (s, numRows) {
  if (numRows === 1 || s.length < numRows) return s;

  const table = createTable(numRows);
  let reverse = false; // false: down(++), true: up(--)
  let rowIdx = 0;

  for (const char of s) {
    table[rowIdx].push(char);
    reverse ? rowIdx-- : rowIdx++;
    (rowIdx >= numRows - 1 || rowIdx <= 0) && (reverse = !reverse);
  }

  return table.reduce((acc, val) => acc + val.join(''), '');
}

/**
 * 요소가 없는 2중 배열을 리턴하는
 * @param {number} rows
 * @returns {[[]]}
 */
function createTable(rows) {
  const table = new Array();
  for (let i = 0; i < rows; i++) {
    table.push(new Array());
  }
  return table;
}

// @lc code=end

/**
 * "PAYPALISHIRING" 문자열은 다음과 같이 지정된 수의 행에 지그재그 패턴으로
 * 작성된다.
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 위의 패턴을 한 줄씩 읽어보면 "PAHNAPLSIIGIR"이 된다.
 * 지그재그 패턴으로 변환하고 한 줄씩 읽은 값을 반환해야 한다.
 * s는 문자열, numRows는 행의 개수이다. 지그재그는 numRows의 영향을 받는다.
 */

console.log(convert('PAYPALISHIRING', 3)); // PAHNAPLSIIGYIR

// 두번 째 풀이, 지그재그 패턴 문자열을 만들고 합치는 방식의 convert
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert2 = function (s, numRows) {
  if (numRows < 1 || s.length < numRows) return s;
  const table = convertZigzagPattern(s, numRows)
  return table.reduce((acc, val) => acc + val.join(''), '');
};

/**
 * @param {string} str 
 * @param {number} numRows 
 * @returns {[string[]]}
 */
function convertZigzagPattern(str, numRows) {
  const table = createTable(numRows);
  let direction = 'down'; // 'up' | 'down'
  let row = 0, column = 0;
  if (numRows > 1) {
    for (const char of str) {
      table[row][column] = char;

      if (direction === 'down') {
        row++;
      } else if (direction === 'up') {
        row--;
        column++;
      }

      if (row >= numRows) {
        row -= 2;
        column++;
        direction = 'up';
      } else if (row < 0) {
        row += 2;
        column--;
        direction = 'down';
      }
    }
  } else {
    for (const char of str) {
      table[0].push(char);
    }
  }

  return table;
}

console.log(convert2('PAYPALISHIRING', 5)); // PHASIYIRPLIGAN
console.log(convert2('ABC', 1)); // ABC
console.log('-----------------------------------');

// 지그재그 패턴으로 변환된 문자열에 대해 출력하고 싶어서 아래와 같이 구현하였다.
/**
 * @param {[string[]]} table 
 * @returns {string}
 */
function tableConvertToString(table) {
  if (!table || table.length < 1) return '';


  const copyTable = JSON.parse(JSON.stringify(table));
  let result = '', wordSpace = ' ';

  if (hasHangulCharacter(copyTable[0]?.[0])) {
    // 이쁜 출력을 하기 위해 한글(2 BYTE)이라면 공백을 다르게 설정한다.
    wordSpace = '';
  }

  for (const row of copyTable) {
    for (let i = 0; i < row.length; i++) {
      result += row[i] ? `${row[i]}${wordSpace}` : '  '; // char + space 1 : space 2
    }
    result += '\n';
  }
  return result;
}

let result = convertZigzagPattern('PAYPALISHIRING', 5);
console.log(tableConvertToString(result));
/* -- console log --
  P       H 
  A     S I 
  Y   I   R 
  P L     I G 
  A       N
 */

/**
 * @param {string} char 
 * @returns {boolean} true: 한글
 */
function hasHangulCharacter(char) {
  try {
    if (!char) {
      throw new Error('char is not a valid');
    }
    const charCode = char.charCodeAt(0);
    const startHangulCharCode = '가'.charCodeAt(); // 44032
    const endHangulCharCode = '힣'.charCodeAt(); // 55203
    return startHangulCharCode <= charCode && charCode <= endHangulCharCode;
  } catch (error) {
    throw new Error(error);
  }
}

result = convertZigzagPattern('반갑습니다저는한국사람입니다', 5);
console.log(tableConvertToString(result));
/* -- console log --
  반      국
  갑    한사
  습  는  람
  니저    입다
  다      니
 */
