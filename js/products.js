
const toTop = document.querySelector('.fa-arrow-up')
const nav = document.querySelector('nav')
const menulist = document.querySelector('.down_nav ul ')
const menuToggler = document.querySelector('.fa-bars')
const shoppingCart = document.querySelector('.cart')
const CloseCart = document.querySelector('.fa-circle-xmark')
const OpenCart = document.querySelector('.fa-cart-shopping')
const ProductsContainer = document.querySelector('.products .container')
const CartContainer = document.querySelector('.container_Cart')
const menuDell = document.querySelector('.div_del_add')
const sure = document.querySelector('.sure')
const No = document.querySelector('.No')
const totelCart = document.querySelector('.totelCart')
const amount = document.querySelector('.amount')

// --------------



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
        img : "../detalis/data/imags/coffee.jpg" ,
        name : 'Coffee' ,
        Price : 30 ,
        amount : 1 , 
    } ,
    {
        id : 2 ,
        img : "../detalis/data/imags/jars.jpg" , 
        name : 'Coffee' ,
        Price : 40 ,
        amount :1  ,
    } ,
    {
        id : 3 ,
        img : "../detalis/data/imags/donut-transparent.png",  
        name : 'Sweet' ,
        Price : 25 ,
         amount : 1 ,
      } ,
    {
        id : 4 ,
        img : '../detalis/data/imags/rasberry.png' ,  
        name : 'fruits' ,
        Price : 20 ,
         amount : 1 ,
      } ,
    {
        id : 5 ,
        img : '../detalis/data/imags/salad-table.jpg' ,  
        name : 'Dinner' ,
        Price : 35 ,
         amount :1 ,
      } ,
    {
        id : 6 ,
        img : '../detalis/data/imags/straw.png' ,  
        name : 'fruits' ,
        Price : 45 ,
         amount : 1 ,
      } ,
    {
        id : 7 ,
        img : '../detalis/data/imags/test1.jpeg' , 
        name : 'fruits' ,
        Price : 33 ,
         amount : 1 ,
      } ,
    {
        id : 8 ,
        img : '../detalis/data/imags/icone.png', 
       name : 'fruits' ,
        Price : 44 ,
         amount : 1 ,
      } ,
    {
        id : 9 ,
        img : '../detalis/data/imags/yogurt.png ' , 
        name : 'fruits' ,
        Price : 38 ,
         amount : 1 ,
      } ,
    {
        id : 10 ,
        img : '../detalis/data/imags/plate-2.png' ,
        name : 'Lunch' ,
        Price : 100 ,
         amount : 1 ,
      } 
 ]


function setItemOnHtml()
{
  let items = ''
  for(let i = 0 ; i < prodcts.length ; i++)
  {
    items +=`
    
         <div class="card">
            <div class="div_img">
                <img src="${prodcts[i].img}" alt="">
            </div>
            <div class="card_details">
                <b>Titel : ${prodcts[i].name }</b>
                <p>$${prodcts[i].Price}</p>


                <button class="btns colock" onclick='AddProducts(${i})  '>Add To Cart</button>
            </div>
        </div>
    
    
    `
    
  }
  ProductsContainer.innerHTML = items
}
setItemOnHtml()


let cart = JSON.parse(localStorage.getItem('cart')) || [];
function AddProducts(numbrs){
  
  
  if(cart.includes(prodcts[numbrs]) == false){
    prodcts[numbrs].amount = 1
    document.querySelector('.ahmed').style.display = 'flex'
    document.querySelector('.TitleName').innerHTML =  `(${prodcts[numbrs].name})`
    cart.push(prodcts[numbrs])
    localStorage.setItem('cart', JSON.stringify(cart));
}
 
setTimeout(function(){
  document.querySelector('.ahmed').style.display = 'none'
  
} , 1000)
displayCart()
}

function displayCart() {
  let totall = 0
 let singelProducts = ''
 if (cart.length > 0) {
  cart.map( (vale , i)=>{
    totall += vale.Price  * vale.amount
  singelProducts +=`
  <div class="card">
      <div class="div_img"><img src="${vale.img}"></div>
      <div>
                  <b >Titel :${vale.name} </b>
                  <p> $${vale.Price * vale.amount}</p>
               </div>
               <div>
                   <button onclick='PlusProduct(${ i })'>+</button>
                   <span class = 'increment'> ${ vale.amount } </span>
                   <button class = 'miuns' onclick='miuns(${i})'>-</button>
                     </div>
                  <i class="fa-solid fa-trash" onclick = 'deldeteProduct(${i})'></i>
                   </div>
  
  
  `   
  
})
}

amount.innerHTML = cart.length  
 totelCart.innerHTML = `$${totall},00`
  if(cart.length > 0){
    
    CartContainer.innerHTML = singelProducts

  }else{
    CartContainer.innerHTML = 'Your Cart is Empty !'

  }
}

function deldeteProduct(numbers){
  menuDell.style.display = 'flex'
  No.onclick = function(){
    menuDell.style.display = 'none'
    cart.splice(numbers , 0)
  }

sure.onclick =  function(){
  cart.splice(numbers , 1)
  deldeteProduct()
  menuDell.style.display = 'none'

}

displayCart()
}

function PlusProduct(index){
  ++cart[index].amount
  prodcts[index].loka = 0
 displayCart()
  
}
function miuns(index)
{
  
if(cart[index].amount > 1 ){
  --cart[index].amount
  
}  
    displayCart()
}


// نعرضها في جدول
function displayCartlocal() {
  
  if (cart.length > 0) {
      let totall = 0
 let singelProducts = ''
    cart.map( (vale , i)=>{
      totall += vale.Price  * vale.amount
    singelProducts +=`
    <div class="card">
        <div class="div_img"><img src="${vale.img}"></div>
        <div>
                    <b >Titel :${vale.name} </b>
                    <p> $${vale.Price * vale.amount}</p>
                 </div>
                 <div>
                     <button onclick='PlusProduct(${ i })'>+</button>
                     <span class = 'increment'> ${ vale.amount } </span>
                     <button class = 'miuns' onclick='miuns(${i})'>-</button>
                       </div>
                    <i class="fa-solid fa-trash" onclick = 'deldeteProduct(${i})'></i>
                     </div>
    
    
    `   
    
  }) ;
  amount.innerHTML = cart.length  
 totelCart.innerHTML = `$${totall},00`
  if(cart.length > 0){
    CartContainer.innerHTML = singelProducts
  }else{
    CartContainer.innerHTML = 'Your Cart is Empty !'

  }
  }else{
    displayCart();
  }

}

window.onload = displayCartlocal;
