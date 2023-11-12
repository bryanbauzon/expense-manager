import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./google_news.css";

import _implicitScopedStylesheets from "./google_news.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M503 53l-36 36c-4 4-10 4-14 0l-46-46c-4-4-10-4-14 0l-36 36c-4 4-10 4-14 0l-36-36c-4-4-10-4-14 0l-36 36c-4 4-10 4-14 0l-36-36c-4-4-10-4-14 0l-36 36c-4 4-10 4-14 0l-36-36c-4-4-10-4-14 0L57 79c-4 4-10 4-14 0L17 53c-6-6-17-2-17 7v380c0 22 18 40 40 40h440c22 0 40-18 40-40V60c0-9-11-13-17-7zM210 410c0 6-4 10-10 10H80c-6 0-10-4-10-10V230c0-6 4-10 10-10h120c6 0 10 4 10 10zm240 0c0 6-4 10-10 10H260c-6 0-10-4-10-10v-20c0-6 4-10 10-10h180c6 0 10 4 10 10zm0-70H250v-40h200zm0-90c0 6-4 10-10 10H260c-6 0-10-4-10-10v-20c0-6 4-10 10-10h180c6 0 10 4 10 10zm0-80c0 6-4 10-10 10H80c-6 0-10-4-10-10v-20c0-6 4-10 10-10h360c6 0 10 4 10 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4aujd200613";
freezeTemplate(tmpl);
