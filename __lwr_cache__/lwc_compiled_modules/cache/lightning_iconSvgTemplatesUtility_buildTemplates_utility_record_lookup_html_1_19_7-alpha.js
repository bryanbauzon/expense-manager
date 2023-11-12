import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./record_lookup.css";

import _implicitScopedStylesheets from "./record_lookup.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M172 116h176c9 0 16-7 16-16V68c0-26-22-48-48-48H204a49 49 0 00-48 48v32c0 9 7 16 16 16zm264-56h-16c-5 0-8 3-8 8v32c0 35-29 64-64 64H172a64 64 0 01-64-64V68c0-5-3-8-8-8H84a49 49 0 00-48 48v344c0 26 22 48 48 48h352c26 0 48-22 48-48V108c0-26-22-48-48-48zm-61 381l-10 10c-3 3-7 3-10 0l-65-65a93 93 0 01-146-67 92 92 0 01101-101 92 92 0 0167 146l65 65c1 4 1 8-2 12zM235 248a63 63 0 00-63 63c0 35 28 63 63 63s63-28 63-63-28-63-63-63z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-45alt3pr0cu";
freezeTemplate(tmpl);
