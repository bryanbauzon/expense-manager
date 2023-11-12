import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom23.css";

import _implicitScopedStylesheets from "./new_custom23.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M250 306c6 6 15 6 22 0l226-206c4-8 3-20-13-20H37c-12 0-22 12-13 21zm250-118c0-10-13-16-20-9L304 340a63 63 0 01-86 0L41 180c-8-7-20-2-20 9v204c0 26 22 47 48 47h384c26 0 48-21 48-47z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4tjkgd8mv3u";
freezeTemplate(tmpl);
