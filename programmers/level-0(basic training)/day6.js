/**
 * 1. 마지막 두 원소
 * https://school.programmers.co.kr/learn/courses/30/lessons/181927
 * 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면
 * 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면
 * 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.
 * 예)
 * | num_list        | result              |
 * |-----------------|---------------------|
 * | [2, 1, 6]       | [2, 1, 6, 5]        |
 * | [5, 2, 1, 7, 5] | [5, 2, 1, 7, 5, 10] |
 */
{
  function solution(num_list) {
    const length = num_list.length;
    if (num_list[length - 1] > num_list[length - 2]) {
      num_list.push(num_list[length - 1] - num_list[length - 2]);
    } else {
      num_list.push(num_list[length - 1] * 2);
    }
    return num_list;
  }
}

/**
 * 2. 수 조작하기 1
 * https://school.programmers.co.kr/learn/courses/30/lessons/
 * 정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의
 * 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라
 * n의 값을 바꿉니다.
 * "w" : n이 1 커집니다.
 * "s" : n이 1 작아집니다.
 * "d" : n이 10 커집니다.
 * "a" : n이 10 작아집니다.
 * 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을
 * return 하는 solution 함수를 완성해 주세요.
 * 예)
 * | n | control       | result |
 * |---|---------------|--------|
 * | 0 | "wsdawsdassw" | -1     |
 */
{
  function solution(n, control) {
    return [...control].reduce((acc, val) => {
      switch (val) {
        case 'w':
          return acc + 1;
        case 's':
          return acc - 1;
        case 'd':
          return acc + 10;
        case 'a':
          return acc - 10;
      }
    }, n);
  }
}

/**
 * 3. 수 조작하기 2
 * https://school.programmers.co.kr/learn/courses/30/lessons/181925
 * 정수 배열 numLog가 주어집니다. 처음에 numLog[0]에서 부터 시작해
 * "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로
 * 다음과 같은 조작을 했다고 합시다.
 * "w" : 수에 1을 더한다.
 * "s" : 수에 1을 뺀다.
 * "d" : 수에 10을 더한다.
 * "a" : 수에 10을 뺀다.
 * 그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다.
 * 즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.
 * 주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을
 * return 하는 solution 함수를 완성해 주세요.
 * 예)
 * | numLog                                    | result        |
 * |-------------------------------------------|---------------|
 * | [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1] | "wsdawsdassw" |
 */
{
  function solution(numLog) {
    const obj = {
      1: 'w',
      '-1': 's',
      10: 'd',
      '-10': 'a',
    };
    return numLog
      .slice(1)
      .reduce(
        (acc, val, idx) => acc + obj[`${numLog[idx + 1] - numLog[idx]}`],
        '',
      );

    // let answer = '';
    // let cal = 0;
    // for (let i = 0; i < numLog.length - 1; ++i) {
    //   cal = numLog[i + 1] - numLog[i];
    //   switch (cal) {
    //     case 1:
    //       answer += 'w';
    //       break;
    //     case -1:
    //       answer += 's';
    //       break;
    //     case 10:
    //       answer += 'd';
    //       break;
    //     case -10:
    //       answer += 'a';
    //       break;
    //   }
    // }
    // return answer;
  }
}

/**
 * 4. 수열과 구간 쿼리 3
 * https://school.programmers.co.kr/learn/courses/30/lessons/181924
 * 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다.
 * queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.
 * 각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.
 * 위 규칙에 따라 queries를 처리한 이후의 arr를
 * return 하는 solution 함수를 완성해 주세요.
 * 예)
 * | arr             | queries                | result          |
 * |-----------------|------------------------|-----------------|
 * | [0, 1, 2, 3, 4] | [[0, 3],[1, 2],[1, 4]] | [3, 4, 1, 0, 2] |
 */
{
  function solution(arr, queries) {
    // 이 풀이 결과가 더 빠름
    const flatQueries = queries.flat();
    for (let i = 0; i < flatQueries.length - 1; i += 2) {
      const one = flatQueries[i];
      const two = flatQueries[i + 1];
      const temp = arr[one];
      arr[one] = arr[two];
      arr[two] = temp;
    }
    return arr;

    // for (const [i, j] of queries) {
    //     const [temp1, temp2] = [arr[i], arr[j]];
    //     arr[i] = temp2;
    //     arr[j] = temp1;
    // }
    // return arr;
  }
}

/**
 * 5. 수열과 구간 쿼리 2
 * https://school.programmers.co.kr/learn/courses/30/lessons/181923
 * 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다.
 * queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
 * 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서
 * 가장 작은 arr[i]를 찾습니다.
 * 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
 * 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.
 * 예)
 * | arr             | queries                         | result     |
 * |-----------------|---------------------------------|------------|
 * | [0, 1, 2, 4, 3] | [[0, 4, 2],[0, 3, 2],[0, 2, 2]] | [3, 4, -1] |
 */
{
  function solution(arr, queries) {
    const answer = [];
    for (const [s, e, k] of queries) {
      const value = arr
        .filter((v, i) => s <= i && i <= e && k < v)
        .sort((a, b) => a - b)[0];
      answer.push(value ? value : -1);
    }
    return answer;
  }
}
