import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./live_chat_visitor.css";

import _implicitScopedStylesheets from "./live_chat_visitor.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 222c-166 0-300 125-300 280 0 50 14 96 38 137 3 5 4 11 2 16l-28 89c-5 16 10 30 26 25l88-31c6-2 12-1 17 2 46 27 100 42 158 42 166 0 300-125 300-280-1-155-136-280-301-280zm-55 265c24-10 27-19 27-29 0-11-6-20-14-27a65 65 0 01-22-50c0-38 24-70 64-70s63 32 63 70c0 20-7 38-21 50-8 7-14 16-14 27 0 10 3 19 26 28 34 14 64 34 66 64 2 20-13 41-32 41H414c-19 0-34-21-34-41 0-30 32-48 65-63zm-38 205c-17 0-31-14-31-31s14-31 31-31 31 14 31 31-14 31-31 31zm93 0c-17 0-31-14-31-31s14-31 31-31 31 14 31 31-14 31-31 31zm93 0c-17 0-31-14-31-31s14-31 31-31 31 14 31 31-15 31-31 31z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2e9ndkpj5l7";
freezeTemplate(tmpl);
