import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom108.css";

import _implicitScopedStylesheets from "./custom108.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M479 603.5l4.2-28.2 39.6-27.3-8.7-37.2h-5.4l-42-3.3-16.2-22.8 9.3-48-31.2-20.1-3.9 3.9-31.5 27.9-27-4.2-26.4-40.8-35.7 9v5.7l-3 42.9-22.2 16.8-46.8-9.9-19.2 32.7 3.6 4.2 27 32.7-3.9 28.2-39.6 27 8.7 36.9 5.4.6 41.4 3.3L272 656l-9.6 48 31.5 19.8 4.2-3.6 31.5-28.2 27 4.2 26.1 40.8 36-9v-6l2.7-42 22.2-16.8 46.2 9.9 19.2-32.7-3.6-4.2-26.4-32.4zm-54.9 6.6a72 72 0 01-100.8 25.5 78 78 0 01-24.9-104.4 72 72 0 01100.8-25.8 78 78 0 0124.9 104.7zm332.4-147.3l4.2-28.2 39.3-27-8.7-36.9h-5.4l-41.4-3.3L728 344l9.3-48-31.5-19.8-4.2 3.6-31.5 27.9-27-4.2-25.8-40.8-36 9-.6 6L578 320l-22.2 16.8-46.2-9.6-19.2 32.7 3.6 4.5 27 32.7-4.2 28.2-39.3 26.7 8.7 37.2h5.4l41.4 3.3 16.2 23.1-9.6 48 31.5 20.4 4.2-3.6 31.5-28.2 27 4.2 26.1 40.8 35.7-9 .3-5.7 3-42.9 22.2-16.8 46.5 9.6 19.2-32.7-3.6-4.2zm-55.2 6.6a72 72 0 01-100.8 25.5 77.5 77.5 0 01-24.6-104.4 72 72 0 01100.8-25.8 78 78 0 0124.6 104.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6b3sn7j066j";
freezeTemplate(tmpl);
