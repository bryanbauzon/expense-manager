import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./employee_contact.css";

import _implicitScopedStylesheets from "./employee_contact.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M738 297H263a60 60 0 00-60 60v286a60 60 0 0060 60h474a60 60 0 0060-60V357a61 61 0 00-59-60zm-349 54a76 76 0 11-76 76 77 77 0 0176-76zm98 283H292c-17 0-20-11-20-16a115 115 0 01114-99h4a115 115 0 01114 99c3 5 0 16-17 16zm231-69a20 20 0 01-20 20h-88a20 20 0 01-20-20v-30a20 20 0 0120-20h88a20 20 0 0120 20zm0-110a20 20 0 01-20 20H550a20 20 0 01-20-20v-30a20 20 0 0120-20h148a20 20 0 0120 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3nsd3c8ecr3";
freezeTemplate(tmpl);
