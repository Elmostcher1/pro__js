
const toTop = document.querySelector('.fa-arrow-up')
const nav = document.querySelector('nav')
const menulist = document.querySelector('.down_nav ul ')
const menuToggler = document.querySelector('.fa-bars')
const shoppingCart = document.querySelector('.cart')
const CloseCart = document.querySelector('.fa-circle-xmark')
const OpenCart = document.querySelector('.fa-cart-shopping')

const CartContainer = document.querySelector('.container_Cart')
const menuDell = document.querySelector('.div_del_add')
const sure = document.querySelector('.sure')
const No = document.querySelector('.No')
const totelCart = document.querySelector('.totelCart')
const amount = document.querySelector('.amount')

// ------------



$(document).ready(function(){
    $('.silder').slick({
    //   setting-name: setting-value
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay : true ,
    autoplaySpeed : 1500 ,
    arrows : true ,
    prevArrow : '.prev',
    nextArrow : '.next',
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          prevArrow : false,
          nextArrow : false,
        } ,
      } ,
      {
        
        breakpoint: 995,
        settings: {
          prevArrow : false,
          nextArrow : false,
          slidesToShow: 2,

        } ,
      } , 
      {
        breakpoint: 650,
        settings: {
          prevArrow : false,
          nextArrow : false,
          slidesToShow: 1,

        } 

      } , 
    ]
    });
  });

let btns = document.querySelectorAll('button')
for(var i = 0 ; i < btns.length ; i++){
  btns[i].style.cursor = 'pointer'
}

document.onscroll = function(){
  
  if(window.scrollY < 500){
    toTop.style.display = 'none'
  }else{
    toTop.style.display = 'flex'
  }

  if(window.scrollY > 0){
    nav.style.boxShadow = 'var(--main-color) 1.95px 1.95px 2.6px'
  }else{
    nav.style.boxShadow = 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
  }
} 
toTop.addEventListener('click' , function(){
  window.scrollTo({
    top:0 ,
    left : 0
  })
})
menuToggler.addEventListener('click' , function(){
  this.classList.toggle('open')
  menulist.classList.toggle('active')
})

OpenCart.addEventListener('click' , function(){
  shoppingCart.classList.add('open')
})

CloseCart.addEventListener('click' , function(){
  shoppingCart.classList.remove('open')

})

const prodcts =[ 
    {
        id : 1 ,
        img : "data/imags/coffee.jpg" ,
        name : 'Coffee' ,
        Price : 30 ,
    } ,
    {
        id : 2 ,
        img : "data/imags/jars.jpg" , 
        name : 'Coffee' ,
        Price : 40 ,
    } ,
    {
        id : 3 ,
        img : "data/imags/donut-transparent.png",  
        name : 'Sweet' ,
        Price : 25 ,
    } ,
    {
        id : 4 ,
        img : 'data/imags/rasberry.png' ,  
        name : 'fruits' ,
        Price : 20 ,
    } ,
    {
        id : 5 ,
        img : 'data/imags/salad-table.jpg' ,  
        name : 'Dinner' ,
        Price : 35 ,
    } ,
    {
        id : 6 ,
        img : 'data/imags/straw.png' ,  
        name : 'fruits' ,
        Price : 45 ,
    } ,
    {
        id : 7 ,
        img : 'data/imags/test1.jpeg' , 
        name : 'fruits' ,
        Price : 33 ,
    } ,
    {
        id : 8 ,
        img : 'data/imags/icone.png', 
       name : 'fruits' ,
        Price : 44 ,
    } ,
    {
        id : 9 ,
        img : 'data/imags/yogurt.png ' , 
        name : 'fruits' ,
        Price : 38 ,
    } ,
    {
        id : 10 ,
        img : 'data/imags/plate-2.png' ,
        name : 'Launch' ,
        Price : 100 ,
    } ,
 ]



let Cart = []
function AddToCart(nums){
Cart.push(prodcts[nums])
 numbers = nums
displayProducts()

}

function displayProducts() {
  let totel = 0
    let SingelProdct =''
   Cart.map( (vale , i)=>{
    totel += vale.Price
    SingelProdct +=`
       <div class="card">
            <div class="div_img"><img src="${vale.img}"></div>
            <div>
                <b>Titel : ${vale.name}</b>
                <p> $${vale.Price}</p>
            </div>
            <div>
                <button>+</button>
                <span>0</span>
                <button>-</button>
            </div>
            <i class="fa-solid fa-trash" onClick = 'deleteProduct(${i})'></i>
        </div>
        `
      })
      totelCart.innerHTML = ` $${totel}.00`
      amount.innerHTML = Cart.length
      if(Cart.length > 0){

        CartContainer.innerHTML = SingelProdct
         amount.style.color = 'var(--main-color)'            
      }else{
        CartContainer.innerHTML = 'Your Cart is Empty !'
        CartContainer.style.textAlign = 'center'
         amount.style.color = 'red'    
      }
    }
    displayProducts()
function deleteProduct(numbers) {
  menuDell.style.display = 'flex'
  No.onclick = function(){
    menuDell.style.display = 'none'
    Cart.splice(numbers , 0)
displayProducts()
    
  }
  sure.onclick =  function(){
    menuDell.style.display = 'none'
    Cart.splice(numbers , 1)
displayProducts()
       
    }
displayProducts()

}


function ahmed(){
  setTimeout(function(){
    
    document.querySelector('.ahmed').style.display = 'flex'
  } , 20)
  document.body.onclick = function(){
    
    document.querySelector('.ahmed').style.display = 'none'
}
}

