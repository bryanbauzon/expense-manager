import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./buyer_group_qualifier.css";

import _implicitScopedStylesheets from "./buyer_group_qualifier.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M470 280l-5 1-4 3-127 140-1 1h-5l-44-45h-4a13 13 0 00-10 0l-3 2-17 18-3 4-1 5v4l4 4 68 67a20 20 0 0022 4c3 0 5-2 7-5l150-164 2-4 1-5-1-5-3-4-18-16-8-4zm-322-78a110 110 0 01-17-59 110 110 0 0140-87 52 52 0 00-46-25c-35-1-55 28-55 62a60 60 0 0017 44c7 7 13 15 13 24s-3 16-24 25c-30 13-56 30-56 57 0 18 12 31 28 31h27c4 0 9-2 10-6 14-24 38-39 58-49 7-3 10-10 5-17zm237-16c-20-10-24-17-24-25 0-10 6-17 13-24a60 60 0 0018-44c0-34-20-62-56-62-22 0-37 10-47 25 25 20 40 50 40 87 0 22-5 42-16 59-5 6-2 14 5 18 20 10 44 25 57 49 2 3 7 6 11 6h27c16 0 28-13 28-31 0-28-27-45-56-58zm-101 60c-22-10-25-19-25-28s6-19 14-26c13-11 20-29 20-49 0-37-22-68-62-68s-61 31-61 68c0 20 8 37 20 50 8 6 14 16 14 25s-4 18-25 28c-34 13-65 30-65 60 0 20 14 37 32 37h170c19 0 33-18 33-38 0-30-32-46-64-60z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-763qsi3gn68";
freezeTemplate(tmpl);
