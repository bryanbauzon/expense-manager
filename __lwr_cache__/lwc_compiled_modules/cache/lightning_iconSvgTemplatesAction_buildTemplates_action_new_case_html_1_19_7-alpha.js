import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_case.css";

import _implicitScopedStylesheets from "./new_case.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M150 130h40c6 0 10-4 10-10v-20h120v20c0 6 4 10 10 10h40c6 0 10-4 10-10V95c0-30-25-55-55-55H194c-30 0-54 24-54 54v26c0 6 4 10 10 10zm310 40H60c-22 0-40 18-40 40v230c0 22 18 40 40 40h400c22 0 40-18 40-40V210c0-22-18-40-40-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-230blkjtep6";
freezeTemplate(tmpl);
