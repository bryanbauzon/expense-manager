import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./integration.css";

import _implicitScopedStylesheets from "./integration.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M229 120l78 79c33 2 58 29 58 62s-27 61-61 62l-73 74a155 155 0 0020 9l7 42a29 29 0 0029 24h29a30 30 0 0029-25l7-42a151 151 0 0055-33l38 15 11 2c11 0 21-5 26-14l13-23c8-10 5-26-6-35l-33-28a172 172 0 000-60l33-28a30 30 0 007-37l-14-25a30 30 0 00-36-12l-41 15a149 149 0 00-52-31l-7-41c-3-15-15-23-30-23h-28c-14 0-27 8-29 23l-7 41a148 148 0 00-24 9h1zM32 287h151c8 0 12 9 6 15l-51 51a13 13 0 000 19l20 19a13 13 0 0019 0l121-122a13 13 0 000-19L177 129a13 13 0 00-19 0l-19 19a13 13 0 000 18l51 51c6 6 2 16-6 16H33c-7 0-13 6-13 13v26c0 8 5 15 12 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ql1ki69gsc";
freezeTemplate(tmpl);
