import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contact_request.css";

import _implicitScopedStylesheets from "./contact_request.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M495 219c-166 0-299 123-299 274 0 48 14 93 36 133 4 6 5 14 3 21l-39 107c-4 10 6 19 16 16l109-41c6-3 14-1 21 3a313 313 0 00352-29c23-17 49-50 49-50 33-45 53-99 53-157-1-155-135-277-301-277zm163 272L522 625c-6 6-15 6-21 0l-21-21c-6-6-6-16 0-21l55-55c6-6 1-17-7-17h-16c-62-1-116 38-138 92-2 4-8 7-14 1l-27-27c-6-6-6-12-4-14 35-66 103-111 175-111l26-1c8 0 13-11 7-17l-55-56c-6-6-4-15 1-21l21-21c6-6 16-6 21 0l133 134c7 6 6 15 0 21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2n3a2hbn941";
freezeTemplate(tmpl);
