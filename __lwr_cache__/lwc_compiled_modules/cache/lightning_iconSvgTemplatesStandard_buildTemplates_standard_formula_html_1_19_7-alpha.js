import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./formula.css";

import _implicitScopedStylesheets from "./formula.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M553 212c-11-7-24-11-41-11l-12 1c-44 7-73 47-91 85l-22 55-10 26-6 18h-45c-6 0-11 5-11 11s5 11 11 11h39l-22 94c-22 105-52 225-59 246-7 22-17 33-31 33l-7-2c-2-1-3-3-3-5s1-5 4-9 4-9 4-13c0-8-3-15-8-20-6-5-12-7-19-7s-14 3-20 8c-1 7-4 14-4 23 0 12 5 22 15 31s23 13 40 13c27 0 51-12 69-33 11-13 19-28 26-44 22-49 34-103 47-155l36-159h43c6 0 11-5 11-11s-5-11-11-11h-40c22-83 47-140 52-148 8-14 17-21 27-21 4 0 6 1 7 3l2 5-4 9c-3 5-4 10-4 15 0 7 3 13 8 18s12 8 19 8 14-3 19-8 8-12 8-21c-1-17-6-28-17-35zm200 252c16 0 47-13 47-55s-30-44-40-44c-18 0-37 13-53 41l-34 60h-1l-9-44c-3-17-23-55-65-55s-80 24-80 24a25 25 0 0013 46c4 0 8-1 11-3 0 0 32-18 38 0l6 17c8 27 15 59 22 88l-25 41s-31-11-47-11-47 13-47 55 30 44 40 44c18 0 37-13 53-41l34-60c5 26 10 47 13 55 10 30 34 47 66 47 0 0 33 0 71-22 9-4 16-13 16-23 0-14-11-25-25-25-4 0-8 1-11 3 0 0-27 15-37 3-7-13-12-30-17-51l-13-62 28-40c-1 1 30 12 46 12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4mnoh1oe9go";
freezeTemplate(tmpl);
