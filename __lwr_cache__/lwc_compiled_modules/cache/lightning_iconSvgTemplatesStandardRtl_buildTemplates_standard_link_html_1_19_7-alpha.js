import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./link.css";

import _implicitScopedStylesheets from "./link.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M515 694l-26-4-27-7c-5-2-11-1-15 3l-6 6a99 99 0 01-133 7 96 96 0 01-5-140l95-95a94 94 0 01103-21c12 5 23 12 32 21 5 5 9 11 12 17 5 8 16 10 23 3l35-35c5-5 6-13 1-19a163 163 0 00-47-44 171 171 0 00-214 24l-92 92c-66 66-71 173-8 241 67 72 179 74 248 5l31-31c10-7 5-22-7-23zm230-449c-68-63-176-58-241 8l-29 27c-9 9-3 23 9 24 18 1 35 5 53 11 5 2 11 0 15-3l6-6c36-36 94-40 133-7a96 96 0 015 140l-95 95a94 94 0 01-103 21c-12-5-23-12-32-21-5-5-9-10-12-16-5-8-16-10-23-3l-35 35c-5 5-6 13-1 19a163 163 0 00105 65 171 171 0 00156-47l95-95c67-68 66-181-6-247z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-16us1thib3f";
freezeTemplate(tmpl);
