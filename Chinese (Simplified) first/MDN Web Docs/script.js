// ==UserScript==
// @name             MDN Web 文档优先简体中文
// @namespace        https://github.com/Roger-WIN/greasemonkey-user-scripts
// @description      MDN Web Docs（MDN Web 文档）优先使用简体中文浏览
// @version          1.0.1
// @match            *developer.mozilla.org/*
// @require          https://greasyfork.org/scripts/392621-%E4%BC%98%E5%85%88%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87/code/%E4%BC%98%E5%85%88%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87.js
// @author           神齐 <RogerKung.WIN@outlook.com>
// @license          MIT
// @updateURL        https://github.com/Roger-WIN/greasemonkey-user-scripts/raw/master/Chinese%20(Simplified)%20first/MDN%20Web%20Docs/script.js
// @supportURL       https://github.com/Roger-WIN/greasemonkey-user-scripts/issues
// @contributionURL  https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=RogerKung.WIN@outlook.com&item_name=Greasy+Fork+donation
// ==/UserScript==

(() => {
    const lang_target = "/zh-CN/"; // 目标语言
    convertWithoutExclude(lang_target);
})();