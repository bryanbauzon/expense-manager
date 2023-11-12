import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom66.css";

import _implicitScopedStylesheets from "./new_custom66.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M486 303L370 186a47 47 0 00-66 0L186 303a47 47 0 000 66l117 117c18 18 48 18 66 0l117-117c19-17 19-48 0-66zm-220 53a27 27 0 01-39 0 27 27 0 010-39c11-11 29-11 39 0s10 28 0 39zm90 91a27 27 0 01-39 0 27 27 0 010-39c11-11 29-11 39 0 10 10 10 28 0 39zm0-181a27 27 0 01-39 0 27 27 0 010-39c11-11 29-11 39 0 10 10 10 28 0 39zm90 90a27 27 0 01-39 0 27 27 0 010-39c11-11 29-11 39 0 12 11 12 28 0 39zM284 128V68c0-26-22-48-48-48H68c-26 0-48 22-48 48v168c0 26 22 48 48 48h60c5 0 10-2 13-6l9-10 118-118 10-9c4-3 6-8 6-13zM88 244c-15 0-28-13-28-28s13-28 28-28 28 13 28 28-13 28-28 28zm64-64c-15 0-28-13-28-28s13-28 28-28 28 13 28 28-13 28-28 28zm64-64c-15 0-28-13-28-28s13-28 28-28 28 13 28 28-13 28-28 28z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3v2lmv7d3hv";
freezeTemplate(tmpl);
