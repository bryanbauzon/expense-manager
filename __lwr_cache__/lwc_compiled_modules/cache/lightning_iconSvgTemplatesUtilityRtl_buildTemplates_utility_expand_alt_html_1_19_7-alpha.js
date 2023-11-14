import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./expand_alt.css";

import _implicitScopedStylesheets from "./expand_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M488 20H333c-10 0-13 9-5 17l49 49-90 90c-5 5-5 13 0 19l37 37c5 5 13 5 19 0l91-91 49 49c8 8 17 5 17-5V31c0-6-6-11-12-11zM35 500h154c10 0 13-11 5-19l-49-50 90-91c5-5 5-14 0-19l-37-37c-5-5-13-5-19 0l-90 90-50-49c-9-8-19-5-19 5v154c0 7 8 16 15 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6i7fv87f4vi";
freezeTemplate(tmpl);
