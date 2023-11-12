import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./open_folder.css";

import _implicitScopedStylesheets from "./open_folder.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M460 140H233c-14 0-27-8-35-20l-35-60a40 40 0 00-35-20H60a40 40 0 00-40 40v360a40 40 0 0040 40h400a40 40 0 0040-40V180a40 40 0 00-40-40zm0-80H219c-4 0-6 4-4 7l16 27c2 4 5 6 9 6h220c11 0 22 2 31 6 4 2 9-1 9-6a40 40 0 00-40-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-57l6k3qsmc9";
freezeTemplate(tmpl);
