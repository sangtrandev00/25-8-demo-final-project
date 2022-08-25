function calculateDaysLeft(DateEnd) {
  const present_date = new Date();
  const end_date = new Date(DateEnd);
  var Difference_In_Time = end_date.getTime() - present_date.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Math.round(Difference_In_Days);
}

function sumMoney(TargetProjectID, donateList) {
  let sum = 0;
  donateList.forEach((donate) => {
    if (donate.FundProjectId == TargetProjectID) {
      sum += donate.DonateMoney;
    }
  });
  return sum;
}

export { calculateDaysLeft, sumMoney };
