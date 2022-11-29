
const cardNameInp = document.querySelector('#card-name');
const cardNumberInp = document.querySelector('#card-number');
const cardMonthInp = document.querySelector('#card-month');
const cardYearInp = document.querySelector('#card-year');
const cardCvcInp = document.querySelector('#card-cvc');
const frontCardName = document.querySelector('#name');
const frontCardNumber = document.querySelector('#number');
const frontCardMonth = document.querySelector('#month');
const frontCardYear = document.querySelector('#year');
const backCardCvc = document.querySelector('#cvc');
const confirmBtn = document.querySelector('#submit-btn');
const completed = document.querySelector('.thank');
const form = document.querySelector('.right-section     form');

const setCardNumber = (e) => {
    frontCardNumber.innerText = format(e.target.value);
}

cardNameInp.addEventListener('input', () => {
    frontCardName.innerText = cardNameInp.value;
})

cardMonthInp.addEventListener('input', () => {
    frontCardMonth.innerText = cardMonthInp.value;
})

cardYearInp.addEventListener('input', () => {
    frontCardYear.innerText = cardYearInp.value;
})

cardCvcInp.addEventListener('input', () => {
    backCardCvc.innerText = cardCvcInp.value;
})



const submitBtn = (e) => {
    e.preventDefault();
    if(!cardNameInp.value) {
        cardNameInp.classList.add('error');
        cardNameInp.parentElement.classList.add('error-message');
    } else {
        cardNameInp.classList.remove('error');
        cardNameInp.parentElement.classList.remove('error-message');
    }

    if(!cardNumberInp.value) {
        cardNumberInp.classList.add('error');
        cardNumberInp.parentElement.classList.add('error-message');
    } else {
        cardNumberInp.classList.remove('error');
        cardNumberInp.parentElement.classList.remove('error-message');
    }

    if(!cardMonthInp.value) {
        cardMonthInp.classList.add('error');
        cardMonthInp.parentElement.classList.add('error-message');
    } else {
        cardMonthInp.classList.remove('error');
        cardMonthInp.parentElement.classList.remove('error-message');
    }

    if(!cardYearInp.value) {
        cardYearInp.classList.add('error');
        cardYearInp.parentElement.classList.add('error-message');
    } else {
        cardYearInp.classList.remove('error');
        cardYearInp.parentElement.classList.remove('error-message');
    }

    if(!cardCvcInp.value) {
        cardCvcInp.classList.add('error');
        cardCvcInp.parentElement.classList.add('error-message');
    } else {
        cardCvcInp.classList.remove('error');
        cardCvcInp.parentElement.classList.remove('error-message');
    }

    if (cardNameInp.value && cardNumberInp.value && cardMonthInp.value && cardYearInp.value && cardCvcInp && cardNumberInp.value.length == 16) {
        completed.classList.remove('hidden');
        console.log('caiu');
        form.classList.add('hidden')
    }

}


const format = (string) => {
    return string.toString().replace(/\d{4}(?=.)/g, "$& ");
}


cardNumberInp.addEventListener('keyup', setCardNumber);
confirmBtn.addEventListener('click', submitBtn);  
