let eKey = document.querySelector('.detail .keys p:last-child')
let eLocation = document.querySelector('.detail .location p:last-child')
let eWhich = document.querySelector('.detail .which p:last-child')
let eCode = document.querySelector('.detail .code p:last-child')
let numberKey = document.querySelector('.number-key')
let eButton = document.querySelector('Button')
let infor = document.querySelector('.infor-button')

//nhan phim bat ki thi cai phan infor-button duoc hien thi ra, e la event
document.addEventListener('keydown',e=>{
    // do thong tin : innerText
    eKey.innerText = e.key;
    eLocation.innerText = e.location;
    eWhich.innerText = e.which;
    eCode.innerText = e.code;
    numberKey.innerText = e.code;

eButton.classList.add('hide')
infor.classList.remove('hide')
})



