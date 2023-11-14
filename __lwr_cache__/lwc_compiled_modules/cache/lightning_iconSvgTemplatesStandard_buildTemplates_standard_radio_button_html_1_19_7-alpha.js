import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./radio_button.css";

import _implicitScopedStylesheets from "./radio_button.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M335 531a134 134 0 100 268 134 134 0 000-268zm0 209c-41 0-75-34-75-75s34-75 75-75 75 34 75 75c0 42-34 75-75 75zm330-209a134 134 0 100 268 134 134 0 000-268zM335 200a134 134 0 100 268 134 134 0 000-268zm0 209c-41 0-75-34-75-75s34-75 75-75 75 34 75 75-34 75-75 75zm330-209a134 134 0 100 268 134 134 0 000-268z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1cv1ti5p1mq";
freezeTemplate(tmpl);
