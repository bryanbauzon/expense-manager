import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tour_check.css";

import _implicitScopedStylesheets from "./tour_check.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M499 327a84.2 84.2 0 01-84 84H171a132 132 0 0010-28h234a56 56.1 0 000-112.1H134a84.2 84.2 0 010-168h171a46 46 0 00-5 21 36 36 0 001 7H134a56 56 0 000 112h281a83 83 0 0133 7 81 81 0 0130 22 84 84 0 0121 56zM478 51a9 9 0 00-6 3l-72 81a3 3 0 01-2 1 3 3 0 01-2-1l-31-30a9 9 0 00-13 0l-12 12a9 9 0 000 13l49 48a14 14 0 0021-1l88-99a9 9 0 000-12l-14-12a9 9 0 00-6-3zM91 290a71 71 0 00-71 71c0 49 50 94 66 106a7 7 0 009 0c16-12 66-57 66-106a71 71 0 00-70-71zm0 100a30 30 0 1130-30 30 30 0 01-30 30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-jo53rdp8hr";
freezeTemplate(tmpl);
