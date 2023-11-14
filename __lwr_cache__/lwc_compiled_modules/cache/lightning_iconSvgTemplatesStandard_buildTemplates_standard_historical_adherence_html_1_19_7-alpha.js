import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./historical_adherence.css";

import _implicitScopedStylesheets from "./historical_adherence.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M671.1 405.9a202 202 0 00-403.8 0 101 101 0 007.8 192.8 202.9 202.9 0 00194.1 149.1 197.5 197.5 0 0072.8-13.9 142.3 142.3 0 01-12-43.4 152.3 152.3 0 01-60.6 12.6 156.3 156.3 0 01-147.1-106.6 213.7 213.7 0 00104.3 29 14.8 14.8 0 0015.6 10h56.2a15.3 15.3 0 0015.6-15v-34.2a17.2 17.2 0 00-15.6-17.9h-56.2a18.5 18.5 0 00-15.6 11.6c-61.7-3.3-105.5-30-112.1-58.2a223.5 223.5 0 0110-50.6 221.7 221.7 0 0032.6 0 218.4 218.4 0 00169.3-82.9 173.2 173.2 0 0081.9 67.3c1 3.4 3.4 6.6 4.4 10a203 203 0 0113.1 64.4 151.5 151.5 0 01108.7-.8 98.3 98.3 0 003.9-27.5 100.8 100.8 0 00-67.3-95.8zm147.4 259.5h-19.3v-4.3a118.1 118.1 0 10-32.3 88.9c2-1.9 4.1-3.9 1.6-6.3l-10-12.1c-3.7-4.4-6.9-2.4-10 0a95.2 95.2 0 01-80 30A98.8 98.8 0 01584 680a93.3 93.3 0 0184.6-101.4 94.4 94.4 0 01104 82.6 15.3 15.3 0 010 4.3h-19a6.2 6.2 0 00-6.4 6.3 6.5 6.5 0 001.2 3.9l32.2 38.2a7.3 7.3 0 0010 0l32.2-38.2a6 6 0 000-8.6 6.4 6.4 0 00-4.3-1.7zm-95.2 62.8l-6.3 6.7a8.1 8.1 0 01-11.4 1 5.2 5.2 0 01-1.1-1l-43.3-46.1a11.5 11.5 0 01-3.6-10v-66.6a9.3 9.3 0 018.6-10h9.2a9.2 9.2 0 019 10v62.1l38.9 41.4a10 10 0 010 13.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7p3n99d3sos";
freezeTemplate(tmpl);
