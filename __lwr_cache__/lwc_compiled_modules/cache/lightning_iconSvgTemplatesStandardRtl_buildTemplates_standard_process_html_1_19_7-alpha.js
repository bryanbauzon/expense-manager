import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./process.css";

import _implicitScopedStylesheets from "./process.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M376 463l108-134c8-10 23-10 31 0l108 134c4 5 10 7 16 7h121c11 0 20-9 20-20V280c0-33-27-60-60-60H280c-33 0-60 27-60 60v170c0 11 9 20 20 20h120c6 0 12-3 16-7zm247 74L515 671c-8 10-23 10-31 0L376 537c-4-5-10-7-16-7H240c-11 0-20 9-20 20v170c0 33 27 60 60 60h440c33 0 60-27 60-60V550c0-11-9-20-20-20H639c-6 0-12 3-16 7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1enhb635a6b";
freezeTemplate(tmpl);
