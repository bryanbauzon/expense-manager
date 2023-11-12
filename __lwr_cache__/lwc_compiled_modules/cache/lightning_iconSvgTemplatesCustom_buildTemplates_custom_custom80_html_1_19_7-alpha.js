import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom80.css";

import _implicitScopedStylesheets from "./custom80.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M290 600c-55 0-100 45-100 100s45 100 100 100 100-45 100-100-45-100-100-100zm0 140c-22 0-40-18-40-40s18-40 40-40 40 18 40 40-18 40-40 40zm420-140c-55 0-100 45-100 100s45 100 100 100 100-45 100-100-45-100-100-100zm0 140c-22 0-40-18-40-40s18-40 40-40 40 18 40 40-18 40-40 40zm-6-200c22-1 43 3 63 10 10 4 21-1 26-10 51-97-31-142-83-168-14-6-30 3-30 18v58c0 12-8 24-20 22-74-12-140-90-220-90s-90 80-90 80c-56 0-111-4-136-10-12-3-24 7-24 20 0 0 0 70 100 70a159 159 0 01153 205c-2 7 3 14 11 14h92c8 0 13-7 11-14a161 161 0 01147-205zM453 315c1 8 7 15 14 17l106 36c10 3 20-1 25-10l9-17c4-7-1-15-8-16-31-3-96-15-77-50 17-30 52-22 75-12 9 4 18-6 14-15a86 86 0 00-87-48c-47 5-80 51-74 98z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2hj9dgaa8fg";
freezeTemplate(tmpl);
