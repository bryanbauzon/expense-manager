import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom37.css";

import _implicitScopedStylesheets from "./new_custom37.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M485 305h-97v-88c20 17 46 28 75 28 13 0 22-10 22-22s-10-22-22-22c-41 0-75-37-75-82V95c8 0 15-7 15-15V65c0-8-7-15-15-15h-45c-8 0-15 7-15 15v15c0 8 7 15 15 15v22c0 46-37 82-82 82s-82-37-82-82V95c8 0 15-7 15-15V65c0-8-7-15-15-15h-45c-8 0-15 7-15 15v15c0 8 7 15 15 15v22c0 46-34 82-75 82-13 0-22 10-22 22s10 22 22 22c28 0 55-11 75-28v88H35c-8 2-15 9-15 17v36c0 8 7 17 15 17h30v81c0 8 7 16 15 16h45c8 0 15-8 15-16v-30c0-25 20-44 45-44h150c25 0 45 19 45 44v30c0 8 7 16 15 16h45c8 0 15-8 15-16v-81h30c8 0 15-8 15-17v-36c0-8-7-15-15-15zm-307-91c22 19 51 31 82 31s60-11 82-31v91H178z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7msuier249u";
freezeTemplate(tmpl);
