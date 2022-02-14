function quantity(id, istrue){
    const valueText =document.getElementById(id +'-input').value;
    let value =parseInt(valueText) ;
    if (istrue === true) {
        value = value +1 ;
    }else{
        if (value > 0) {
            value = value -1 ;
        }
    }
    document.getElementById(id +'-input').value = value;
    const subTotal = parseInt(document.getElementById('phone-price').innerText) + parseInt(document.getElementById('case-price').innerText);
    document.getElementById('subtotal').innerText = subTotal;
}
function price(id, pp){
    const dataText = document.getElementById(id +'-input').value;
    const data = parseInt(dataText);
    const price = data * pp;
    document.getElementById(id +'-price').innerText = price;
    const subTotal = parseInt(document.getElementById('phone-price').innerText) + parseInt(document.getElementById('case-price').innerText);
    document.getElementById('subtotal').innerText = subTotal;
    const tax = (subTotal / 100) * 10;
    document.getElementById('tax').innerText = tax;
    const total = subTotal + tax;
    document.getElementById('total').innerText= Math.ceil(total);
}
document.getElementById('phone-plus').addEventListener('click', function(){
    quantity('phone', true);
    price('phone', 1219);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    quantity('phone', false);
    price('phone', 1219);
})
document.getElementById('case-minus').addEventListener('click', function(){
    quantity('case', false);
    price('case', 59);
})
document.getElementById('case-plus').addEventListener('click', function(){
    quantity('case', true);
    price('case', 59);
})