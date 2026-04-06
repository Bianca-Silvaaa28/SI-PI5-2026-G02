from flask import Flask
##Init maior(principal)
app= Flask(__name__)#inicializador 

#rotas
@app.route('/')