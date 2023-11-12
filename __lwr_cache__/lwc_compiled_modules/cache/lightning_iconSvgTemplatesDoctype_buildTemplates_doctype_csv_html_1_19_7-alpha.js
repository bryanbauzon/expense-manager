import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./csv.css";

import _implicitScopedStylesheets from "./csv.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#2e844a" d="M511 0A507 507 0 003 507v5385c0 280 227 507 508 507h4577c280 0 507-227 507-508V2032L3705 0z"${3}/><path fill="#fff" d="M2031 4320c12 14 19 32 19 52 0 38-30 72-70 72-18 0-38-7-50-23a406 406 0 00-301-139c-263 0-463 202-463 488 0 284 200 488 463 488 113 0 225-49 301-137 12-15 32-23 50-23 42 0 70 35 70 73 0 18-7 36-19 51a535 535 0 01-402 169c-346 0-617-252-617-621s271-621 617-621c180 0 310 72 402 171zm680 1071c-178 0-319-59-421-149a71 71 0 01-24-54c0-36 27-76 70-76 15 0 31 4 43 14 83 74 198 132 337 132 214 0 283-116 283-207 0-310-711-139-711-568 0-198 176-333 412-333 155 0 288 47 385 128 16 14 25 34 25 54 0 36-30 72-70 72-14 0-30-5-43-16a483 483 0 00-308-105c-144 1-247 78-247 191 0 270 712 116 712 564 0 175-119 353-443 353zm1699-1125l-416 1033c-19 49-68 81-118 81h-4c-52 0-101-32-121-81l-414-1033c-4-9-5-18-5-29 0-36 32-79 81-79 30 0 59 18 72 48l389 999 388-999c11-29 40-48 72-48a80 80 0 0176 108z"${3}/><path fill="#194e31" d="M5600 2036v100H4320s-631-126-613-671c0 0 21 571 601 571z"${3}/><path fill="#cdefc4" d="M3710 1v1456c0 165 110 579 610 579h1280z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-118igb5ju2b";
freezeTemplate(tmpl);
