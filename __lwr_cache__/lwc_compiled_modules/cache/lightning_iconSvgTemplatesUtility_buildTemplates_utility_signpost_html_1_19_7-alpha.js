import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./signpost.css";

import _implicitScopedStylesheets from "./signpost.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M495 90l-42-31c-6-4-12-6-19-6H292V36c0-9-7-16-16-16h-32c-9 0-16 7-16 16v16H68c-9 0-16 7-16 16v64c0 9 7 16 16 16h366a30 30 0 0019-6l42-31c7-6 7-16 0-21zm-43 138H292v-24c0-5-3-8-8-8h-48c-5 0-8 3-8 8v24H86a30 30 0 00-19 6l-42 31c-7 5-7 15 0 21l42 31c6 4 12 6 19 6h366c9 0 16-7 16-16v-64c0-8-7-15-16-15zM292 433v-53c0-5-3-8-8-8h-48c-5 0-8 3-8 8v53c-32 9-50 28-55 52-2 7 4 15 12 15h151c8 0 14-7 12-15-6-24-24-43-56-52z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5k8tdhtu8pk";
freezeTemplate(tmpl);
