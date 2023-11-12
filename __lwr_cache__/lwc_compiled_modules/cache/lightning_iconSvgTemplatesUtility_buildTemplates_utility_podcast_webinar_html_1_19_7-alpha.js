import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./podcast_webinar.css";

import _implicitScopedStylesheets from "./podcast_webinar.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M480 228c0-49-18-96-50-132l-4-4c-40-44-100-72-166-72-63 0-121 26-161 66h-1c-37 38-58 89-58 142s21 104 59 142c8 8 20 8 28 0s8-21 0-29a159.8 159.8 0 01-12-211c4-5 7-9 12-13 1-1 2-2 2-3 33-34 80-54 131-54 98 0 178 76 179 169 0 42-17 83-47 112a20.5 20.5 0 0029 29c38-38 59-88 59-142z"${3}/><path d="M396 229c0-1 0-1 0 0 0-72-61-130-136-130-62 0-114 39-131 92a117.3 117.3 0 0028 120 20.5 20.5 0 0029-29 75 75 0 01-22-53c0-49 45-88 96-88s96 40 96 88c0 20-8 39-22 53-8 8-8 21 0 29s20 8 28 0c22-22 34-51 34-82zm-114 95h-44c-17 0-32 14-32 32v113c0 17 14 32 32 32h44c17 0 32-14 32-32V355c0-17-15-31-32-31z"${3}/><circle cx="260" cy="232" r="54"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-49vsdu9d1ts";
freezeTemplate(tmpl);
