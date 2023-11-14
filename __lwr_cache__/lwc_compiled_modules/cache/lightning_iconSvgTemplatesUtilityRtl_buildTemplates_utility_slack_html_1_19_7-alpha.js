import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./slack.css";

import _implicitScopedStylesheets from "./slack.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M12.1 32.3a5 5 0 11-5-5h5zm2.5 0a5 5 0 1110 0V45a5 5 0 11-10 0zm5.1-20.2a5 5 0 115-5v5zm0 2.5a5 5 0 110 10H7a5 5 0 110-10zm20.2 5.1a5 5 0 115 5h-5zm-2.5 0a5 5 0 01-10 0V7a5 5 0 1110 0zm-5.1 20.2a5 5 0 11-5 5v-5zm0-2.5a5 5 0 110-10H45a5 5 0 110 10z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-13cback9vr1";
freezeTemplate(tmpl);
