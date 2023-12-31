import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./discounts.css";

import _implicitScopedStylesheets from "./discounts.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M290 342a3 3 0 01-3 2h-11a3 3 0 01-3-2 3 3 0 010-3l87-161a4 4 0 012-2h13a3 3 0 012 4zm89-59a18 18 0 11-18 18 18 18 0 0118-17m0-24a41 41 0 1041 41 41 41 0 00-41-41zm112-23l-19-23a40 40 0 01-10-23l-2-30a37 37 0 00-34-34l-25-2a54 54 0 01-31-13l-19-17a37 37 0 00-48 0l-21 18a48 48 0 01-28 11l-27 2a37 37 0 00-35 34l-2 24a54 54 0 01-11 29v36l16-19a77 77 0 0019-44l2-25a14 14 0 0113-12l27-2a71 71 0 0041-17l20-18a14 14 0 0110-3 14 14 0 019 4l20 17a76 76 0 0043 19l25 2a14 14 0 0113 12l2 30a64 64 0 0015 36l20 23a14 14 0 010 18l-16 18a82 82 0 00-20 47l-3 24a14 14 0 01-13 12l-28 2a66 66 0 00-38 16l-23 18a14 14 0 01-8 3 14 14 0 01-10-3l-19-17a76 76 0 00-44-19l-25-1a14 14 0 01-13-12l-17 18a37 37 0 0028 18l25 2a54 54 0 0130 13l20 16a38 38 0 0025 9 37 37 0 0024-9l22-18a43 43 0 0125-10l28-2a37 37 0 0036-35l2-23a60 60 0 0114-34l16-17a37 37 0 000-50zM114 121v195a6 6 0 01-10 4l-56-56a8 8 0 00-12 0l-13 13a9 9 0 000 12l103 103a8 8 0 0012 0l103-102a9 9 0 000-12l-11-13a8 8 0 00-12 0l-58 55a6 6 0 01-10-4V122a8 8 0 00-8-9h-18a10 10 0 00-10 8zm159 80a18 18 0 11-18 18 18 18 0 0118-18m0-23a41 41 0 1041 40 41 41 0 00-41-40z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 520 520",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_static_fragment($fragment1(), 2)])];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-6stpt29qj2b";
freezeTemplate(tmpl);
