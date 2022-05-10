/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'envelop': '&#xe945;',
            'mail': '&#xe945;',
            'search': '&#xe986;',
            'magnifier': '&#xe986;',
            'image': '&#xe90d;',
            'picture': '&#xe90d;',
            'phone': '&#xe942;',
            'telephone': '&#xe942;',
            'location2': '&#xe948;',
            'map-marker2': '&#xe948;',
            'enlarge': '&#xe989;',
            'expand': '&#xe989;',
            'heart': '&#xe9da;',
            'like': '&#xe9da;',
            'facebook': '&#xea90;',
            'brand10': '&#xea90;',
            'instagram': '&#xea92;',
            'brand12': '&#xea92;',
            'youtube': '&#xea9d;',
            'brand21': '&#xea9d;',
            'dropbox': '&#xeaae;',
            'brand38': '&#xeaae;',
            'pinterest': '&#xead1;',
            'brand72': '&#xead1;',
            'file-pdf': '&#xeadf;',
            'file10': '&#xeadf;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
