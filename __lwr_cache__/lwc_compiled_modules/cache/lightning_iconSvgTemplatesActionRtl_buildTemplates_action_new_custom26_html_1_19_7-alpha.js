import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom26.css";

import _implicitScopedStylesheets from "./new_custom26.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M68 20c-26 0-48 22-48 48 0 14 6 27 16 36v364c0 18 14 32 32 32s32-14 32-32V104c10-9 16-22 16-36 0-26-22-48-48-48zm420 86c-126 66-211-47-330-4-6 2-10 8-10 15v206c0 10 10 18 21 15 114-34 199 73 323 5 5-2 8-8 8-14V114c0-7-6-11-12-8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-38h53o42lu8";
freezeTemplate(tmpl);
