import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lead_insights.css";

import _implicitScopedStylesheets from "./lead_insights.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 220a280 280 0 100 560 280 280 0 000-560zm0 527a247 247 0 110-494 247 247 0 010 494zm-10-255c0 24-5 45-14 62s-23 30-41 40c-18 9-40 14-66 14v-20c29 0 52-7 69-20s26-32 28-56a78 78 0 01-90 16c-10-5-17-12-23-22s-8-21-8-34 3-25 9-36 14-19 25-25 24-9 39-9c24 0 43 8 55 24s17 36 17 66zm-24-4c0-23-4-40-11-51s-20-17-37-17c-15 0-27 4-36 13-8 9-12 21-12 36s4 26 12 34 19 12 33 12c11 0 20-2 29-7s15-12 22-20zm195 4c0 24-5 45-14 62s-23 30-41 40c-18 9-40 14-66 14v-20c29 0 52-7 69-20s26-32 28-56a78 78 0 01-90 16c-10-5-17-12-23-22s-8-21-8-34 3-25 9-36 14-19 25-25 24-9 39-9c24 0 43 8 55 24s17 36 17 66zm-25-4c0-23-4-40-11-51s-20-17-37-17c-15 0-27 4-36 13-8 9-12 21-12 36s4 26 12 34 19 12 33 12c11 0 20-2 29-7s16-12 22-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4325dm9moe";
freezeTemplate(tmpl);
