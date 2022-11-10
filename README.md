【プログラムのライセンス】

The MIT License

Copyright 2021 child programmer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


【日本語コード解説も公開中】

【コード解説】Keras・MNIST編：Flask（Python）Web機械学習アプリ開発入門 – 画像アップロード判定プログラム by 子供プログラマー
https://child-programmer.com/ai/flask/keras-simple-mnist-samplecode-description/


【プログラムの説明】

FlaskでWeb AIアプリ開発を始めたい初学者の方の学習の利便性を考え、Kerasで作成したMNISTの学習済みモデル（モデル構造と重み）を使って、Web上で画像認識ができる基本的な構造のプログラムを作成してみました。
既に「mnist_model_weight.h5」という名前で、学習済みモデルをフォルダ内に入れてあるので、手書きなどの数字画像をアップロード後に、「予測する」のボタンを押すと判定ができます。
HTMLの構造や、app.pyのPythonプログラムの構造も、なるべく必要最小限のシンプルな構造になっていますので、

・HTMLやPythonプログラムの必要機能の追加
・Bootstrapを始め、CSSなどのカスタマイズの練習

がしやすいのではないかと思います。

自分で学習させたい場合は以下のGoogle Colaboratoryの共有リンク

flask_keras_mnist_demo.ipynb | Google Colaboratory
https://colab.research.google.com/drive/1tLRJqeKGOmLbcMJbYap1REjrlZcqyX6y?usp=sharing
（ファイル - ドライブにコピーを保存後にコピー環境で実行）

で学習済みモデルを作成し、ローカル環境に保存することもできます。
ディープラーニングの機械学習の難点として、

・学習済みモデルを作成するのにパソコンにかなりの負荷が長時間かかる・・・

点があるのではないかと思います。
Google Colaboratoryは、Googleアカウントにログインすれば無料でGPUやTPUなどが使えるのでありがたいですね。


【使い方】

仮想環境を作成しプログラムを実行することをお勧めします。

Pythonのバージョンを指定して仮想環境を作る方法は、一例として
・pyenv
・Anaconda
などがあるようです。
以下に、MacとWindowsの環境で実行する方法例をまとめてきます。


【実行環境例】Macの例（エディタはVisual Studio Codeを使用）
・Visual Studio Code 1.52.1
・macOS Big Sur 11.2
・Command Line Tools：Xcode Version 12.4（12D4e）
・Homebrew:2.7.5
・pyenv：1.2.21
・Python 3.6.9

2020年2月確認時点では、「pyenv install」でPython 3.6.9をインストールできない事象を確認しています。
こちらの記事

【対応例】macOS Big Surでpyenv installでPythonをインストールできない… by 子供プログラマー
https://child-programmer.com/pe-bs-2021/

に対応方法をまとめておきましたので必要に応じて参照ください。


【実行方法】
Python3.6.9を上記の記事の方法でpyenvにインストール済みの状態。
Visual Studio Codeで、「Flask-Keras-Simple-MNIST-basic」フォルダを読み込み後、ターミナルを起動し以下を実行。

手順１：作業環境内のPythonバージョンの指定
pyenv local 3.6.9

手順２：仮想環境の作成。「ai」という仮想環境を作る例。
python -m venv ai

手順３：仮想環境の起動。成功するとターミナルの始めの表示が「(ai)」になります。「ai」という仮想環境を起動する例。
source ai/bin/activate

手順４：pipのバージョンをアップデート。
python -m pip install --upgrade pip
（または「pip install --upgrade pip」）

手順５：プログラムを実行するのに必要なライブラリなどをインストール。
pip install -r requirements.txt

手順６：AIプログラムを起動。
python app.py

手順７：ターミナルに表示されたURLアドレスを、ブラウザで開くとWeb AIアプリが使えるようになります。
URLリンクの所を、「commandキー」＋左クリックでも表示できます。

Web AIアプリの終了方法：ターミナルを選択した状態で実行。
controlキー + cキー

仮想環境の終了方法：：ターミナルを選択した状態で実行。
deactivate



【実行環境例】Windowsの例（エディタはVisual Studio Codeを使用）
・Visual Studio Code 1.52.1
・Windows 10（20H2）
・Anaconda3 2020.11（64bit）
＊　Visual Studio Codeでcondaコマンドを使えるようにするには、インストール時の設定の「Advanced Options」で「Add Anaconda3 to my PATH environment variable」にもチェックをした状態にしてインストールする必要があります（「Register Anaconda3 as default Python 3.8」もチェックした状態でインストールしました）。動作確認の際は、Pythonを何もインストールしていないWindows環境でAnacondaをインストールした状態で実行しました。

【実行方法】
Visual Studio Codeで、「Flask-Keras-Simple-MNIST-basic」フォルダを読み込み後、ターミナルを起動し以下を実行。

手順１：Pythonバージョンの指定をした仮想環境の作成。「ai」という仮想環境を作る例。
conda create -n ai python=3.6.9

手順２：仮想環境の起動。成功するとターミナルの始めの表示が「(ai)」になります。「ai」という仮想環境を起動する例。
conda activate ai

手順３：pipのバージョンをアップデート。
python -m pip install --upgrade pip

手順４：プログラムを実行するのに必要なライブラリなどをインストール。
pip install -r requirements.txt

手順５：AIプログラムを起動。
python app.py

＊　確認時点では、手順５を実行時にTensorFlow関係のロードエラー表示（白文字）などもあるようでしたが、Web AIアプリ自体は使えそうでした。

手順６：ターミナルに表示されたURLアドレスを、ブラウザで開くとWeb AIアプリが使えるようになります。
Running on http://127.0.0.1:500/
URLリンクの所を、「controlキー」＋左クリックでも表示できます。

Web AIアプリの終了方法：ターミナルを選択した状態で実行。
controlキー + cキー

仮想環境の終了方法：：ターミナルを選択した状態で実行。
conda deactivate


機械学習Webアプリ開発の学習のきっかけになることがありましたら幸いです。


by 日本人のための人工知能プログラマー入門講座（機械学習）- 子供プログラマー
https://child-programmer.com/ai/
