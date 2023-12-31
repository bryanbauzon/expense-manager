import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./update_status.css";

import _implicitScopedStylesheets from "./update_status.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M295 279l-22-22c-6-6-16-6-22 0L128 381c-4 4-11 4-15 0l-44-45c-6-6-16-6-22 0l-22 22c-6 6-6 16 0 22l85 86c6 6 16 6 22 0l163-164c7-7 7-17 0-23zM470 52H170c-17 0-30 13-30 30v230l82-83c10-10 24-16 39-16l9-1h140c6 0 10 4 10 10v20c0 6-4 10-10 10h-86c10 10 15 23 16 36 1 16-6 31-17 42l-2 2h149c17 0 30-13 30-30V82c0-17-13-30-30-30zm-50 110c0 6-4 10-10 10H230c-6 0-10-4-10-10v-20c0-6 4-10 10-10h180c6 0 10 4 10 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-174anbvabfg";
freezeTemplate(tmpl);
