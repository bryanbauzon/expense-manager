import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./enter.css";

import _implicitScopedStylesheets from "./enter.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M440 305s1 16-15 16H152c-9 0-13-12-7-18l56-56c6-6 6-15 0-21l-21-21c-6-6-15-6-21 0L24 340c-6 6-6 15 0 21l136 135c6 6 15 6 21 0l21-21c6-6 6-15 0-21l-56-56c-6-7-2-17 7-17h332c7 0 15-8 15-16V35c0-7-7-15-15-15h-30c-8 0-15 8-15 15v270z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-38qnkbjqim0";
freezeTemplate(tmpl);
