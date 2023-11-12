import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom5.css";

import _implicitScopedStylesheets from "./new_custom5.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M491 58c-82-31-177-38-261-11-74 24-150 79-161 161-2 17-2 36 2 52l8 26c2 5 3 9 6 13l-10 14c-23 36-39 77-49 118-4 17-14 43 5 55 7 5 18 5 25 1 10-6 11-15 13-25 7-42 22-84 45-120 11-17 23-35 37-51 12-13 30-37 50-30s19 30 6 42-25 25-25 44c0 14 6 29 18 38 16 13 48 16 67 14 42-2 77-15 111-40 45-31 62-85 71-136 6-32 10-63 21-93 5-13 11-25 18-36 3-6 10-12 11-18 3-9-2-16-8-18z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-74vcoq8m3ll";
freezeTemplate(tmpl);
