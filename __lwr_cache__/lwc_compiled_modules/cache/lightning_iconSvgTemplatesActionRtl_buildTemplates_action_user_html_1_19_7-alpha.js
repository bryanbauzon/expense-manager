import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./user.css";

import _implicitScopedStylesheets from "./user.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 430v22c0 26-22 48-48 48H68c-26 0-48-22-48-48v-22c0-58 68-94 132-122l6-3c5-2 10-2 15 1a155 155 0 00172 0c5-3 10-3 15-1l6 3c66 28 134 63 134 122zM260 20c66 0 119 59 119 132s-53 132-119 132-119-59-119-132S194 20 260 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6bljn9346mr";
freezeTemplate(tmpl);
