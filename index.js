// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

superbowlWin = (record) => {
    let result = record.find(record => record.result === "W");
    return !!result ? result.year : undefined;
}

superbowlWin = (record) => {
    let result = record.find(record => record.result === "W");
    return !!result? result.year : undefined;
}





















