import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./forward.css";

import _implicitScopedStylesheets from "./forward.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M34 290h332c9 0 13 11 7 17l-96 96c-6 6-6 15 0 21l22 22c6 6 15 6 21 0l175-176c6-6 6-15 0-21L320 74c-6-6-15-6-21 0l-21 21c-6 6-6 15 0 21l96 96c6 7 2 18-7 18H35c-8 0-15 6-15 14v30c0 8 6 16 14 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1fsftjeisjt";
freezeTemplate(tmpl);
