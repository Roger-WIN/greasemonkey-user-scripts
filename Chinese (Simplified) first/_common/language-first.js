// ==UserScript==
// @name             优先简体中文
// @namespace        https://github.com/Roger-WIN/greasemonkey-user-scripts
// @description      网站优先使用简体中文浏览
// @version          1.0.9
// @match            *
// @author           神齐 <RogerKung.WIN@outlook.com>
// @license          MIT
// @updateURL        https://github.com/Roger-WIN/greasemonkey-user-scripts/raw/master/Chinese%20(Simplified)%20first/_common/language-first.js
// @supportURL       https://github.com/Roger-WIN/greasemonkey-user-scripts/issues
// @contributionURL  https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=RogerKung.WIN@outlook.com&item_name=Greasy+Fork+donation
// ==/UserScript==

const url = window.location.href,
    domain = window.location.hostname,
    home = window.location.protocol.concat("//", domain),
    pathName = window.location.pathname,
    fullPath = url.substring(home.length);

const convert = (lang_target, ...args) => {
    let index;
    if (Array.isArray(args) && args.length > 0) {
        let [langs_head, lang_default] = args;
        index = pathName.startsWith(langs_head) ?
            (fullPath.substring(1).indexOf('/') + 2) :
            lang_default.length;
    } else
        index = lang_target.length;
    let newUrl = home.concat(lang_target, fullPath.substring(index)); // 替换或指定为目标语言
    window.location.replace(newUrl); // 替换网页
}

/* 没有需要排除的情况 */
const convertWithoutExclude = (lang_target, ...args) => {
    if (pathName.startsWith(lang_target)) // 网页已转换
        return; // 退出函数，避免重复转换
    if (Array.isArray(args) && args.length > 0) {
        let [langs_head, lang_default = '/'] = args;
        convert(lang_target, langs_head, lang_default);
    } else
        convert(lang_target);
}

/* 有需要排除的情况 */
const convertWithExclude = (lang_target, flags_exclude, ...args) => {
    if (pathName.startsWith(lang_target)) // 网页已转换
        return; // 退出函数，避免重复转换
    for (const flagItem of flags_exclude)
        if (pathName.includes(flagItem)) // 网页不可转换
            return; // 退出函数，避免转换
    if (Array.isArray(args) && args.length > 0) {
        let [langs_head, lang_default = '/'] = args;
        convert(lang_target, langs_head, lang_default);
    } else
        convert(lang_target);
}