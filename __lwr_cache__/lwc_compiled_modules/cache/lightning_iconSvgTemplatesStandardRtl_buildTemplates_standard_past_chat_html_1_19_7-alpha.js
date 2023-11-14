import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./past_chat.css";

import _implicitScopedStylesheets from "./past_chat.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M495 219c-167 0-300 123-300 274 0 48 14 93 36 133 4 6 5 14 3 21l-39 107c-4 10 6 19 16 16l109-41c6-3 14-1 21 3 45 25 99 40 157 40 164-2 298-123 298-276-1-155-135-277-301-277zm117 405l-14 14a29 29 0 01-42 0l-96-96c-7-6-12-17-12-28V374c0-17 13-30 30-30h20c17 0 30 13 30 30v124l84 84a29 29 0 010 42z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ku79qq1t40";
freezeTemplate(tmpl);
