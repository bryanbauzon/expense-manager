import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./performance.css";

import _implicitScopedStylesheets from "./performance.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M300 200h-20c-33 0-60 30-60 60v480c0 30 27 60 60 60h20c11 0 20-9 20-20V220c0-11-9-20-20-20zm420 0H400c-11 0-20 9-20 20v560c0 11 9 20 20 20h320c33 0 60-27 60-60V260c0-33-27-60-60-60zm-22 268l-52 53-2 6 12 75c1 5-4 9-9 7l-65-36h-6l-65 36c-5 2-10-2-9-7l12-75c0-2 0-4-2-6l-52-53c-4-4-2-10 3-11l72-11c2 0 4-2 5-4l32-69c2-5 9-5 11 0l32 69 5 4 72 11c8 1 10 7 6 11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5me03bak5pb";
freezeTemplate(tmpl);
