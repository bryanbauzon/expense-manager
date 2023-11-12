import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share.css";

import _implicitScopedStylesheets from "./share.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M485 300h-30c-8 0-15 7-15 15v110c0 8-7 15-15 15H95c-8 0-15-7-15-15V215c0-8 7-15 15-15h40c8 0 15-7 15-15v-30c0-8-7-15-15-15H60c-22 0-40 18-40 40v280c0 22 18 40 40 40h400c22 0 40-18 40-40V315c0-8-7-15-15-15zM340 140c-100 0-191 89-199 194-1 8 6 16 15 16h30c8 0 14-6 15-13 7-75 71-137 149-137h16c9 0 13 11 7 17l-55 56c-6 6-6 15 0 21l21 21c6 6 15 6 21 0l136-135c6-6 6-15 0-21L361 24c-6-6-15-6-21 0l-21 21c-6 6-7 15-1 21l56 56c6 6 2 17-7 17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7cr35aq1dsq";
freezeTemplate(tmpl);
