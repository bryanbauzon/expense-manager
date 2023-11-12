import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom84.css";

import _implicitScopedStylesheets from "./custom84.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M750 640H250c-17 0-30 13-30 30s13 30 30 30h40l17 85c2 9 10 15 19 15h329c9 0 17-6 19-15l16-85h60c17 0 30-13 30-30s-13-30-30-30zm-420-60h140v-56c-12-7-20-20-20-34 0-22 18-40 40-40s40 18 40 40c0 15-8 28-20 34v56h140c11 0 20-9 20-20v-30c0-61-58-82-104-101-31-13-36-25-36-37 0-13 9-25 19-34 18-16 29-39 29-66 0-49-32-92-88-92s-88 43-88 92c0 27 10 49 29 66 10 9 19 21 19 34s-5 24-36 37c-46 19-104 43-104 101v30c0 11 9 20 20 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5p1r79vf36d";
freezeTemplate(tmpl);
