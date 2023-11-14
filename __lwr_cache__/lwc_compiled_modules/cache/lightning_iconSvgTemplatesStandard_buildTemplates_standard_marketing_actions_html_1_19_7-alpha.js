import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./marketing_actions.css";

import _implicitScopedStylesheets from "./marketing_actions.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M475 260c-51 3-92 44-95 95 2-52 43-93 95-95zm105 95c-3-51-44-92-95-95 52 2 93 43 95 95zm56 193l-102-35c-8-3-14-10-14-19V358c0-21-17-38-38-38h-4c-21 0-38 17-38 38v269c0 23-29 32-41 12l-26-55a46 46 0 00-67-14l-16 12 86 204c4 9 12 14 22 14h226c11 0 20-8 23-18l40-143c8-39-14-78-51-91z"${3}/><path d="M380 462V355c3-51 44-92 95-95h10c51 3 92 44 95 95v107c0 9 11 13 17 7a160 160 0 10-234 0c6 6 17 2 17-7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1saq51jdrsl";
freezeTemplate(tmpl);
