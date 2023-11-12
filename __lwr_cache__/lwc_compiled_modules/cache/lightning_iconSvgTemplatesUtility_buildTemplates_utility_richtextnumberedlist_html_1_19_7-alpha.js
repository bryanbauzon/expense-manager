import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./richtextnumberedlist.css";

import _implicitScopedStylesheets from "./richtextnumberedlist.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 65v30c0 8-7 15-15 15H215c-8 0-15-7-15-15V65c0-8 7-15 15-15h270c8 0 15 7 15 15zM215 210h180c8 0 15-7 15-15v-30c0-8-7-15-15-15H215c-8 0-15 7-15 15v30c0 8 7 15 15 15zm270 90H215c-8 0-15 7-15 15v30c0 8 7 15 15 15h270c8 0 15-7 15-15v-30c0-8-7-15-15-15zm-90 100H215c-8 0-15 7-15 15v30c0 8 7 15 15 15h180c8 0 15-7 15-15v-30c0-8-7-15-15-15zM35 80h25v125c0 8 7 15 15 15h10c8 0 15-7 15-15V60a20 20 0 00-20-20H35c-8 0-15 7-15 15v10c0 8 7 15 15 15zm85 200H35c-8 0-15 7-15 15v10c0 8 7 15 15 15h65v40H40a20 20 0 00-20 20v80c0 11 9 20 20 20h85c8 0 15-7 15-15v-10c0-8-7-15-15-15H60v-40h60a20 20 0 0020-20v-80a20 20 0 00-20-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7atvbebebq";
freezeTemplate(tmpl);
