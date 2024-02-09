window.addEventListener('load', ()=>{
    const back = document.getElementsByClassName("back")[0]
    .addEventListener('click', ()=>{
        location.href = '../html/login.html';
    }); 

    const signUp = document.getElementsByClassName("login-form")[0].addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementsByClassName('register-email')[0].value;
        const password = document.getElementsByClassName('register-password')[0].value;
        const repeatPassword = document.getElementsByClassName('repeat-password')[0].value;

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const passRegex  = /^[a-zA-Z0-9!@#$%^&*]{6,12}$/;

        if(!emailRegex.test(email)){
            document.getElementsByClassName("register-error")[0].innerHTML='Wrong Email Format';
        }
        else if(!passRegex.test(password)){
            document.getElementsByClassName("register-error")[0].innerHTML='Wrong Pass Format';

        }
        else if(password != repeatPassword){
            document.getElementsByClassName("register-error")[0].innerHTML='Passwords are not the same!';
        }
        else{
            location.href = '../html/home.html'
        }


    });


});
