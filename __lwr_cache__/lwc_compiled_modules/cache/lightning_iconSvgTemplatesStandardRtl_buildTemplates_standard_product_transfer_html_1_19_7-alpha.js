import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_transfer.css";

import _implicitScopedStylesheets from "./product_transfer.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M562 205a17 17 0 00-25 0l-25 23a16 16 0 000 24l43 41a11 11 0 01-9 19H318a19 19 0 00-18 17v35a19 19 0 0018 17h228a11 11 0 019 19l-42 41a16 16 0 000 24l24 25a17 17 0 0025 0l135-130a16 16 0 000-24zM440 511a17 17 0 0125 0l25 22a16 16 0 010 24l-43 41a11 11 0 009 19h228a19 19 0 0118 17v35a19 19 0 01-18 17H456a11 11 0 00-9 19l43 41a16 16 0 010 24l-25 25a17 17 0 01-24 0L306 665a16 16 0 010-25z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2h7etk7p20t";
freezeTemplate(tmpl);
