

// break 확인


function check1() {
    // 1부터 10까지 1씩 증가하다가 5가 되면 멈춤
    for (let i = 1; i <= 10; i++) {
        console.log("i : ", i);
        if (i == 5) break;
    }

}


// 무한반복하는  while문 멈추기
function check2() {

    let i = 1;

    // i가 10 초과시 멈춤
    while (true) {
        console.log(i++);

        if (i > 10) break;

    }
}


//continue 확인
function check3() {
    // 1부터 20까지 1씩 증가하며 출력
    // 단, 3의 배수는 건너뛰기
    // 1 2 4 5 7 8 10...
    for (let i = 1; i <= 20; i++) {

        // 3의 배수인 경우
        if (i % 3 == 0) continue;


        // 3의 배수인 경우 아래 코드를 수행하지 않음


        console.log("i : ", i);
    }
}

function check4() {
    // 1부터 30까지 1씩 증가하며 출력
    // 단, 홀수 또는 10의 배수는 건너뛰기

    for (let i = 1; i <= 30; i++) {

        if (i % 2 == 1 || i % 10 == 0) continue;
        console.log(i);
    }



}

// 브렉 컨티뉴 둘다 적용해보기
/* 0~9까지 5번 반복하여 출력
    단,  
  - 각 줄에서 4의 배수는 건너뛰기
  - 3번째 줄 출력 후 멈추기


  최종적으로 아래처럼 출력되어야 함
 
  01235679
  01235679
  01235679
*/
function check5() {
    for (let y = 1; y <= 5; y++) {

        let str = "";
        for (let x = 0; x < 10; x++) {
            // 4의 배수인 경우 0도 배수라 사라짐
            if (x != 0 && x % 4 == 0) continue;



            str += x;

        }

        console.log(str);

        // 3번째 줄 출력후 멈춰라
        if (y == 3) break;
        // 이 구간에서 멈추게함
    }






}



function startGame() {
    const answer = Math.floor(Math.random() * 200) + 1;
    let input;
    
    let count = 0; 

    while (input !== answer) {
        input = prompt("입력");


        
            if (input > 200 || input < 1) {
                alert("x"); continue;
                // NaN도 고려,isNaN(값): 값이 nan이면 true. 
                //숫자(문자열포함)가 들어가면false
            }
            if( isNaN(input)) { 
                alert("숫자만 입력");
                continue;
                // 오입력도 카운트 셀 경우 고려
            }

            if (input > answer) {
                alert(`down, 횟수${count++}`);continue;


            }
            if (input < answer) {
                alert(`up, 횟수${count++}`); continue; 

            }
            if (input == answer) {
                alert("o"); break;
            }
            
        
// 컨티뉴 쓰나안쓰나 똑같은데 뭔차이인지모르겠음
// 중간에 문자열 숫자로변환
    }

}









