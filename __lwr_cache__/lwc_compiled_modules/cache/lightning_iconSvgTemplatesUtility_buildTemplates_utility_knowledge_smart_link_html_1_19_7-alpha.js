import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./knowledge_smart_link.css";

import _implicitScopedStylesheets from "./knowledge_smart_link.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M341 415l-12-2a98 98 0 01-11-3 16 16 0 00-16 4l-3 3a41 41 0 01-29 11 38 38 0 01-24-8 36 36 0 01-2-54l46-45a38 38 0 0153 0l5 6c3 5 36-40 33-44a68 68 0 00-17-12 95 95 0 00-92-3l-20 15-44 43a90 90 0 0062 155 92 92 0 0065-27l15-14c4-3 6-9 4-14a15 15 0 00-13-11zm129-221a91 91 0 00-60-23c-25 0-50 10-67 27l-13 13a15 15 0 00-4 16c2 5 7 10 12 10 9 0 17 2 25 4a16 16 0 0015-4l3-2a41 41 0 0128-12c10 0 18 3 24 8a36 36 0 012 54l-45 45a38 38 0 01-54 0c-2-2-40 35-37 38a86 86 0 0046 24 95 95 0 0062-9 92 92 0 0020-15l46-45a88 88 0 00-2-129zm-80-67V52a13 13 0 00-13-13h-94a28 28 0 00-27 26v163c102-120 134-100 134-100zM155 307H66a13 13 0 01-12-12V87a8 8 0 00-9-8 7 7 0 00-3 0 39 39 0 00-22 37v193a34 34 0 0034 34h98l2-35zm54-33a13 13 0 0012-13V64a28 28 0 00-27-24h-94c-7 0-12 6-13 13v210c0 6 6 12 13 12h109zm264-159c0-18-6-33-24-37a8 8 0 00-10 7v48c12 1 23 5 34 10v-28z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6262drpu6b0";
freezeTemplate(tmpl);
