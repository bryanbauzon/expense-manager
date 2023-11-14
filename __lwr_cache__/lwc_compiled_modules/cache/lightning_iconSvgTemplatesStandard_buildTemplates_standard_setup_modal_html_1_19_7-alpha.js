import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./setup_modal.css";

import _implicitScopedStylesheets from "./setup_modal.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M781 200H219c-10 0-19 9-19 19v405c0 10 9 19 19 19h562c10 0 19-9 19-19V219c0-10-9-19-19-19zM575 725c14 0 25 11 25 25a25 25 0 11-25-25m0-25c-27 0-50 23-50 50s23 50 50 50 50-22 50-50-22-50-50-50z"${3}/><circle cx="425" cy="750" r="50"${3}/><circle cx="275" cy="750" r="50"${3}/><circle cx="725" cy="750" r="50"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1mpq12tfp38";
freezeTemplate(tmpl);
