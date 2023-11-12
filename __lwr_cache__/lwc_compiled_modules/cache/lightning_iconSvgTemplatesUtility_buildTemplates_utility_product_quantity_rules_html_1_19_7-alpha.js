import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_quantity_rules.css";

import _implicitScopedStylesheets from "./product_quantity_rules.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M215 326H54a13 13 0 00-13 13v13a13 13 0 0013 13h161a13 13 0 0012-13v-13a13 13 0 00-12-13zm0 91H54a13 13 0 00-13 13v13a13 13 0 0013 13h161a13 13 0 0012-13v-13a13 13 0 00-12-13zm252-91H306a13 13 0 00-13 13v13a13 13 0 0013 13h160a13 13 0 0013-13v-13a13 13 0 00-13-13zm0 91H306a13 13 0 00-13 13v13a13 13 0 0013 13h160a13 13 0 0013-13v-13a13 13 0 00-12-13zM386 65a102 102 0 10102 102A102 102 0 00386 65zm50 109a6 6 0 01-6 6h-88a6 6 0 01-6-5 87 87 0 010-15 7 7 0 016-5h88a6 6 0 016 5 92 92 0 010 14zM206 95a102 102 0 100 144 102 102 0 000-144zm-4 80a4 4 0 01-4 4h-47a5 5 0 00-4 5v46a4 4 0 01-4 4h-17a4 4 0 01-5-4v-46a4 4 0 00-3-5H70a4 4 0 01-4-3v-18a5 5 0 014-4h47a4 4 0 004-4v-47a5 5 0 014-4h17a4 4 0 014 4v47a4 4 0 004 4h47a5 5 0 015 4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1unglbh78r7";
freezeTemplate(tmpl);
