import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./edit_relationship.css";

import _implicitScopedStylesheets from "./edit_relationship.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M430 420h-30v-60h30c6 0 10-4 10-10V90c0-6-4-10-10-10H170c-6 0-10 4-10 10v30h-60V90c0-39 31-70 70-70h260c39 0 70 31 70 70v260c0 39-31 70-70 70zM320 160H60c-22 0-40 18-40 40v260c0 22 18 40 40 40h260c22 0 40-18 40-40V200c0-22-18-40-40-40zM148 415l-5 3-45 11c-4 1-8-3-7-7l11-45 2-4 1-1h5l37 37c2 3 2 6 1 6zm109-110l-92 93c-2 2-4 2-6 0l-37-37c-2-1-2-4 0-5l93-93c2-2 4-2 6 0l37 37-1 5zm28-28l-10 10c-2 2-4 2-6 0l-37-37c-2-2-2-4 0-6l10-10c7-7 17-7 24 0l20 20c6 7 6 17-1 23z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6hsv8cmlm2r";
freezeTemplate(tmpl);
