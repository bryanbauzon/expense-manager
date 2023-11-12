import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./toggle_off.css";

import _implicitScopedStylesheets from "./toggle_off.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M392 152.5c60 0 108 47 108 107s-48 108-108 108H124c-58-2-104-50-104-108s46-105 104-107zm4 32H123l-4 .3c-38.1 3.9-68 36.1-68 75.7s32 74 72 76h273l4-.3c38.1-3.9 68-36.1 68-75.7s-32-74-72-76zm-269.1 23a52 52 0 110 104 52 52 0 010-104z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4br43rdr6n";
freezeTemplate(tmpl);
