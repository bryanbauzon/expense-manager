import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./record_update.css";

import _implicitScopedStylesheets from "./record_update.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M172 116h176c9 0 16-7 16-16V68c0-26-22-48-48-48H204a49 49 0 00-48 48v32c0 9 7 16 16 16zm264-56h-16c-5 0-8 3-8 8v32c0 35-29 64-64 64H172a64 64 0 01-64-64V68c0-5-3-8-8-8H84a49 49 0 00-48 48v344c0 26 22 48 48 48h352c26 0 48-22 48-48V108c0-26-22-48-48-48zm-96 244L212 432l-56 16c-5 1-10-4-9-9l16-55 128-128c2-2 5-2 7 0l41 42c3 1 3 4 1 6zm37-37l-16 16c-2 2-5 2-7 0l-42-42a5 5 0 010-7l16-16c7-8 20-8 27 0l21 21c9 8 9 20 1 28z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5288k0vt97p";
freezeTemplate(tmpl);
