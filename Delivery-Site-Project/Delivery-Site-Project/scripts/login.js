window.addEventListener('load', ()=>{
    const register = document.getElementsByClassName("create-account-wrapper")[0]
    .addEventListener('click', ()=>{
        location.href = '../html/register.html'
    });
 

    const signIn = document.getElementsByClassName("login-form")[0].addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementsByClassName('login-email')[0].value;
        const password = document.getElementsByClassName('login-password')[0].value;

        const validData = {
            '1212@example.com': '1212',
            'marialafche@gmail.com': 'Lafche'
          };
        console.log(email)
        if (validData[email] === password){
            console.log('here')
            location.href = '../html/homePage.html';

        }
        else if(validData[email] == undefined){
            
            document.getElementsByClassName("register-error")[0].innerHTML='Wrong Email';
        }
        else{
            document.getElementsByClassName("register-error")[0].innerHTML='Wrong Password';
        };
 
    });
});