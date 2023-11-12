import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom5.css";

import _implicitScopedStylesheets from "./custom5.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M788 255a497 497 0 00-325-14c-93 31-188 100-202 204a207 207 0 0013 99l7 16-12 18c-29 45-49 96-61 148-5 22-17 54 6 70 9 6 22 6 31 1 12-7 14-19 16-32 9-53 27-106 56-151 14-22 29-44 46-64 15-16 37-47 62-38s24 38 7 53-31 31-31 55c0 18 8 36 23 48 20 16 60 20 84 18 53-3 96-19 139-50 56-39 78-107 89-172 7-40 12-80 26-118 6-16 14-32 23-46 4-7 12-15 14-23 3-10-3-19-11-22z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-pf7uq01k2n";
freezeTemplate(tmpl);
