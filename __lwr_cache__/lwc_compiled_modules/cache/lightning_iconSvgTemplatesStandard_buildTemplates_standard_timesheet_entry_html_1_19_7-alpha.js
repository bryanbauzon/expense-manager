import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./timesheet_entry.css";

import _implicitScopedStylesheets from "./timesheet_entry.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M709 200H291c-43 0-78 35-78 78v443c0 43 35 78 78 78h417c43 0 78-35 78-78V278c1-43-34-78-77-78zm-26 470c0 14-12 26-26 26H343c-14 0-26-12-26-26v-26c0-14 12-26 26-26h313c14 0 26 12 26 26v26zM409 500l14-14c4-4 10-4 14 0l36 36 90-90c4-4 10-4 14 0l14 14c3 4 3 11 0 14L488 565c-4 4-9 6-14 6s-10-2-14-6l-50-50c-5-5-5-11-1-15zm274-143c0 14-12 26-26 26H343c-14 0-26-12-26-26v-27c0-14 12-26 26-26h313c14 0 26 12 26 26v27z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3hhf1v778dc";
freezeTemplate(tmpl);
