users = JSON.parse(localStorage.getItem("users")) || [];

let user = users.find(User => {
  return User.isLoggedIn
})

clearWishListBtn = document.getElementById("clear-wishlist");

// update wishlist
function updateWishList() {
    const wishListContainer = document.getElementById("wishlist-container");

    // clear wishlist content
    wishListContainer.innerHTML = "";
  
    if (user.wishList == [] || user.wishList.length < 1 || user.wishList == null) {
  
      noItemInWishList = document.createElement('div')
      wishListContainer.appendChild(noItemInWishList)
      noItemInWishList.classList.add('mt-5', 'pt-5')
      noItemInWishList.innerHTML = `<h5 class="text-center">WishList Is Empty !</h5>`
  
    }
  
    // Browse products in wishlist
    user.wishList.forEach((item) => {

      // display items in wishlist
      const productToWish = document.createElement("div");
      productToWish.classList.add("product-in-wishlist");
      
      productToWish.innerHTML = `
          <div class="d-flex justify-content-center align-items-center">
            <div class="d-flex align-items-center" style="width: 350px">
               <img class="me-2" src="${item.imageUrl}" style="height: 80px; width: 80px">
               <p class="mx-4 my-0">${item.title}</p>
               <p class="my-0">Price: $${item.price}</p>
            </div>
            <div>
               <span onclick="removeItem(${item.id})"><i class="fa-regular fa-trash-can fw-bold" style="color: #e02e37; font-size: 25px; cursor: pointer"></i></span>
          </div>
        `;
  
      wishListContainer.appendChild(productToWish);
      clearWishListBtn.innerText = "Clear WishList";
      clearWishListBtn.classList.add("btn", "btn-danger");
    });
}

// Remove an item from wishlist
function removeItem(productId) {
    user.wishList.forEach((product) => {
      if (productId == product.id) {
        user.wishList = user.wishList.filter((item) => item.id !== productId);
        localStorage.setItem("users", JSON.stringify(users));
        updateWishList();
      }
    });
  }

// Clear WishList
function emptyWishList() {
  user.wishList = [];

  localStorage.setItem("users", JSON.stringify(users));
  updateWishList();

  clearWishListBtn.style.display = "none";
}

updateWishList();