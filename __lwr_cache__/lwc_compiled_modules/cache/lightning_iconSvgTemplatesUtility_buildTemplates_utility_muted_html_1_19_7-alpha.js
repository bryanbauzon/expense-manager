import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./muted.css";

import _implicitScopedStylesheets from "./muted.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M485 56l-21-21c-6-6-17-5-24 3L340 138V99c0-44-35-79-79-79h-2a79 79 0 00-79 79v145c0 15 4 30 12 42l-35 35a122 122 0 01-27-77v-40c0-14-11-24-25-24s-25 10-25 24v40a170 170 0 0042 112l-84 84c-7 7-8 18-3 24l21 21c6 6 17 5 24-3L482 80c8-7 9-18 3-24zm-95 176v12a130 130 0 01-130 128h-9l-39 41 28 6v31h-45c-14 0-25 11-25 25s11 25 25 25h131c14 0 25-11 25-25s-12-25-26-25h-45v-32a180 180 0 00160-174v-40c0-6-3-12-6-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-22n9v5j6u7o";
freezeTemplate(tmpl);
