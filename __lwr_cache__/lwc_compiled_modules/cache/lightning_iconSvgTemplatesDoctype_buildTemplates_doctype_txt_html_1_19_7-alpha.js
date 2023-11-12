import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./txt.css";

import _implicitScopedStylesheets from "./txt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#fcc003" d="M515-4A507 507 0 008 504v5384c0 280 227 507 507 507h4578c280 0 507-227 507-507V2027L3710-4z"${3}/><path fill="#e4a201" d="M5601 2032v100H4321s-631-126-613-671c0 0 21 571 600 571z"${3}/><path fill="#f9e3b6" d="M3711-4v1457c0 165 110 579 610 579h1280z"${3}/><path fill="#2e2204" d="M1876 4305h-327v1004c0 42-33 74-76 74-41 0-74-32-74-74V4304l-326 1c-36 0-64-29-64-69 0-36 28-65 64-65h803c36 0 65 29 65 69 0 36-29 65-65 65zm1170 1080c-21 0-41-9-54-27l-372-497-375 497a64 64 0 01-54 27c-40 0-72-31-72-72 0-15 4-31 14-43l389-513-362-483c-9-13-14-27-14-42 0-34 29-72 72-72 22 0 43 11 58 29l344 463 343-465c13-18 33-27 55-27a74 74 0 0161 114l-362 481 389 514c9 13 12 27 12 42 0 40-32 74-72 74zm1120-1080h-328v1004c0 42-32 74-75 74-42 0-74-32-74-74V4304l-326 1c-36 0-65-29-65-69 0-36 29-65 65-65h803c36 0 65 29 65 69 0 36-29 65-65 65z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2picua0v4pq";
freezeTemplate(tmpl);
