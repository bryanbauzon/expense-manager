import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./keyboard_dismiss.css";

import _implicitScopedStylesheets from "./keyboard_dismiss.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M480 340a20 20 0 0020-20V60a20 20 0 00-20-20H40a20 20 0 00-20 20v260c0 12 9 20 20 20zM60 300V80h400v220zm77-166c0 8-7 15-15 15h-10c-8 0-15-7-15-15v-10c0-8 7-15 15-15h10c8 0 15 7 15 15zm57-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15h10c8 0 15-7 15-15zm115 10c0 8-7 15-15 15h-10c-8 0-15-7-15-15v-10c0-8 7-15 15-15h10c8 0 15 7 15 15zm-58 0c0 8-7 15-15 15h-10c-8 0-15-7-15-15v-10c0-8 7-15 15-15h10c8 0 15 7 15 15zm173-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15h10c8 0 15-7 15-15zm-58 0c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15h10c8 0 15-7 15-15zm-230 70c0 8-6 15-14 15h-10c-8 0-15-7-15-15v-10c0-8 7-15 15-15h10c8 0 15 7 15 15zm58-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15h10c8 0 15-7 15-15zm115 10c0 8-7 15-15 15h-10c-8 0-15-7-15-15v-10c0-8 7-15 15-15h10c8 0 15 7 15 15zm-58 0c0 8-7 15-15 15h-10c-8 0-15-7-15-15v-10c0-8 7-15 15-15h10c8 0 15 7 15 15zm173-10c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15h10c8 0 15-7 15-15zm-58 0c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15h10c8 0 15-7 15-15zm-230 70c0 8-6 15-14 15h-10c-8 0-15-7-15-15v-10c0-8 7-15 15-15h10c8 0 15 7 15 15v10zm230-10c0-8-7-15-15-15H170c-8 0-15 7-15 15v10c0 8 7 15 15 15h182c8 0 15-7 15-15v-10zm58 0c0-8-7-15-15-15h-10c-8 0-15 7-15 15v10c0 8 7 15 15 15h10c8 0 15-7 15-15zM180 372h160c5 0 8 6 4 10l-77 95a7 7 0 01-11 0l-78-95c-3-4 0-10 4-10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7elatorlqug";
freezeTemplate(tmpl);
