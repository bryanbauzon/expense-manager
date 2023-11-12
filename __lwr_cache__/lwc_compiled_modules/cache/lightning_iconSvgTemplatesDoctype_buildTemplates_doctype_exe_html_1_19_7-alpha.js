import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./exe.css";

import _implicitScopedStylesheets from "./exe.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#747474" d="M511 3A507 507 0 004 510v5384c0 280 227 507 507 507h4578c280 0 507-227 507-507V2034L3706 3H511z"${3}/><path fill="#5c5c5c" d="M5596 2038v100H4316s-631-126-613-671c0 0 21 571 601 571h1292z"${3}/><path fill="#c9c9c9" d="M3706 3v1456c0 165 110 579 610 579h1280L3706 2z"${3}/><path fill="#fff" d="M1745 5392h-624c-60 0-108-49-108-108v-985c0-59 48-108 108-108h624c37 0 65 29 65 68 0 36-28 65-65 65h-583v387h571c36 0 65 29 65 69 0 36-29 65-65 65h-571v414h583c37 0 65 28 65 64 0 40-28 69-65 69zm1210 12c-21 1-41-8-54-26l-372-497-375 497a64 64 0 01-54 27c-40 0-72-31-72-72 0-15 4-31 14-44l389-513-362-482c-9-13-14-27-14-42 0-34 29-72 72-72 22 0 43 11 58 29l344 463 343-465c13-18 33-27 54-27a74 74 0 0162 114l-362 480 389 515c9 13 12 27 12 42 0 39-32 73-72 73zm1078-12h-624c-60 0-108-49-108-108v-985c0-59 48-108 108-108h624c36 0 65 29 65 68 0 36-29 65-65 65h-583v387h571c36 0 64 29 64 69 1 36-28 65-64 65h-571v414h583c36 0 65 28 65 64 0 40-29 69-65 69z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7i38u6af742";
freezeTemplate(tmpl);
