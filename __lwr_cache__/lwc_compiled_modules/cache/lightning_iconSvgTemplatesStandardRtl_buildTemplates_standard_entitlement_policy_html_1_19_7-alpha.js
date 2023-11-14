import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./entitlement_policy.css";

import _implicitScopedStylesheets from "./entitlement_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M254 349h106c22 0 40-18 40-40V203c0-8-6-14-14-14-4 0-7 1-10 4L244 325c-3 3-4 6-4 10 0 8 6 14 14 14zm210 439l47-64 43-58-2-10v-1c-7-9-19-25-19-48s12-39 18-48c1-10 4-31 22-48 16-15 35-18 45-20h1c9-7 25-19 48-19s39 12 48 18c6 1 15 2 25 6V249c0-33-27-60-60-60H480c-11 0-20 9-20 20v140c0 33-27 60-60 60H260c-11 0-20 9-20 20v300c0 33 27 60 60 60h163zm188-73l-52 74-13-35h-35l45-61c9 5 18 6 25 8l6 1 5 3c4 3 10 7 19 10zm84-23c-9 5-18 6-25 8l-7 1-5 3c-5 3-11 9-19 12l52 73 13-35h35zm-70-116c-17 0-31 14-31 31s14 31 31 31 31-14 31-31-14-31-31-31zm85 31c0 11-12 19-15 28-4 10-2 24-9 31s-21 5-31 9c-9 4-18 15-28 15s-19-12-28-15c-10-4-24-2-31-9s-5-21-9-31c-4-9-15-18-15-28s12-19 15-28c4-10 2-24 9-31s21-5 31-9c9-4 18-15 28-15s19 12 28 15c10 4 24 2 31 9s5 21 9 31c3 10 15 18 15 28zm-27 0c0-32-25-58-58-58-32 0-58 25-58 58s25 58 58 58 58-26 58-58z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-54s0o72c5dp";
freezeTemplate(tmpl);
