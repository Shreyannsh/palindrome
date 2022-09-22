var input = document.querySelector("#birthDate");
var output = document.querySelector("#output");
var check = document.querySelector("#btn-check");

function revereseStr(str) {
    var charList = str.split('');
    var reversedListofChars = charList.reverse();
    var reversedStr = reversedListofChars.join("");
    return revereseStr;
}

function isPalindrome(str) {
    var reverse = revereseStr(str);
    return str === reverse;
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

    dateStr.year.toString();

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

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForAllDateFormats(date) {
    var listOfPalindromes = getAllDateFormats(date);

    var flag = false;

    for (var i = 0; i < listOfPalindromes.length; i++) {
        if (isPalindrome(listOfPalindromes[i])) {
            flag = true;
            break;
        }
    }
    return flag;
}

function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31.30, 31];

    if (month === 2) {
        if (isLeapYear(year)) {
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

    function getNextPalindromeDate {
        var ctr = 0;
        var nextDate = getNextDate(date);
        while (1) {
            ctr++;
            var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
            if (isPalindrome) {
                break;
            }
            nextDate = getNextDate(newDate);
        }
        return [ctr, nextDate];
    }

}

function clickHandler(e) {
    var bdayStr = input.value;

    if (bdayStr !== "") {
        var listofDate = bdayStr.split("-");

        var date = {
            day: Number(listofDate[2]),
            month: Number(listofDate[1]),
            year: Number(listofDate[0])
        }

        var isPalindrome = checkPalindromeForAllDateFormats(date);

        if (isPalindrome) {
            output.innerText = "Yay! your birthday ia a palindrome!!🥳🥳";
        } else {
            var [ctr, nextD
                ate] = getNextPalindromeDate(date);

            output.innerText = " The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${ctr} days!😔";
        }
    }
}

check.addEventListener("click", clickHandler);



















































































































// function checkPalindrome() {

//     var birthdate = input.value;     
//     x = birthdate.replaceAll("-", "");
//     sepList = x.split("");
//    console.log(correctDate);
//     y = sepList.join("");
//     console.log(y);
//     console.log(typeof y);
//     reversedList = sepList.reverse();
//     console.log(reversedList);
//     z = reversedList.join("");
//     console.log(z);

//     if (y === z) {
//         output.innerText = "WOW! Your birthday is a Palindrome";
//     }

// };