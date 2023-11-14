import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./payment_gateway.css";

import _implicitScopedStylesheets from "./payment_gateway.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M195.6 62.9a179.4 179.4 0 000 358.7h8V279.4c0-10.6 8.1-24.2 18.8-24.2h152c0-5.9.6-10 .6-13.2A180 180 0 00195.6 62.9zm143.2 164h-46.2a267.4 267.4 0 00-25.4-107.6 145.2 145.2 0 0171.6 107.6zM175.1 109v117.9h-41c3.1-56.2 20.8-100.6 41-117.9zm0 148.6v117.8c-20-17.3-37.9-61.5-41-117.8zm41-30.7V109c20 17.3 38 61.7 41 117.9zm-92.2-107.6a276.2 276.2 0 00-25.3 107.6H52.1a144.8 144.8 0 0171.8-107.6zM52.2 262.7h46.5A267.4 267.4 0 00123.9 370a145 145 0 01-71.7-107.3zM475 285.6H257.3a25 25 0 00-25 25v121.5a25 25 0 0025 25H475a25 25 0 0025-25V310.6a25 25 0 00-25-25zM286.6 432.1a29.2 29.2 0 00-28.4-30h-.8V340a29.3 29.3 0 0030-28.4v-.7h158.1a29.1 29.1 0 0028.7 29.1h.8v62.5a29.3 29.3 0 00-30 28.6v.9z"${3}/><circle cx="366" cy="369" r="42"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6k0l7bff64";
freezeTemplate(tmpl);
