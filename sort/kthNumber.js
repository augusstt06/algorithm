function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    // commands[i]를 구조분해 할당할수도 있음
    // const [start, end, index] = commands[i];
    // start : commands[i][0] end: commands[i][1] index: commands[i][2]에 해당됨.
    const newArr = mergeSort(array.slice(commands[i][0] - 1, commands[i][1]));
    answer.push(newArr[commands[i][2] - 1]);
  }
  return answer;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  return result;
}
