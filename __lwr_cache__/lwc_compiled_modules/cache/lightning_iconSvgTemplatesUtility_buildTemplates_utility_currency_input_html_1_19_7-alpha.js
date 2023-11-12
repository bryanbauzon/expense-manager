import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./currency_input.css";

import _implicitScopedStylesheets from "./currency_input.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M359 376a117 117 0 00-17-143 116 116 0 00-164 0 117 117 0 00-17 143h198zM495 72v376c0 26-21 47-47 47H72a47 47 0 01-47-47V72c0-26 21-47 47-47h376c26 0 47 21 47 47zM103 432h313c9 0 16-7 16-16V103c0-9-7-16-16-16H103c-9 0-16 7-16 16v313c1 9 8 16 16 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7vq6j2arccr";
freezeTemplate(tmpl);
