const way = document.querySelector('#s')
const price = document.querySelector('#price')
const consume = document.querySelector('#consume')
let overallprice = document.querySelector('#overall')
const getpriceBtn = document.querySelector('.count')

getpriceBtn.addEventListener('click', () => {
    if (way.value || price.value || consume.value.parseInt === parseInt) {
        getpriceBtn.addEventListener('click', getresult)
    }
    else if (way.value || price.value || consume.value != parseInt) {
        getpriceBtn.addEventListener('click', () => {
            alert('You can fill only numbers!')
        })

    }
})


function getresult() {
    let wayValue = Number(way.value)
    let priceValue = Number(price.value)
    let consumeValue = Number(consume.value)

    overallprice.textContent = (way.value / 100) * consume.value * price.value
}

