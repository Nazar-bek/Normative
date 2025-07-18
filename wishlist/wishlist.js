



const container = document.querySelector(".wishlist__items") 
const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []


if(wishlist.length === 0){
    container.innerHTML = `
    <p class="empty_staff">The wishlist is Empty!</p>
    `
    container.style.justifyContent = "center"
}else{
    wishlist.forEach((cart, index) => {
        const divEl = document.createElement("div")
        divEl.classList.add("wishlist__item")
        divEl.innerHTML = `
          <div class="wishlist__image">
                            <img src=".${cart.mainImg}" alt="${cart.name}">
                                <p class="discount__wishlist">${cart.discount}</p>   
                                <span class="wishlist__delete">
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="17" cy="17" r="17" fill="white"/>
                                        <path d="M25 10.5714H10.3333L11.6667 26H22.3333L23.6667 10.5714H9M17 14.4286V22.1429M20.3333 14.4286L19.6667 22.1429M13.6667 14.4286L14.3333 22.1429M14.3333 10.5714L15 8H19L19.6667 10.5714" stroke="black" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                        
                                </span>    
                                <button class="wishlist__add">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.75 20.25C9.16421 20.25 9.5 19.9142 9.5 19.5C9.5 19.0858 9.16421 18.75 8.75 18.75C8.33579 18.75 8 19.0858 8 19.5C8 19.9142 8.33579 20.25 8.75 20.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M19.25 20.25C19.6642 20.25 20 19.9142 20 19.5C20 19.0858 19.6642 18.75 19.25 18.75C18.8358 18.75 18.5 19.0858 18.5 19.5C18.5 19.9142 18.8358 20.25 19.25 20.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.75 3.75H5.75L8 16.5H20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8 12.5H19.6925C19.7792 12.5001 19.8633 12.4701 19.9304 12.4151C19.9975 12.3601 20.0434 12.2836 20.0605 12.1986L21.4105 5.44859C21.4214 5.39417 21.42 5.338 21.4066 5.28414C21.3931 5.23029 21.3679 5.18009 21.3327 5.13717C21.2975 5.09426 21.2532 5.05969 21.203 5.03597C21.1528 5.01225 21.098 4.99996 21.0425 5H6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    <p>Add To Cart</p>                                        
                                </button>
                        </div>
                        <div class="wishlist__info">
                            <p>${cart.name}</p>
                            <div class="price__wishlist">
                                <span class="current__price">$${cart.price}</span>
                                <span class="prev__price">
                                 $${cart.prevPrice}
                                </span>
                        </div>
        </div>
        `

        const deleteBtn = divEl.querySelector(".wishlist__delete");
        deleteBtn.addEventListener("click", () =>{
            wishlist.splice(index, 1)
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            location.reload()
        })

        container.appendChild(divEl)
    });
}