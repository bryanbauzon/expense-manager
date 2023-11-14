import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./wifi.css";

import _implicitScopedStylesheets from "./wifi.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M477 158c-55-61-133-95-216-95S100 97 45 158c-4 4-3 11 1 14l30 26c4 4 10 3 14-1a234 234 0 01342 0c4 4 10 4 14 1l30-26c4-4 5-10 1-14zm-216 45c-42 0-82 18-110 50-4 4-3 11 1 15l32 24c4 3 10 3 13-1a87 87 0 01127-1c3 4 9 4 13 1l32-24c5-4 5-10 1-15a145 145 0 00-109-49zm1 139c27 0 50 22 50 50s-22 50-50 50-50-22-50-50 23-50 50-50z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5h50rg2bfvb";
freezeTemplate(tmpl);
