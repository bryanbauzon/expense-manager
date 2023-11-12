import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./record_delete.css";

import _implicitScopedStylesheets from "./record_delete.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M172 116h176c9 0 16-7 16-16V68c0-26-22-48-48-48H204a49 49 0 00-48 48v32c0 9 7 16 16 16zm264-56h-16c-5 0-8 3-8 8v32c0 35-29 64-64 64H172a64 64 0 01-64-64V68c0-5-3-8-8-8H84a49 49 0 00-48 48v344c0 26 22 48 48 48h352c26 0 48-22 48-48V108c0-26-22-48-48-48zm-93 364c0 14-11 24-24 24H201a24 24 0 01-24-24V321c0-4 3-7 7-7h152c4 0 7 3 7 7v103zm20-149c0 4-3 7-7 7H165a7 7 0 01-7-7v-15c0-4 3-7 7-7h61v-20c0-11 9-20 20-20h29a20 20 0 0120 20v20h61c4 0 7 3 7 7v15zm-123 73h-10c-3 0-5 2-5 5v57c0 3 2 5 5 5h10c3 0 5-2 5-5v-57c0-3-2-5-5-5zm49 0h-10c-3 0-5 2-5 5v57c0 3 2 5 5 5h10c3 0 5-2 5-5v-57c0-3-2-5-5-5zm-19-114h-20c-3 0-5 2-5 5v15h29v-15c1-3-1-5-4-5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2iq2gdad5pi";
freezeTemplate(tmpl);
