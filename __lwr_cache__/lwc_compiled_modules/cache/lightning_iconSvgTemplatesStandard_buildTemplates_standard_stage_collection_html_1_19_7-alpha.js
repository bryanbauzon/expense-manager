import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./stage_collection.css";

import _implicitScopedStylesheets from "./stage_collection.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M759 458c-15 0-29 8-36 21h-45c-11-90-87-159-179-159s-168 69-179 158h-43c-7-12-21-21-36-21-23 0-42 19-42 42s19 42 42 42c15 0 28-8 36-19h44c11 89 87 158 178 158s167-69 178-157h45c8 12 21 19 36 19 23 0 42-19 42-42s-18-42-41-42zM499 620c-66 0-120-54-120-120s54-120 120-120 120 54 120 120-54 120-120 120z"${3}/><circle cx="498" cy="500" r="42"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6k9vup8hjcn";
freezeTemplate(tmpl);
