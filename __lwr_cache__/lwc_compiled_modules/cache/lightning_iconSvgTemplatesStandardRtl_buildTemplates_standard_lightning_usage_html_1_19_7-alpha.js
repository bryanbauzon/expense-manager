import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lightning_usage.css";

import _implicitScopedStylesheets from "./lightning_usage.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M790 209c0-11-9-20-20-20h-20c-11 0-20 9-20 20v500c0 10-9 19-19 19H210c-11 0-20 9-20 20v21c0 11 9 20 20 20h530c28 0 50-22 50-50zM614 570L476 431l-78 77c-5 6-13 9-21 9s-15-3-21-9L201 351a29 29 0 010-42c11-12 30-12 42 0l135 137 77-77c11-12 30-12 42 0l160 159c12 11 12 30 0 42-6 6-13 9-21 9s-16-3-22-9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7l33rejvhvl";
freezeTemplate(tmpl);
