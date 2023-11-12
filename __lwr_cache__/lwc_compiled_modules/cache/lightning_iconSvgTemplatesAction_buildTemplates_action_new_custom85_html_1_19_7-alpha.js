import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom85.css";

import _implicitScopedStylesheets from "./new_custom85.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M484 52H84V36c0-9-7-16-16-16H36c-9 0-16 7-16 16v448c0 9 7 16 16 16h32c9 0 16-7 16-16V116h400c9 0 16-7 16-16V68c0-9-7-16-16-16zm-32 112H180c-26 0-48 22-48 48v176c0 26 22 48 48 48h272c26 0 48-22 48-48V212c0-26-22-48-48-48zm-44 136h-20v80c0 5-3 8-8 8h-32c-5 0-8-3-8-8v-48c0-5-3-8-8-8h-32c-5 0-8 3-8 8v48c0 5-3 8-8 8h-32c-5 0-8-3-8-8v-80h-20c-4 0-6-5-2-7l90-87c3-2 7-2 10 0l90 87c2 2 0 7-4 7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1omdgo10j29";
freezeTemplate(tmpl);
