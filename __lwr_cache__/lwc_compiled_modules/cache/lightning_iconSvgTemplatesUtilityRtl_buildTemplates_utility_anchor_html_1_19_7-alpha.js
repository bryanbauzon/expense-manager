import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./anchor.css";

import _implicitScopedStylesheets from "./anchor.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M480 357l-24-102c-3-11-17-15-25-8l-77 71c-9 8-5 22 6 25l33 10-10 20c-18 30-47 49-93 55V178a73 73 0 0044-67c0-40-33-73-73-73a73 73 0 00-73 73c0 30 18 55 44 67v250c-46-6-75-25-93-55l-10-20 33-10c11-3 14-18 6-25l-78-70c-9-8-22-4-25 8L40 357c-3 11 8 21 19 18l26-8c4 11 8 21 14 31 29 49 82 78 160 78s130-29 160-78c6-10 11-21 14-31l26 8c13 3 23-7 21-18zM260 142a29 29 0 110-58 29 29 0 010 58z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7p1vp4se4sp";
freezeTemplate(tmpl);
