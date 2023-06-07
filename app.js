const myContainer = document.querySelector('.container')
const qrValue = document.querySelector('.data');
const btn = document.querySelector('.btn');
const qrImg = document.querySelector('#qr-img');

btn.addEventListener('click',function (){
    if(!qrValue.value)
    {
        return alert("Enter text to generate QR")
    }
    btn.innerHTML = "Generating QR Code...";
    const URL = `http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue.value}`
    qrImg.src=URL;
    qrImg.addEventListener("load",function (){
        myContainer.classList.add('active');
        document.querySelector('.qr-code').classList.add('active');
        btn.innerHTML = "Generate QR Code";
    })

})

document.querySelector('input').addEventListener("keyup",()=>{
    if(!qrValue.value)
    {
        myContainer.classList.remove('active');
        document.querySelector('.qr-code').classList.remove('active');
    }
})