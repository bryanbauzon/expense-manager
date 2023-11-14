import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./log_a_call.css";

import _implicitScopedStylesheets from "./log_a_call.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M430 20H135a50 50 0 00-48 48v16H71c-17 0-31 14-31 32s14 32 31 32h16v80H71c-17 0-31 14-31 32s14 32 31 32h16v80H71a31 31 0 00-31 32c0 18 14 32 31 32h16v16a50 50 0 0048 48h295c26 0 50-24 50-50V66c0-27-24-46-50-46zm-28 322l-22 23c-5 5-12 8-18 7a210 210 0 01-196-200c0-7 2-14 7-18l22-22c10-10 27-10 36 2l20 26c7 9 7 21 1 30l-17 25c-2 3-2 8 1 10l36 41 40 37c3 3 7 3 10 1l24-18c9-6 21-6 30 1l25 21c11 6 11 24 1 34z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6u95tkqt0gi";
freezeTemplate(tmpl);
