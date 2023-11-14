import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./monthlyview.css";

import _implicitScopedStylesheets from "./monthlyview.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M440 70h-50V50a30 30 0 10-60 0v20H190V50a30 30 0 10-60 0v20H80a40 40 0 00-40 40v25c0 8 7 15 15 15h410c8 0 15-7 15-15v-25a40 40 0 00-40-40zm25 130H55c-8 0-15 7-15 15v245a40 40 0 0040 40h360a40 40 0 0040-40V215c0-8-7-15-15-15zM211 440c-24 0-51-9-59-22l-2-7c0-9 8-16 16-16l9 2c11 6 24 10 35 10 20 0 31-9 31-21 0-13-10-19-33-19-13 2-22-4-22-16 0-9 6-15 16-15 21 1 36-4 36-18 0-13-13-19-30-19-11 0-22 3-32 9-2 2-5 2-8 2-8 0-15-6-15-15 0-4 2-8 5-11a82 82 0 0154-18c38 0 62 17 62 45 0 21-18 34-36 38 17 2 38 15 38 39-1 32-26 52-65 52zm159-19c0 9-5 19-15 19-9 0-15-9-15-19V318l-21 19c-3 3-7 4-11 4-8 0-15-6-15-15 0-4 1-7 4-10l38-38c4-4 9-7 15-7 11 0 20 10 20 21v129z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7qmgaudgkcs";
freezeTemplate(tmpl);
