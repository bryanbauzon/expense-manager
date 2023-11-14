import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_type_group.css";

import _implicitScopedStylesheets from "./work_type_group.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M799 293l-3-9-82-81c-1-2-4-3-7-3H486c-29-1-53 23-54 52v265c0 29 24 53 53 53h261c29 1 53-23 54-52V307zM564 503c0 13-10 23-23 23h-45c-12 0-22-11-22-23v-45c0-13 10-23 23-23h45c13 0 23 10 23 23zm0-124c0 13-10 23-23 23h-45c-12 0-22-11-22-23v-45c0-13 10-23 23-23h45c13 0 23 10 23 23zm125 124c0 13-10 23-23 23h-45c-13 0-23-10-23-23v-45c0-13 10-23 23-23h45c13 0 23 10 23 23zm0-124c0 13-10 23-23 23h-45c-13 0-23-10-23-23v-45c0-13 10-23 23-23h45c13 0 23 10 23 23zM428 627c-29 0-53-24-53-53V301c-32 0-58 26-58 58v266c0 32 17 59 58 59h250c32 0 57-25 58-57zM311 743c-29 0-53-24-53-53V417c-32 0-58 26-58 58v266c0 32 17 59 58 59h250c32 0 57-25 58-57z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-71t0h03niu2";
freezeTemplate(tmpl);
