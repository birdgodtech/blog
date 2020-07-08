import {Even} from './even.js'

import '../css/style.scss'

$(document).ready(function () {
    Even.backToTop();
    Even.mobileNavbar();
    Even.toc();
    Even.fancybox();
    $('form').on('submit', function () {
        console.dir(this)
        var value = $(this).find('input').eq(0).val();
        if (value) {
            var url = 'https://github.com/nusr/blog/search?utf8=✓&q=' + encodeURIComponent(value);
            window.open(url, '_blank');
        }
        return false;
    })
});


Even.responsiveTable();
Even.flowchart();
Even.sequence();

if (window.hljs) {
    hljs.initHighlighting();
    Even.highlight();
} else {
    Even.chroma();
}

