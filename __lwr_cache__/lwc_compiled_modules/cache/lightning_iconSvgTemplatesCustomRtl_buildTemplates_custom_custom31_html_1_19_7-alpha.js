import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom31.css";

import _implicitScopedStylesheets from "./custom31.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M75.5 43.2l-4.9-15.4A6.9 6.9 0 0064 23H36a7 7 0 00-6.7 4.8l-4.8 15.4A6 6 0 0020 49v12c0 2.6 1.7 4.8 4 5.7V75c0 1.1.9 2 2 2h8a2 2 0 002-2v-8h28v8c0 1.1.9 2 2 2h8a2 2 0 002-2v-8.3a6 6 0 004-5.7V49a6 6 0 00-4.5-5.8zM30 60c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm22-17H32.2c-.7 0-1.2-.7-1-1.3l3.8-12c.1-.4.5-.7.9-.7h28c.4 0 .8.3.9.6l3.8 12.1c.2.6-.3 1.3-1 1.3H52zm17 17c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-398r12b0p3a";
freezeTemplate(tmpl);
