import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./box_notes.css";

import _implicitScopedStylesheets from "./box_notes.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#056764" d="M511 1A507 507 0 004 509v5384c0 280 227 507 507 507h4578c280 0 507-227 507-507V2032L3706 1z"${3}/><path fill="#024d4c" d="M5596 2038v100H4316s-631-126-613-671c0 0 21 571 601 571z"${3}/><path fill="#acf3e4" d="M3706 3v1456c0 165 110 579 610 579h1280z"${3}/><path fill="#fff" d="M2709 3933l211-210H1050s-37 2-37 40v135c0 19 18 35 38 35zm-732 727l210-210H1050s-37 1-37 40v135c0 19 19 35 38 35zm-506 730l27-210h-448s-37 2-37 40v135c0 19 19 35 38 35zm88-3s167-3 201-11 41-14 53-27l1311-1310s-50 42-159-69c-87-87-49-140-49-140L1617 5129c-24 26-25 40-27 51-3 10-31 207-31 207zm1515-1716l-106 106c-9 12-18 23-10 58s68 136 166 163c0 0 29 11 54-13l109-110s20-17 4-62c-16-44-81-124-158-154-39-14-59 12-59 12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-46gslnl8mea";
freezeTemplate(tmpl);
