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

const /* productBtns = document.querySelectorAll('.receipt'), */
    basketBtn = document.querySelector('.addCart'),
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

const headerTimer = document.querySelector('.header__timer-extra')
let i = 0    


function timerLogo(speed = 0) {        
    if(headerTimer.innerHTML <= 99) {        
        i++ 
        headerTimer.innerHTML = i
        setTimeout(() => {
            timerLogo()
        }, 1000);   
    }else {
        i == 100

        
        headerTimer.innerHTML = i
    }
    setTimeout(() => {
        timerLogo()
    }, 100);
    

}

timerLogo()


function totalSum(){
    let total = 0 
    for(const key in product){
        total += product[key].totalSum
    }
    return total
}

window.addEventListener('click', (e) => {
    if(e.target.classList.contains('class="main__product-btn"')){
        const atte = e.target.getAtteibute('data-symbol') 
        const parent = e.target.closest('main__product-num')
        if(parent){
            const idProduct = parent.getAtteibute('id').split('_')[0]
            if(attr == '-') product[idProduct].amount--
            else if (atte == '+')product[idProduct].amount++
        }
    }
}) 