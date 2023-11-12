import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./volume_high.css";

import _implicitScopedStylesheets from "./volume_high.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M246 26L120 180H60a40 40 0 00-40 40v80a40 40 0 0040 40h60l126 154a20 20 0 0034-14V40c0-18-22-27-34-14zm180 61a10 10 0 00-14 0l-14 14c-4 4-4 11 0 14a202 202 0 010 290 10 10 0 000 14l14 14c4 4 10 4 14 0a240 240 0 000-346zm-63 64a10 10 0 00-14 0l-14 14a10 10 0 000 14 110 110 0 01-1 162 10 10 0 000 14l14 14c4 4 10 4 14 0a148 148 0 001-218z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 520 520",
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
tmpl.stylesheetToken = "lwc-5ngoonlpa5i";
freezeTemplate(tmpl);
