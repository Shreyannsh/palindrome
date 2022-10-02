function reverseStr(str) {
  var charList = str.split("");
  var reversedList = charList.reverse();
  var reverseStr = reversedList.join("");

  return reverseStr;
}

function isPalindrome(str) {
  var reversedStr = reverseStr(str);
  return str === reversedStr;
}

function convertDateToStr(date) {
  var dateStr = {
    day: "",
    month: "",
    year: ""
  };
  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  } else {
    dateStr.day = date.day.toString();
  }
  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  } else {
    dateStr.month = date.month.toString();
  }
  dateStr.year = date.year.toString();

  return dateStr;
}

function getAllDateFormats(date) {
  var dateStr = convertDateToStr(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd];
}

function checkPalindromeForAllDateFormats(date) {

  var dateFormate = getAllDateFormats(date);


  for (var i = 0; i < dateFormate.length; i++) {
    var flag = false;
    if (isPalindrome(dateFormate[i])) {
      flag = true;
      break;
    }

  }
  return flag;
}

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

function getNextDate(date) {
  var nextDate = {
    day: "",
    month: "",
    year: ""
  };

  var day = date.day + 1;

  var month = date.month;
  var year = date.year;

  daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    if (isLeapYear(date.year)) {
      if (day > 29) {
        day = 1;
        month++;
      }
    } else {
      if (day > 28) {
        day = 1;
        month++;
      }
    }
  } else {
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month++;
    }
  }
  if (month > 12) {
    month = 1;
    year++;
  }
  return {
    day: day,
    month: month,
    year: year
  };
}

function getNextPalindromeDate(date) {
  var ctr = 0;
  var nextDate = getNextDate(date);

  while (1) {
    ctr++;
    var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
    if (isPalindrome) {
      break;
    }
    nextDate = getNextDate(nextDate);
  }
  return [ctr, nextDate];
}

function getPreviousDate(date) {

  var day = date.day - 1;

  var month = date.month;
  var year = date.year;

  daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 3) {
    if (isLeapYear(date.year)) {
      if (day === 0) {
        day = 29;
        month--;
      }
    } else {
      day = 28;
      month--;
    }
  } else {
    if (day === 0 && month === 1) {
      day = 31;
      month = 12;
    }
    if (day === 0) {
      day = daysInMonth[month - 2];
      month--;
    }
  }
  if (month === 0) {
    month = 12;
    year--;
  }
  return {
    day: day,
    month: month,
    year: year
  };
}

function getPreviousPalindromeDate(date) {
  var ctr2 = 0;
  var previousDate = getPreviousDate(date);

  while (1) {
    ctr2++;
    var isPalindrome = checkPalindromeForAllDateFormats(previousDate);
    if (isPalindrome) {
      break;
    }
    previousDate = getPreviousDate(previousDate);
  }
  return [ctr2, previousDate];
}


var input = document.querySelector("#birthDate");
var output = document.querySelector("#output");
var check = document.querySelector("#btn-check");


function clickHandler(e) {

  var inputt = input.value;

  if (inputt !== "") {

    var splitInput = inputt.split("-");

    var date = {
      day: Number(splitInput[2]),
      month: Number(splitInput[1]),
      year: Number(splitInput[0])
    }

    var isPalindromee = checkPalindromeForAllDateFormats(date);

    if (isPalindromee) {
      output.innerText = "Yay! your Bithday is a palindrome🤩";
    } else {
      var [ctr, nextDate] = getNextPalindromeDate(date);

      var [ctr2, previousDate] = getPreviousPalindromeDate(date);

      if (ctr < ctr2) {
        output.innerText = `The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}.\n You are behind by ${ctr} days.😞`;
      }
      else{
        output.innerText = `The nearest palindrome date was ${previousDate.day}-${previousDate.month}-${previousDate.year}.\n You missed by ${ctr2} days.😞`;
      }
    }
  }
  else{
  output.innerText="Please enter the date"
  }
}
check.addEventListener("click", clickHandler);