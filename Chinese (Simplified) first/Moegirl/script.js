// ==UserScript==
// @name             萌娘百科优先简体中文
// @namespace        https://github.com/Roger-WIN/greasemonkey-user-scripts
// @description      Moegirl 萌娘百科优先使用简体中文浏览
// @version          1.1.11
// @match            *zh.moegirl.org/*
// @match            *mzh.moegirl.org/*
// @match            *zh.moegirl.org.cn/*
// @match            *mzh.moegirl.org.cn/*
// @require          https://cdn.jsdelivr.net/gh/Roger-WIN/greasemonkey-user-scripts@a44e2ee0a802fd0fbed6c461196188237294fc32/Chinese%20(Simplified)%20first/_common/language-first.js
// @author           神齐 <RogerKung.WIN@outlook.com>
// @license          MIT
// @updateURL        https://github.com/Roger-WIN/greasemonkey-user-scripts/raw/main/Chinese%20(Simplified)%20first/Moegirl/script.js
// @supportURL       https://github.com/Roger-WIN/greasemonkey-user-scripts/issues
// @contributionURL  https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=RogerKung.WIN@outlook.com&item_name=Greasy+Fork+donation
// ==/UserScript==

(() => {
    // 目标语言
    const lang_target = "/zh-cn/";
    // 表示页面是否指定语言
    let langs_head = "/zh";
    // 表示路径中含有文件，因为文件的扩展名以 . 开头
    let flags_exclude = ["index.php", "."];
    convertWithExclude(lang_target, flags_exclude, langs_head);
})();