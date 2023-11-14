import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./javascript_button.css";

import _implicitScopedStylesheets from "./javascript_button.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M630 360h106c8 0 14-6 14-14 0-4-1-7-4-10L614 204c-3-3-6-4-10-4-8 0-14 6-14 14v106c0 22 18 40 40 40zm100 60H590c-33 0-60-27-60-60V220c0-11-9-20-20-20H310c-33 0-60 27-60 60v480c0 33 27 60 60 60h380c33 0 60-27 60-60V440c0-11-9-20-20-20zM378 663c0 29-14 39-36 39l-17-2 3-18 12 2c10 0 16-4 16-20v-65h22zm43 37c-10 0-20-2-29-6l6-18c8 4 16 6 25 6 10 0 16-4 16-11s-5-10-17-14-28-15-28-30 14-30 38-30c9 0 18 1 26 5l-5 18c-7-3-14-5-21-5-10 0-15 5-15 10s6 9 19 14 26 16 26 30-13 31-41 31z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-sbn4qnr9lo";
freezeTemplate(tmpl);
