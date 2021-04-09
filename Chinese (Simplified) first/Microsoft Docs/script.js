// ==UserScript==
// @name             微软文档优先简体中文
// @namespace        https://github.com/Roger-WIN/greasemonkey-user-scripts
// @description      Microsoft Docs 微软文档优先使用简体中文浏览
// @version          1.0.3
// @match            *docs.microsoft.com/*
// @require          https://greasyfork.org/scripts/392621-%E4%BC%98%E5%85%88%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87/code/%E4%BC%98%E5%85%88%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87.js
// @author           神齐 <RogerKung.WIN@outlook.com>
// @license          MIT
// @updateURL        https://github.com/Roger-WIN/greasemonkey-user-scripts/raw/main/Chinese%20(Simplified)%20first/Microsoft%20Docs/script.js
// @supportURL       https://github.com/Roger-WIN/greasemonkey-user-scripts/issues
// @contributionURL  https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=RogerKung.WIN@outlook.com&item_name=Greasy+Fork+donation
// ==/UserScript==

(() => {
    const lang_target = "/zh-cn/"; // 目标语言
    convertWithExclude(lang_target, ['/answers/']);
})();
