
const ToastBox = document.getElementById("toastBox");
const successMsg = ' <i class="fa-solid fa-circle-check"></i>  Successfully Submitted';
const errorMsg = ' <i class="fa-solid fa-xmark"></i> Please Fix the Error!';
const invalidMsg = ' <i class="fa-solid fa-circle-xmark"></i> Invalid Input, Please Check Again!'

function showToast(msg){
      let toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML = msg ;
        ToastBox.appendChild(toast);

       if (msg.includes('Error')) {
        toast.classList.add('error');
       }

       if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
       }

       setTimeout(()=>{
        toast.remove()
       },3000);
}