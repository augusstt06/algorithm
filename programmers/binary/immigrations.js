function solution(n, times) {
  times.sort((a, b) => a - b);
  let min = 1;
  let max = times[times.length - 1] * n;

  while (min < max) {
    const mid = Math.floor((min + max) / 2);
    const processed = times.reduce(
      (acc, time) => acc + Math.floor(mid / time),
      0
    );

    if (processed >= n) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }
  return min;
}
