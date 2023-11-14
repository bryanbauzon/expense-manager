import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./email.css";

import _implicitScopedStylesheets from "./email.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M487 550c8 7 19 7 27 0l283-262c5-10 4-26-16-26l-560 1c-15 0-27 14-16 26zm313-150c0-13-16-20-25-11L555 593c-15 14-34 21-54 21s-39-7-54-21L226 389a15 15 0 00-25 11v260c0 33 27 60 60 60h480c33 0 60-27 60-60z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3so6tp9ge4e";
freezeTemplate(tmpl);
