import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom20.css";

import _implicitScopedStylesheets from "./custom20.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M380 477c0-8-10-13-16-8L224 577a60 60 0 00-24 48v41c0 7 7 12 13 9l154-58c8-3 13-10 13-19zm221 280l-41-27V276c0-27-29-57-48-72-7-6-18-6-25 0-18 15-48 45-48 72v454l-46 30c-8 6-14 15-14 25v6c0 5 4 9 9 9h221c5 0 11-4 11-9 0-14-8-26-19-34zm175-180L636 469c-7-5-16 0-16 8v122c0 8 5 16 13 19l154 58c7 2 13-2 13-9v-41c0-20-9-38-24-49z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6hspgvqvion";
freezeTemplate(tmpl);
