const inputDayTag = document.querySelector(".inputDay") as HTMLInputElement;
const inputMonthTag = document.querySelector(".inputMonth") as HTMLInputElement;
const inputYearTag = document.querySelector(".inputYear") as HTMLInputElement;
const calculateBtnTag = document.querySelector(
  ".calculateBtn"
) as HTMLButtonElement;

const resultYearTag = document.querySelector(".resultYear") as HTMLSpanElement;
const resultMonthTag = document.querySelector(
  ".resultMonth"
) as HTMLSpanElement;
const resultDayTag = document.querySelector(".resultDay") as HTMLSpanElement;

const errorDayTag = document.querySelector(".errorDay") as HTMLSpanElement;
const errorMonthTag = document.querySelector(".errorMonth") as HTMLSpanElement;
const errorYearTag = document.querySelector(".errorYear") as HTMLSpanElement;

const dayLabelTag = document.querySelector(".dayLabel") as HTMLLabelElement;
const monthLabelTag = document.querySelector(".monthLabel") as HTMLLabelElement;
const yearLabelTag = document.querySelector(".yearLabel") as HTMLLabelElement;

var months = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const pattern = ^[0-9]+$;

const checkLeapYear = (birthYear: number) => {
  if ((birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 400 === 0) {
    months[2] = 29;
  } else {
    months[2] = 28;
  }
};

const checkValidDate = (
  birthDay: number,
  birthMonth: number,
  birthYear: number,
  months: object,
  year: number
) => {
  var i = true;
  errorDayTag.innerHTML = "";
  inputDayTag.style.border = "1px solid hsl(0, 1%, 44%)";
  dayLabelTag.style.color = "black";

  errorMonthTag.innerHTML = "";
  errorYearTag.innerHTML = "";

  if (birthDay > months[birthMonth] || birthDay > 31 || !pattern.match(birthDay)) {
    inputDayTag.style.border = "1px solid #FF0000";
    dayLabelTag.style.color = "red";
    errorDayTag.innerHTML = "Must be a valid day";
    i = false;
  }
  if (birthMonth > 12 || !pattern.match(birthMonth)) {
    inputMonthTag.style.border = "1px solid #FF0000";
    monthLabelTag.style.color = "red";
    errorMonthTag.innerHTML = "Must be a valid month";
    i = false;
  }
  if (birthYear > year || !pattern.match(birthYear)) {
    inputYearTag.style.border = "1px solid #FF0000";
    yearLabelTag.style.color = "red";
    errorYearTag.innerHTML = "Must be a valid month";
    i = false;
  }

  return i;
};

// const checkEmpty = (
//   birthDay: number,
//   birthMonth: number,
//   birthYear: number
// ) => {
//   if (isNaN(birthDay)) {

//   }
// };

calculateBtnTag?.addEventListener("click", () => {
  const birthDay = parseInt(inputDayTag.value);
  const birthMonth = parseInt(inputMonthTag.value);
  const birthYear = parseInt(inputYearTag.value);

  const date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  checkLeapYear(birthYear);
  if (checkValidDate(birthDay, birthMonth, birthYear, months, year)) {
    resultDayTag.innerHTML = "";
    resultMonthTag.innerHTML = "";
    resultYearTag.innerHTML = "";

    if (birthDay > day) {
      day += months[month - 1];
      month -= 1;
    }

    if (birthMonth > month) {
      month += 12;
      year -= 1;
    }

    const resultDay = day - birthDay;
    const resultMonth = month - birthMonth;
    const resultYear = year - birthYear;

    resultDayTag.append(resultDay.toString());
    resultMonthTag.append(resultMonth.toString());
    resultYearTag.append(resultYear.toString());
  }
});
