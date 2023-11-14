import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./display_text.css";

import _implicitScopedStylesheets from "./display_text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M200 279v443c0 43 35 78 78 78h444c43 0 78-35 78-78V279c0-43-35-78-78-78H277c-43 0-78 35-77 78zm496 79c0 14-12 26-26 26H377c-14 0-25-12-25-26v-27c0-14 12-26 26-26h292c14 0 26 12 26 26zM388 645c0-14 12-26 26-26h256c14 0 26 12 26 26v26c0 14-12 26-26 26H413c-14 0-25-12-25-26zm-84-157c0-14 12-26 26-26h340c14 0 26 12 26 26v26c0 14-12 26-26 26H329c-14 0-25-12-25-26z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-24c3jt0rqh4";
freezeTemplate(tmpl);
