let arr = {
    "rus": ["Привет", "Как дела", "Все хорошо"],
    "eng": ["Hello", "How are you", "I am fine"]
}
let btnRu = document.querySelector(".button__rus");
let btnEn = document.querySelector(".button__eng");
btnRu.addEventListener("click", btn1);
btnEn.addEventListener("click", btn2);

function btn1() {
    for (let i = 0; i < arr.rus.length; i++) {
        console.log(arr.rus[i])

    }
}

function btn2() {
    for (let i = 0; i < arr.eng.length; i++) {
        console.log(arr.eng[i])

    }
}