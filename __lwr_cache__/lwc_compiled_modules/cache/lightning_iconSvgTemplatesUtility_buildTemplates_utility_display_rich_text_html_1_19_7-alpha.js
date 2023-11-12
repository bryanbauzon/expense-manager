import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./display_rich_text.css";

import _implicitScopedStylesheets from "./display_rich_text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M41 431h439c9 0 16 7 16 16v31c0 9-7 16-16 16H41c-9 0-16-7-16-16v-31c0-9 7-16 16-16zm0-141h439c9 0 16 7 16 16v31c0 9-7 16-16 16H41c-9 0-16-7-16-16v-31c0-9 7-16 16-16zm279-141h160c9 0 16 7 16 16v31c0 9-7 16-16 16H320c-9 0-16-7-16-16v-31c0-9 7-16 16-16zm-79 67L167 33c-2-3-5-6-9-6h-57c-3 0-7 2-8 6L25 216c-1 3 1 8 5 8h36c3 0 7-3 8-6l14-39h87l15 39c1 3 5 6 8 6h36c5 0 8-4 7-8zm-136-85l23-58h5l25 58h-53z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-46mgagk60m0";
freezeTemplate(tmpl);
