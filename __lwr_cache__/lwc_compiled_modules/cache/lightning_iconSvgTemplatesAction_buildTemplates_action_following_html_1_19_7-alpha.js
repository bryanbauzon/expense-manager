import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./following.css";

import _implicitScopedStylesheets from "./following.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M495 336l-22-22c-6-6-16-6-22 0l-94 96c-4 4-11 4-15 0l-44-45c-6-6-16-6-22 0l-22 22c-6 6-6 16 0 22l84 86c6 6 16 6 22 0l134-137c7-5 7-15 1-22zm-248 2c10-10 22-16 36-18 17-1 33 4 45 16l22 24 72-74c8-8 18-14 29-16 5-1 8-5 8-10V60c0-22-18-40-40-40H60c-22 0-40 18-40 40v360c0 22 18 40 40 40h164c9 0 13-11 7-17l-5-5a57 57 0 010-79zm13-228c0-6 4-10 10-10h100c6 0 10 4 10 10v20c0 6-4 10-10 10H270c-6 0-10-4-10-10zm0 80c0-6 4-10 10-10h100c6 0 10 4 10 10v20c0 6-4 10-10 10H270c-6 0-10-4-10-10zm-160-80c0-6 4-10 10-10h100c6 0 10 4 10 10v100c0 6-4 10-10 10H110c-6 0-10-4-10-10zm80 260c0 6-4 10-9 10h-61c-5 0-9-4-9-10v-20c0-6 4-10 9-10h61c5 0 9 4 9 10zm-70-70c-6 0-10-4-10-10v-20c0-6 4-10 10-10h200c6 0 10 4 10 10v20c0 6-4 10-10 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1nb0918jhtc";
freezeTemplate(tmpl);
