import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./end_call.css";

import _implicitScopedStylesheets from "./end_call.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M485 56l-21-21c-6-6-17-5-24 3L205 273l-50-56c-6-6-6-14-2-21l38-52a40 40 0 00-1-48l-49-61a40 40 0 00-59-3L30 84c-8 8-12 19-12 30a410 410 0 00100 246l-80 80c-7 7-8 18-3 24l21 21c6 6 17 5 24-3L482 80c8-7 9-18 3-24zm0 323l-61-49a40 40 0 00-48-1l-52 38c-6 5-15 4-21-2l-24-22-85 85a420 420 0 00210 72c11 1 22-4 30-12l52-52a36 36 0 00-1-57z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-kvgmb0pb4j";
freezeTemplate(tmpl);
