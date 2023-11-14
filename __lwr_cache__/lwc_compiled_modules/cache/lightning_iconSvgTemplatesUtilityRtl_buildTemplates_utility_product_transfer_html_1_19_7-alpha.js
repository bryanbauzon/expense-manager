import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_transfer.css";

import _implicitScopedStylesheets from "./product_transfer.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M309 24a14 14 0 00-20 0l-20 18a13 13 0 000 20l33 32a9 9 0 01-6 16H114a15 15 0 00-15 14v28a15 15 0 0015 13h182a9 9 0 017 15l-34 33a13 13 0 000 19l20 20a14 14 0 0020 0l108-105a13 13 0 000-19zm-99 244a14 14 0 0120 0l20 18a13 13 0 010 20l-34 32a9 9 0 007 16h182a15 15 0 0115 14v27a15 15 0 01-15 14H224a9 9 0 00-7 15l34 33a13 13 0 010 20l-20 19a14 14 0 01-20 0L104 392a13 13 0 010-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6884vsrptur";
freezeTemplate(tmpl);
