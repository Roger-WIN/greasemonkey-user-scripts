// ==UserScript==
// @name             微软文档优先简体中文
// @namespace        https://github.com/Roger-WIN/greasemonkey-user-scripts
// @description      Microsoft Docs 微软文档优先使用简体中文浏览
// @version          1.0.4
// @match            *docs.microsoft.com/*
// @require          https://cdn.jsdelivr.net/gh/Roger-WIN/greasemonkey-user-scripts@a44e2ee0a802fd0fbed6c461196188237294fc32/Chinese%20(Simplified)%20first/_common/language-first.js
// @author           神齐 <RogerKung.WIN@outlook.com>
// @license          MIT
// @updateURL        https://github.com/Roger-WIN/greasemonkey-user-scripts/raw/main/Chinese%20(Simplified)%20first/Microsoft%20Docs/script.js
// @supportURL       https://github.com/Roger-WIN/greasemonkey-user-scripts/issues
// @contributionURL  https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=RogerKung.WIN@outlook.com&item_name=Greasy+Fork+donation
// ==/UserScript==

(() => {
    // 目标语言
    const lang_target = "/zh-cn/";
    convertWithExclude(lang_target, ['/answers/']);
})();