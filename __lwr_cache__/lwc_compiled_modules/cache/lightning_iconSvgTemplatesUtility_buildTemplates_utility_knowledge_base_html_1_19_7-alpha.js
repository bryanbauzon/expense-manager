import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./knowledge_base.css";

import _implicitScopedStylesheets from "./knowledge_base.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M95 350h130c8 0 15-7 15-15V100c0-17-18-30-32-30H95c-8 0-15 7-15 15v250c0 8 7 15 15 15zm397-234c-6-2-12 3-12 10v249c0 8-7 15-15 15H55c-8 0-15-7-15-15V127c0-7-8-12-14-9a46 46 0 00-26 42v230a40 40 0 0040 40h165c8 0 15 7 15 15s7 15 15 15h50c8 0 15-7 15-15s7-15 15-15h165a40 40 0 0040-40V160c0-21-7-39-28-44zM295 350h130c8 0 15-7 15-15V85c0-8-7-15-15-15H312c-15 0-32 13-32 30v235c0 8 7 15 15 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7js6oklqt3b";
freezeTemplate(tmpl);
