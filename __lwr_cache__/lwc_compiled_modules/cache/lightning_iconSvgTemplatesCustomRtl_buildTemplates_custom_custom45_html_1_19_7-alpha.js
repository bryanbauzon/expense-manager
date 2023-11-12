import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom45.css";

import _implicitScopedStylesheets from "./custom45.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M33 43h34v14H33zm49-1.7V36a6 6 0 00-6-6H24a6 6 0 00-6 6v5.3a2 2 0 001 1.7 8 8 0 014 6.9c0 3-1.6 5.5-4 6.9-.6.4-1 1-1 1.7V64a6 6 0 006 6h52a6 6 0 006-6v-5.3a2 2 0 00-1-1.7 8 8 0 01-4-6.9c0-3 1.6-5.5 4-6.9.6-.5 1-1.1 1-1.9zM71 63H29a2 2 0 01-2-2V39c0-1.1.9-2 2-2h42a2 2 0 012 2v22a2 2 0 01-2 2z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-qtnns70rm0";
freezeTemplate(tmpl);
