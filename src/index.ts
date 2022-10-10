import "./styles.css";

(function () {
    document.documentElement.setAttribute("lang", "ko");

    const titleButtonTranslations = [
        { string: "Start", ja: "はじめから" },
        { string: "Load", ja: "つづきから" },
        { string: "Settings", ja: "オプション" },
        { string: "Credits", ja: "クレジット" },
        { string: "Gallery", ja: "ギャラリー" },
    ];
    titleButtonTranslations.forEach(({ string, ja }) => {
        const css =
            `main-menu button[string="${string}"] font { font-size: 0; }` +
            `main-menu button[string="${string}"] > span > font::before { content: "${ja}"; font-size: var(--button-font-size); }`;
        GM_addStyle(css);
    });

    const stockNumberTranslations = [
        { number: "1", ja: "+1" },
        { number: "5", ja: "+5" },
        { number: "allBuy", ja: "全て購入" },
        { number: "allSell", ja: "全て売却" },
    ];
    stockNumberTranslations.forEach(({ number, ja }) => {
        const css =
            `stock-number button[data-number="${number}"] > font { font-size: 0; }` +
            `stock-number button[data-number="${number}"] > font::before { content: "${ja}"; font-size: 1rem; }`;
        GM_addStyle(css);
    });

    const stockButtonTranslations = [
        { className: "buy", ja: "購入" },
        { className: "sell", ja: "売却" },
    ];
    stockButtonTranslations.forEach(({ className, ja }) => {
        const css =
            `stock-buttons button.${className} > font { font-size: 0; }` +
            `stock-buttons button.${className} > font::before { content: "${ja}"; font-size: var(--button-font-size); }`;
        GM_addStyle(css);
    });

    const buttonTranslations = [
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
    buttonTranslations.forEach(({ choise, ja }) => {
        const css =
            `button[data-choice="${choise}"] > font { font-size: 0; }` +
            `button[data-choice="${choise}"] > font::before { content: "${ja}"; font-size: var(--button-font-size); }`;
        GM_addStyle(css);
    });
})();
