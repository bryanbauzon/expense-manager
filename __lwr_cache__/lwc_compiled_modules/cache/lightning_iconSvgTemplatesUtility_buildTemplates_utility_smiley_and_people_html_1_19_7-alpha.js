import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./smiley_and_people.css";

import _implicitScopedStylesheets from "./smiley_and_people.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50 26.1a24 24 0 01-24 24.1A24 24 0 0126 2a24 24 0 0124 24.1zM17 15c-1.7 0-3 1.8-3 4s1.3 4 3 4 3-1.8 3-4-1.3-4-3-4zm18 0c-1.7 0-3 1.8-3 4s1.3 4 3 4 3-1.8 3-4-1.3-4-3-4zM11 29c.6 7.6 6.2 14 15 14s14.4-6.4 15-14H11z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-6596qg8gead";
freezeTemplate(tmpl);
