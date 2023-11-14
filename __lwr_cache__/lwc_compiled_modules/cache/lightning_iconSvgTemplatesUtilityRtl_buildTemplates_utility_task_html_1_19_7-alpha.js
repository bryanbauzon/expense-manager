import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./task.css";

import _implicitScopedStylesheets from "./task.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M19 168v-32c0-9 7-16 16-16h160c9 0 16 7 16 16v32c0 9-7 16-16 16H35c-9 0-16-7-16-16zm0 143v-32c0-9 7-16 16-16h208c9 0 16 7 16 16v32c0 9-7 16-16 16H35c-9 0-16-7-16-16zm305 0v-32c0-9 7-16 16-16h32c9 0 16 7 16 16v32c0 9-7 16-16 16h-32c-9 0-17-7-16-16zm0 143v-32c0-9 7-16 16-16h32c9 0 16 7 16 16v32c0 9-7 16-16 16h-32c-9 0-17-7-16-16zm-305 0v-32c0-9 7-16 16-16h208c9 0 16 7 16 16v32c0 9-7 16-16 16H35c-9 0-16-7-16-16zM497 70l-17-17c-5-5-12-5-17 0L357 158l-43-42c-5-5-12-5-17 0l-17 17c-5 5-5 12 0 17l59 59c5 5 11 7 17 7s12-2 17-7L497 87c4-4 4-12 0-17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-37860vto6nf";
freezeTemplate(tmpl);
