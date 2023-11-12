import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./agent_session.css";

import _implicitScopedStylesheets from "./agent_session.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M492 217c-166 0-300 125-300 280 0 50 14 96 38 137 3 5 4 11 2 16l-28 89c-5 16 10 30 26 25l88-31c6-2 12-1 17 2 46 27 100 42 158 42 166 0 300-125 300-280-2-155-136-280-301-280zm-82 404c0 6-5 11-11 11h-53c-6 0-11-5-11-11v-68c0-6 5-11 11-11h53c6 0 11 5 11 11zm120 0c0 6-5 11-11 11h-53c-6 0-11-5-11-11V463c0-6 5-11 11-11h53c6 0 11 5 11 11zm120 0c0 6-5 11-11 11h-53c-6 0-11-5-11-11V373c0-6 5-11 11-11h53c6 0 11 5 11 11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ce2vshg1qi";
freezeTemplate(tmpl);
