// ==UserScript==
// @name             优先简体中文
// @namespace        https://github.com/Roger-WIN/greasemonkey-user-scripts
// @description      网站优先使用简体中文浏览
// @author           神齐 <RogerKung.WIN@outlook.com>
// @version          1.0
// @updateURL        https://raw.githubusercontent.com/Roger-WIN/greasemonkey-user-scripts/master/Chinese%20(Simplified)%20first/_common/language-first.js
// @license          MIT
// @supportURL       https://github.com/Roger-WIN/greasemonkey-user-scripts/issues
// @contributionURL  https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=RogerKung.WIN@outlook.com&item_name=Greasy+Fork+donation
// ==/UserScript==

/* jshint esversion: 6 */

const url = window.location.href,
    domainName = window.location.hostname,
    host = window.location.protocol.concat("//", domainName),
    pathName = window.location.pathname,
    fullPath = url.substring(host.length);

function convert(lang_target, langs_head, lang_default) {
    let index = (pathName.startsWith(langs_head)) ? (fullPath.substring(1).indexOf('/') + 2) : lang_default.length;
    let newUrl = host.concat(lang_target, fullPath.substring(index)); // 替换或指定为目标语言
    window.location.replace(newUrl); // 替换网页
}

function convertWithoutExclude(lang_target, langs_head, lang_default = '/') {
    if (pathName.startsWith(lang_target)) // 网页已转换
        return; // 退出函数，避免重复转换
    convert(lang_target, langs_head, lang_default);
}

function convertWithExclude(lang_target, langs_head, flag_exclude, lang_default = '/') {
    if (pathName.startsWith(lang_target)) // 网页已转换
        return; // 退出函数，避免重复转换
    if (pathName.includes(flag_exclude)) // 网页不可转换
        return; // 退出函数，避免转换
    convert(lang_target, langs_head, lang_default);
}

export {
    convertWithoutExclude,
    convertWithExclude
};