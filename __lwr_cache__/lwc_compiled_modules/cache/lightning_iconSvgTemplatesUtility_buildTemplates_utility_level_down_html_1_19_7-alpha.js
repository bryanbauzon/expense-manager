import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./level_down.css";

import _implicitScopedStylesheets from "./level_down.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M80 119c0-7-7-15-15-15H35c-8 0-15 8-15 15v162c0 8 8 16 15 16h332c9 0 13 10 7 17l-56 56c-6 6-6 15 0 21l21 21c6 6 15 6 21 0l136-135c6-6 6-15 0-21L361 121c-6-6-15-6-21 0l-21 21c-6 6-6 15 0 21l56 56c6 6 2 18-7 18H95c-16 0-15-16-15-16V119z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1ho5h483aoa";
freezeTemplate(tmpl);
