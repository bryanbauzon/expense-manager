import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./resource_absence.css";

import _implicitScopedStylesheets from "./resource_absence.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M219 370c0-27 9-58 23-82 17-30 36-42 51-64 25-37 30-90 14-130-16-41-54-65-98-64s-80 28-94 69c-16 45-9 99 27 133 15 14 29 36 21 57-7 20-31 29-48 37-39 17-86 41-94 87-8 38 18 77 59 77h170c8 0 13-10 8-16a160 160 0 01-39-104zm245-85a120 120 0 10-170 170 120 120 0 00170-170zm-35 106a10 10 0 01-1 15l-14 14c-4 4-9 4-13-1l-21-21-22 22c-4 4-9 4-13-1l-15-14c-4-4-5-9-1-13l22-22-21-22c-4-4-5-9-1-13l14-14c4-4 11-5 15-1l21 21 21-21c4-4 11-5 15-1l14 14a10 10 0 01-1 15l-21 21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-nfefj1kiqj";
freezeTemplate(tmpl);
