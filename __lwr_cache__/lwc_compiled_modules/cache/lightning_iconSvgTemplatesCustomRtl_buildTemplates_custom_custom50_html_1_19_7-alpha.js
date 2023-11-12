import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom50.css";

import _implicitScopedStylesheets from "./custom50.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M766 563a176 176 0 01-166-7c-3-2-7-2-10 0a183 183 0 01-180 0c-3-2-7-2-10 0-26 16-57 24-90 24-27 0-53-6-76-17-6-3-14 2-14 9v121c0 24 14 45 36 55 50 22 104 38 161 46 12 2 23-8 23-20v-75c0-33 27-59 59-59h1c33 0 59 27 59 59v75c0 12 11 21 23 20 56-8 110-24 161-46 22-10 36-31 36-55V572c1-7-7-12-13-9zm-456-43c36 0 67-15 87-39 4-5 11-5 15 0 20 24 52 39 87 39 36 0 67-15 87-39 4-5 11-5 15 0 20 24 52 39 87 39 56 0 103-39 109-88 1-7-2-14-8-18L536 214a60 60 0 00-74 0L207 414c-6 4-8 11-8 18 8 50 55 88 111 88z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-ktnfs4aude";
freezeTemplate(tmpl);
