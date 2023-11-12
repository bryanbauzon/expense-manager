import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./omni_channel.css";

import _implicitScopedStylesheets from "./omni_channel.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M472 27H346c-8 0-11 7-4 14l40 40 5 5-75 74c-6 6-6 16-1 22 0 0 51 52 46 111 0 84-61 151-145 151-62 6-111-51-111-51-6-6-15-6-21 0l-37 37c-6 6-6 15 0 21l12 12c6 6 15 6 21 0l14-13c34 27 77 42 123 42 110 0 199-89 199-199 0-46-16-89-42-123l51-51 7 7 40 40c6 7 14 4 14-4V36c-1-5-5-9-10-9z"${3}/><circle cx="211" cy="295" r="99"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-jcdcek2ih7";
freezeTemplate(tmpl);
