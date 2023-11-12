import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./clear.css";

import _implicitScopedStylesheets from "./clear.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 20a240 240 0 100 480 240 240 0 100-480zm49 248l78 78c4 4 4 10 0 14l-28 28a10 10 0 01-14 0l-78-78a10 10 0 00-14 0l-78 78a10 10 0 01-14 0l-28-28a10 10 0 010-14l78-78c4-4 4-10 0-14l-79-79a10 10 0 010-14l28-28a10 10 0 0114 0l79 79c4 4 10 4 14 0l78-78a10 10 0 0114 0l28 28c4 4 4 10 0 14l-78 78c-3 4-3 10 0 14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-qipn4g7k23";
freezeTemplate(tmpl);
