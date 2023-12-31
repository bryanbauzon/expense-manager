import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./expense.css";

import _implicitScopedStylesheets from "./expense.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M750 238H250a46 46 0 00-46 46v456a11 11 0 0019 8l41-41a10 10 0 0116 0l52 52a10 10 0 0016 0l41-41a10 10 0 0116 0l41 41a10 10 0 0016 0l41-41a10 10 0 0116 0l41 41a10 10 0 0016 0l41-41a10 10 0 0116 0l41 41a10 10 0 0016 0l41-41a10 10 0 0116 0l30 30a11 11 0 0019-8V283a45 45 0 00-46-45zM530 504v11a55 55 0 01-31 10 56 56 0 1156-60 45 45 0 00-25 39zm150 141a15 15 0 01-15 14h-90a14 14 0 01-14-14v-14a14 14 0 0114-14h91a14 14 0 0114 14zm0-63a15 15 0 01-15 14h-90a14 14 0 01-14-14v-14a14 14 0 0114-14h91a14 14 0 0114 14zm0-64a15 15 0 01-15 14h-90a14 14 0 01-14-14v-14a14 14 0 0114-14h91a14 14 0 0114 14zm1-57a34 34 0 00-14-2h-29v-30a40 40 0 01-40-40H400a40 40 0 01-40 40v84a40 40 0 0140 40h132a34 34 0 00-2 14v14a66 66 0 003 15H353a34 34 0 01-34-34V381a34 34 0 0134-34h294a34 34 0 0134 34z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-62qmmi3hdvb";
freezeTemplate(tmpl);
