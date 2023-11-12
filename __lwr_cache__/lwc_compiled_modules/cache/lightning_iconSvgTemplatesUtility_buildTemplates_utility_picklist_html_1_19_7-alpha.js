import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./picklist.css";

import _implicitScopedStylesheets from "./picklist.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M480 410a20 20 0 0020-20V130a20 20 0 00-20-20H40a20 20 0 00-20 20v260c0 11 9 20 20 20h440zM60 370V150h400v220H60zm265-140h93c3 0 4 3 2 5l-46 53c-2 2-5 2-7 0l-46-53c-1-2 1-5 4-5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4nc9t63ou05";
freezeTemplate(tmpl);
