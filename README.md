# ERALAO-JP

ERALAO-JP はラストオリジンの二次創作ゲームである[ERALAO](http://eralao.com/)を日本語でプレイするための UserScript です。

![image](https://user-images.githubusercontent.com/3516343/194895886-6fadf54e-0ecc-442a-a5bf-96f7cbee3e38.png)

![image](https://user-images.githubusercontent.com/3516343/194897368-53ff3339-6cce-49e6-8057-37c4c5b74f43.png)

## 機能

-   ブラウザのページ翻訳機能が元の言語を正しく認識できるようにする
    -   ERALAO は全体が韓国語であるにも関わらず html の lang 属性が en になっているため、Chrome のページ翻訳などが翻訳元の言語を見失い、翻訳が正しく行われない問題があります
    -   この修正によってページ翻訳はページが韓国語であることを認識できるので、より精度の高い翻訳が行われます
-   日本語翻訳時に日本語フォントを使用させる
    -   Chrome のみで機能します
    -   日本語翻訳使用時には、韓国語より日本語フォントを優先して使用するようにします
-   いくつかのボタンの日本語化
    -   タイトル・デートメニューなどの選択肢を日本語にしてあります

今のところゲームのテキストは全く翻訳されていません。筋の良い翻訳方法が確立できていないのと、私が韓国語に長けていないためです。翻訳にご協力いただける方がいればご連絡ください。

## 使い方

1. お使いのブラウザに UserScript マネージャーを導入する
    - [Violentmonkey (for Google Chrome)](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
    - [Violentmonkey (for Edge)](https://microsoftedge.microsoft.com/addons/detail/eeagobfjdenkkddmbclomhiblgggliao/)
    - など
    - 翻訳自体はブラウザの翻訳機能に依存するので Chrome が良いと思います
2. [eralao-jp.user.js](https://github.com/eai04191/eralao-jp/raw/dist/eralao-jp.user.js) を開き、指示に従いインストールする
    - ![image](https://user-images.githubusercontent.com/3516343/194890225-62f7969a-7841-403e-981f-3be5ee2a8f9c.png)  
      Violentmonkey ならこのような画面が開くので、インストールボタンを押す
    - このような画面が開かない場合は UserScript マネージャーが導入できていません
3. ゲームのページを開くと反映されているはずです

## ライセンス

MIT License
