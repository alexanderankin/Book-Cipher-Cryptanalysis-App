from flask import Flask, send_from_directory, jsonify

import thing

app = Flask(__name__, static_folder='build', static_url_path='')


@app.route("/")
def index():
  return send_from_directory('build', 'index.html')


@app.route("/api/runTest", methods=['POST'])
def endpoint():
  thing.test()
  return jsonify({ 'status': 'success' })


if __name__ == '__main__':
  app.run()
