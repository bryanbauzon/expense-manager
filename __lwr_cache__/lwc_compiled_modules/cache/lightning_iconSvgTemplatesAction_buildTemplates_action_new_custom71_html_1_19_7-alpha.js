import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom71.css";

import _implicitScopedStylesheets from "./new_custom71.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M430 109A241 241 0 0020 280v74c0 26 22 47 48 47h32v38c0 20 15 38 36 41 24 2 44-16 44-39V301c0-20-15-38-36-41-24-2-44 16-44 39v55H84c-9 0-16-7-16-16v-58c0-104 84-190 186-193 53-2 102 17 139 53 38 36 58 84 58 135v63c0 9-7 16-16 16h-15v-53c0-20-15-38-36-41-24-2-44 16-44 39v140c0 20 15 38 36 41 24 2 44-16 44-39v-39h32c26 0 48-21 48-47v-75c0-63-24-125-70-171z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7fee6og86p1";
freezeTemplate(tmpl);
