import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom75.css";

import _implicitScopedStylesheets from "./new_custom75.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 20c-14 0-24 10-24 24v432c0 14 10 24 24 24 132 0 240-108 240-240S392 20 260 20zm190 216h-63c-2-57-15-106-34-144 53 30 89 82 97 144zM284 442V284h55c-4 75-28 134-55 158zm0-206V78c27 23 51 82 55 158zm69 192c19-38 31-87 34-144h63c-8 62-44 114-97 144zM128 179c6 5 16 4 22-2l44-50c6-6 6-16-1-22l-44-44c-6-6-14-6-20-2l-9 6a239 239 0 000 390l9 6c6 4 14 3 20-2l44-44c6-6 6-16 1-22l-44-50c-6-6-15-7-22-2l-17 13a178 178 0 010-188z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-59g55ebhqi9";
freezeTemplate(tmpl);
