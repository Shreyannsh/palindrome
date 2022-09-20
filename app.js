var input = document.querySelector("#birthDate");
var output = document.querySelector("#output");
var check = document.querySelector("#btn-check");

function checkPalindrome() {

    var birthdate = input.value;     
    x = birthdate.replaceAll("-", "");
    sepList = x.split("");
    console.log(sepList);
    correctDate = sepList.replaceAll("sepList[7]","sepList[1]")
   
   console.log(correctDate);
    y = sepList.join("");
    console.log(y);
    console.log(typeof y);


    reversedList = sepList.reverse();
    console.log(reversedList);
    z = reversedList.join("");
    console.log(z);

    if (y === z) {
        output.innerText = "WOW! Your birthday is a Palindrome";
    }

};




check.addEventListener("click", checkPalindrome);