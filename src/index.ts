import "./styles.css";

(function () {
    document.documentElement.setAttribute("lang", "ko");

    const buttonTranslations = [
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

    buttonTranslations.forEach(({ choise, translate }) => {
        const css =
            `button[data-choice="${choise}"] > font { font-size: 0; }` +
            `button[data-choice="${choise}"] > font::before { content: "${translate}"; font-size: var(--button-font-size); }`;
        GM_addStyle(css);
    });
})();
