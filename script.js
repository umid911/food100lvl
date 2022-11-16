const product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        img: 'images/product2.jpg',
        amount: 0,
        callores: 400,
        get totalSum() {
            return this.price * this.amount;
        },
        get totalKcall() {
            return this.amount * this.callores
        }

    },

    freshBurger: {
        name: 'Гамбургер FRESH ',
        price: 20500,
        img: 'images/product1.jpg',
        amount: 0,
        callores: 500,
        get totalSum() {
            return this.price * this.amount;
        },
        get totalKcall() {
            return this.amount * this.callores
        }
    },

    freshCombo: {
        name: 'FRESH COMBO ',
        price: 31900,
        img: 'images/product3.jpg',
        amount: 0,
        callores: 700,
        get totalSum() {
            return this.price * this.amount;
        },
        get totalKcall() {
            return this.amount * this.callores
        }
    }
}

const basketBtn = document.querySelector('.addCart'),
    basketModal = document.querySelector('.receipt'),
    basketClaseModal = document.querySelector('.receipt__window-btn'),
    basketChekList = document.querySelector('.receipt__window-out')
    


basketBtn.addEventListener('click', () => {
    basketModal.classList.add('active')
    basketModal.style = `
    display: flex;
    opacity: 1;
    `
})

basketClaseModal.addEventListener('click', () => {
    basketModal.classList.remove('active')
    basketModal.style = `
    display: none;
    opacity: 0;
    `
})

const icon = document.querySelector('.header__timer-extra')

let count = 50


function timerLogo(speed = 0) {
    icon.innerHTML = speed
    speed++

    if (speed > 50 && speed < 100) {

        count = 150
    }
    if (speed <= 100) {
        setTimeout(() => {
            timerLogo(speed)
        }, count);
    }


}
timerLogo()




function totalSum() {
    let total = 0
    for (const key in product) {
        total += product[key].totalSum
    }
    return total
}

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('main__product-btn')) {
        const attr = e.target.getAttribute('data-symbol')
        const parent = e.target.closest('.main__product')
        const totalPrice = parent.querySelector('.main__product-price')
        const totalCall = parent.querySelector('.main__product-call')
        const idProduct = parent.getAttribute('id')
        const productAmount = parent.querySelector('.main__product-num', )


        if (parent) {
            if (attr == '+') product[idProduct].amount++
            else if (attr == '-' && product[idProduct].amount > 0) {
                product[idProduct].amount--
            }
            productAmount.innerHTML = product[idProduct].amount
            totalPrice.innerHTML = `${product[idProduct].totalSum} сум`
            totalCall.innerHTML = `${product[idProduct].totalKcall}`

        }
    }
})

function renderBasket() {
    const productArray = []

    for(const key in product) {
        if(product[key].amount) {
          productArray.push(product[key])
        }
    }
    
    basketCheckList.innerHTML = ''
    productArray.forEach(item => {
        basketCheckList.innerHTML += cardItemBurger(item)
    })
    let allCount = totalCount()
    if (allCount) {
        basketCount.classList.add('active')
        basketCount.innerHTML = allCount
    } else {
        basketCount.classList.remove('active')
    }

    totalPriceBasket.innerHTML = `${totalSum()} сум`


}
function totalCount() {
    let total = 0
    for (const key in product) {
        total += product[key].amount
    }
    return total
}

function totalSum() {
    let total = 0
    for (const key in product) {
        total += product[key].totalSum
    }
    return total
}


function cardItemBurger(obj) {
    const { name, price, amount, img } = obj
    return `
    <div class="main__product-number">
        <div class="main__product-label">
            <img src="${img}" alt="${name}" class="main__product-numbertImage">
            <div class="wrapper__navbar-infoSub">
                <p class="main__product-number">${name}</p>
                <p class="main__product-many">${price} сум</p>
            </div>
        </div>
        <div main__product-extraProduct" id="${name.toLowerCase()}_card">
           
            <output class="wrapper__navbar-count">${amount}</output>
           
        </div>
    </div>
`
}
