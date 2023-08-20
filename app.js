var inputDayTag = document.querySelector(".inputDay");
var inputMonthTag = document.querySelector(".inputMonth");
var inputYearTag = document.querySelector(".inputYear");
var calculateBtnTag = document.querySelector(".calculateBtn");
var resultYearTag = document.querySelector(".resultYear");
var resultMonthTag = document.querySelector(".resultMonth");
var resultDayTag = document.querySelector(".resultDay");
var errorDayTag = document.querySelector(".errorDay");
var errorMonthTag = document.querySelector(".errorMonth");
var errorYearTag = document.querySelector(".errorYear");
var dayLabelTag = document.querySelector(".dayLabel");
var monthLabelTag = document.querySelector(".monthLabel");
var yearLabelTag = document.querySelector(".yearLabel");
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
var pattern = ^[0-9]+$;
var checkLeapYear = function (birthYear) {
    if ((birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 400 === 0) {
        months[2] = 29;
    }
    else {
        months[2] = 28;
    }
};
var checkValidDate = function (birthDay, birthMonth, birthYear, months, year) {
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
calculateBtnTag === null || calculateBtnTag === void 0 ? void 0 : calculateBtnTag.addEventListener("click", function () {
    var birthDay = parseInt(inputDayTag.value);
    var birthMonth = parseInt(inputMonthTag.value);
    var birthYear = parseInt(inputYearTag.value);
    var date = new Date();
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
        var resultDay = day - birthDay;
        var resultMonth = month - birthMonth;
        var resultYear = year - birthYear;
        resultDayTag.append(resultDay.toString());
        resultMonthTag.append(resultMonth.toString());
        resultYearTag.append(resultYear.toString());
    }
});
