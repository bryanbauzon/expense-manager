import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./einstein_replies.css";

import _implicitScopedStylesheets from "./einstein_replies.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 224c-167 0-300 123-300 274 0 48 14 93 36 133 4 6 5 14 3 21l-39 107c-4 10 6 19 16 16l109-41c6-3 14-1 21 3 45 25 99 40 157 40 164-2 298-123 298-276-1-155-135-277-301-277zm133 245l-70 52c-3 2-4 6-3 10l33 88c2 8-6 15-13 10l-75-56c-3-2-7-2-10 0l-76 56c-7 5-16-2-13-10l32-88c1-3 0-7-3-10l-70-52c-7-5-3-17 5-17h86c4 0 7-1 8-5l27-87c2-8 14-7 16 1l26 86c1 3 5 5 8 5h86a9 9 0 016 17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2lgsbvufkfm";
freezeTemplate(tmpl);
