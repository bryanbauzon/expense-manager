import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom54.css";

import _implicitScopedStylesheets from "./new_custom54.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M78 269c52-9 98-30 147-53l60-27c5-2 8-7 6-13-4-23-23-42-47-42h-16v-30c0-9-8-16-16-16V56c0-9-7-16-16-16h-32c-9 0-16 7-16 16v32c-8 0-16 7-16 16v30h-16c-26 0-48 24-48 51v75c0 6 5 10 10 9zm358 158s58-90 64-216c0-9-7-17-17-17-190 7-279 122-448 129-9 0-15 8-15 16v60c0 26 20 46 45 48 84 5 264 17 367 34 10 2 20-8 18-18-2-13-6-27-14-36zm-8-143c-14 0-24-10-24-24s10-24 24-24 24 10 24 24-10 24-24 24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-40mogqc9ptr";
freezeTemplate(tmpl);
