import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./deprecate.css";

import _implicitScopedStylesheets from "./deprecate.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M480 70H40a20 20 0 00-20 20v260c0 11 9 20 20 20h162c10 57 59 100 118 100s109-43 118-100h42a20 20 0 0020-20V90a20 20 0 00-20-20zm-86 326l-28 28-46-46-46 46-28-28 46-46-46-46 28-28 46 46 46-46 28 28-46 46zm66-66h-22c-10-57-59-100-118-100s-109 43-118 100H60V110h400z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7f1hetoeoco";
freezeTemplate(tmpl);
