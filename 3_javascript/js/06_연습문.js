




// 문제 1 
function num1() {
    let a = 5;
    let b = 10;

    if (a > b) {
        //consolelog("a가 더 크다");
        alert("A");
    } else if (a < b) {
        alert("B");
    } else {
        // a와 b가 같을경우
    }


    calcResult.innerText = result;
}


function num2() {
    let n = 7;
    if (n % 2 == 1) {
        alert(`${n} 는 홀수 입니다.`);
    } else {
        alert(`${n} 는 짝수 입니다.`);
    }
}


//문제3 **** 
// max로 덮어씌우는식, 다른걸로 다시복
function num3() {
    let x = 15;
    let y = 22;
    let z = 9;

    // 최대값을 저장해둘 변수 (max)
    let max = x; // x값을 일단 가장 큰값으로 저장해둠
    // max == 15

    if (y > max) { // 현재 max(x)와 y값을 비교
        // y가 더 크면 max에 y값 덮어쓰기
        max = y;
    }


}



const input1 = document.getElementById("input1");
// 블록 밖이면 .value 못붙이고 블록 안이면 
// const input1 = document.getElementById("input1").value; 가능
// 이거도 다른거보고 복습
function num4() {
    const name = (input1.value);
    if (name == "apple") {
        alert("apple");
    } else if (name == "banana") {
        alert("banana");
    } else {
        alert("none");
    }


}

const rate = document.getElementById("input2");


function num5() {
    const rate1 = Number(rate.value);
    if (100 < rate1) {
        alert("null")
    } else if (rate1 > 90) {
        alert("A")
    } else if (rate1 < 91 && rate1 > 80) {
        alert("B")
    } else if (rate1 < 81 && rate1 > 70) {
        alert("C")
    } else if (rate1 < 71 && rate1 > 60) {
        alert("D")
    } else if (rate1 < 61) {
        alert("F")
    }

}



const age = document.getElementById("age");
const height = document.getElementById("height");

//출력안되는중
function num6() {
    const age1 = Number(age.value);
    const height1 = Number(height.value);


    // 결과 저장용 변수
    let result;

    // 나이와 키에 대한 조건 검사
    if (age1 < 0 || age1 > 100) {
        result = "잘못입력";
    } else if (age1 < 12) {
        result = " 적정 연령이 아닙니다";
    } else if (height1 < 140.0) {
        result = "적정 키가 아님";
    } else {
        result = "탑승가능";
    }

    console.log(result);

}