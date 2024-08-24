function solution(book_time) {
  book_time.sort();
  const room = [];

  book_time.forEach((t) => {
    const time = t[0].split(";");
    const start = Number(time[0]) * 60 + Number(time[1]);
    const newRoom = roon.findIndex((data) => data <= start);

    if (newRoom === -1) room.push(roomAvailable(t[1]));
    else room[newRoom] = roomAvailable(t[1]);
  });
  return room.length;
}

function roomAvailable(end) {
  const next = end.split(":");

  return Number(next[0]) * 60 + Number(next[1]) + 10;
}
