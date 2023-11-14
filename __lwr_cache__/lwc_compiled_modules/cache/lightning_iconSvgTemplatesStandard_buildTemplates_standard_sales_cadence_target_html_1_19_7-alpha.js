import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sales_cadence_target.css";

import _implicitScopedStylesheets from "./sales_cadence_target.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M55 25c-5.3 0-10.3 1.7-14.3 4.6l3.6 3.6a20 20 0 110 33.8l-3.8 3.5A26 26 0 0055 75a25 25 0 000-50zm0 30a5 5 0 005-5 5 5 0 00-8.9-3L40.2 36.2c-.6-.7-1.6-.7-2.2-.2l-.2.2-2.3 2.3c-.7.6-.7 1.6-.2 2.2l.2.2 4 4c.4.4.4 1.2 0 1.6-.2.2-.5.3-.8.3H21.8c-.9 0-1.8.8-1.8 1.7v3.3a2 2 0 001.8 1.7H39a1.1 1.1 0 011.1 1.1c0 .2-.1.6-.3.8l-4 4c-.7.6-.7 1.6-.2 2.2l.2.2 2.3 2.3a1.6 1.6 0 002.2 0l10.9-10.8c.8 1 2.2 1.7 3.8 1.7zm0 5c-1.1 0-2.2-.2-3.2-.5L48 63.3A15 15 0 0070 50c0-8.2-6.8-15-15-15a14 14 0 00-7 1.8l3.7 3.8A10 10 0 1155 60z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1f5mucej562";
freezeTemplate(tmpl);
