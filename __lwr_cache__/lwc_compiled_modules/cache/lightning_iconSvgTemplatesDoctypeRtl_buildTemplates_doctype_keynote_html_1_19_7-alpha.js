import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./keynote.css";

import _implicitScopedStylesheets from "./keynote.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#f38303" d="M514 1A507 507 0 007 508v5384c0 280 227 507 507 507h4578c280 0 507-227 507-507V2031L3709 0H514z"${3}/><path fill="#a96404" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571h1293z"${3}/><path fill="#ffba90" d="M3707 0v1456c0 166 111 579 611 579h1280L3707 0z"${3}/><path fill="#371e03" d="M1782 5401c-20 0-40-9-54-25l-443-527-121 136v341c0 41-32 74-75 74-42 0-74-33-74-74V4249c0-40 32-72 77-72 40 0 72 32 72 72v560l519-607c14-16 32-23 52-23 40 0 74 30 74 70 0 15-5 31-16 41l-411 469 456 527c11 13 16 27 16 43 0 35-29 72-72 72zm1092-12h-624c-60 0-108-49-108-108v-985c0-60 48-108 108-108h624c37 0 65 28 65 68 0 36-28 65-64 65h-584v387h571c36 0 65 29 65 69 0 36-29 64-65 64h-571v415h583c37 0 65 28 65 64 0 40-28 69-64 69zm1239-1102l-403 594v445c0 41-33 73-76 73-41 0-74-32-74-73v-445l-405-594c-7-11-13-24-13-38 0-34 27-72 72-72 22 0 47 11 62 31l358 538 358-538c13-18 36-29 58-29 39 0 74 32 74 70 0 13-4 27-11 38z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5169un53fv5";
freezeTemplate(tmpl);
