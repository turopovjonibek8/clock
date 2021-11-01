// let date = new Date();


// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// date.setFullYear("2015");
// date.setDate(15);
// console.log(date);


// const year = [
//     "Yanvar",
//     "Fevral",
//     "Mart",
//     "Aprel",
//     "May",
//     "Iyun",
//     "Iyul",
//     "Avgust",
//     "Sentabr",
//     "Oktabr",
//     "Noyabr",
//     "Dekabr"
// ];
// console.log(year[date.getMonth()]);

function clockShow(){
    let date = new Date()

    document.querySelector(".hours").textContent = date.getHours();
    document.querySelector(".minutes").textContent = date.getMinutes();
    document.querySelector(".seconds").textContent = date.getSeconds();
}
clockShow();

setInterval("clockShow()",1000);