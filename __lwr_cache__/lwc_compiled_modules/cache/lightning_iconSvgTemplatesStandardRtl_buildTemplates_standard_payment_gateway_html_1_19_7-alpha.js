import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./payment_gateway.css";

import _implicitScopedStylesheets from "./payment_gateway.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M419.4 253.4a224.5 224.5 0 000 448.8h10V524.3c0-13.3 10-30 23.5-30h190c0-7.4.7-12.5.7-16.5a225.2 225.2 0 00-224.2-224.4zm179.1 205.2h-57.8A335 335 0 00509 324a181.6 181.6 0 0189.5 134.6zM393.7 311.1v147.5h-51.3c3.9-70.3 26.1-125.9 51.3-147.5zm0 185.9v147.4c-25-21.7-47.4-77-51.3-147.4zm51.3-38.4V311.1c25 21.6 47.6 77.2 51.3 147.5zM330 324a345.7 345.7 0 00-32 134.6h-58A181.1 181.1 0 01330 324zm-90 179.4h58.1A335.5 335.5 0 00330 637.6a181.1 181.1 0 01-90-134.2zM768.9 532H496.6a31.3 31.3 0 00-31.3 31.3v152a31.3 31.3 0 0031.3 31.3h272.3a31.3 31.3 0 0031.1-31.3v-152a31.3 31.3 0 00-31.1-31.3zM533.2 715.3a36.5 36.5 0 00-35.5-37.5h-1V600a36.5 36.5 0 0037.5-35.5v-1.4H732a36.5 36.5 0 0035.9 36.9h1v78.2a36.6 36.6 0 00-37.5 35.8v1.1z"${3}/><circle cx="633" cy="637" r="53"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3km8t0ai5qr";
freezeTemplate(tmpl);
