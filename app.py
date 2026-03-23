from flask import Flask

app=Flask(__name__)
#rota
@app.route()
def index():
    pass
if  __name__ == "__main__":
    app.run()