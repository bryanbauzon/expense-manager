import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./slider.css";

import _implicitScopedStylesheets from "./slider.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M713 464h62a25 25 0 0125 25v25a25 25 0 01-25 25h-62a10 10 0 01-10-13 100 100 0 003-25 119 119 0 00-3-26c-2-7 3-12 10-11zM310 688h-85a25 25 0 00-25 25v25a25 25 0 0025 25h85a75 75 0 100-75zm193 12a119 119 0 013 26 100 100 0 01-4 25 10 10 0 0011 13h262a25 25 0 0025-25v-25a25 25 0 00-25-25H513c-8-1-12 4-10 11zm50-450a119 119 0 013 26 100 100 0 01-3 25 10 10 0 0010 13h212a25 25 0 0025-25v-25a25 25 0 00-25-25H563c-7-1-12 4-10 11zm-193-12H225a25 25 0 00-25 25v25a25 25 0 0025 25h135a75 75 0 100-75zm150 225H225a25 25 0 00-25 25v25a25 25 0 0025 25h285a75 75 0 100-75z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-9u5kpe6i5i";
freezeTemplate(tmpl);
