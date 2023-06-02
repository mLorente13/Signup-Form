let showPwdBtn = document.getElementsByClassName('show-pwd')[0];
let pwdInput = document.getElementById("password");

showPwdBtn.addEventListener("click", (ev) => {   
    if (ev.target.classList.contains("bi-eye")) {
        ev.target.classList.add("bi-eye-slash");
        ev.target.classList.remove("bi-eye");
        pwdInput.type = "text";
    } else {
        ev.target.classList.add("bi-eye");
        ev.target.classList.remove("bi-eye-slash");
        pwdInput.type = "password";
    }
});