import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./overlay.css";

import _implicitScopedStylesheets from "./overlay.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#730394" d="M515 1A507 507 0 008 508v5384c0 281 227 508 507 508h4578c280 0 507-227 507-508V2032L3710 1z"${3}/><path fill="#3d0157" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571z"${3}/><path fill="#e5b9fe" d="M3707 0v1456c0 166 111 579 611 579h1280z"${3}/><path fill="#fff" d="M1012 3452v1408h1470V3452zm535 534v1408h1469V3986z"${3}/><path fill="#e5b9fe" d="M1547 3986h935v873l-935 1z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 5600 6400",
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
tmpl.stylesheetToken = "lwc-1rv5nvcknpd";
freezeTemplate(tmpl);
