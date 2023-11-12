import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./gdoc.css";

import _implicitScopedStylesheets from "./gdoc.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#1b96ff" d="M511 1A507 507 0 004 509v5384c0 280 227 507 507 507h4578c280 0 507-227 507-507V2032L3706 1H511z"${3}/><path fill="#fff" d="M1013 3744h2157v206H1013zm0 480h2157v206H1013zm0 480h2157v206H1013zm0 480h1224v206H1013z"${3}/><path fill="#0b5cab" d="M5596 2038v100H4316s-631-126-613-671c0 0 21 571 601 571h1292z"${3}/><path fill="#aacbff" d="M3706 3v1456c0 165 110 579 610 579h1280L3706 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-300koteeeuf";
freezeTemplate(tmpl);
