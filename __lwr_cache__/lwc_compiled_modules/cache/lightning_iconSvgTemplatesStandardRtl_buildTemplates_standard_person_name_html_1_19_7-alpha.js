import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./person_name.css";

import _implicitScopedStylesheets from "./person_name.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M717 200H282c-46 0-83 36-82 78v444a70 70 0 003 22 412 412 0 0177-39c44-18 49-34 49-51s-13-34-27-48a122 122 0 01-39-90c0-68 44-126 120-126s120 59 120 126a113 113 0 01-38 90c-14 13-27 30-27 48s6 33 49 51c56 23 110 50 121 95h110a81 81 0 0082-78V278a81 81 0 00-83-78zm-7 259a20 20 0 01-20 20H540a20 20 0 01-20-20v-30a20 20 0 0120-20h150a20 20 0 0120 20zm50-130a20 20 0 01-20 20H540a20 20 0 01-20-20v-30a20 20 0 0120-20h200a20 20 0 0120 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3ebfonambm2";
freezeTemplate(tmpl);
