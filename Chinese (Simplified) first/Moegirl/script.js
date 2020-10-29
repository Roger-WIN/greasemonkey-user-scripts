// ==UserScript==
// @name             萌娘百科优先简体中文
// @namespace        https://github.com/Roger-WIN/greasemonkey-user-scripts
// @description      Moegirl 萌娘百科优先使用简体中文浏览
// @version          1.1.9
// @match            *zh.moegirl.org/*
// @match            *mzh.moegirl.org/*
// @match            *zh.moegirl.org.cn/*
// @match            *mzh.moegirl.org.cn/*
// @require          https://greasyfork.org/scripts/392621-%E4%BC%98%E5%85%88%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87/code/%E4%BC%98%E5%85%88%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87.js
// @author           神齐 <RogerKung.WIN@outlook.com>
// @license          MIT
// @updateURL        https://github.com/Roger-WIN/greasemonkey-user-scripts/raw/main/Chinese%20(Simplified)%20first/Moegirl/script.js
// @supportURL       https://github.com/Roger-WIN/greasemonkey-user-scripts/issues
// @contributionURL  https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=RogerKung.WIN@outlook.com&item_name=Greasy+Fork+donation
// ==/UserScript==

(() => {
    const lang_target = "/zh-cn/"; // 目标语言
    let langs_head = "/zh"; // 表示页面是否指定语言
    let flags_exclude = ["index.php", "."]; // 表示路径中含有文件，因为文件的扩展名以 . 开头
    convertWithExclude(lang_target, flags_exclude, langs_head);
})();
