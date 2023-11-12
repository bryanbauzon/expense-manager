import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./type.css";

import _implicitScopedStylesheets from "./type.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M480 110H40a20 20 0 00-20 20v260c0 11 9 20 20 20h440a20 20 0 0020-20V130a20 20 0 00-20-20zm-20 260H60V150h400v220zM112 218h10c8 0 15-7 15-15v-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15zm57 0h10c8 0 15-7 15-15v-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15zm115 0h10c8 0 15-7 15-15v-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15zm-58 0h10c8 0 15-7 15-15v-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15zm173 0h10c8 0 15-7 15-15v-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15zm-58 0h10c8 0 15-7 15-15v-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15zm-229 60h10c8 0 15-7 15-15v-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15zm57 0h10c8 0 15-7 15-15v-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15zm115 0h10c8 0 15-7 15-15v-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15zm-58 0h10c8 0 15-7 15-15v-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15zm173 0h10c8 0 15-7 15-15v-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15zm-58 0h10c8 0 15-7 15-15v-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15zm-229 60h10c8 0 15-7 15-15v-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15zm57 0h182c8 0 15-7 15-15v-10c0-8-7-15-15-15H169c-8 0-15 7-15 15v10c0 8 7 15 15 15zm230 0h10c8 0 15-7 15-15v-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3arlbni6be4";
freezeTemplate(tmpl);
