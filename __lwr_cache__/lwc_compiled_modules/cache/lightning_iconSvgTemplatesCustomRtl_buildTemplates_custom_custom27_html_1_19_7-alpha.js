import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom27.css";

import _implicitScopedStylesheets from "./custom27.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M24 63h52a2 2 0 002-2V29a6 6 0 00-6-6H28a6 6 0 00-6 6v32c0 1.1.9 2 2 2zm4-32c0-1.1.9-2 2-2h40a2 2 0 012 2v24a2 2 0 01-2 2H30a2 2 0 01-2-2V31zm52 38H58a2 2 0 00-2 2 2 2 0 01-2 2h-8a2 2 0 01-2-2 2 2 0 00-2-2H20a2 2 0 00-2 2 6 6 0 006 6h52a6 6 0 006-6 2 2 0 00-2-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5qi10busfqv";
freezeTemplate(tmpl);
