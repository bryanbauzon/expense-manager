import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./snippets.css";

import _implicitScopedStylesheets from "./snippets.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M718 252h-20c-6 0-10 4-10 10v40c0 44-36 79-79 79H391c-44 0-79-36-79-79v-40c0-6-4-10-10-10h-20c-33 0-59 27-59 59v426c0 33 27 59 59 59h436c33 0 59-27 59-59V312c1-33-26-60-59-60zM443 480s0 8-6 9l-12 4c-3 3-4 8-4 17v31c0 11-2 20-5 27-2 5-6 10-10 14 0 0-7 5 0 13l7 8c5 8 8 18 8 31v36c0 8 2 13 5 16l6 3 3 1c3 2 7 5 7 12v20c0 2-2 5-8 5h-9c-14 0-27-5-38-13-12-9-18-22-18-38v-43c0-9-3-16-8-21-3-3-8-5-15-7-1 0-5-2-5-8v-16c0-2 1-5 5-7 10-3 14-6 16-8 5-5 7-13 7-23v-36l3-17c3-10 9-19 16-25 7-5 15-9 24-11l21-2c3 0 9 2 9 9v19zm215 119c0 2-1 5-5 7-10 3-14 6-16 8-5 5-7 13-7 23v36l-3 17c-3 10-9 19-16 25-7 5-15 9-24 11l-21 2c-3 0-9-2-9-9v-19s0-8 6-9l12-4c3-3 4-8 4-17v-31c0-11 2-20 5-27 2-5 6-10 10-14 0 0 7-5 0-13l-7-8c-5-8-8-18-8-31v-34c0-8-2-13-5-16l-6-3-3-1c-3-2-7-5-7-12v-22c0-2 2-5 8-5h9c14 0 27 5 38 13 12 9 18 22 18 38v43c0 9 3 16 8 21 3 3 8 5 15 7 1 0 5 2 5 8v16zM391 322h218c11 0 20-9 20-20v-40c0-33-27-59-59-59H431c-33 0-59 27-59 59v40c-1 11 8 20 19 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-67afpes6m34";
freezeTemplate(tmpl);
