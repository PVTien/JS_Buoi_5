//Quản lý tuyển sinh
console.log("Bài 1:");
function calcZoneGrade(zone) {
  switch (zone) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    default:
      return 0;
  }
}
function calcObjectGrade(object) {
  switch (object) {
    case 1:
      return 2.5;
    case 2:
      return 1.5;
    case 3:
      return 1;
    default:
      return 0;
  }
}
function ex1() {
  var standard = 22;
  var subject1 = 8;
  var subject2 = 5;
  var subject3 = 7;
  var zone = "A";
  var object = 2;
  var zoneGrade = 0;
  var objectGrade = 0;
  var totalGrade = 0;

  zoneGrade = calcZoneGrade(zone);
  objectGrade = calcObjectGrade(object);
  totalGrade = subject1 + subject2 + subject3 + zoneGrade + objectGrade;
  if (
    subject1 === 0 ||
    subject2 === 0 ||
    subject3 === 0 ||
    totalGrade < standard
  ) {
    console.log("Rớt");
  } else {
    console.log("Đậu");
  }
}
ex1();

//Tính tiền điện
console.log("Bài 2:");
function ex2() {
  var numberKW = 400;
  var totalMoney = 0;

  if (numberKW <= 50) {
    totalMoney = numberKW * 500;
  } else if (numberKW <= 100) {
    totalMoney = 50 * 500 + (numberKW - 50) * 650;
  } else if (numberKW <= 200) {
    totalMoney = 50 * 500 + 50 * 650 + (numberKW - 100) * 850;
  } else if (numberKW <= 350) {
    totalMoney = 50 * 500 + 50 * 650 + 100 * 850 + (numberKW - 200) * 1100;
  } else if (numberKW > 350) {
    totalMoney =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (numberKW - 350) * 1300;
  }

  console.log("Số tiền điện phải trả:", totalMoney);
}
ex2();

//Tính thuế thu nhập cá nhân
console.log("Bài 3:");
function ex3() {
  var incomePerYear = 320;
  var personNumber = 2;
  var incomeTaxable = incomePerYear - 4 - personNumber * 1.6;
  var taxPercent = 0;

  if (incomeTaxable <= 60) {
    taxPercent = incomeTaxable * 0.05;
  } else if (incomeTaxable > 60 && incomeTaxable <= 120) {
    taxPercent = incomeTaxable * 0.1;
  } else if (incomeTaxable > 120 && incomeTaxable <= 210) {
    taxPercent = incomeTaxable * 0.15;
  } else if (incomeTaxable > 210 && incomeTaxable <= 384) {
    taxPercent = incomeTaxable * 0.2;
  } else if (incomeTaxable > 384 && incomeTaxable <= 624) {
    taxPercent = incomeTaxable * 0.25;
  } else if (incomeTaxable > 624 && incomeTaxable <= 960) {
    taxPercent = incomeTaxable * 0.3;
  } else if (incomeTaxable > 960) {
    taxPercent = incomeTaxable * 0.35;
  }
  console.log("Thuế phải chịu là:", Math.round(taxPercent * 100) / 100, "$");
}
ex3();

//Tính tiền cáp
console.log("Bài 4:");
function ex4() {
  var customerType = "enterprise";
  var channelNumber = 2;
  var connectNumber = 20;
  var totalBill = 0;

  switch (customerType) {
    case "resident":
      totalBill = 4.5 + 20.5 + channelNumber * 7.5;
      break;
    case "enterprise":
      if (connectNumber <= 10) {
        totalBill = 15 + 75 + channelNumber * 50;
      } else {
        totalBill = 15 + 75 + (connectNumber - 10) * 5 + channelNumber * 50;
      }
      break;
  }
  console.log("Tổng hóa đơn là:", totalBill, "$");
}
ex4();
