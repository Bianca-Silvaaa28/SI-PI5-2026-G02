#rotas para acesso 
from app import app 


@app.route("/")
def index():
    return "Hello wold"