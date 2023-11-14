import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./skill_entity.css";

import _implicitScopedStylesheets from "./skill_entity.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M773 557l-73-108v-9a241 241 0 00-297-233 239 239 0 00-183 233c0 49 12 93 36 127 42 60 70 108 53 173-4 15-1 30 9 42 9 12 22 18 37 18h197c23 0 43-16 47-38l2-12c2-12 12-20 24-20h14c22 0 41-13 47-34 6-23 14-56 15-96h52c9 0 18-8 22-16s3-21-2-27zM614 420c-8 13-24 20-47 20-123 0-132 90-132 133 0 20-16 37-36 37h-3c-17 0-31-12-35-29-4-18-16-28-28-37-8-6-16-12-20-21a168 168 0 01146-252c68 0 129 41 155 103 1 3 12 27 0 46z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1vrk09vdk5f";
freezeTemplate(tmpl);
