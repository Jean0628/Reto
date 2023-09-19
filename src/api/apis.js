console.log('hola')
const data = {
    email: "usuario12@gmail.com",
    password: "kuberausuario12"
}

const headersLocal = JSON.parse(localStorage.getItem('headers')) || {};

async function peticionLogin() {
    const result = await axios.post('http://sena.kubera.work/api/v3/auth/sign_in', data, { mode: "cors" })
    .then(( response ) => { return response})

    const headers = {
        'access-token': result.headers['access-token'],
        'uid': result.headers['uid'],
        'client': result.headers['client'],
        'expired': result.headers['expires'],
      };

      localStorage.setItem('headers',JSON.stringify(headers))
}
peticionLogin()



//Listado

async function peticionListado() {
    const result = await axios.get('http://sena.kubera.work/api/v3/brands', {headers : headersLocal  })
    .then(( response ) => { return response})
    
    console.log(result);
}
peticionListado()
