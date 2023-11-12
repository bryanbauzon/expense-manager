import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./text_template.css";

import _implicitScopedStylesheets from "./text_template.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M201 372v-2a52 52 0 0152-49h67a53 53 0 017-62l2-2 16-15c9-10 22-15 34-16V61a40 40 0 00-40-40H61a40 40 0 00-40 40v279a40 40 0 0040 40h139v-8zM81 83c0-6 4-10 10-10h60c6 0 10 4 10 10v28c0 6-4 10-10 10H91c-6 0-10-4-10-10zm0 87c0-6 4-10 10-10h219c6 0 10 4 10 10v28c0 6-4 10-10 10H92c-6 0-10-4-10-10zm0 116v-28c0-6 4-10 10-10h180c6 0 10 4 10 10v28c0 6-4 10-10 10H92c-7 0-11-4-11-10zm311-16c-6-5-13-5-17 0l-17 16c-4 5-4 12 0 16l44 44c2 2 2 3 2 6 0 5-3 8-8 8H253c-6 0-11 5-12 11v24c1 6 6 11 12 13h143l4 2c3 2 4 8 2 11l-44 44c-4 5-4 12 0 16l16 17c5 4 12 4 16 0l106-106c4-5 4-12 0-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-tvm3l2djl";
freezeTemplate(tmpl);
