import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom15.css";

import _implicitScopedStylesheets from "./new_custom15.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M420 229c-28-12-32-22-32-34s8-22 18-31c17-15 26-36 26-60 0-45-28-84-79-84-43 0-70 29-77 66-1 3 1 6 3 8 36 26 58 69 58 121 0 36-12 69-34 94-3 4-2 10 3 13l46 22c5 3 10 5 16 5h92c22 0 40-18 40-39v-6c0-38-39-58-80-75zM277 361c-34-14-38-26-38-40s10-26 21-37c19-18 30-42 30-70 0-53-34-98-93-98s-93 46-93 98c0 29 10 53 30 70 11 10 21 23 21 37s-5 26-38 40c-49 20-95 43-96 86v7c-1 25 21 46 48 46h256c26 0 48-21 48-46v-7c-1-43-47-66-96-86z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6g8odkiup2n";
freezeTemplate(tmpl);
