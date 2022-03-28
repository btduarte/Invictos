from flask import Flask

app = Flask(__name__)

@app.route("/userdata/<email>")
def get_user_data(email):
  pass