import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./news.css";

import _implicitScopedStylesheets from "./news.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M783 269H310c-9 0-17 8-17 17v352c0 14-13 25-27 23-12-2-20-13-20-24V385c0-7-5-12-12-12h-17c-9 0-17 8-17 17v294c0 25 21 46 46 46h508c25 0 46-21 46-46V287c0-10-8-18-17-18zM523 604c0 7-5 12-12 12H373c-7 0-12-5-12-12v-23c0-7 5-12 12-12h138c7 0 12 5 12 12zm0-92c0 7-5 12-12 12H373c-7 0-12-5-12-12v-23c0-7 5-12 12-12h138c7 0 12 5 12 12zm208 92c0 7-5 12-12 12H581c-7 0-12-5-12-12v-23c0-7 5-12 12-12h138c7 0 12 5 12 12zm0-92c0 7-5 12-12 12H581c-7 0-12-5-12-12v-23c0-7 5-12 12-12h138c7 0 12 5 12 12zm0-93c0 7-5 12-12 12H373c-7 0-12-5-12-12v-69c0-7 5-12 12-12h346c7 0 12 5 12 12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-25pkarjjpkr";
freezeTemplate(tmpl);
