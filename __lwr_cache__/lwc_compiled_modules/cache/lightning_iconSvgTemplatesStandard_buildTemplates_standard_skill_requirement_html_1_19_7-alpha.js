import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./skill_requirement.css";

import _implicitScopedStylesheets from "./skill_requirement.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M501 579a68 68 0 1166-68 67 67 0 01-66 68zm307-113h-56V267a68 68 0 00-67-67H315a68 68 0 00-67 67v199h-56a34 34 0 000 67l56 1v199a68 68 0 0067 67h370a68 68 0 0067-67V534h56a34 34 0 000-67zM667 594l-11 20a27 27 0 01-22 12 28 28 0 01-9-2l-32-13a140 140 0 01-47 28l-6 37a25 25 0 01-24 21h-24a25 25 0 01-25-21l-6-37a121 121 0 01-45-26l-34 13a28 28 0 01-9 2 25 25 0 01-21-13l-12-21a25 25 0 016-32l28-23a133 133 0 01-3-27 124 124 0 013-26l-28-24a25 25 0 01-6-32l12-21a24 24 0 0121-13 28 28 0 019 2l34 13a139 139 0 0145-27l6-34a23 23 0 0125-20h24a24 24 0 0124 19l6 35a136 136 0 0145 26l34-13a28 28 0 019-2 25 25 0 0122 13l11 21a27 27 0 01-6 32l-28 24a126 126 0 013 27 124 124 0 01-3 25l28 24a26 26 0 016 33z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6gg9s1is5tu";
freezeTemplate(tmpl);
