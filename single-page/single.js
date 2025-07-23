const mainImg = document.querySelector(".main-display");
const thumbnails = document.querySelectorAll(".small__image img");
thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImg.src = thumb.src;
    thumbnails.forEach((el) => el.parentElement.classList.remove("active"));
    thumb.parentElement.classList.add("active");
  });
});

const sizeBtns = document.querySelectorAll(".size__btn");
const colorInputs = document.querySelectorAll(".product__radios input");
sizeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sizeBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

colorInputs.forEach((input, index) => {
  input.addEventListener("change", () => {
    const selectedColor = index === 0 ? "Blue" : "Red";
    console.log(`Selected color : ${selectedColor}`);
  });
});

let quantity = 1
const quantityDisplay = document.querySelector(".quantity")
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")

plus.addEventListener("click", () =>{
    quantity++
    quantityDisplay.textContent = quantity
})

minus.addEventListener("click", () =>{
    if(quantity > 1){
        quantity--
    }
    quantityDisplay.textContent = quantity
})

const buyNowBtn = document.querySelector(".product__buy")
buyNowBtn.addEventListener("click", () =>{
    const selectedColors = [...colorInputs].findIndex(input => input.checked)
    const selectedExactColor = selectedColors === 0 ? "Blue" : "Red";

    const selectedSize = document.querySelector(".size__btn.active")?.textContent.trim() || "Unknown"
    const productTitle = "Havic HV G-92 Gamepad"
    const productPrice = "$192.00"

    const orderInfo = {
        product : productTitle,
        price: productPrice,
        color: selectedExactColor,
        size: selectedSize,
    }
    console.log("Product info :", orderInfo)
})