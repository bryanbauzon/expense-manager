import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./practitioner_role.css";

import _implicitScopedStylesheets from "./practitioner_role.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M506 709a128 128 0 01-101-96 19 19 0 00-19-15h-19a19 19 0 00-19 22 182 182 0 00178 147h4a171 171 0 01-24-58zm36-338V230a28 28 0 00-28-28h-38a28 28 0 100 56h10v113a113 113 0 01-227 0V258h10a28 28 0 100-57h-38a28 28 0 00-28 29v141a170 170 0 00340 0zm131 175a126 126 0 10126 126 127 127 0 00-126-126zm71 176a19 19 0 01-19 19H624a18 18 0 01-19-18v-3c0-17 19-26 38-34 13-5 15-10 15-16a21 21 0 00-8-14 35 35 0 01-12-28 37 37 0 1174 0 37 37 0 01-12 28 22 22 0 00-9 14c0 6 2 10 15 16 20 8 38 17 38 34z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5c0bub57ree";
freezeTemplate(tmpl);
