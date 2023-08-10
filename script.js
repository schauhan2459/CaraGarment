//navbar

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// product-list.js

// Function to set the selected product's image URL in Local Storage
function setProductImage(imagePath) {
  localStorage.setItem("selectedProductImage", imagePath);
}

// Attach event listeners to all products to handle clicks
document.addEventListener("DOMContentLoaded", function () {
  var products = document.querySelectorAll(".pro");

  products.forEach(function (product) {
    product.addEventListener("click", function () {
      // Get the clicked product's image URL
      // var imageSrc = this.dataset.image;

      // // Set the selected product's image URL in Local Storage
      // setProductImage(imageSrc);

      var imageElement = this.querySelector("section>div>div > img");

      // Get the clicked product's image URL
      var imageSrc = imageElement.src;

      // Set the selected product's image URL in Local Storage
      setProductImage(imageSrc);

      // Redirect to the product description page
      window.location.href = "sproduct.html";
    });
  });
});

// product-description.js

// Function to get the selected product's image URL from Local Storage
function getProductImage() {
  return localStorage.getItem("selectedProductImage");
}

// Update the product description image on page load
document.addEventListener("DOMContentLoaded", function () {
  var productDescriptionImage = document.getElementById("MainImg");
  var selectedProductImage = getProductImage();

  if (productDescriptionImage && selectedProductImage) {
    // Set the product description image to the selected product's image
    productDescriptionImage.src = selectedProductImage;
  } else {
    productDescriptionImage.src = "img/products/f1.jpg";
    console.error(
      "Error: productDescriptionImage element or selectedProductImage is not found."
    );
  }
});


// Function to replace content of every h6, h5, and h4
function replaceContent() {
  // product.addEventListener("click", function () {
  //   window.location.href = "sproduct.html";
  // });
  // Find all the elements with class "pro" in source.html
  const proElements = document.querySelectorAll('.pro');

  // Find the element with id "MainImg" in destination.html
  const mainImgElement = document.getElementById('MainImg');

  // Find all the elements with class "single-pro-details" in destination.html
  const singleProDetailsElements = document.querySelectorAll('.single-pro-details');


  // Loop through each .pro element and replace content of h6, h5, and h4
  proElements.forEach((proElement, index) => {
    const spanContent = proElement.querySelector('span').textContent;
   const proImgSrc = proElement.querySelector('img').getAttribute('src');
    const h5Content = proElement.querySelector('h5').textContent;
    const h4Content = proElement.querySelector('h4').textContent;

    if (mainImgElement && singleProDetailsElements[index]) {
      singleProDetailsElements[index].querySelector('h6').textContent = spanContent;
      mainImgElement.setAttribute('src', proImgSrc);
      singleProDetailsElements[index].querySelector('h4').textContent = h5Content;
      singleProDetailsElements[index].querySelector('h2').textContent = h4Content;
    }
    // proElement.addEventListener('click', () => {
    //   window.location.href = 'sproduct.html';
    // });
  });

  
}

// Call the function to perform the replacement
replaceContent();


var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

for (let i = 0; i <= 4; i++) {
  smallimg[i].onclick = function () {
    MainImg.src = smallimg[i].src;
  };
}



