import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./answer.css";

import _implicitScopedStylesheets from "./answer.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 40C127 40 20 138 20 260c0 39 11 75 30 108 2 4 3 9 2 13l-22 69c-4 13 8 24 21 20l70-24c5-2 10-1 14 2 37 21 80 33 126 33 133 0 240-98 240-220-2-123-109-221-241-221zm115 171L253 331c-5 5-10 7-17 7-6 0-12-2-17-7l-59-58c-5-5-5-12 0-16l17-16c5-5 12-5 17 0l42 42 105-104c5-5 12-5 17 0l17 16c4 4 4 12 0 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-74ivju9efgq";
freezeTemplate(tmpl);
