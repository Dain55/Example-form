let inpNeeds = document.querySelectorAll('.myBlue input')
let allInps = document.querySelectorAll('form input')
let form = document.forms.reg

let pattern = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    phone: /^998[012345789][0-9]{8}$/g,
    email:  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    age:/[a-zA-Z0-9]+/g,
    aboutYou:/[a-zA-Z0-9]+/g,
    js:/[a-zA-Z0-9]+/g,
    html:/[a-zA-Z0-9]+/g,
    css:/[a-zA-Z0-9]+/g,
    favouriteCar:/[a-zA-Z0-9]+/g
}


function validate(regex, field) {
    if(regex.test(field.value)) {
        field.parentElement.classList.remove('invalid')
        field.parentElement.classList.add('valid')
    } else {
        field.parentElement.classList.remove('valid')
        field.parentElement.classList.add('invalid')
    }
}

allInps.forEach(inp => {
    inp.onkeyup = () => {

        validate(pattern[inp.name], inp)
    }
})


form.onsubmit = (event) => {
    event.preventDefault()
    let countErrs = 0

    inpNeeds.forEach(inp => {
        if(inp.value.length < 1 || inp.parentElement.classList.contains('invalid')) {
            inp.parentElement.classList.add('invalid')
            countErrs++
        } else {
            inp.parentElement.classList.remove('invalid')
        }
    });


    if(countErrs > 0) {
        console.log('Error')
    } else {
        submit(form)
    }
}


function submit(formElement) {
    let user = {}

    let fm = new FormData(formElement)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}

