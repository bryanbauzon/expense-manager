import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./multi_picklist.css";

import _implicitScopedStylesheets from "./multi_picklist.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M73 20H41a6 6 0 00-6 6v1c0 .6.4 1 1 1h29a6 6 0 016 6v31c0 .6.4 1 1 1h1a6 6 0 006-6V26a6 6 0 00-6-6zM59 34H27a6 6 0 00-6 6v34a6 6 0 006 6h32a6 6 0 006-6V40a6 6 0 00-6-6zM46.8 70a2 2 0 01-2 2H31a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h13.8a2 2 0 012 2zm0-12a2 2 0 01-2 2H31a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h13.8a2 2 0 012 2zm0-12a2 2 0 01-2 2H31a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h13.8a2 2 0 012 2zM57 70a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm0-12a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm0-12a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7qjsbe2j3g5";
freezeTemplate(tmpl);
