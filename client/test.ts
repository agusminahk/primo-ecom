function solution(statues) {
  // console.log(statues.length);
  return Math.max(...statues) - Math.min(...statues) + 1 - statues.length;
}

console.log(solution([6, 2, 3, 8])); // 3 // 7
console.log(solution([5, 4, 6])); // 0
console.log(solution([6, 3])); // 2
