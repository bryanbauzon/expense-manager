import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./return_order.css";

import _implicitScopedStylesheets from "./return_order.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M220 223h369c12 0 23 10 23 22v47c0 12-10 23-22 23H220c-12 0-23-10-23-22v-47c-1-12 9-23 23-23-1 0-1 0 0 0zm508 0h46c12 0 23 10 23 22v47c0 12-10 23-22 23h-47c-12 0-23-10-23-22v-47c-1-12 9-22 21-23zM456 428c12 0 23 10 23 22v47c0 12-10 23-22 23H220c-12 0-23-10-23-22v-47c0-12 10-23 22-23zm-88 205c12 0 23 10 23 22v47c0 12-10 23-22 23H220c-12 0-23-10-23-22v-47c0-12 10-23 22-23zm418-211c12 107-72 218-172 237l-27 6c-5 1-9 6-8 12 0 3 2 5 4 6l67 45c7 5 8 14 3 20v1l-17 25c-4 7-14 9-20 4h-1L454 669c-7-4-9-14-4-20v-1l110-162c4-7 14-9 20-4h1l25 17c7 4 9 14 4 20v1l-44 67c-3 4-3 11 2 14 2 2 5 3 8 2l16-3c78-15 144-103 137-179 0-7 11-17 19-19h19c9-1 19 11 19 20z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-3j77uuu7ekp";
freezeTemplate(tmpl);
