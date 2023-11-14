import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apex_plugin.css";

import _implicitScopedStylesheets from "./apex_plugin.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M262 181L373 70c6-6 6-15 0-21l-24-24c-6-6-15-6-21 0L217 136zm122 126l111-111c6-6 6-15 0-21l-24-24c-6-6-15-6-21 0L339 262zm-16 92l4-8c1-4 0-8-2-11l-2-2-225-225c-2-3-7-4-11-4s-8 2-11 5l-6 5-3 4-4 5-4 6-4 8-4 9-4 11-4 12-4 14a478 478 0 00-8 52l-1 22v24l1 26 2 28 1 8h1l-52 52c-8 4-8 14-3 20l37 37c6 6 15 6 21 0l52-52c19 2 37 3 56 3l47-1c13-1 26-2 38-5l30-7c8-2 16-5 23-9l17-9c7-4 14-10 20-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1r1mmmgtikr";
freezeTemplate(tmpl);
