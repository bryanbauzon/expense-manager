import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./cut.css";

import _implicitScopedStylesheets from "./cut.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M407 314a82 82 0 00-47 3L139 24a10 10 0 00-14-2l-8 6a40 40 0 00-7 56l106 140c4 5 4 13 0 18l-57 75a90 90 0 00-118 72 90 90 0 00105 100 91 91 0 0073-69c5-25 0-48-12-65l42-56c6-8 18-8 24 0l42 56a87 87 0 00-12 65 88 88 0 0073 69 90 90 0 00105-100 98 98 0 00-74-75zM129 431a30 30 0 01-30-30c0-17 13-30 30-30s30 13 30 30a30 30 0 01-30 30zm260 0a30 30 0 110-60 30 30 0 0130 30c-1 17-14 30-30 30zm-76-242a10 10 0 0016 0l80-105a40 40 0 00-1-49l1-1-1 1-15-13a10 10 0 00-14 2l-88 117c-4 5-4 13 0 18l22 30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6m9disdo5g6";
freezeTemplate(tmpl);
