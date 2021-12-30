function FormValidate() {
    var name = document.getElementById('name').value;
    var errorName = document.getElementById('errorName');
    var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;

    if (name == '' || name == null) {
        errorName.innerHTML = "Vui lòng nhập họ tên!";
    } else
    if (!regexName.test(name)) {
        errorName.innerHTML = "Họ tên không hợp lệ!";
    } else {
        errorName.innerHTML = "";
    }

    var email = document.getElementById('email').value;
    var errorEmail = document.getElementById('errorEmail');
    var regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

    if (email == '' || email == null) {

        errorEmail.innerHTML = "Vui lòng nhập email!";
    } else if (!regexEmail.test(email)) {
        errorEmail.innerHTML = "Email không hợp lệ!";
    } else {
        errorEmail.innerHTML = "";
    }


    var phone = document.getElementById('phone').value;
    var errorPhone = document.getElementById('errorPhone');
    var regexPhone = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

    if (phone == '' || phone == null) {
        errorPhone.innerHTML = "Vui lòng nhập số điện thoại!";
    } else if (!regexPhone.test(phone)) {
        errorPhone.innerHTML = "Số điện thoại không hợp lệ!";
    } else {
        errorPhone.innerHTML = "";
    };

    var pass = document.getElementById('PassW').value;
    var errorPassword = document.getElementById('errorPassword');
    var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;


    if (pass == '' || pass == null) {
        errorPassword.innerHTML = "Vui lòng nhập mật khẩu!";
    } else if (!regexPassword.test(pass)) {
        errorPassword.innerHTML = "Mật khẩu chưa đủ mạnh!";
    } else {
        errorPassword.innerHTML = "";
    }

    var repass = document.getElementById('rePassW').value;
    var errorRePassword = document.getElementById('errorRePassword');

    if (repass == '' || repass == null) {
        errorRePassword.innerHTML = "Vui lòng nhập lại mật khẩu!";
    } else if (repass != pass) {
        errorRePassword.innerHTML = "Mật khẩu không trùng khớp!";
    } else {
        errorRePassword.innerHTML = "";
    }


    if (name && phone && email && pass && repass && pass == repass) {
        alert("Đăng ký thành công!");
        location.href = "dangnhap.html";
    }



    return false;
}