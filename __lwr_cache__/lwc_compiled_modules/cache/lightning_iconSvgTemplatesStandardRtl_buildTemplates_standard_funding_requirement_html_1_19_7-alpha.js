import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./funding_requirement.css";

import _implicitScopedStylesheets from "./funding_requirement.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M435 513v189c0 5 3 8 8 8l4-1c37-20 114-77 114-80 0-23 7-39 10-49a141 141 0 0132-49l20-16V413c0-4-3-7-8-7h-4l-168 94a15 15 0 00-8 13zm-16-52l170-94c3-3 4-7 2-11l-3-2-152-87a50 50 0 00-49 1l-153 86c-4 2-4 7-2 11l2 2 169 94c5 2 11 2 16 0zm-39 39l-168-94c-4-2-9-1-11 3l-1 4v169c0 17 9 33 24 41l152 86c4 2 9 0 11-3l1-4V513a15 15 0 00-8-13zm309.4 17.6c-61.3 0-110.6 49.3-110.6 110.6s49.3 110.6 110.6 110.6S800 689.5 800 628.2s-49.3-110.6-110.6-110.6zm61.7 82.9l-70.5 71.4a7.1 7.1 0 01-10.1 0l-38.7-39.2a7.1 7.1 0 010-10.1l10.1-10.1a7.1 7.1 0 0110.1 0l20.3 20.7a5 5 0 006.9 0l51.6-53.5a7.1 7.1 0 0110.1 0l10.1 10.1c3.2 2.8 3.2 7.4 0 10.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6g8jg1nshrn";
freezeTemplate(tmpl);
