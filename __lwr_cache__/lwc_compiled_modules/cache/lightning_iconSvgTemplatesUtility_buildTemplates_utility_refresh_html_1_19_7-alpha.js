import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./refresh.css";

import _implicitScopedStylesheets from "./refresh.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M465 40h-30c-8 0-15 7-15 15v70c0 9-5 13-12 7l-10-10a210 210 0 10-12 309c7-6 7-16 1-22l-21-21c-5-5-14-6-20-1a152 152 0 01-172 14 152 152 0 0177-281 150 150 0 01118 58c3 8-4 12-13 12h-70c-8 0-15 7-15 15v31c0 8 6 14 14 14h183c7 0 13-6 13-13V55c-1-8-8-15-16-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-leb892lm6b";
freezeTemplate(tmpl);
