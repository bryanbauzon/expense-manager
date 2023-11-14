import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./signature.css";

import _implicitScopedStylesheets from "./signature.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M483 93a13 13 0 00-8-4 10 10 0 00-8 4l-10 10a3 3 0 000 4l25 26a5 5 0 003 0 3 3 0 002 0l10-10a12 12 0 000-17h-1zm-33 22a4 4 0 00-3 0 3 3 0 00-2 0L342 218l-10 34a5 5 0 003 6h2l34-10 103-102a3 3 0 000-4zm41 48l-46 45v157a16 16 0 01-16 17H85a16 16 0 01-15-17V177a16 16 0 0116-16h279l49-50H69a50 50 0 00-49 50v220a50 50 0 0049 50h376a50 50 0 0050-50V160a26 26 0 01-4 4zM300 264c-8 4-15 10-23 13a31 31 0 01-7 3 2 2 0 000-1 33 33 0 00-38-27h-2a474 474 0 00-54 17 468 468 0 01-57 14 16 16 0 00-10 19 16 16 0 0018 10 488 488 0 0057-13l28-10 16-5a46 46 0 0110-3l2 3 5 12a27 27 0 0022 15c18 0 34-12 49-20 16-10 0-37-17-27z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4jdu4a4g8mu";
freezeTemplate(tmpl);
