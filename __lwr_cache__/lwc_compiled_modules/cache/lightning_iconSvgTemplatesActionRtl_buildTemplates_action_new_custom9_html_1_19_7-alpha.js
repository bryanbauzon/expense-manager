import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom9.css";

import _implicitScopedStylesheets from "./new_custom9.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M495 173C472 78 372 20 262 20 128 20 20 127 20 260s108 240 242 240c186 0 171-94 112-131-35-22-54-73-19-109 65-67 170 40 140-87zM130 340c-28 0-50-22-50-50s22-50 50-50 50 22 50 50-22 50-50 50zm10-190c0-28 22-50 50-50s50 22 50 50-22 50-50 50-50-22-50-50zm110 290c-28 0-50-22-50-50s22-50 50-50 50 22 50 50-22 50-50 50zm90-260c-28 0-50-22-50-50s22-50 50-50 50 22 50 50-22 50-50 50z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3j24j563ck1";
freezeTemplate(tmpl);
