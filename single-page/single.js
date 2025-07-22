
const mainImg = document.querySelector(".main-display")
const thumbnails = document.querySelectorAll(".small__image img")
thumbnails.forEach(thumb =>{
    thumb.addEventListener("click", () =>{
        mainImg.src = thumb.src
        thumbnails.forEach(el => el.parentElement.classList.remove("active"))
        thumb.parentElement.classList.add("active")
    })
})