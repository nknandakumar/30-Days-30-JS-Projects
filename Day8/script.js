let qrBox = document.querySelector('.image-box');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

function generateQrImage(){
  if(qrText.value.length > 0){
    qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value ;
    qrBox.classList.add("show-img");
  }else{
      qrText.classList.add('error')
      setTimeout(()=>{
          qrText.classList.remove('error')
      },1000)
  }

  qrText.value=""
}
