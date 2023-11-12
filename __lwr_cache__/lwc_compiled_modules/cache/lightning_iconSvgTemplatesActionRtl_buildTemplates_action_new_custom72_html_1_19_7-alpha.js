import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom72.css";

import _implicitScopedStylesheets from "./new_custom72.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M476 20H44c-14 0-24 10-24 24s10 24 24 24h192v50c-86 11-152 84-152 173v55c0 58 46 106 106 106h142c58 0 105-47 105-106v-56c0-89-66-162-152-174V68h192c14 0 24-10 24-24s-11-24-25-24zM372 290c0 23-18 42-42 42H190c-23 0-41-18-42-42v1-1 1c1-62 50-111 110-111h3c61 0 110 50 111 110z"${3}/><circle cx="68" cy="468" r="32"${3}/><circle cx="452" cy="468" r="32"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ij1pgno9kc";
freezeTemplate(tmpl);
