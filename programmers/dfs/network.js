function solution(n, computers) {
  let answer = 0;
  // 방문한 네트워크 노드 방문처리 여부 배열
  let visited = Array(n).fill(false);
  function dfs(index) {
    // dfs 함수를 통해 방문했다면 해당 노드 방문처리
    visited[index] = true;
    for (let i = 0; i < n; i++) {
      // 재귀 조건: 현재 반복문을 도는 컴퓨터 배열의 값이 1 즉, 다른 컴퓨터와 연결되어있고 그 노드를 방문하지 않았다면 dfs 함수를 재귀호출해서 깊이탐색 실시
      if (computers[index][i] === 1 && !visited[i]) dfs(i);
    }
  }

  for (i = 0; i < n; i++) {
    // 방문 하지 않았다면 dfs 실시
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}
