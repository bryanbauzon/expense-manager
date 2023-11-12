import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./multi_picklist.css";

import _implicitScopedStylesheets from "./multi_picklist.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M444 20H188a49 49 0 00-48 48v8c0 5 3 8 8 8h232c26 0 48 22 48 48v248c0 5 3 8 8 8h8c26 0 48-22 48-48V68c0-26-22-48-48-48zM332 132H76a49 49 0 00-48 48v272c0 26 22 48 48 48h256c26 0 48-22 48-48V180c0-26-22-48-48-48zM140 420c0 9-7 16-16 16h-16c-9 0-16-7-16-16v-16c0-9 7-16 16-16h16c9 0 16 7 16 16zm0-96c0 9-7 16-16 16h-16c-9 0-16-7-16-16v-16c0-9 7-16 16-16h16c9 0 16 7 16 16zm0-96c0 9-7 16-16 16h-16c-9 0-16-7-16-16v-16c0-9 7-16 16-16h16c9 0 16 7 16 16zm176 192c0 9-7 16-16 16H189c-9 0-16-7-16-16v-16c0-9 7-16 16-16h111c9 0 16 7 16 16zm0-96c0 9-7 16-16 16H189c-9 0-16-7-16-16v-16c0-9 7-16 16-16h111c9 0 16 7 16 16zm0-96c0 9-7 16-16 16H189c-9 0-16-7-16-16v-16c0-9 7-16 16-16h111c9 0 16 7 16 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-77ld30jui8m";
freezeTemplate(tmpl);
