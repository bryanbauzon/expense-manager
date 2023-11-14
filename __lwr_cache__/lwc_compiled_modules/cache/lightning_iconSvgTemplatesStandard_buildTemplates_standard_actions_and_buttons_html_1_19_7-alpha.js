import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./actions_and_buttons.css";

import _implicitScopedStylesheets from "./actions_and_buttons.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M483 745c10 0 18-8 18-18l1-208c1-10-8-18-16-19H274c-10-1-18 8-19 16v41c-1 10 8 18 16 19h69c7 0 13 6 13 13 0 3-1 7-3 9L210 738c-8 8-8 21-1 28l27 27c8 7 20 6 28-1l141-141c5-5 13-5 18 0 2 2 4 5 3 9v66c-1 10 8 18 16 19zm74 32a290 290 0 10-254-490c-44 44-70 98-80 155h59c9-42 30-81 62-114 90-90 238-90 328 0a233 233 0 01-113 390zm3-119a174 174 0 10-218-217h62c5-12 13-22 22-32 45-45 119-45 164 0a116 116 0 01-30 186z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3poh7drhvmq";
freezeTemplate(tmpl);
