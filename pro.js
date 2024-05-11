const form = document.getElementById('form');
const Nom = document.getElementById('Nom');
const Email = document.getElementById('Email');
const fmessage = document.getElementById('message');

form.addEventListener('Envoyer', e => {
    e.preventDefault();
});

const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success')
    inputControl.classList.remove('error');
}
const isValidEmail = Email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(Email).toLowerCase());
}
const validateInputs = () => {
    const NomValue = Nom.value.trim();
    const EmailValue = Email.value.trim();
    const messageValue = Message.value.trim();
    
    if(NomValue === '') {
        setError(Nom, 'Nom is required');

    } else {
        setSuccess(Nom);
    }
    if(EmailValue === '') {
        setError(Email, 'Email is required');

    } else if (!isValidEmail(EmailValue)) {
        setError(Email, 'Provide a valid email address');
    } else {
        setSuccess(Email);
    } 
}
