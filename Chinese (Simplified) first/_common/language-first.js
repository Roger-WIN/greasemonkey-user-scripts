/* jshint esversion: 6 */

const url = window.location.href,
    domainName = window.location.hostname,
    host = window.location.protocol.concat("//", domainName),
    pathName = window.location.pathname,
    fullPath = url.substring(host.length);

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

function convert(lang_target, langs_head, lang_default) {
    var index = (pathName.startsWith(langs_head)) ? (fullPath.substring(1).indexOf('/') + 2) : lang_default.length;
    var newUrl = host.concat(lang_target, fullPath.substring(index)); // 替换或指定为目标语言
    window.location.replace(newUrl); // 替换网页
}