const form = document.getElementById('form');
const submit = document.getElementById('submit');

submit.addEventListener('mouseover', () => {
    submit.style.backgroundColor = 'hsl(223, 100%, 88%)';
    const email = form['email'].value;
    if (email === '') {
        addError('email', 'Whoops! It looks like you forgot to add your email');
    }
})
submit.addEventListener('mouseout', () => {
    submit.style.backgroundColor = 'hsl(223, 87%, 63%)';
    removeError('email');
})

form.addEventListener('submit', () => {
    const email = form['email'].value;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        addError('email', 'Please provide a valid email address');
    } else {
        removeError('email');
    }
})
  
const facebook = document.getElementById('facebook');
const twitter = document.getElementById('twitter');
const instagram = document.getElementById('instagram');

facebook.addEventListener('mouseover', () => {
    facebook.style.backgroundColor = 'hsl(223, 87%, 63%)';
    document.getElementById('facebook-icon').style.color = 'white';
})
facebook.addEventListener('mouseout', () => {
    facebook.style.backgroundColor = '';
    document.getElementById('facebook-icon').style.color = '';
})

twitter.addEventListener('mouseover', () => {
    twitter.style.backgroundColor = 'hsl(223, 87%, 63%)';
    document.getElementById('twitter-icon').style.color = 'white';
})
twitter.addEventListener('mouseout', () => {
    twitter.style.backgroundColor = '';
    document.getElementById('twitter-icon').style.color = '';
})

instagram.addEventListener('mouseover', () => {
    instagram.style.backgroundColor = 'hsl(223, 87%, 63%)';
    document.getElementById('instagram-icon').style.color = 'white';
})
instagram.addEventListener('mouseout', () => {
    instagram.style.backgroundColor = '';
    document.getElementById('instagram-icon').style.color = '';
})

function addError(field, messege) {
    const formControl = form[field].parentNode;
    const small = formControl.querySelector('small');
    small.innerText = messege;
}
function removeError(field) {
    const formControl = form[field].parentNode;
    const small = formControl.querySelector('small');
    small.innerText = '';
}