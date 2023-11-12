import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./excel.css";

import _implicitScopedStylesheets from "./excel.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#2e844a" d="M511 1A507 507 0 004 508v5384c0 280 227 508 507 508h4578c280 0 507-228 507-508V2032L3706 1z"${3}/><path fill="#fff" d="M1943 5394c-22 0-42-9-54-27l-373-497-374 497a64 64 0 01-54 27c-40 0-72-31-72-72 0-15 3-31 14-43l389-513-362-483c-9-13-14-27-14-42a72 72 0 01129-43l344 463 344-464c13-18 32-27 54-27 38 0 74 30 74 72 0 14-4 28-13 41l-362 481 389 515c9 12 13 27 13 41 0 40-33 74-72 74zm999-13h-546c-59 0-108-48-108-108V4241c0-39 33-71 78-71 39 0 72 32 72 72v1006h504c36 0 65 29 65 65 0 39-29 68-65 68zm698 22c-178 0-319-60-421-150a71 71 0 01-24-54c0-36 27-75 70-75 15 0 31 3 44 14 83 74 198 131 336 131 215 0 283-115 283-207 0-309-711-138-711-567 0-198 176-333 412-333 155 0 288 47 386 128 16 14 25 34 25 54 0 36-31 72-70 72-15 0-31-6-44-16a483 483 0 00-307-105c-144 0-247 78-247 191 0 270 711 115 711 564 0 175-119 353-443 353z"${3}/><path fill="#194e31" d="M5595 2035v100H4315s-631-126-612-671c0 1 20 571 600 571z"${3}/><path fill="#cdefc4" d="M3705 0v1456c0 166 110 579 610 579h1280z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3qbi21t33f0";
freezeTemplate(tmpl);
