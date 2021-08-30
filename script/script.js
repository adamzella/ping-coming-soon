
const form = document.querySelector('form');
const form = document.querySelector('[type='submit']');

function verify(e){
    e.preventDefault();
    const email = e.target.querySelector('[type="email"]').value;
    if(isValidateEmail(email)){
        console.log('invalid');
    }else{
        console.log('valid');
    }
    console.log(email);
}

form.addEventListener('submit', verify);

    function isValidateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


