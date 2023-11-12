import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./identity.css";

import _implicitScopedStylesheets from "./identity.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M46 8H34.9l.1 1a7 7 0 01-7 7h-6a7 7 0 01-7-7l.1-1H6a4 4 0 00-4 4v30a4 4 0 004 4h40a4 4 0 004-4V12a4 4 0 00-4-4zM21.7 38H10.3C9 38 8 36.8 8 35.5c0-2 2.1-3.1 4.3-4 1.5-.6 1.7-1.2 1.7-1.9 0-.6-.4-1.2-.9-1.7-.9-.8-1.4-2-1.4-3.3 0-2.5 1.5-4.6 4.2-4.6s4.2 2.1 4.2 4.6c0 1.3-.5 2.5-1.4 3.3-.5.5-.9 1.1-.9 1.7 0 .6.2 1.2 1.7 1.9 2.2.9 4.3 2 4.3 4 .2 1.3-.8 2.5-2.1 2.5zM44 34c0 .6-.4 1-1 1H29c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v2zm2-8c0 .6-.4 1-1 1H29c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v2z"${3}/><path d="M22 12h6c1.7 0 3-1.3 3-3s-1.3-3-3-3h-6c-1.7 0-3 1.3-3 3s1.3 3 3 3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5pk535v1ovb";
freezeTemplate(tmpl);
