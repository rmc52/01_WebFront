function test() {
    //프롬프트 사용 연습


    const password = prompt("비밀번호를입력하세요");


    // 확인 -> 입력한 문자열
    // 취소 -> null

    if (password == null) { //취소
        alert("취소");
    } else if (password == 1234) {
        alert("비밀번호 일치");
    }

    else {
        alert("비밀번호 불일치");
    }

}


//-----------------

const amount = document.getElementById("amount"); // 금액 작성할수있는input태그
const output = document.getElementById("output"); // 잔액 출력 span

let balance = 10000; // 잔액 기록 변수 (초기값10000)

const password = '1234'; // 비밀번호 저장 변수


output.innerText = balance; // 초기 금액 설정

function deposit() {
    //1. 입금 버튼 클릭 해당 함수 수행
    let amount1 = Number(amount.value);
    let output1 = Number(output.value);

    balance += amount1;
    output.innerText = balance;
    //2. input에(금액을 작성한 input == amount) 입력된 금액 구하기
    //3. 구한 금액을 잔액(balance)에 누적하기
    //(번외) : input에 금액을 작성안하고 입금버튼을 누른경우 
    // -> 금액을 입력하세요 와 같은 메세지 띄우기 처리...

    if (amount1 == 0) {
        alert("금액을 입력하세요")
    }
    // if(amount.value.length == 0){}

    // 인풋에 기존작성값 제거
    amount.value = '';

}

function withdrawal() {
    let amount1 = Number(amount.value);
    let output1 = Number(output.value);


    if (amount1 == 0) {
        alert("금액을 입력하세요")
    }


    // 1. 출금 버튼 클릭 해당 함수 수행
    // (번외) : input에 금액을 작성안하고 입금버튼을 누른경우
    // -> 금액을 입력하세요 와 같은 메세지 띄우기 처리...

    const password = prompt("비밀번호를입력하세요");

    // 2. 비밀번호를 입력받기
    // 2-1. 취소버튼 눌렀을 때 처리
    // 2-2. 확인버튼 눌렀을 때 처리
    if (password == null) { //취소
        alert("취소");
    } else if (password == 1234) {
        alert("비밀번호 일치");
        if (balance < amount1) {
            alert("금액초과");
        } else if (0 < amount1 < balance) {
            balance -= amount1;
        }
    }

    else {
        alert("비밀번호 불일치");
    }
    // -> 비밀번호가 일치하는지 안하는지 따지기
    // -> 일치한다면?
    // -> 출금금액이 잔액보다 큰경우 처리




    // -> 출금할 금액이 잔액보다 작거나 같은경우 (출금처리가능)
    // -> 잔액 balance에서 내가 작성한 금액 차감

    output.innerText = balance;
}