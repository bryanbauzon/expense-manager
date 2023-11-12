import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./flash.css";

import _implicitScopedStylesheets from "./flash.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#ea001e" d="M511 1A507 507 0 004 508v5384c0 281 227 508 507 508h4578c280 0 507-227 507-508V2032L3706 1z"${3}/><path fill="#ba0517" d="M5596 2035v100H4316s-631-126-613-671c0 0 21 571 601 571z"${3}/><path fill="#fe8f7d" d="M3706-1v1457c0 165 110 579 610 579h1280z"${3}/><path fill="#fff" d="M1747 4311h-584v387h571c36 0 65 28 65 68 0 36-29 65-65 65h-571v484c0 42-32 74-75 74-42 0-74-32-74-74V4285c0-59 49-108 108-108h625c36 0 65 29 65 69-1 36-29 65-65 65zm955 1067h-545c-60 0-108-48-108-108V4238c0-39 32-71 77-71 40 0 72 32 72 72v1006h504c36 0 65 29 65 65 0 40-29 68-65 68zm1223 11c-31 0-60-18-72-48l-90-229h-598l-90 229a78 78 0 01-72 48 80 80 0 01-76-108l414-1033a130 130 0 01242 0l417 1033c4 9 6 20 6 29 0 36-33 79-81 79zm-461-1057l-256 647h510z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-22oc55fp113";
freezeTemplate(tmpl);
