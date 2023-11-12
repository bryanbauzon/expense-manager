import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom59.css";

import _implicitScopedStylesheets from "./new_custom59.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M397 108c8 0 13-6 13-14 0-6-3-11-9-14-10-6-26-33-32-50-2-6-8-10-14-10H163c-6 0-13 4-14 10-5 16-21 44-31 50-5 3-8 8-8 14 0 8 6 14 13 14zM110 451c0 27 21 49 47 49h205c26 0 47-22 47-48v-1c0-9-7-15-15-15H124c-7 0-14 7-14 15zm300-79V172c0-9-7-16-16-16H126c-9 0-16 7-16 16v200c0 9 7 16 16 16h268c9 0 16-7 16-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2k6aj59rjaf";
freezeTemplate(tmpl);
