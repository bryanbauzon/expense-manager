import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./following.css";

import _implicitScopedStylesheets from "./following.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M266 336l-22-22c-6-6-16-6-22 0l-94 96c-4 4-11 4-15 0l-44-45c-6-6-16-6-22 0l-22 22c-6 6-6 16 0 22l84 86c6 6 16 6 22 0l134-137c7-5 7-15 1-22zM460 20H101c-22 0-40 18-40 40v261c14 1 27 6 37 16l23 23 73-75 6-5v-10c0-6 4-10 10-10h200c6 0 10 4 10 10v20c0 6-4 10-10 10H286l8 8 1 1 1 1a55 55 0 01-4 78l-71 72h239c22 0 40-18 40-40V60c0-22-18-40-40-40zm-41 350c0 6-4 10-9 10h-61c-5 0-9-4-9-10v-20c0-6 4-10 9-10h61c5 0 9 4 9 10zM260 210c0 6-4 10-10 10H150c-6 0-10-4-10-10v-20c0-6 4-10 10-10h100c6 0 10 4 10 10zm0-80c0 6-4 10-10 10H150c-6 0-10-4-10-10v-20c0-6 4-10 10-10h100c6 0 10 4 10 10zm160 80c0 6-4 10-10 10H310c-6 0-10-4-10-10V110c0-6 4-10 10-10h100c6 0 10 4 10 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5irma92ogn8";
freezeTemplate(tmpl);
