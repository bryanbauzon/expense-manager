import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./meet_content_source.css";

import _implicitScopedStylesheets from "./meet_content_source.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M463 75H57a37 37 0 00-37 37v296a37 37 0 0037 37h406a37 37 0 0037-37V112a37 37 0 00-37-37zm0 324a10 10 0 01-10 9H67a10 10 0 01-10-10V140a10 10 0 0110-10h388a10 10 0 0110 10zM265 170a7 7 0 00-10-1 5 5 0 000 1l-67 71a9 9 0 000 12l12 12a7 7 0 0010 1h1l24-27a6 6 0 0110 4v101a8 8 0 007 9h16a9 9 0 008-9V243a5 5 0 0110-4l23 26a9 9 0 0012 0l10-12a9 9 0 000-11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6c1p6qtfhdi";
freezeTemplate(tmpl);
