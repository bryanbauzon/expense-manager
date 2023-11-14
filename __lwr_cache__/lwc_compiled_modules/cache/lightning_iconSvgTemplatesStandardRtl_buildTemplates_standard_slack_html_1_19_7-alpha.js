import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./slack.css";

import _implicitScopedStylesheets from "./slack.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M326 579a63 63 0 11-63-63h63zm32 0a64.3 64.3 0 0161-66 63.6 63.6 0 0166 61v163a63.5 63.5 0 01-127 0zm63-253a63 63 0 1163-63v63zm0 32a64.3 64.3 0 0166 61 63.6 63.6 0 01-61 66H263a63.5 63.5 0 010-127zm253 63a63 63 0 1163 63h-63zm-32 0a64.3 64.3 0 01-61 66 63.6 63.6 0 01-66-61V263a63.5 63.5 0 01127 0zm-63 253a63 63 0 11-63 63v-63zm0-32a64.3 64.3 0 01-66-61 63.6 63.6 0 0161-66h163a63.5 63.5 0 010 127z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-o1b190aco";
freezeTemplate(tmpl);
