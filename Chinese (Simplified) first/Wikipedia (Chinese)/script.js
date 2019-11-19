// ==UserScript==
// @name             中文维基百科优先简体中文
// @namespace        https://github.com/Roger-WIN/greasemonkey-user-scripts
// @description      Wikipedia 维基百科（中文）优先使用简体中文浏览
// @author           神齐 <RogerKung.WIN@outlook.com>
// @match            *zh.wikipedia.org/*
// @match            *zh.m.wikipedia.org/*
// @version          1.1.2
// @updateURL        https://raw.githubusercontent.com/Roger-WIN/greasemonkey-user-scripts/master/Chinese%20(Simplified)%20first/Wikipedia%20(Chinese)/script.js
// @license          MIT
// @supportURL       https://github.com/Roger-WIN/greasemonkey-user-scripts/issues
// @contributionURL  https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=RogerKung.WIN@outlook.com&item_name=Greasy+Fork+donation
// ==/UserScript==

/* jshint esversion: 6 */

import {
    convertWithExclude
} from '../_common/language-first';

(function () {
    "use strict";

    var lang_target = "/zh-cn/"; // 目标语言
    var langs_head = "/zh"; // 表示页面是否指定语言
    var lang_default = "/wiki/";
    var flag_exclude = "/w/";

    convertWithExclude(lang_target, langs_head, flag_exclude, lang_default);
})();