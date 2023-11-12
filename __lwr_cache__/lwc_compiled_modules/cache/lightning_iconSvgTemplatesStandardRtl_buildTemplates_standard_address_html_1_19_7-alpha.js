import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./address.css";

import _implicitScopedStylesheets from "./address.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49 18.9a23.7 23.7 0 00-23.7 23.9c0 16.5 17 31.6 22.2 35.6a2.5 2.5 0 003.1 0c5.3-4.2 22.1-19.1 22.1-35.6A23.7 23.7 0 0049 18.9zm0 33.7a10 10 0 1110-10 10 10 0 01-10 10z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-cmmstcb627";
freezeTemplate(tmpl);
