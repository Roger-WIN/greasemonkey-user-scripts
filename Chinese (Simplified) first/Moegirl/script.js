// ==UserScript==
// @name             萌娘百科优先简体中文
// @namespace        https://github.com/Roger-WIN/greasemonkey-user-scripts
// @description      Moegirl 萌娘百科优先使用简体中文浏览
// @version          1.1.3
// @match            *zh.moegirl.org/*
// @match            *mzh.moegirl.org/*
// @require          https://greasyfork.org/scripts/392621-%E4%BC%98%E5%85%88%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87/code/%E4%BC%98%E5%85%88%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87.js?version=756138
// @author           神齐 <RogerKung.WIN@outlook.com>
// @license          MIT
// @updateURL        https://raw.githubusercontent.com/Roger-WIN/greasemonkey-user-scripts/master/Chinese%20(Simplified)%20first/Moegirl/script.js
// @supportURL       https://github.com/Roger-WIN/greasemonkey-user-scripts/issues
// @contributionURL  https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=RogerKung.WIN@outlook.com&item_name=Greasy+Fork+donation
// ==/UserScript==

(function () {
    "use strict";

    var lang_target = "/zh-cn/"; // 目标语言
    var langs_head = "/zh"; // 表示页面是否指定语言
    var flags_exclude = ['.']; // 表示路径中含有文件，因为文件的扩展名以 . 开头

    convertWithExclude(lang_target, langs_head, flags_exclude);
})();