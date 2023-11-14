import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./record_create.css";

import _implicitScopedStylesheets from "./record_create.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M172 116h176c9 0 16-7 16-16V68c0-26-22-48-48-48H204a49 49 0 00-48 48v32c0 9 7 16 16 16zm264-56h-16c-5 0-8 3-8 8v32c0 35-29 64-64 64H172a64 64 0 01-64-64V68c0-5-3-8-8-8H84a49 49 0 00-48 48v344c0 26 22 48 48 48h352c26 0 48-22 48-48V108c0-26-22-48-48-48zm-59 282c0 4-4 8-8 8h-88c-3 0-5 2-5 5v88c0 4-4 8-8 8h-16a9 9 0 01-8-8v-88c0-3-2-5-5-5h-88a9 9 0 01-8-8v-16c0-4 4-8 8-8h88c3 0 5-2 5-5v-88c0-4 4-8 8-8h16c4 0 8 4 8 8v88c0 3 2 5 5 5h88c4 0 8 4 8 8v16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-30jolhgf2qh";
freezeTemplate(tmpl);
