import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customer_360.css";

import _implicitScopedStylesheets from "./customer_360.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M788 508c7-7 7-16 4-24-4-9-12-14-22-14-7 0-13 2-19 8l-5 5c-9-132-118-236-252-236-139 0-252 113-252 252s113 252 252 252c119 0 218-82 245-193zM494 701c-112 0-202-91-202-202s91-202 202-202c106 0 193 82 201 186l-5-5c-3-3-6-5-10-6-10-4-20-1-27 7-8 10-8 24 1 33l36 36c-21 87-101 153-196 153zm123-130v11c0 14-11 25-25 25H395c-14 0-25-11-25-25v-11c0-30 35-48 68-62 1 0 2-1 3-2 2-1 5-1 8 0 13 9 28 14 44 14s31-5 44-13c2-2 5-2 8 0 1 0 2 1 3 2 34 13 69 31 69 61z"${3}/><ellipse cx="494" cy="428" rx="61" ry="68"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4c5803g84io";
freezeTemplate(tmpl);
