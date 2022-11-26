# 【MNIST】手書き数字認識アプリ
手書きの数字（0～9）を認識するWebアプリのサンプルコード  
FlaskとKerasにより作成  

## 概要
* 自分の手書き数字をAI認識させることが可能
* MNISTの学習済みモデルは[こちら](https://child-programmer.com/ai/flask/keras-simple-mnist-sample-code/#i-2)のサンプルモデル mnist_model_weight.h5 を参照

## 機能
1. Canvasへ任意の数字を手書きで入力
2. 認識ボタンをクリック
3. 予測結果が表示される

## version
* python 3.6.9
* flask 1.1.2
* flask-cors 3.0.10
* tensorflow 2.4.1
* keras 2.4.3
* opencv-python 4.6.0.66
* numpy 1.19.5

## 実行方法
1. pyhonのバージョンを指定した仮想環境の作成．「myapp」という仮想環境を作る例．  
`conda create -n myapp python=3.6.9`
2. 仮想環境の起動．  
`conda activate myapp`
3. 必要なパッケージのインストール  
`pip install -r requirements.txt`  
4. サーバーを立ち上げ http://localhost:5000 にアクセス
`python app.py`


## 画面サンプル
#### トップ画面
* Canvasに0～9の数字を書いて認識ボタンを押下  
<p align="center">
  <img src="https://user-images.githubusercontent.com/117855143/204100864-0f080824-7394-46c2-a305-0295e88eafb4.png" />
</p>

#### 予測結果表示
<p align="center">
  <img src="https://user-images.githubusercontent.com/117855143/204100901-b535867d-5fa0-4b81-883a-d88aa49108c3.png" />
</p>
