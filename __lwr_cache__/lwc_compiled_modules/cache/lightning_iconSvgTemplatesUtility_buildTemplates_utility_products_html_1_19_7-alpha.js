import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./products.css";

import _implicitScopedStylesheets from "./products.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M319 395h60a14 14 0 0015-15V140a14 14 0 00-15-15h-60a14 14 0 00-15 15v240a14 14 0 0015 15zm135 0h30a14 14 0 0015-15V140a14 14 0 00-15-15h-30a14 14 0 00-15 15v240a14 14 0 0015 15zm-204 0a14 14 0 0015-15V140a14 14 0 00-15-15 14 14 0 00-15 15v240a14 14 0 0015 15zm-84 0h14a14 14 0 0015-15V140a14 14 0 00-15-15h-15a14 14 0 00-15 15v240a14 14 0 0016 15zm-130 0h60a14 14 0 0015-15V140a14 14 0 00-15-15H36a14 14 0 00-15 15v240a15 15 0 0015 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7b7vutec7b8";
freezeTemplate(tmpl);
