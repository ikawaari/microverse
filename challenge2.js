function serviceLane(n, cases) {
  // Write your code here

  let widest = []; // input width
  for (let i = 0; i < cases.length; i++) {
    console.log("Segment 1 ******");
    // let segments = [];
    let start = cases[i][0];
    let end = cases[i][1];

    // console.log("start :" + start);
    // console.log("end :" + end)

    let w = 0;
    for (let j = start; j <= end; j++) {
      if (w === 0) {
        w = n[j];
      } else if (n[j] < w) {
        w = n[j];
      }

      console.log(j);

      // segments.push(n[j]);
    }

    widest.push(w);

    // console.log(widest);
  }

  console.log(widest);

  //   console.log(segments);
}
serviceLane(
  [2, 3, 1, 2, 3, 2, 3, 3],
  [
    [0, 3],
    [4, 6],
    [6, 7],
    [3, 5],
    [0, 7],
  ]
);
