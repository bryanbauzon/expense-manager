import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lower_flag.css";

import _implicitScopedStylesheets from "./lower_flag.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M66 20H36c-8 0-15 7-15 15v450c0 8 7 15 15 15h30c8 0 15-7 15-15V35c0-8-7-15-15-15zm340 226c27 0 52 7 75 19V66c0-7-8-12-15-8-160 84-142-88-335-21-6 2-10 8-10 14v233c0 7 7 12 13 9 77-26 119-13 154 6 29-33 71-53 118-53zm-88 100l60 60-60 60c-6 6-6 16 0 21l7 7c6 6 16 6 21 0l60-60 60 60c6 6 16 6 21 0l7-7c6-6 6-16 0-21l-60-60 60-60c6-6 6-16 0-21l-7-7c-6-6-16-6-21 0l-60 60-60-60c-6-6-16-6-21 0l-7 7c-6 5-6 15 0 21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2h9c9r0tvj4";
freezeTemplate(tmpl);
