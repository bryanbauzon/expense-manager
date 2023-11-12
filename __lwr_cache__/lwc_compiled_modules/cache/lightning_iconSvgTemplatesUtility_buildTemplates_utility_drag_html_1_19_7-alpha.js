import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./drag.css";

import _implicitScopedStylesheets from "./drag.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M309 343c0 18-22 25-32 10l-20-43c-11-19-35-23-53-11l-13 10 67 159c3 7 10 11 18 11h176c9 0 16-6 18-14l31-111c8-31-10-61-38-72l-80-27c-113-41-76 84-74 88zM18 285h58v58H18zM144 40h58v58h-58zm0 380h58v58h-58zM18 158h58v58H18zm0-117h58v58H18zm253-1h58v58h-58zm127 0h58v58h-58zM18 421h58v58H18zm380-253h58v58h-58z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5cqjs7seh9p";
freezeTemplate(tmpl);
