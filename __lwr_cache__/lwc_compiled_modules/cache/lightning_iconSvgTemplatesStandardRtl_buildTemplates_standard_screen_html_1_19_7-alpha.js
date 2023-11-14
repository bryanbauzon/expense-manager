import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./screen.css";

import _implicitScopedStylesheets from "./screen.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M800 250c0-28-22-50-50-50H250c-28 0-50 22-50 50v347c0 28 22 50 50 50h500c28 0 50-22 50-50zm-75 303c0 10-9 19-19 19H294c-10 0-19-9-19-19V294c0-10 9-19 19-19h412c10 0 19 9 19 19zM412 725c-28 0-50 22-50 50v6c0 10 9 19 19 19h238c10 0 19-9 19-19v-6c0-28-22-50-50-50zm-10-216h-56c-5 0-10-5-10-10V347c0-6 5-10 10-10h56c5 0 10 4 10 10v152c0 5-5 10-10 10zm252 0H483c-5 0-10-5-10-10V347c0-5 5-10 10-10h171c5 0 10 5 10 10v152c0 6-5 10-10 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1n7dchoick4";
freezeTemplate(tmpl);
