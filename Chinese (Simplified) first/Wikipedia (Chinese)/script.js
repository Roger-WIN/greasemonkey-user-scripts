// ==UserScript==
// @name             中文维基百科优先简体中文
// @namespace        https://github.com/Roger-WIN/greasemonkey-user-scripts
// @description      Wikipedia 维基百科（中文）优先使用简体中文浏览
// @version          1.1.10
// @match            *zh.wikipedia.org/*
// @match            *zh.m.wikipedia.org/*
// @require          https://greasyfork.org/scripts/392621-%E4%BC%98%E5%85%88%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87/code/%E4%BC%98%E5%85%88%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87.js
// @author           神齐 <RogerKung.WIN@outlook.com>
// @license          MIT
// @updateURL        https://github.com/Roger-WIN/greasemonkey-user-scripts/raw/main/Chinese%20(Simplified)%20first/Wikipedia%20(Chinese)/script.js
// @supportURL       https://github.com/Roger-WIN/greasemonkey-user-scripts/issues
// @contributionURL  https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=RogerKung.WIN@outlook.com&item_name=Greasy+Fork+donation
// ==/UserScript==

(() => {
    // 目标语言
    const lang_target = "/zh-cn/";
    // 表示页面是否指定语言
    let langs_head = "/zh";
    let lang_default = "/wiki/";
    let flags_exclude = ["index.php", "/w/"];
    convertWithExclude(lang_target, flags_exclude, langs_head, lang_default);
})();