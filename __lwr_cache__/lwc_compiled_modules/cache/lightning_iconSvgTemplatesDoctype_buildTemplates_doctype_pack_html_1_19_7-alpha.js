import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pack.css";

import _implicitScopedStylesheets from "./pack.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#0b5cab" d="M515 1A507 507 0 008 509v5384c0 280 227 507 507 507h4578c280 0 507-227 507-507V2032L3710 1z"${3}/><path fill="#032d60" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571z"${3}/><path fill="#aacbff" d="M3707 0v1456c0 166 111 579 611 579h1280z"${3}/><path fill="#fff" d="M2919 4087v1192c0 66-53 119-119 119H1131c-66 0-119-53-119-119V4087c0-13 2-26 7-37l159-477c15-49 61-82 112-82h1351c51 0 97 33 112 82l159 477c5 11 7 24 7 37zm-245 0l-119-357H1376l-119 357z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2c82l7uho8a";
freezeTemplate(tmpl);
