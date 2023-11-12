import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./turn_off_notifications.css";

import _implicitScopedStylesheets from "./turn_off_notifications.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M234 266c6 6 14 6 20 0L468 69c4-7 3-19-12-19H34c-11 0-20 11-12 20zm67 110a120 120 0 01107-108l14-1c18 0 34 4 49 10V153c0-10-12-15-19-8L286 299c-11 10-26 16-41 16s-30-6-41-16L38 145c-8-7-19-2-19 8v196c0 25 21 46 46 46h237zm120-66c-44 0-80 36-80 80s36 80 80 80 80-36 80-80-36-80-80-80zm60 96c0 2-2 4-5 4H366c-3 0-5-2-5-4v-32c0-2 2-4 5-4h110c3 0 5 2 5 4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-707hefo8e5o";
freezeTemplate(tmpl);
