import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./video.css";

import _implicitScopedStylesheets from "./video.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#730394" d="M515 1A507 507 0 008 509v5384c0 280 227 507 507 507h4578c280 0 507-227 507-507V2032L3710 1z"${3}/><path fill="#3d0157" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571z"${3}/><path fill="#e5b9fe" d="M3707 0v1456c0 166 111 579 611 579h1280z"${3}/><path fill="#fff" d="M2453 4553c0 37-16 74-45 98-20 16-525 442-1184 710a135 135 0 01-119-8c-34-21-59-58-61-99a8228 8228 0 010-1401c2-40 27-77 62-100a130 130 0 01118-8 4826 4826 0 011184 712c29 22 45 59 45 96z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4v2903j6r9i";
freezeTemplate(tmpl);
