
// ==UserScript==
// @name        ERALAO-JP
// @namespace   net.mizle
// @version     1.0.1
// @author      Irie Aoi <eai@mizle.net>
// @description ERALAO JP
// @homepageURL https://github.com/eai04191/eralao-jp
// @supportURL  https://github.com/eai04191/eralao-jp/issues
// @run-at      document-start
// @match       http://eralao.com/
// @grant       GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "html[lang=\"ja\"] {\n    --font-family-ja: \"MochiyPopOne\", system-ui;\n    --button-font-size: 24px;\n}\n\nhtml[lang=\"ja\"] body,\nhtml[lang=\"ja\"] pre {\n    font-family: var(--font-family-ja);\n    letter-spacing: -0.02em;\n}\n\npre {\n    white-space: normal;\n    flex-direction: column;\n}\n\n#stock-selector {\n    font-size: 1rem;\n}\n";
  styleInject(css_248z);

  (function () {
      document.documentElement.setAttribute("lang", "choise");
      var titleButtonTranslations = [
          { string: "Start", ja: "はじめから" },
          { string: "Load", ja: "つづきから" },
          { string: "Settings", ja: "オプション" },
          { string: "Credits", ja: "クレジット" },
          { string: "Gallery", ja: "ギャラリー" },
      ];
      titleButtonTranslations.forEach(function (_a) {
          var string = _a.string, ja = _a.ja;
          var css = "main-menu button[string=\"".concat(string, "\"] { font-size: 0; }") +
              "main-menu button[string=\"".concat(string, "\"] > span > font::before { content: \"").concat(ja, "\"; font-size: var(--button-font-size); }");
          GM_addStyle(css);
      });
      var buttonTranslations = [
          // 1日のコマンド
          { choise: "연애", ja: "デート" },
          { choise: "외출", ja: "外出" },
          { choise: "상태보기", ja: "ステータス" },
          { choise: "출격", ja: "出撃" },
          { choise: "휴식", ja: "休息" },
          { choise: "대상변경", ja: "バイオロイド変更" },
          { choise: "요리", ja: "料理" },
          { choise: "헤어지기", ja: "別れる" },
          // デートコマンド
          { choise: "Talk", ja: "雑談" },
          { choise: "Joke", ja: "エッチな冗談" },
          { choise: "Hand", ja: "手をつなぐ" },
          { choise: "Head", ja: "頭を撫でる" },
          { choise: "Tickle", ja: "くすぐる" },
          { choise: "Onmylap", ja: "膝枕" },
          { choise: "Onyourlap", ja: "膝枕してもらう" },
          { choise: "Hug", ja: "ハグ" },
          { choise: "Backhug", ja: "後ろからハグ" },
          { choise: "Onarm", ja: "腕枕" },
          { choise: "Peck", ja: "チュー" },
          { choise: "Tummy", ja: "お腹を触る" },
          { choise: "Ear", ja: "耳を噛む" },
          { choise: "Kiss", ja: "キス" },
          { choise: "Neck", ja: "首を舐める" },
          { choise: "Back", ja: "背中を舐める" },
          { choise: "Pahu", ja: "パフパフ" },
          { choise: "Fword", ja: "悪口を言う" },
          { choise: "Cheek", ja: "頬を殴る" },
          { choise: "Bodyblow", ja: "腹を殴る" },
          { choise: "Kick", ja: "蹴る" },
          // その他の選択肢
          { choise: "Sell", ja: "売る" },
      ];
      buttonTranslations.forEach(function (_a) {
          var choise = _a.choise, ja = _a.ja;
          var css = "button[data-choice=\"".concat(choise, "\"] > font { font-size: 0; }") +
              "button[data-choice=\"".concat(choise, "\"] > font::before { content: \"").concat(ja, "\"; font-size: var(--button-font-size); }");
          GM_addStyle(css);
      });
  })();

})();
