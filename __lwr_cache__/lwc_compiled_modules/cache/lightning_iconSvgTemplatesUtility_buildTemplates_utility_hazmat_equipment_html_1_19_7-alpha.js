import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./hazmat_equipment.css";

import _implicitScopedStylesheets from "./hazmat_equipment.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M318 280a59 59 0 10-59 58 59 59 0 0060-59zm-58-81a80 80 0 0130 6l80-142a240 240 0 00-220 0l80 142a78 78 0 0130-6zm-80 91H20a240 240 0 00113 191l77-138a90 90 0 01-8-7 80 80 0 01-22-46zm136 46a88 88 0 01-8 7l79 138a240 240 0 00113-191H340a80 80 0 01-24 46z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7pi21m79pol";
freezeTemplate(tmpl);
