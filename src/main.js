const signInUpBtn = document.querySelectorAll('.sign-btn');
const formContainer = document.querySelector('.form-container');
const signInDetails = document.querySelectorAll('.sign-in-details');
const signUpDetails = document.querySelectorAll('.sign-up-details');
const form = document.querySelector('.form-content');
const submitBtn = document.querySelector('.submit-btn');


signInUpBtn.forEach(item => {
    item.addEventListener('click', (e)=> {
    signBtnColor(item);
    const switchBtn = e.currentTarget.classList;
    if(switchBtn.contains('sign-in')){
        formContainer.classList.remove('form-switch');
        submitBtn.innerText = 'SIGN IN';
    } else {
        formContainer.classList.add('form-switch');
        submitBtn.innerText = 'SIGN UP';
    }

    })
})

const signBtnColor = (eachBtn) => {
    signInUpBtn.forEach(item => {
        item.style.color = 'rgb(168, 168, 168)';
    })
    eachBtn.style.color = '#fff'
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(submitBtn.innerText === 'SIGN IN'){
        signInDetailsForm(signInDetails);
    }

    if(submitBtn.innerText === 'SIGN UP'){
        signInDetailsForm(signUpDetails)
    }
})


const signInDetailsForm = (formContent) => {
   const errorCheck = Array.from(formContent, item => {
       if(item.value === ''){
           item.parentElement.classList.add('rejected', 'error-message');
       }
   })

   return errorCheck;
}


const signInChecker = (checkInput) => {
    checkInput.forEach(item => {
        item.addEventListener('keyup', (e)=> {
            const eachInput = e.currentTarget.classList;
            if(eachInput.contains('username')){
                if(item.value.length >=3){
                    item.parentElement.classList.remove('rejected', 'error-message'); 
                    item.parentElement.classList.add('accepted');
                } else if(item.value.length < 3){
                    item.parentElement.classList.remove('accepted');
                }
            }
    
            if(eachInput.contains('password')){
                if(item.value.length >=6){
                    item.parentElement.classList.remove('rejected', 'error-message'); 
                    item.parentElement.classList.add('accepted');
                } else if(item.value.length < 6){ 
                    item.parentElement.classList.remove('accepted');
                }
            }

            if(eachInput.contains('email')){
                if(item.value.length >= 1 && item.value.includes('@' && '.')){
                    item.parentElement.classList.remove('rejected', 'error-message'); 
                    item.parentElement.classList.add('accepted');
                } else if(item.value.length < 1){
                    item.parentElement.classList.remove('accepted');
                }
            }
        })
    })

}


signInChecker(signInDetails);
signInChecker(signUpDetails);
