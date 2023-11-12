import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./favorite_alt.css";

import _implicitScopedStylesheets from "./favorite_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M493 219c12-9 6-29-9-29H334c-6 0-12-3-14-9L274 31c-4-14-24-15-28-1l-47 151c-2 7-7 9-14 9H36c-14 0-21 20-9 29l122 90c5 4 7 11 5 17L98 480c-5 14 11 26 23 17l132-98c6-4 13-4 18 0l131 98c12 9 27-3 23-17l-58-154c-2-6 0-13 5-17l122-90zm-146 58h-1a56 56 0 00-18 62v1l17 46c3 7-6 14-12 9l-38-28a56 56 0 00-65-2l-1 1-42 31c-7 5-16-1-13-9l18-49c7-22 0-47-18-62h-1l-43-32c-6-4-3-14 5-14h50c7 0 18-1 29-8a52 52 0 0024-30l14-45c3-8 13-8 16 0l14 45v1a55 55 0 0052 37h50c8 0 11 10 5 14l-43 32z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-618acvj6aio";
freezeTemplate(tmpl);
