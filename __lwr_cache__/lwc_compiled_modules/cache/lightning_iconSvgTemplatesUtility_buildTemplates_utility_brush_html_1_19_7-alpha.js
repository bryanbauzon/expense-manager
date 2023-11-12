import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./brush.css";

import _implicitScopedStylesheets from "./brush.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M494 27c-34-35-224 73-340 259-5 9-2 20 7 24 26 12 47 34 58 61 4 10 15 13 24 7C423 259 528 62 494 27zM119 352c-15 0-29 8-39 18h-1c-5 0-10 8-14 15-16 27-19 59-43 94-4 6-3 15 4 17 34 11 95 1 125-21v1c10-2 7-6 10-6 11-20 20-30 20-49-1-37-27-69-62-69z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7h507atp5du";
freezeTemplate(tmpl);
