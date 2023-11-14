import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./richtextindent.css";

import _implicitScopedStylesheets from "./richtextindent.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M0 145c0 8 7 15 15 15h170c8 0 15-7 15-15v-30c0-8-7-15-15-15H15c-8 0-15 7-15 15zm40 240c0 8 7 15 15 15h130c8 0 15-7 15-15v-30c0-8-7-15-15-15H55c-8 0-15 7-15 15zM0 265c0 8 7 15 15 15h170c8 0 15-7 15-15v-30c0-8-7-15-15-15H15c-8 0-15 7-15 15zm240 200c0 8 7 15 15 15h30c8 0 15-7 15-15V55c0-8-7-15-15-15h-30c-8 0-15 7-15 15zm103-221c-3 4-3 10 0 14l83 90c5 6 14 1 14-9v-59h65c8 0 15-7 15-15v-30c0-8-7-15-15-15h-65v-58c0-10-8-15-14-9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-74sp8bkti44";
freezeTemplate(tmpl);
