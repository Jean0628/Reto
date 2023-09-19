console.log('hola')
const data = {
    email: "usuario12@gmai.com",
    password: "kuberausuario12"
}

axios.get('http://sena.kubera.work/api/v3/auth/sign_in', data)
.then(( response ) => console.log( response ))