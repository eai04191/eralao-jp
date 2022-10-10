
// ==UserScript==
// @name        ERALAO-JP
// @namespace   net.mizle
// @version     1.0.0
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
      document.documentElement.setAttribute("lang", "ko");
      var buttonTranslations = [
          // 1日のコマンド
          { choise: "연애", translate: "デート" },
          { choise: "외출", translate: "外出" },
          { choise: "상태보기", translate: "ステータス" },
          { choise: "출격", translate: "出撃" },
          { choise: "휴식", translate: "休息" },
          { choise: "대상변경", translate: "バイオロイド変更" },
          { choise: "요리", translate: "料理" },
          { choise: "헤어지기", translate: "別れる" },
          // デートコマンド
          { choise: "Talk", translate: "雑談" },
          { choise: "Joke", translate: "エッチな冗談" },
          { choise: "Hand", translate: "手をつなぐ" },
          { choise: "Head", translate: "頭を撫でる" },
          { choise: "Tickle", translate: "くすぐる" },
          { choise: "Onmylap", translate: "膝枕" },
          { choise: "Onyourlap", translate: "膝枕してもらう" },
          { choise: "Hug", translate: "ハグ" },
          { choise: "Backhug", translate: "後ろからハグ" },
          { choise: "Onarm", translate: "腕枕" },
          { choise: "Peck", translate: "チュー" },
          { choise: "Tummy", translate: "お腹を触る" },
          { choise: "Ear", translate: "耳を噛む" },
          { choise: "Kiss", translate: "キス" },
          { choise: "Neck", translate: "首を舐める" },
          { choise: "Back", translate: "背中を舐める" },
          { choise: "Pahu", translate: "パフパフ" },
          { choise: "Fword", translate: "悪口を言う" },
          { choise: "Cheek", translate: "頬を殴る" },
          { choise: "Bodyblow", translate: "腹を殴る" },
          { choise: "Kick", translate: "蹴る" },
          // その他の選択肢
          { choise: "Sell", translate: "売る" },
      ];
      buttonTranslations.forEach(function (_a) {
          var choise = _a.choise, translate = _a.translate;
          var css = "button[data-choice=\"".concat(choise, "\"] > font { font-size: 0; }") +
              "button[data-choice=\"".concat(choise, "\"] > font::before { content: \"").concat(translate, "\"; font-size: var(--button-font-size); }");
          GM_addStyle(css);
      });
  })();

})();
