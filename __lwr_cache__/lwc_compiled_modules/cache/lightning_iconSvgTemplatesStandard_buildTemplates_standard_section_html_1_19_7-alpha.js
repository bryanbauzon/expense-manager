import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./section.css";

import _implicitScopedStylesheets from "./section.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M31 34h38a1 1 0 001-1v-4a1 1 0 00-1-1H31a1 1 0 00-1 1v4a1 1 0 001 1m41 6H28a4 4 0 01-4-4V26a4 4 0 014-4h44a4 4 0 014 4v10a4 4 0 01-4 4M31 72h38a1 1 0 001-1v-4a1 1 0 00-1-1H31a1 1 0 00-1 1v4a1 1 0 001 1m41 6H28a4 4 0 01-4-4V64a4 4 0 014-4h44a4 4 0 014 4v10a4 4 0 01-4 4m5-24H67a3 3 0 01-3-3v-2a3 3 0 013-3h10a3 3 0 013 3v2a3 3 0 01-3 3m-22 0H45a3 3 0 01-3-3v-2a3 3 0 013-3h10a3 3 0 013 3v2a3 3 0 01-3 3m-22 0H23a3 3 0 01-3-3v-2a3 3 0 013-3h10a3 3 0 013 3v2a3 3 0 01-3 3"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1fi6cgqpgal";
freezeTemplate(tmpl);
