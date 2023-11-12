import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lightning_inspector.css";

import _implicitScopedStylesheets from "./lightning_inspector.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M409 236h-5v-8c0-50-41-91-91-91-24 0-45 9-61 24a91.5 91.5 0 00-85-59 91.3 91.3 0 00-79 137c-40 10-69 45-69 88 0 49 38 88 87 90h302c50 0 91-41 91-91s-40-90-90-90zm-246 8l78-37c3-2 8-2 11 0l78 37c5 2 5 8 0 11l-78 37c-3 2-8 2-11 0l-78-37c-4-2-4-9 0-11zm168 92l-78 37c-3 2-8 2-11 0l-78-37c-5-2-5-8 0-11l10-5c1-1 3-1 5 0l63 30c3 2 8 2 11 0l62-30c1-1 3-1 5 0l10 5c5 2 5 9 1 11zm0-40l-78 37c-3 2-8 2-11 0l-78-37c-5-2-5-8 0-11l11-5c1-1 3-1 5 0l62 30c3 2 8 2 11 0l62-30c1-1 3-1 5 0l11 5c4 2 4 8 0 11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2pgj72i43qc";
freezeTemplate(tmpl);
