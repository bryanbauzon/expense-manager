import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./buyer_group_qualifier.css";

import _implicitScopedStylesheets from "./buyer_group_qualifier.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M762 526l-6 1-5 4-159 174-1 1-2 1-4-2-55-53-5-4-6-1-5 1-6 4-21 22-3 5-1 6 1 5 3 5 85 84a26 26 0 0028 5c4-1 6-3 9-6l187-206 3-5 1-5-1-6-4-5-23-21c-2-3-6-4-10-4zm-402-99c-13-21-21-46-21-73 0-46 20-85 51-108a64 64 0 00-58-32c-45 0-70 35-70 78 0 22 8 41 22 55 9 8 16 18 16 29s-4 20-30 31c-36 16-69 37-70 72 0 22 15 39 36 39h33c5 0 11-3 13-8 16-30 47-48 72-61 9-4 12-14 6-22zm296-20c-25-11-29-21-29-31 0-11 7-21 15-29 15-14 23-33 23-55 0-43-25-78-70-78-27 0-47 12-58 32 31 23 50 61 50 108 0 27-7 52-21 73-5 8-2 18 6 23 26 12 56 31 72 61 3 4 8 7 14 7h33c21 0 36-16 36-39-1-34-34-56-71-72zm-125 75c-28-12-32-23-32-34s7-24 17-32c16-15 25-37 25-62 0-46-28-86-77-86s-78 40-78 86c0 25 10 46 26 62 9 8 17 20 17 32s-5 22-32 34c-42 17-80 37-81 75 0 25 18 47 41 47h212c23 0 41-22 41-47-1-38-40-58-80-75z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-496m72r71sv";
freezeTemplate(tmpl);
