let cards = document.querySelectorAll(".col-4");
console.log(cards);

document.getElementById("One Plus").addEventListener("click", () => {
    cards.forEach((item) => {
        if (item.id != "Oneplus_Phone") {
            item.style.display = "none";
          } else {
            item.style.display = "flex";
          }
    })
});

document.getElementById("Redmi").addEventListener("click", () => {
    cards.forEach((item)=>{
        if (item.id != "redmi_phone") {
            item.style.display = "none";
          } else {
            item.style.display = "flex";
          }
    })
});
document.getElementById("iphone").addEventListener("click", () => {
    cards.forEach((item) => {
        if (item.id != "iphone_phone") {
            item.style.display = "none";
          } else {
            item.style.display = "flex";
          }
    })
});
document.getElementById("Samsung").addEventListener("click", () => {
    cards.forEach((item) => {
        if (item.id != "samsung_phone") {
            item.style.display = "none";
          } else {
            item.style.display = "flex";
          }
    })
});

document.getElementById("all").addEventListener("click", () => {
    cards.forEach((item) => {
        item.style.display = "flex";
    })
});

document.getElementById("search").addEventListener("keyup", () => {
    let query = document.getElementById("search").value.toLowerCase()
    cards.forEach((item) => {
        if(item.querySelector("h4").textContent.toLowerCase().indexOf(query) > -1){
            item.style.display = "flex"
        }else{
            item.style.display = "none"
        }
    })
})