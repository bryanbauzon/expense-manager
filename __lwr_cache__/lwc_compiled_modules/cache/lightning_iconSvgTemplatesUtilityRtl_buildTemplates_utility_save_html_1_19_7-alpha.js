import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./save.css";

import _implicitScopedStylesheets from "./save.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M371 40v136c0 10-8 19-19 19H139c-10 0-19-8-19-19V40H80a40 40 0 00-40 40v360a40 40 0 0040 40h360a40 40 0 0040-40V112l-72-72zm70 381c0 10-8 19-19 19H99c-10 0-19-8-19-19V254c0-10 8-19 19-19h323c10 0 19 8 19 19zM248 136c0 10 8 19 19 19h46c10 0 19-8 19-19V40h-83z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2bc00ge3gkp";
freezeTemplate(tmpl);
