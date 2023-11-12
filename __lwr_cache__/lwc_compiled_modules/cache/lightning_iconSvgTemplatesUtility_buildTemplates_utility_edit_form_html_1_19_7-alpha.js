import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./edit_form.css";

import _implicitScopedStylesheets from "./edit_form.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M314 153h82c6 0 11-5 11-11 0-3-1-5-3-8L302 33c-3-2-5-3-8-3-6 0-11 5-11 11v81c0 17 14 31 31 31zm181 104l-9-9c-6-6-15-6-22 0L345 367v28c0 2 0 4 2 4h26l3-1 119-118c7-8 7-17 0-23zm-96 187h-71a29 29 0 01-29-29v-54c0-8 2-16 9-21l95-95c3-3 5-7 5-11v-20c0-8-7-15-15-15H283a46 46 0 01-46-46V45c0-8-7-15-16-15H66a47 47 0 00-46 46v368c0 25 21 46 46 46h294c22 0 42-16 46-37 1-4-3-9-7-9zM82 168c0-8 7-15 15-15h62c9 0 15 7 15 15v15c0 8-7 15-15 15H97c-9 0-15-7-15-15v-15zm155 199c0 8-7 15-15 15H97c-9 0-15-7-15-15v-15c0-8 7-15 15-15h124c9 0 15 7 15 15v15zm31-92c0 8-7 15-15 15H97c-9 0-15-7-15-15v-15c0-8 7-15 15-15h155c9 0 15 7 15 15v15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6h94318is24";
freezeTemplate(tmpl);
