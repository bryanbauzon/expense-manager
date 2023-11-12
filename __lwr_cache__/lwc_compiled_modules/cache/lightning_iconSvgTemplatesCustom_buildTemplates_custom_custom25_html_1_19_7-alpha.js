import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom25.css";

import _implicitScopedStylesheets from "./custom25.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M798 273a90 90 0 00-147-52c-6 5-5 13 2 17 46 24 85 59 115 101 4 6 13 6 17 0 13-19 18-42 13-66zm-452-35c6-3 7-12 2-17a90 90 0 00-147 52c-4 24 1 47 13 65 4 6 13 6 17 0 30-41 69-76 115-100zm154 22a270 270 0 00-217 430l-41 41a40 40 0 000 57c8 8 18 12 28 12s20-4 28-12l41-41a272 272 0 00321 0l41 41c9 8 19 12 29 12s20-4 28-12c16-16 16-41 0-57l-41-41a270 270 0 00-217-430zM310 530a190 190 0 11380 0 190 190 0 01-380 0zm220-12v-78c0-17-13-30-30-30s-30 13-30 30v90c0 8 3 16 9 21l70 70c6 6 14 9 21 9s15-3 21-9c12-12 12-31 0-42z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3aeq5vb1p43";
freezeTemplate(tmpl);
