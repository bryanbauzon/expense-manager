import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./agent_home.css";

import _implicitScopedStylesheets from "./agent_home.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M509 204l287 287a15 15 0 013 14c-1 5-8 8-13 8h-62v275c0 8-5 12-13 12H288a12 12 0 01-13-10V513h-63a10 10 0 01-11-8 11 11 0 013-14l287-287a13 13 0 0118 0zM404 650h-53a11 11 0 00-11 11v68a11 11 0 0011 11h53a11 11 0 0011-11v-68a11 11 0 00-11-11zm120-90h-53a11 11 0 00-11 11v158a11 11 0 0011 11h53a11 11 0 0011-11V571a11 11 0 00-11-11zm120-90h-53a11 11 0 00-11 11v248a11 11 0 0011 11h53a11 11 0 0011-11V481a11 11 0 00-11-11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7r9obidkh6";
freezeTemplate(tmpl);
