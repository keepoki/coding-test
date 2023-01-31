/**
 * 1. 옷가게 할인 받기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120818
 * 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%,
 * 50만 원 이상 사면 20%를 할인해줍니다. 구매한 옷의 가격 price가 주어질 때,
 * 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
 * 예) 150,000 =>	142,500
 */
function solution(price) {
  const salePrice = {
    "20%": 500000,
    "10%": 300000,
    "5%": 100000,
  };
  const getSalePrice = (price, percent) => price - price * percent;

  if (price >= salePrice["20%"]) {
    price = getSalePrice(price, 0.2);
  } else if (price >= salePrice["10%"]) {
    price = getSalePrice(price, 0.1);
  } else if (price >= salePrice["5%"]) {
    price = getSalePrice(price, 0.05);
  }

  return parseInt(price, 10);
}

/**
 * 2. 아이스 아메리카노
 * https://school.programmers.co.kr/learn/courses/30/lessons/120819
 * 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는
 * 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때,
 * 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은
 * 배열을 return 하도록 solution 함수를 완성해보세요.
 * 예) 5,500 => [1, 0], 15,000 => [2, 4000]
 */
function solution(money) {
  const americanoPrice = 5500;
  return [parseInt(money / americanoPrice, 10), money % americanoPrice];
}

/**
 * 3. 나이 출력
 * https://school.programmers.co.kr/learn/courses/30/lessons/120820
 * 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질
 * 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.
 * 예) 40 => 1983, 23 => 2000
 */
function solution(age) {
  return 2022 - age + 1;
}

/**
 * 4. 배열 뒤집기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120821
 * 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의
 * 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
 * 예) [1, 2, 3, 4, 5] =>	[5, 4, 3, 2, 1],
 * [1, 0, 1, 1, 1, 3, 5] =>	[5, 3, 1, 1, 1, 0, 1]
 */
function solution(num_list) {
  return num_list.reverse();
}
