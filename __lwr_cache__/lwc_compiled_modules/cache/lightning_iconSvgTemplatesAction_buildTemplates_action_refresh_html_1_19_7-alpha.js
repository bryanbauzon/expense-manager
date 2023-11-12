import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./refresh.css";

import _implicitScopedStylesheets from "./refresh.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M465 40h-30c-8 0-15 7-15 15v70c0 9-5 13-12 7-3-4-6-7-10-10-50-50-120-71-192-57-25 5-49 15-70 29-61 40-96 105-97 175-1 54 20 108 58 147 40 42 94 65 152 65 51 0 99-18 137-50 7-6 7-16 1-22l-21-21c-5-5-14-6-20-1-36 30-85 42-134 30-13-3-26-9-38-16-57-35-84-101-68-167 3-13 9-26 16-38 28-49 77-76 129-76 40 0 78 16 106 44 5 4 9 9 12 14 3 8-4 12-13 12h-70c-8 0-15 7-15 15v31c0 8 6 14 14 14h183c7 0 13-6 13-13V55c-1-8-8-15-16-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-65f9ed8olem";
freezeTemplate(tmpl);
