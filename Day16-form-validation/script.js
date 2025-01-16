var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phoneNo-error");
var emailError = document.getElementById("email-error");
var msgError = document.getElementById("msg-error");
var submitError = document.getElementById("submit-error");

function validName() {
	var name1 = document.getElementById("name").value;
	if (name1.length == 0) {
		nameError.innerHTML = "Name is required";
		return false;
	}
	if (!name1.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
		nameError.innerHTML = "Write full name";
		return false;
	}
	nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
	return true;
}

function validPhone(){
	var phone = document.getElementById("phone").value;

	if (phone.length == 0) {
		phoneError.innerHTML = "Phone No is required";
		return false;
	}

	if (phone.length != 10) {
		phoneError.innerHTML = "Enter a valid 10-digit Number";
		return false;
	}

	if (!phone.match(/^[0-9]{10}$/)) {
		phoneError.innerHTML = "Only Digits";
		return false;
	}

	phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
	return true;
}

function validEmail() {
	var email = document.getElementById("email").value;

	if (email.length == 0) {
		emailError.innerHTML = "Enter a valid Email";
		return false;
	}
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	if (!emailPattern.test(email)) {
		emailError.innerHTML = "Email Invalid";
		return false;
	}
	emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
	return true;
}

function validMsg() {
	var msg = document.getElementById("msg").value;
    var required = 30 ;
    var left = required- msg.length ;

	
	if (left > 0) {
		msgError.innerHTML = left + ' more characters required';
		return false;
	}

	msgError.innerHTML = '<i class="fas fa-check-circle"></i>';
	return true;
}


function validateForm(){
    if (!validName() || !validPhone() || !validEmail() || !validMsg()){
        submitError.style.display = 'block'
        submitError.innerHTML = "Please fix error to submit"
        setTimeout(function(){
                submitError.style.display = 'none'
        }, 2000);
        return false ;
    }
    
}