// 배경색 적용할 각 div 배열
// 배경색 입력할 각 input 배열


const boxList = document.querySelectorAll(".box"); 
const inputList = document.querySelectorAll(".color-input");

// div,input 두개의 배열이 동일

// console.log(boxList)


// #changeButton 요소를 클릭했을 때

document.querySelector("#changeButton").addEventListener("click", function(){

// 인풋리스트에 작성된 각 내용을 박스리스트에있는 각 div에 대입

for(let i = 0; i < boxList.length; i++){
boxList[i].style.backgroundColor = inputList[i].value;
}
    
});






