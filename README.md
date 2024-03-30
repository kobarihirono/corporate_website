# プロジェクト名

架空のコーポレートサイト制作

## PON DESIGN
https://github.com/kobarihirono/webProduction_practice/assets/131847306/45da631c-cb55-4f50-b2fa-10bcc219eb0c

https://github.com/kobarihirono/webProduction_practice/assets/131847306/3089acf1-8b46-4a8a-9758-d75f97319e43

## 使用技術

このプロジェクトでは以下の技術を使用しています

- **使用言語**
  - HTML
  - SCSS
  - jQuery

- **デザインツール**
  - figma

- **エディタ**
  - VisualStudio Code

- **ホスティング**
  - Vercel

## SCSS ファイル構成

```plaintext
scss/
|
|-- foundation/ # サイト全体で使用する変数や mixin など
|   |-- _color.scss # color 変数
|   |-- _mixins.scss # @mixin 変数
|   |-- _font.scss # フォント変数
|   |-- _base.scss # 共通設定
|   |-- _reset.scss # リセット css
|
|-- components/ # 再利用可能な UI コンポーネント
|   |-- _buttons.scss # ボタン
|   |-- _title.scss # タイトル
|   |-- _...
|
|-- layout/ # 大枠のレイアウト定義
|   |-- _header.scss # ヘッダー
|   |-- _footer.scss # フッター
|   |-- _main.scss # ページ内の body,main 部分等
|   |-- _...
|
|-- project/ # ページ固有のスタイル
|   |-- _index.scss # トップページ
|   |-- _...
|
`-- style.scss # 上記のパーツをインポートするメインファイル
```

## テスト

- **手動テスト**:
  - 互換性テスト
  - ユーザビリティテスト

### テスト仕様書

https://docs.google.com/spreadsheets/d/1-rC1CIOfi-JMN4pbmEX_XtGb2eCKODXAGwYYoZj_-JI/edit?usp=sharing

## 参考

- **デザイン**:https://webdesigner-go.com/coding-practice/
