import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./knowledge.css";

import _implicitScopedStylesheets from "./knowledge.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M32 59h13a2 2 0 002-2V27c0-2.2-2-4-4-4H32.3C31 23 30 24 30 25.3V57c0 1.1.9 2 2 2zm44-30v32a4 4 0 01-4 4H28a4 4 0 01-4-4V29a6 6 0 00-6 6v30a6 6 0 006 6h19c1.1 0 2 .9 2 2s.9 2 2 2h6c1.1 0 2-.9 2-2s.9-2 2-2h19a6 6 0 006-6V35a6 6 0 00-6-6zM55 59h12.7c1.3 0 2.3-1 2.3-2.3V25a2 2 0 00-2-2H57c-2 0-4 1.8-4 4v30c0 1.1.9 2 2 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7o9lcougbn5";
freezeTemplate(tmpl);
