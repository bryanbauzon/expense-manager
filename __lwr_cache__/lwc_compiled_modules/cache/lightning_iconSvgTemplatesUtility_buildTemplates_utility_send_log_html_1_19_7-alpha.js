import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./send_log.css";

import _implicitScopedStylesheets from "./send_log.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 48c0-5 3-8 8-8h325c4 0 7 3 7 8v45c0 4-3 7-8 7H28a8 8 0 01-7-8V48zm8 112c-5 0-8 3-8 8v44c0 5 3 8 8 8h325c4 0 7-3 7-8v-44c0-5-3-8-8-8H28zm0 120c-5 0-8 3-8 8v44c0 5 3 8 8 8h176l-16-60H28zm212 190l24-90h101c3 0 5-2 5-5v-10c0-4-2-6-5-6H265l-25-87a10 10 0 01-1-5c0-4 4-7 8-7h3l243 101c4 1 6 5 6 8s-2 6-5 7L250 479h-4a8 8 0 01-7-7v-3z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 520 520",
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
tmpl.stylesheetToken = "lwc-5at9r38sf85";
freezeTemplate(tmpl);
