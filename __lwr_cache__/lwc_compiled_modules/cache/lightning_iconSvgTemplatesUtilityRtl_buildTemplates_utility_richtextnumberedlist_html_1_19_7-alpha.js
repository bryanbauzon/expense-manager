import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./richtextnumberedlist.css";

import _implicitScopedStylesheets from "./richtextnumberedlist.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M35 50h270c8 0 15 7 15 15v30c0 8-7 15-15 15H35c-8 0-15-7-15-15V65c0-8 7-15 15-15zm285 145v-30c0-8-7-15-15-15H125c-8 0-15 7-15 15v30c0 8 7 15 15 15h180c8 0 15-7 15-15zM20 315v30c0 8 7 15 15 15h270c8 0 15-7 15-15v-30c0-8-7-15-15-15H35c-8 0-15 7-15 15zm90 100v30c0 8 7 15 15 15h180c8 0 15-7 15-15v-30c0-8-7-15-15-15H125c-8 0-15 7-15 15zM500 65V55c0-8-7-15-15-15h-45a20 20 0 00-20 20v145c0 8 7 15 15 15h10c8 0 15-7 15-15V80h25c8 0 15-7 15-15zM380 300v80c0 11 9 20 20 20h60v40h-65c-8 0-15 7-15 15v10c0 8 7 15 15 15h85a20 20 0 0020-20v-80a20 20 0 00-20-20h-60v-40h65c8 0 15-7 15-15v-10c0-8-7-15-15-15h-85a20 20 0 00-20 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4nvh4r8jihq";
freezeTemplate(tmpl);
