import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./text_template.css";

import _implicitScopedStylesheets from "./text_template.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M320 372v8h139a40 40 0 0040-40V61a40 40 0 00-40-40H181a40 40 0 00-40 40v165c12 1 25 6 34 16l16 15 2 2a53 53 0 017 62h67c28 0 50 22 52 49zm119-261c0 6-4 10-10 10h-60c-6 0-10-4-10-10V83c0-6 4-10 10-10h60c6 0 10 4 10 10zm-1 87c0 6-4 10-10 10H210c-6 0-10-4-10-10v-28c0-6 4-10 10-10h219c6 0 10 4 10 10zm-10 98H249c-6 0-10-4-10-10v-28c0-6 4-10 10-10h180c6 0 10 4 10 10v28c0 6-4 10-11 10zM24 376c-4 4-4 11 0 16l106 106c4 4 11 4 16 0l16-17c4-4 4-11 0-16l-44-44c-2-3-1-9 2-11l4-2h143c6-2 11-7 12-13v-24c-1-6-6-11-12-11H124c-5 0-8-3-8-8 0-3 0-4 2-6l44-44c4-4 4-11 0-16l-17-16c-4-5-11-5-17 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1o55jgkhral";
freezeTemplate(tmpl);
