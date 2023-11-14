import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./empty.css";

import _implicitScopedStylesheets from "./empty.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M72 78H28a6 6 0 01-6-6V28a6 6 0 016-6h44a6 6 0 016 6v44a6 6 0 01-6 6zM28 30v40c0 1.1.9 2 2 2h40a2 2 0 002-2V30a2 2 0 00-2-2H30a2 2 0 00-2 2z" opacity=".5"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-nsi55pr43s";
freezeTemplate(tmpl);
