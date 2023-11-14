import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_warranty_term.css";

import _implicitScopedStylesheets from "./product_warranty_term.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M660 495c18 0 32 19 47 26s40 3 52 16 9 35 16 51 25 30 25 48-19 31-25 47-3 40-16 51-35 9-52 16-30 26-47 26-32-19-48-26-40-3-51-16-9-35-16-51-26-30-26-48 20-31 26-47 3-40 16-51 35-9 51-16 30-26 48-26zM509 687a58 58 0 015 9c6 15 6 35 11 51H217a19 19 0 01-17-20v-20a19 19 0 0117-20h292zm203-97a7 7 0 00-10 0l-55 62-25-25a7 7 0 00-9 0l-10 10a6 6 0 000 10l35 35a14 14 0 0010 5 13 13 0 0010-5l65-72a8 8 0 000-10zM258 329a17 17 0 0117 18v277a17 17 0 01-17 18h-41a17 17 0 01-17-18V347a17 17 0 0117-18h41zm238 0a18 18 0 0117 18h1v228c-9 20-33 38-33 60a31 31 0 000 7h-40a18 18 0 01-18-18V347a18 18 0 0118-18h54zm-122 0a19 19 0 0120 18v277a19 19 0 01-20 18h-20a19 19 0 01-20-18V347a19 19 0 0120-18h20zm224 0a19 19 0 0120 18v131a94 94 0 01-19 11 228 228 0 01-41 9V347a19 19 0 0120-18h20zm108 0a17 17 0 0117 18v143l-3-1c-20-8-38-33-60-33a34 34 0 00-12 2V347a17 17 0 0117-18h41zm-1-105a19 19 0 0118 20v20a19 19 0 01-18 20H217a19 19 0 01-17-20v-20a19 19 0 0117-20h488z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4ha6legqke4";
freezeTemplate(tmpl);
