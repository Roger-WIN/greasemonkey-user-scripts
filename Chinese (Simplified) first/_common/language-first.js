// ==UserScript==
// @name             优先简体中文
// @namespace        https://github.com/Roger-WIN/greasemonkey-user-scripts
// @description      网站优先使用简体中文浏览
// @version          1.1.1
// @match            *
// @author           神齐 <RogerKung.WIN@outlook.com>
// @license          MIT
// @supportURL       https://github.com/Roger-WIN/greasemonkey-user-scripts/issues
// @contributionURL  https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=RogerKung.WIN@outlook.com&item_name=Greasy+Fork+donation
// ==/UserScript==

const url = window.location.href,
    domain = window.location.host,
    protocol = window.location.protocol + "//",
    home = protocol + domain,
    pathName = window.location.pathname,
    fullPath = url.substring(home.length);

const convert = (lang_target, ...args) => {
    let index;
    if (Array.isArray(args) && args.length > 0) {
        let [langs_head, lang_default] = args;
        index = pathName.startsWith(langs_head) ?
            fullPath.substring(1).indexOf("/") + 2 :
            lang_default.length;
    } else {
        index = lang_target.length;
    }
    // 替换或指定为目标语言
    let newUrl = home + lang_target + fullPath.substring(index);
    // 替换网页
    window.location.replace(newUrl);
};

/* 没有需要排除的情况 */
const convertWithoutExclude = (lang_target, ...args) => {
    // 网页已转换
    if (pathName.startsWith(lang_target)) {
        // 退出函数，避免重复转换
        return;
    }
    if (Array.isArray(args) && args.length > 0) {
        let [langs_head, lang_default = "/"] = args;
        convert(lang_target, langs_head, lang_default);
    } else {
        convert(lang_target);
    }
};

/* 有需要排除的情况 */
const convertWithExclude = (lang_target, flags_exclude, ...args) => {
    // 网页已转换
    if (pathName.startsWith(lang_target)) {
        // 退出函数，避免重复转换
        return;
    }
    for (const flagItem of flags_exclude) {
        // 网页不可转换
        if (pathName.includes(flagItem)) {
            // 退出函数，避免转换
            return;
        }
    }
    if (Array.isArray(args) && args.length > 0) {
        let [langs_head, lang_default = "/"] = args;
        convert(lang_target, langs_head, lang_default);
    } else {
        convert(lang_target);
    }
};

const convertSubdomain = (subdomain_target = "zh", subdomain_preserve = 'm') => {
    const DELIMITER = '.';
    const domains = domain.split(DELIMITER),
        mainDomains = domains.slice(-2),
        subdomains = domains.slice(0, -2),
        mainDomain = mainDomains.join(DELIMITER),
        subdomain = subdomains.join(DELIMITER);

    const isMultiSubdomain = subdomains.length > 1;

    // 域名中不包含欲保留的子域名时，不保留
    let isPreserve = (subdomain_preserve.length > 0) && (subdomain.startsWith(subdomain_preserve) != subdomain.endsWith(subdomain_preserve));

    if (isMultiSubdomain && isPreserve && subdomains.includes(subdomain_target)) {
        return true;
    }
    if (!isMultiSubdomain) {
        if (subdomain === subdomain_target) {
            return true;
        }
        if (isPreserve && [subdomain_preserve + subdomain_target, subdomain_target + subdomain_preserve].includes(subdomain)) {
            return true;
        }
    }

    let new_subdomain = subdomain_target;
    if (isPreserve) {
        let separator = isMultiSubdomain ? DELIMITER : '';
        new_subdomain = subdomain.startsWith(subdomain_preserve) ? [subdomain_preserve, subdomain_target].join(separator) : [subdomain_target, subdomain_preserve].join(separator);
    }
    let new_domain = new_subdomain + DELIMITER + mainDomain;
    let newUrl = protocol + new_domain + fullPath;
    window.location.replace(newUrl);
};