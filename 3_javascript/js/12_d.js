// 문자열.toLowerCase() // 내장함수: 영어를 모두 소문자로 변경(A -> a)
// 문자열.toUpperCase() : 영어를 모두 대문자로 변경 (a -> A)

// 화면에 존재하는 키 모두 얻어오기

const keys = document.querySelectorAll(".key");
// console.log(keys);

// 문서(화면전체)에서 키가 눌려지는걸 감지했을때
document.addEventListener("keydown", function (e) {


    let idx; // 인덱스 값을 저장할 변수

    // console.log(e.key);
    // e.key.toLowerCase() -> q, w, e, r
    switch (e.key.toLocaleLowerCase()) {
        case 'q': idx = 0; break;
        case 'w': idx = 1; break;
        case 'e': idx = 2; break;
        case 'r': idx = 3; break;

        default: return; // 다른키누를시 함수를 아예 종료


    }

    // idx번호와 일치하는 keys 배열의 요소의 배경색을 변경
    keys[idx].style.backgroundColor = "deepPink";


});

// 키 떼서 되돌리기

//그대로복사

document.addEventListener("keyup", function (e) {


    let idx; // 인덱스 값을 저장할 변수

    // console.log(e.key);
    // e.key.toLowerCase() -> q, w, e, r
    switch (e.key.toLocaleLowerCase()) {
        case 'q': idx = 0; break;
        case 'w': idx = 1; break;
        case 'e': idx = 2; break;
        case 'r': idx = 3; break;

        default: return; // 다른키누를시 함수를 아예 종료


    }

    // idx번호와 일치하는 keys 배열의 요소의 배경색을 변경
    keys[idx].style.backgroundColor = "white";


});



