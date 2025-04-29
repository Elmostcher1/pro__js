
const CartContainer = document.querySelector('.container_Cart')
const body_cart = document.querySelector('.body_cart')
const total_cart = document.querySelector('.total_cart')
const remove_pro = document.querySelector('.remove_pro')
const delete_all = document.querySelector('.delete_all')


// نعرضها في جدول
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function displayCart() {
let singelProducts = ''
let total = 0;
cart.forEach(vale => {
  total += vale.Price * vale.amount;
});

 if (cart.length > 0) {
     cart.map((vale)=>{
         singelProducts += ` <tr>
    <td><img src=${vale.img} class="product-img" /></td>
    <td >${vale.name}</td>
    <td><input type="number" class="amount_input" value="${vale.amount}" data-name="${vale.name}" min="1" /></td>
    <td data-name="${vale.name}" class="product_total_price">$${vale.Price * vale.amount}</td>
    <td><button class="btn btn-danger remove_pro" data-name="${vale.name}">&#10060;</button></td>
  </tr>
    
    ` 
    
})}


body_cart.innerHTML = singelProducts
total_cart.innerHTML = total
document.querySelectorAll('.remove_pro').forEach(btn => {
    btn.addEventListener('click',function(){
        const nameToDelete = this.getAttribute("data-name");
        deleteThePro(nameToDelete);
        console.log(nameToDelete);
        
    });
});
document.querySelectorAll('.amount_input').forEach(input => {
    input.addEventListener('input', function () {
      const name = this.getAttribute('data-name');
      const newAmount = parseInt(this.value);
  
      // حدث الكمية في المصفوفة الأصلية
      cart.forEach(product => {
        if (product.name === name) {
          product.amount = newAmount;
        }
      });
  
      // خزني في localStorage لو بتستخدميه
      localStorage.setItem('cart', JSON.stringify(cart));
  
      // أعد عرض السلة لحساب المجموع
      displayCart();
    });
  });

document.querySelectorAll('.amount_input').forEach(input => {
    input.addEventListener('input', function () {
      const name = this.getAttribute('data-name');
      const newAmount = parseInt(this.value);
  
      cart.forEach(product => {
        if (product.name === name) {
          product.amount = newAmount;
  
          // حدّث السعر الفردي للمنتج ده فقط
          const priceCell = document.querySelector(`.product_total_price[data-name="${name}"]`);
          if (priceCell) {
            priceCell.textContent = `$${product.Price * product.amount}`;
          }
        }
      });
  
      // اختياري: خزّن البيانات
      localStorage.setItem('cart', JSON.stringify(cart));
    });
  });

}
displayCart()

function deleteThePro(name) {

    // حذف العنصر اللي اسمه مطابق
    cart = cart.filter(product => product.name !== name);

    // تحديث localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // إعادة العرض
    displayCart();
}

function deleteAllproductsOfCart() {
    delete_all.addEventListener('click',function(){

        // حذف العنصر اللي اسمه مطابق
        cart = [];
    
        // تحديث localStorage
        localStorage.removeItem('cart');
    
        // إعادة العرض
        displayCart();
    })
}
deleteAllproductsOfCart()

