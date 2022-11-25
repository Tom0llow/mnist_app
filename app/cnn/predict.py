import numpy as np
from keras.models import load_model
from keras import backend as K

def predict(x):
    K.clear_session()
    model = load_model('cnn/mnist_model_weight.h5') 

    x = np.expand_dims(x,axis=0)
    x = x.reshape(x.shape[0],28,28,1)
    r = np.argmax(model.predict(x))

    return int(r)