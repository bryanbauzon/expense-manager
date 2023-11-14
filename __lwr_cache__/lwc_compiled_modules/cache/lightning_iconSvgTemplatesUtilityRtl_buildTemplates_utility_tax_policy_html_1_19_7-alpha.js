import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tax_policy.css";

import _implicitScopedStylesheets from "./tax_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M433 304c0 8-5 13-10 19-2 4-5 7-6 11-2 4-3 10-3 14-1 8-2 15-7 20s-12 5-19 6c-5 0-10 1-14 3l-10 6c-7 5-13 10-20 10-6 0-12-5-17-10l-12-6c-4-2-10-3-14-3-8-1-15-2-20-7s-5-12-6-19c0-5-1-10-3-14l-6-10c-5-7-10-13-10-20 0-6 5-12 10-17l6-12c2-4 3-10 3-14 2-8 2-15 7-20s12-5 19-6c5 0 10-1 14-3l10-7c7-4 13-9 20-9 6 0 12 5 17 9 4 3 8 6 12 7l14 3c8 1 15 2 20 7s5 12 6 19c0 5 1 10 3 14 1 4 4 9 7 13 5 5 9 10 9 17zm-124 0c0-17 15-32 33-32s33 15 33 33-15 32-33 32-33-15-33-33zm108 90c-7 5-14 6-20 8l-7 1-7 1-6 3-5 4a58 58 0 01-15 10l55 77 14-38h37l-46-65zm-90 25l-55 79-14-38h-37l48-64c7 4 14 5 20 7l6 1 7 1 5 3a71 71 0 0020 11zm15-176c35 0 62 28 62 62s-27 61-62 61-61-26-61-61 27-62 61-62zM214 22l128 70c3 3 5 6 5 10v10c0 5-5 10-10 10H67a10 10 0 01-10-10v-10c0-4 2-8 5-10l128-70c4-3 8-4 12-4s8 1 12 4zm-38 53c0 14 11 26 26 26s26-11 26-26-11-26-26-26-26 11-26 26zm134 88v60l-13 2c-6 0-12 1-17 4v-66c0-6 4-10 10-10h10c6 0 10 4 10 10zm-62 114h12l-6 10c-5 6-10 13-10 20s5 15 10 22H67a10 10 0 01-10-10v-10c0-18 14-32 30-32h6V163c0-6 4-10 10-10h10c6 0 11 4 11 10v114h31V163c0-6 5-10 10-10h11c6 0 10 4 10 10v114h31V163c0-6 5-10 10-10h11c6 0 10 4 10 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3tm0dgf4rnp";
freezeTemplate(tmpl);
