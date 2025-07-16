const coverSlider = document.querySelector(".slideshow");
const mainSlider = document.querySelector(".slideshow__main");
const dots = document.querySelectorAll(".indicator");
let interval;
let mainCounter = 0;
console.log(dots);
function updateSliders() {
  mainSlider.style.transform = `translateX(-${mainCounter * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[mainCounter].classList.add("active");
}

function autoMoverSlider() {
  interval = setInterval(() => {
    mainCounter = (mainCounter + 1) % dots.length;
    updateSliders();
  }, 3000);
}
autoMoverSlider();

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    mainCounter = index;
    updateSliders();
  });
});

coverSlider.addEventListener("mouseover", () => {
  clearInterval(interval);
});

coverSlider.addEventListener("mouseleave", () => autoMoverSlider());

// Js Dom 2.22

const cover = document.querySelector(".sales__timer");
const daysEl = document.querySelectorAll(".sales_timer-item .number")[0];
const hoursEl = document.querySelectorAll(".sales_timer-item .number")[1];
const minutesEl = document.querySelectorAll(".sales_timer-item .number")[2];
const secondsEl = document.querySelectorAll(".sales_timer-item .number")[3];

const duration = 3 * 24 * 60 * 60 * 1000;
let endTimer = localStorage.getItem("savedTimer");

if (!endTimer) {
  const now = new Date();
  const future = new Date(now.getTime() + duration);
  endTimer = future.getTime();
  localStorage.setItem("savedTimer", endTimer);
} else {
  endTimer = parseInt(endTimer, 10);
}

const intervalTimer = setInterval(() => {
  const now = new Date().getTime();
  const remaining = endTimer - now;

  if (remaining <= 0) {
    clearInterval(intervalTimer);
    localStorage.removeItem("savedTimer");
    cover.textContent = " There is no any sale!!";
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    alert("Aksiya Yakunlandi");
    return;
  }

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}, 1000);

// Cardlarni dynamic tarizda jsdan qoshib qoydim fake api qilib!

const products = [
  {
    id: 1,
    mainImg: "./assets/Chostik.png",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    prevPrice: 160,
    rating: "./assets/five_start.png",
    numberRating: 88,
    discount: "-40%",
  },
  {
    id: 2,
    mainImg: "./assets/key_board.png",
    name: "AK-900 Wired Keyboard",
    price: 960,
    prevPrice: 1160,
    rating: "./assets/four_star.png",
    numberRating: 75,
    discount: "-35%",
  },
  {
    id: 3,
    mainImg: "./assets/Tv.png",
    name: "IPS LCD Gaming Monitor",
    price: 370,
    prevPrice: 400,
    rating: "./assets/five_start.png",
    numberRating: 99,
    discount: "-30%",
  },
  {
    id: 4,
    mainImg: "./assets/chair.png",
    name: "S-Series Comfort Chair ",
    price: 375,
    prevPrice: 400,
    rating: "./assets/four_star.png",
    numberRating: 99,
    discount: "-25%",
  },
  {
    id: 5,
    mainImg: "./assets/chair.png",
    name: "S-Series Comfort Chair ",
    price: 375,
    prevPrice: 400,
    rating: "./assets/four_star.png",
    numberRating: 99,
    discount: "-25%",
  },
  {
    id: 6,
    mainImg: "./assets/chair.png",
    name: "S-Series Comfort Chair ",
    price: 375,
    prevPrice: 400,
    rating: "./assets/four_star.png",
    numberRating: 99,
    discount: "-25%",
  },
];

const mainOne = document.querySelector(".protuct__items");
const modal = document.getElementById("modal");
const modalImg = document.querySelector(".modal__img");
const modalTitle = document.getElementById("modal__name");
const modalPrice = document.getElementById("price__modal");
const ratingImg = document.querySelector(".rating__img-modal");
const ratingNumber = document.getElementById("rating_number-modal");
const closeBtn = document.getElementById("close__modal");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
function isInWishlist(product) {
  return wishlist.some( item => item.id === product.id)
}

products.forEach((product) => {
  const productEl = document.createElement("div");
  productEl.classList.add("produtc__item");
  productEl.innerHTML = `
   <div class="image__side">
            <img src="${product.mainImg}" alt="${product.name}">
              <h3 class="discount">${product.discount}</h3>
            <div class="like">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17" cy="17" r="17" fill="white"/>
                <path d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                
            </div>
            <div class="see">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17" cy="17" r="17" fill="white"/>
                <path d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>     
            </div>
            <button class="add">
              Add To Cart
            </button>
          </div>
          <div class="info__side">
            <p class="type">${product.name}</p>
            <div class="prices">
              <span class="current__price">$${product.price}</span>
             <s class="previous__price">
                $${product.prevPrice}
            </s>
            </div>
            <div class="ratings__side">
              <div class="iconss">
                <img src=${product.rating} alt=${product.name}/>
              </div>
              <div class="rating__number">
                <p>(${product.numberRating})</p>
              </div>
            </div>
          </div>
  `;
  mainOne.appendChild(productEl);

  const eye = productEl.querySelector(".see");
  eye.addEventListener("click", () => {
    modalImg.src = product.mainImg;
    modalTitle.textContent = product.name;
    modalPrice.textContent = product.price;
    ratingImg.src = product.rating;
    ratingNumber.textContent = product.numberRating;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

 


  const likeBtn = productEl.querySelector(".like");
 isInWishlist(product) ? likeBtn.classList.add("active") : likeBtn.classList.remove("active")
  likeBtn.addEventListener("click", () =>{
    const index = wishlist.findIndex(item => item.id === product.id)
    if(index === -1){
      wishlist.push(product)
      likeBtn.classList.add("active")
    }else{
      wishlist.splice(index, 1)
      likeBtn.classList.remove("active")
    }
      localStorage.setItem("wishlist", JSON.stringify(wishlist))
  })


  
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});


