import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./store.css";

import _implicitScopedStylesheets from "./store.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M715 544h-3c-20-2-36-8-52-19l-2-2c-7-6-14-3-17-1l-1 1c-19 14-40 21-65 21-26 0-48-8-68-23-7-5-12 0-12 0-20 16-43 24-69 24-25 0-47-7-66-22l-3-2c-6-5-12 0-12 0-19 15-40 23-64 24 0 0-8 0-8 9v186c0 4 2 13 14 15h232c12-2 14-11 14-15V608c1-4 3-8 13-8h111c4 1 8 4 8 13v125c0 14 10 16 13 16h35c3 0 13-2 13-16V557c-2-10-7-12-11-13zM465 688v4c0 5-3 13-15 13H348c-11 0-14-5-15-10v-76c0-18 10-19 14-19h106c4 0 12 3 12 16zm239-194c27 7 51 2 71-17 13-12 21-27 23-44v-2l-7-17-88-162c-4-7-12-7-15-7H308s-11 0-15 7l-88 162c-2 4-5 11-5 18v2c2 17 10 32 23 44 22 20 48 25 77 15 16-6 28-16 38-31l4-4c6-4 14-3 19 4 5 8 11 15 19 20 21 16 45 19 70 11 16-5 29-16 38-31 5-8 17-9 23 0l6 9a73 73 0 0099 13c9-6 16-14 21-22 6-8 17-8 22 0 10 16 23 26 41 31z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-lsueis4shn";
freezeTemplate(tmpl);
