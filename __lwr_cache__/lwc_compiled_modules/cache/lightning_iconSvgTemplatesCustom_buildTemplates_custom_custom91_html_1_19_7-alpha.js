import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom91.css";

import _implicitScopedStylesheets from "./custom91.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M778 326c-30-9-56-30-73-57-13-21-14-69-46-69H341c-33 0-33 48-46 69-21 33-48 41-80 60-33 19-2 99 5 127 31 111 90 214 182 287a462 462 0 0084 54c27 14 72-25 92-40 52-37 95-84 129-137 29-46 51-96 67-148 6-21 12-42 16-64 4-18 13-46 7-64-2-8-10-15-19-18-46-14 14 4 0 0zm-44 70a497 497 0 01-218 332l-16 10-16-10a486 486 0 01-218-332l-4-21 18-11c31-19 60-52 77-87l8-18h270l5 13c17 38 48 74 85 95l13 7v1zm-245-76c-23 0-79 0-90 10-19 17-30 42-50 59-21 18-11 36-4 60a462 462 0 00104 173c5 5 51 51 51 22V340c0-11 0-20-11-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5f4o59443gg";
freezeTemplate(tmpl);
