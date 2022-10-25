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

const productBtns = document.querySelectorAll('.receipt'),
    basketBtn = document.querySelector('.addCart'),
    basketModal = document.querySelector('.receipt'),
    basketClaseModal = document.querySelector('.receipt__window-btn')


basketClaseModal.addEventListener('click', () => {
    basketModal.classList.remove('active')
})

basketBtn.addEventListener('click', () => {
    basketModal.classList.add('active')
})

const lvl = document.querySelector('.header__timer-extra')

function logo() {
    lvl.innerHTML++;
    if (lvl.innerHTML < 100){
        lvl.innerHTML = 0;
        
    }
}