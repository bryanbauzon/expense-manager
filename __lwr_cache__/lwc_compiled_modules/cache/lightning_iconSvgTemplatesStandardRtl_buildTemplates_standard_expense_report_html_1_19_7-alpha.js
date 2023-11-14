import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./expense_report.css";

import _implicitScopedStylesheets from "./expense_report.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M393 321h214a20 20 0 0020-20v-40a60 60 0 00-58-60H433a60 60 0 00-58 60v40a17 17 0 0018 20z"${3}/><path d="M714 252h-20a10 10 0 00-10 10v40a79 79 0 01-78 79H393a79 79 0 01-78-79v-40a10 10 0 00-10-10h-20a60 60 0 00-58 60v426a60 60 0 0058 60h429a60 60 0 0058-60V312a58 58 0 00-58-60zM530 594v11a55 55 0 01-31 10 56 56 0 1156-60 45 45 0 00-25 39zm150 141a15 15 0 01-15 14h-90a14 14 0 01-14-14v-14a14 14 0 0114-14h91a14 14 0 0114 14zm0-63a15 15 0 01-15 14h-90a14 14 0 01-14-14v-14a14 14 0 0114-14h91a14 14 0 0114 14zm0-64a15 15 0 01-15 14h-90a14 14 0 01-14-14v-14a14 14 0 0114-14h91a14 14 0 0114 14zm1-57a34 34 0 00-14-2h-29v-30a40 40 0 01-40-40H400a40 40 0 01-40 40v84a40 40 0 0140 40h132a34 34 0 00-2 14v14a66 66 0 003 15H353a34 34 0 01-34-34V471a34 34 0 0134-34h294a34 34 0 0134 34z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-d2oak6s833";
freezeTemplate(tmpl);
