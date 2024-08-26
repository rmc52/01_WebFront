// 변수 선언 및 초기화

//document : html 문서 내에서
//get : 얻다
// element : html 요소
// byID :아이디가 일치하는

const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const result = document.getElementById("calcResult");


// console.log(number1);

// 두 수를 더해서 화면에 출력하는 함수
function plusFn() {
    // input요소.value : input요소에 작성된 값 얻어오기
    const value1 = number1.value;
    const value2 = number2.value;

    console.log("두 수의 합 : ", value1 + value2);
// -> input 요소에 작성된 값은 무조건 문자열(string) 형태라서
// 더했을 때 이어쓰기되는 문제 발생..

// [해결방법]
// 문자열(string)을 숫자(number)로 변경하는 코드를 수행
// 숫자만 작성된 문자열 "123"을
// 진짜 숫자타입 123로 바꾸는 방법
// -> Number("123") -> 123

console.log(Number(value1) + Number(value2));


// 두 수의 합을
// 아이디가 "calcResult"인 요소(result 변수)의
// 내부 글자(innerText)로 대입하기
result.innerText = Number(value1) + Number(value2);

}

// 빼기 함수


function minusFn() {
    // input요소.value : input요소에 작성된 값 얻어오기
    const value1 = number1.value;
    const value2 = number2.value;

    console.log("두 수의 합 : ", value1 - value2);

    console.log(Number(value1) - Number(value2));



result.innerText = Number(value1) - Number(value2);
}



// 곱 함수
// 함수에 괄호인자()는 매개,전달 변수가 있으면 넣고 그런식
function multiFn() {
    // input요소.value : input요소에 작성된 값 얻어오기
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);



result.innerText = value1 * value2;

}


// 나누기 함수


function divFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

   



result.innerText = value1 / value2;

}




// module 함수

function modFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

   



result.innerText = value1 % value2;
}



// 3+

const number11 = document.getElementById("num1");
const number22 = document.getElementById("num2");
const number33 = document.getElementById("num3");
const result2 = document.getElementById("total");


function plus3Fn() {
    const value1 = Number(number11.value);
    const value2 = Number(number22.value);
    const value3 = Number(number33.value);

   // total.innerText = Number(num1.value)
//                      Number(num2.value)
//                      Number(num3.value);


result2.innerText = value1 + value2 + value3;
}



// 증가/감소 연산자 (++, --)

// 증가, 감소할 수를 저장할 변수 선언 및 0으로 초기화
let count = 0;
// (주의) const로 선언하면 값을 증가/감소 시킬 수 없음**

// 필요한 요소 얻어오기

// 문서 내에서 id가 "result2"인 요소를 얻어와서 result2 변수에 대입

const result3 = document.getElementById("result2");

// 1증가 함수
function increase() {
    // count 변수의 값 1증가
    count++; // 또는 ++count; -> count 값이 1 증가

    // 증가한 count 값을 result2의 내부 글자로 대입
    result3.innerText = count;
    /*  여기서 후위연산을 해도 0이 먼저 안뜨는이유 : 
    윗칸이 먼저인식하기때문에 이미 count++에서 한번 셈*/

}

// 1 감소 함수
function decrease() {
    // 감소한 count 값을 result2의 내부 글자로 대입
    // result3.innerText = count--; 후위연산. 0부터 세고나서 적용이기때문에 0부터띄움 
    result3.innerText = --count;
}


//전위, 후위 연산 확인하기
function check() {
    // 함수 밖, 안은 구분되는 공간
    // 밖에 작성한 변수 count,
    // 안에 작성한 변수 count
    // 서로 다른 변수(동명이인)
    let count = 100;

    /*컴퓨터에게 연산은 +-/* 뿐만 아니라
    코드를 하나하나 실행하는것들이 전부 연산*/

    // 전위 연산(++count, --count) 확인
    // -> 다른 연산보다 먼저 수행
    // -> count값이 먼저 증가/감소 후
    // console에 출력

    console.log(++count); //101
    console.log(++count); //102
    console.log(++count); //103
    console.log(--count); //102
    console.log(--count); //101
    console.log(--count); //100

    // 후위연산(count++, count--) 확인
    // ->다른 연산이 다끝나고 마지막에 수행

    count = 50;

    console.log(count++); // 콘솔로그를 먼저 찍고나서, 그때부터 51. (50을 출력 후 51로 증가)
    console.log(count);

    console.log(count--); // 51 출력 후 50으로 감소
    console.log(count);


    let a = 10;
    let b = 5;
    let c = ++a * b--;

    //최종적으로 a,b,c 에 저장된 값은 얼마
    // a == 11
    // b == 4 (위에서 한번 읽혔고 위에서 계산할때는 후위(5로 먼저계산후 c로 넘어감))
    // c == 55


    console.log(a, b, c);



}

//연습문



function printJSObject() {
const userName = document.getElementById("userName").value;
const userAge = document.getElementById("userAge").value;
const userGender = document.getElementById("userGender").value;

const userInfo = {
    "이름" : userName,
    "나이" : userAge,
    "성별" : userGender
};
console.log(userInfo);
}






