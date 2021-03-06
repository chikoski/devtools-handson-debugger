# Firefox 開発ツールハンズオン<br>デバッガ編

Mozilla Japan 

清水智公 (nshimizu@mozilla-japan.org)

---

## 脱 console.log

* デバッガの持つ機能を一通り紹介します
* プログラムの振る舞いの追跡方法について学びます
* 事前条件、事後条件の確認方法についても学びます

---

## 清水智公 / [@chikoski](https://twitter.com/chikoski/)

<div style="float: left; width: 14rem; margin-right: 4rem; margin-top: -2rem;">

![清水智公のアバター](img/chikoski.png)
</div>

* Mozilla Japan で Dev-rel やっています
* プログラミング言語とサッカーが好きです 
* [html5experts.jp](https://html5experts.jp/chikoski/) で記事をいくつか書いています
* html5j Web プラットフォーム部 / ゲーム部

---

![Firefox のリリースチャンネル](img/firefox-release-channels.png)

----

## Firefox Developer Edition

<div style="float: left; width: 14rem; margin-right: 4rem; margin-top: -2rem;">

![Firefox Develper Edition のロゴ](img/developer-edition-logo.png)
</div>

* 開発者向けのブラウザです
* 開発ツールがリリース版よりも充実しています
* リリース版とは別のプロファイルで動作します
* 詳しい機能は [Web サイト](https://www.mozilla.org/firefox/developer/)をご覧ください 

---

## Firefox 開発ツールの起動

![スパナアイコンをクリックし、表示されるメニューの「開発ツールを表示」を選択すると起動します](img/start-devtool.png)

----

### 開発ツールの設定

![開発ツール右上の歯車アイコンをクリックすると、開発ツールの設定画面が表示されます](img/devtools-settings.png)

* 表示するタブやテーマを変更できます
* 以降は "Light" テーマを利用します

---

## JavaScript デバッガ

* 開発ツールの機能で、JavaScript のデバッグ作業に役立ちます
* 主な機能
    * ブレークポイントの設置
    * コードのステップ実行
    * 変数の調査、編集、ウォッチ
* 詳しい解説は [MDN のページ](https://developer.mozilla.org/docs/Tools/Debugger)をご覧くださいs

---

![世界時計アプリ](img/target.png)

[こちらを開いてください](world-clock/index.html)

---

## デバッガの起動

![開発ツールのデバッガタブをクリックすると、デバッガが起動します](img/start-debugger.png)

----

### デバッガの UI

![デバッガは、ツールバー、ソースリストペイン、ソースペイン、コールスタックペイン、変数ペイン、イベントペインがあります](img/debugger-ui.png)

---

## ブレークポイント

![行をクリックして、ブレークポイントを追加できます](img/breakpoint.png)

* ブレークポイント：実行を停止したい行
* プログラムがブレークポイントへ到達したら、そこで実行が止まります
* ソースペインで行をクリックすることで、設置できます

----

### ブレークポイントを設定するべき場所は？

* 変数の値を確認したい場所
* プログラムの振る舞いを追いたい場所

---

## 変数ペイン：変数の値の確認

![変数ペインでは、スコープごとに変数とその値を確認できます](img/variables-pane.png)

* 変数ペインに、変数とその値が表示されます
* 変数はスコープごとにまとまって表示されています

---

## 式のウオッチ

![変数ペインでウォッチ式を追加できます](img/watch-expression.png)

* ウォッチ式：実行が停止するたびに評価される式
* 変数ペインから設定します
* コード内で調査できない値を調査するのに使えます

---

## ステップ実行

![画面左上のボタンを利用します](img/step-execution.png)

* プログラムを 1 行ずつ実行することです
* デバッガの左上のボタンを使用します

----

## ステップ実行でできること

![画面左上のボタンを利用します](img/step-execution-controls.png)

* 復帰：次のブレークポイントまで実行します
* ステップオーバー：同じ関数内で次の行へ進みます
* ステップイン：その行が
  * 関数呼び出しでない場合：次の行へ進みます
  * 関数呼び出しの場合：呼び出した関数へ入ります
* ステップアウト：現在の関数の終りまで実行します  

---

## 検索

![ツールバー右上に検索欄があります](img/search.png)

* ツールバーの検索欄でスクリプトをキーワード検索ができます
* 接頭辞をつけることで、様々な検索が可能です

----

### 検索で利用できる接頭辞

|接頭辞|機能|
|-----|---|
|なし|ソースリストペインに表示されているスクリプトの絞り込み|
|!|すべてのファイルに対する文字列検索|
|@|指定した文字列を含む関数定義の検索|
|#|現在ソースペインで開いているファイルに対する文字列検索|
|:|ソースペインで開いているファイルの指定行への移動|
|*|変数ペインに表示している変数の絞り込み|

---

## 条件付きブレークポイント

![指定したい行で開いたコンテキストメニューから、条件付きブレークポイントを設定します](img/conditional-breakpoint.png)

* 特定の条件を満たす時だけ実行が停止するブレークポイント
* 設置したい行で開くコンテキストメニューから設置

----

### 条件の設定方法

![ポップアップに条件式を記入します](img/conditional-breakpoint-condition.png)

* ポップアップに条件を記入します
* 条件は評価値が真偽値になるような式で表現します
* この式が true に評価された時に、実行が停止します

----

### 条件付きブレークポイント

![条件付きブレークポイントはオレンジで表示されます](img/breakpoint-conditional-breakpoint.png)

----

### 条件の変更

![コンテキストメニューの「条件付きブレークポイントを設定する」で変更します](img/change-breakpoint-condition.png)

---

## DOM イベントでのブレーク

![イベントペインに表示されているイベントをクリックすると、そのイベントが起きた際にハンドラでブレークします](img/event-pane.png)

---

## ここまでのまとめ

* ブレークポイントを適切に設定します
  * 条件付きブレークポイント
  * DOM イベントでのブレーク  
* 変数やウォッチ式の値を確認しつつ
* ステップ実行で、プログラムの振る舞いを確認します

---

## TIPS：エラーの解説ページ

![コンソールに表示されたエラーメッセージ](img/error-on-console.png)

* コンソールに表示されるエラーには「詳細」がつくものがあります
* 詳細をクリックすると MDN のエラー解説ページが表示されます

----

### MDN のエラー解説ページ

![ReferenceError: "x" is not defined の解説](img/error-description-on-mdn.png)

---

## デバッグを体験しよう

![世界時計アプリ](img/target.png)

* world-clock/app フォルダ内にアプリがあります
* フォルダ内の index.html を開いてください

----

### ローカルでサーバーを立てるには 

~~~sh
% cd world-clock
% npm install
% gulp
~~~

* [Gulp](http://gulpjs.com/) が使えれば、ローカルでサーバが立てられます。
* 上記のコマンドで [localhost:8888](http:localhost:8888/) でサーバーが動きます

---

## 予備知識：JavaScript での日付の扱い

~~~javascript
console.log(Date.now()); // 現在時刻の取得
~~~

* JavaScript での日付は [Date オブジェクト](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)で扱います
* 1970 年 1 月 1 日 00:00:00(UTC) からの経過時間（ミリ秒）で、日付を表現します
  * [UTC：協約世界時](https://ja.wikipedia.org/wiki/%E5%8D%94%E5%AE%9A%E4%B8%96%E7%95%8C%E6%99%82)
  * [Date.now()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
  * ミリ秒：1000 分の 1 秒

----

### 予備知識：時差

~~~javascript
console.log(Date.getTimezoneOffset());
~~~

* 時差は、UTC からのズレとして表現されます
* [Date.prototype.getTimezoneOffset()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset) で、
UTC からのズレを分単位で取得できます

----

### 予備知識：時、分、秒の取得

~~~javascript
let now = new Date(); // 現在時刻の取得
let timeString = `${now.getHourse()}:${now.getMinutes()}:${now.getSeconds()}`;
// 現在時刻を 時:分:秒 で表した文字列の作成 
console.log(timeString);
~~~

* そのタイムゾーンでの[時](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours)、[分](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes)、[秒](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds)を取得できます
* [年](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)、[月](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)、[日](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate)、[曜日](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay)なども同様に取得できます

---

### シナリオ：都市を変えると、時計が止まる

![都市をクリックすると時計が止まります](img/clash.png)

* 都市をクリックすると、時計がとまります
* これを修正してください

----

### シナリオ：表示が崩れる

![デリーをクリックすると、時の表示がくずれます](img/delhi.png)

* デリーの時だけ、時刻の表示が崩れます
* これを修正してください

----

### シナリオ：不正に計算される時刻

![サンフランシスコをクリックすると、時刻計算に失敗します](img/nan.png)

* 時刻が不正に計算されます
* サンフランシスコをクリックすると発生します

---

## まとめ

* デバッガを使うと、コードの振る舞いや状態を追えます
  * コードを変えなくてもいいというのがポイントです
  * ブレークポイントをどう設定するかが鍵です
  * 事前条件、事後条件を確認するように設定しましょう
* 今日扱わなかったトピック
  * altJS で出力されたコードのデバッグ
  * 難読化されたコードのデバッグ
  * Chrome で動作するコードのデバッグ
  * Android / iOS 上で動作するコードに対するデバッグ