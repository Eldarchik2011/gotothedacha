const way = document.querySelector('#s')
const price = document.querySelector('#price')
const consume = document.querySelector('#consume')
let overallprice = document.querySelector('#overall')
const getpriceBtn = document.querySelector('.count')
const inputs = document.querySelector('.forms-input')

getpriceBtn.addEventListener('click', getresult)


function getresult() {
    //
    inputs.addEventListener('keydown', function(event) {
        // Разрешаем: backspace, delete, tab и escape
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
           // Разрешаем: Ctrl+A
           (event.keyCode == 65 && event.ctrlKey === true) ||
           // Разрешаем: home, end, влево, вправо
           (event.keyCode >= 35 && event.keyCode <= 39)) {
          
           // Ничего не делаем
          return;
        } else {
           // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
           if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
            event.preventDefault();
          }
        }
       });
    //
    let wayValue = Number(way.value)
    let priceValue = Number(price.value)
    let consumeValue = Number(consume.value)
if (way.value || price.value || consume.value.parseInt === parseInt) {
    overallprice.textContent = (way.value / 100) * consume.value * price.value
}else if (isNaN(way.value )== true  || isNaN(price.value )== true  || isNaN(consume.value )== true) {
        alert('You can fill only numbers!')
        overallprice.textContent = 'fill only numbers :/'
}
    
}

