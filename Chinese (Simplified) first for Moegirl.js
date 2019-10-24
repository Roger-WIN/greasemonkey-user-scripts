// ==UserScript==
// @name             萌娘百科优先简体中文
// @namespace        https://github.com/Roger-WIN/greasemonkey-user-scripts
// @description      Moegirl 萌娘百科优先使用简体中文浏览
// @author           神齐
// @match            *.moegirl.org/*
// @version          1.0
// @updateURL        https://raw.githubusercontent.com/Roger-WIN/greasemonkey-user-scripts/master/Chinese%20(Simplified)%20first%20for%20Moegirl.js
// @license          MIT
// @supportURL       https://github.com/Roger-WIN/greasemonkey-user-scripts/issues
// @contributionURL  https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=RogerKung.WIN@outlook.com&item_name=Greasy+Fork+donation
// ==/UserScript==

(function () {
    'use strict';

    var url = window.location.href,
        newUrl;
    var domainName = window.location.hostname,
        pathName = window.location.pathname;
    var lang_target = "/zh-cn/"; // 目标语言
    var langs_origin = ["/zh/", "/zh-hans/", "/zh-hant/", "/zh-tw/"]; // 源语言集
    var langs_head = "/zh"; // 表示页面是否指定语言
    var flag_skip = "."; // 表示路径中含有文件，因为文件的扩展名以 . 开头

    if (pathName.startsWith(lang_target) || pathName.includes(flag_skip)) // 网页已转换，或不可转换
        return; // 退出函数，避免转换
    if (pathName.startsWith(langs_head)) // 页面已指定语言
        for (var i = 0; i < langs_origin.length; i++) { // 遍历源语言集
            var lang_origin = langs_origin[i]; // 取一种源语言
            if (pathName.startsWith(lang_origin)) { // 当前页面为该源语言
                newUrl = url.replace(lang_origin, lang_target); // 替换为目标语言
                break;
            }
        }
    else // 页面未指定语言
        newUrl = url.replace(domainName.concat('/'), domainName.concat(lang_target)); // 将目标语言追加到域名后
    window.location.replace(newUrl); // 替换网页
})();