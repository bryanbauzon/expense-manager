import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customer_workspace.css";

import _implicitScopedStylesheets from "./customer_workspace.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M368 226c12-1 21 8 21 19v15c0 11-9 20-20 20h-62c-22 0-40 18-41 40v389c0 22 17 40 39 40h389c22 0 40-17 40-39v-63c0-11 9-21 20-21h15c11 0 20 8 20 20v76c0 45-36 82-81 82H293c-46 0-82-37-82-82V308c0-46 36-82 81-83h77v1zm220 311h107c4 0 7-2 7-6l19-69c1-4-1-7-4-9H549l-2-10c-1-5-5-8-10-8h-18c-6 0-11 4-11 10-1 6 3 11 9 11h12l9 33 24 83c2 4 6 8 11 8h126c6 0 10-5 11-11 0-6-4-11-10-11H588c-5 0-9-3-10-7v-1c-2-6 2-11 7-13h3zm-80-38l-4-13c-6-2-13-6-17-12a43 43 0 0133-71h17c14 0 27 7 35 19h46c-13-9-28-17-43-23-26-11-29-21-29-32 1-11 6-21 15-28 16-15 24-36 23-57 0-42-26-78-71-78s-71 36-71 78c0 21 9 42 24 57 9 7 15 17 15 29 0 10-4 20-29 31-38 15-74 34-75 68-1 22 16 41 38 43h96l-3-12z"${3}/><circle cx="591" cy="620" r="18"${3}/><circle cx="678" cy="620" r="18"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2gocdhetujn";
freezeTemplate(tmpl);
