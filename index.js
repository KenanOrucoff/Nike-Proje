const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")


const products = [
    {
        id: 1,
        title: "AIR FORCE",
        price: 119,
        colors: [
            {
                code: "black",
                image: "./image/air.png",
            },
            {
                code: "darkblue",
                image: "./image/air2.png"
            },
        ],
    },

    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                image: "./image/jordan.png",
            },
            {
                code: "green",
                image: "./image/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                image: "./image/blazer.png",
            },
            {
                code: "green",
                image: "./image/blazer2.png",
            },
            
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                image: "./image/crater.png",
            },
            {
                code: "lightgray",
                image: "./image/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                image: "./image/hippie.png",
            },
            {
                code: "black",
                image: "./image/hippie2.png",
            },
        ],
    },


]

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");



menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //cari slaydı dəyişdirin
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //seçilmiş məhsulu dəyişdirin
        choosenProduct = products[index];

        //Mövcud Məhsulun mətnlərini dəyişdirin
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].image;

        //yeni rənglərin əlavə edilməsi
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].image;
    });
  });
  


  
  currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});