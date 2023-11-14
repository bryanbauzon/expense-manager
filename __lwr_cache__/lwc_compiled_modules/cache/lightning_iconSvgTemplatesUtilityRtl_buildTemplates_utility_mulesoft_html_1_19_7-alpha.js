import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./mulesoft.css";

import _implicitScopedStylesheets from "./mulesoft.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26 48.12c-12.07 0-21.84-9.83-21.84-21.97S13.93 4.17 26 4.17 47.84 14 47.84 26.14 38.07 48.11 26 48.11zm0-46.11a24 24 0 10-.01 48.01A24.01 24.01 0 0026 2zM20 36.9a11.2 11.2 0 01-6.2-10c0-2.3.7-4.5 1.9-6.4l7.9 11.9h4.7l8-11.9A11.8 11.8 0 0138 27a11 11 0 01-5.5 9.7l1.6 5.7a18 18 0 001-31.5L26 25l-9-14.3a18.2 18.2 0 00-9 15.6 18 18 0 0010.4 16.3L20 37z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-4jo5otc9dub";
freezeTemplate(tmpl);
