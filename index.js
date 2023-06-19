const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0;

function reducer(accumulator, item) {
  return accumulator + item;
}

function batteries() {
  totalBatteries = batteryBatches.reduce(reducer, totalBatteries);
  return totalBatteries;
}
console.log(batteries());
