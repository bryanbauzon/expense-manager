import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./expired.css";

import _implicitScopedStylesheets from "./expired.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M227 48A208 208 0 0020 255a208 208 0 00245 204 139 139 0 01-14-50A156 156 0 0172 255c0-85 70-155 155-155s155 70 155 155h8c16 0 30 2 44 7v-7c0-113-93-207-207-207zm36 289c7-16 17-31 30-43l-37-37c-2-3-3-6-3-10v-82c0-7-6-13-13-13h-26c-7 0-13 6-13 13v104c0 4 2 7 4 10zm138-45l96 156c7 10 0 24-10 24H293c-10 0-16-14-10-24l96-156a12 12 0 0122 0zm-24 133c1 7 6 13 13 13s13-6 13-13-6-13-13-13-13 6-13 13zm22-21a4 4 0 004-4v-55a4 4 0 00-4-4h-17a4 4 0 00-4 4v55a4 4 0 004 4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-nd069cvi1o";
freezeTemplate(tmpl);
