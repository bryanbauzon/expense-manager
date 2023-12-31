import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./text.css";

import _implicitScopedStylesheets from "./text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M494 479a1570 1570 0 01-3-97l1-49c0-15 2-30-4-44-13-32-55-38-85-38-15 0-31 2-47 6-11 3-22 7-31 12l10 25 4 15c20-10 40-15 61-15 32 0 48 13 48 38v12h-22c-41 0-72 6-93 18-23 11-33 32-33 63 0 23 7 41 21 53a80 80 0 0054 19c19 0 34-3 46-8a72 72 0 0030-25h1l4 26h39zm-46-79c0 6-1 11-3 16-1 4-3 8-6 11a60 60 0 01-42 23c-10 2-20 1-30-1-8-1-15-5-20-12-7-11-5-28 2-38a50 50 0 0119-13c19-6 42-6 62-6h17v20zm-149-90L187 34c-2-5-6-9-12-9h-35c-5 0-11 4-13 9L26 310c-3 5 2 12 7 12h39c5 0 11-4 13-10l25-72h100l29 72c2 5 7 10 13 10h39c6 0 10-7 8-12zM131 185l29-75 32 75z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-62rs1a5v8iv";
freezeTemplate(tmpl);
