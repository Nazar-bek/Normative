const addCartStaff = JSON.parse(localStorage.getItem("addCart")) || [];
const coverCart = document.querySelector(".card__item");
if (addCartStaff.length === 0) {
  coverCart.innerHTML = `
    <p >The cartPage is empty</p>
    `;
  coverCart.style.display = "flex";
  coverCart.style.justifyContent = "center";
  coverCart.style.alighnItems = "center";
  coverCart.style.padding = "150px";
} else {
  addCartStaff.forEach((cart) => {
    const mainCart = document.createElement("div");
    mainCart.classList.add("card__product");
    mainCart.innerHTML = `
                           <div class="card__position">
                            <div class="tv__card">
                                <img class="good_cart" src=".${cart.mainImg}" alt="${cart.name}">
                            </div>
                            <p>${cart.name}</p>
                           </div>
                           <p class="price__card">$650</p>
                           <div class="card__counter">
                            <p>01</p>
                            <div class="icons__cards">
                                <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.75732 2.36666L1.45732 5.66666L0.514648 4.72399L4.75732 0.481323L8.99998 4.72399L8.05732 5.66666L4.75732 2.36666Z" fill="black"/>
                                    </svg>
                                <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.24268 3.63334L7.54268 0.333344L8.48535 1.27601L4.24268 5.51868L1.71661e-05 1.27601L0.942683 0.333344L4.24268 3.63334Z" fill="black"/>
                                </svg>                                    
                            </div> 
                           </div>
                           <p class="price__cardd">$650</p>
                        </div>
        `;
    coverCart.appendChild(mainCart);
  });
}
