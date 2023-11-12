import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./link.css";

import _implicitScopedStylesheets from "./link.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#1b96ff" d="M515 1A507 507 0 008 508v5384c0 280 227 507 507 507h4578c280 0 507-227 507-507V2032L3710 1z"${3}/><path fill="#0b5cab" d="M5598 2035v100H4318s-631-126-613-671c0 0 21 571 600 571z"${3}/><path fill="#aacbff" d="M3707 0v1456c0 166 111 579 611 579h1280z"${3}/><path fill="#fff" d="M2825 3561c-207-210-545-210-755 0l-305 306c-207 207-207 545 0 755 48 48 125 48 174 0 50-48 50-126 0-173-112-114-112-294 0-408l308-306c112-112 294-112 406 0 112 117 118 294 0 406l-146 148c36 98 50 201 41 305l278-278c208-210 219-547 0-755zm-770 595c-48 48-48 128 0 176 114 112 114 294 0 406l-306 305c-112 112-294 112-406 0s-112-294 0-406l146-146c-37-98-50-203-41-308l-280 280c-208 208-208 545 0 755 209 207 547 207 754 0l308-308c208-208 208-545 0-755-48-48-128-48-175 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-49cs4s656u0";
freezeTemplate(tmpl);
