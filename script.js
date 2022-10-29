const product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        img: 'images/product2.jpg',
        amount: 0,
        get totalSum() {
            return this.price * this.amount;
        }

    },

    freshBurger: {
        name: 'Гамбургер FRESH ',
        price: 20500,
        img: 'images/product1.jpg',
        amount: 0,
        get totalSum() {
            return this.price * this.amount;
        }
    },

    freshCombo: {
        name: 'FRESH COMBO ',
        price: 31900,
        img: 'images/product3.jpg',
        amount: 0,
        get totalSum() {
            return this.price * this.amount;
        }
    }
}

const basketBtn = document.querySelector('.addCart'),
    basketModal = document.querySelector('.receipt'),
    basketClaseModal = document.querySelector('.receipt__window-btn')


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
        const idProduct = parent.getAttribute('id')


        if(attr == '-') {
            product[idProduct].amount--
        }else if (attr == '+') {
            product[idProduct].amount++
        }
    }
})