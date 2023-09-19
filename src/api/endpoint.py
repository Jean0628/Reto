import requests

endpoint = "https://sena.kubera.work/api/v3/auth/sign_in"

 # Datos de inicio de sesión
params = {
 'email': 'usuario12@gmail.com',
 'password': 'kuberausuario12'
}

response = requests.post(endpoint, params=params)
print(response.status_code)
# 12
# 13 # Verificar el código de estado de la respuesta
# 14 if response.status_code == 200:
# 15 # Obtener los encabezados de la respuesta
# 16 headers = {
# 17 'access-token': response.headers['access-
# token'],
# 18 'uid': response.headers['uid'],
# 19 'client': response.headers['client']
# 20 }
# 21