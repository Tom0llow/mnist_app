from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import cv2
import re
import base64
import numpy as np
from cnn import predict

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET','POST'])
def index():    
    if request.method == 'POST':
        ans = get_answer(request)
        return jsonify({'ans': ans})
    else:
        return render_template('index.html')

def get_answer(req):
    img_base64 = re.search(r'base64,(.*)',req.form['img']).group(1)
    img_array = np.frombuffer(base64.b64decode(img_base64),np.uint8)
    img_src = cv2.imdecode(img_array,cv2.IMREAD_UNCHANGED)
    img_negaposi = 255-img_src
    img_gray = cv2.cvtColor(img_negaposi,cv2.COLOR_BGR2GRAY)
    img_resize = cv2.resize(img_gray,(28,28))
    ans = predict.predict(img_resize)
    return ans
    
if __name__ == '__main__':
    app.run(debug=True)