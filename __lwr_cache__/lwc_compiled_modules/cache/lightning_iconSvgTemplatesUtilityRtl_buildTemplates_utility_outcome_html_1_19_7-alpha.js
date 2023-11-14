import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./outcome.css";

import _implicitScopedStylesheets from "./outcome.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M25 252c-5 5-6 14 0 20l135 135c5 5 14 6 20 0l21-22c5-5 6-14 0-20l-56-57c-3-5-3-11 2-15l5-2h213c8-1 14-8 15-16v-30c0-8-7-14-15-14H153c-6 0-10-5-10-11 0-3 1-5 3-7l56-56c5-5 6-14 0-20l-22-21c-5-6-14-6-20-1l-1 1L25 252zm301-96V95c0-8 7-15 15-15h84c8 0 15 7 15 15v330c0 8-7 15-15 15h-84c-8 0-15-7-15-15v-59c0-8-7-15-15-15h-30c-8 0-15 7-15 15v95a40 40 0 0040 40h154a40 40 0 0040-40V61a40 40 0 00-40-40H305a40 40 0 00-40 40v96c0 8 7 15 15 15h30c9 0 15-7 16-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-flbk5u8rcv";
freezeTemplate(tmpl);
