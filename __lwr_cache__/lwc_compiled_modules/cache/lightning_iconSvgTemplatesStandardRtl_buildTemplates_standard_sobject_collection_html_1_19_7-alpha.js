import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sobject_collection.css";

import _implicitScopedStylesheets from "./sobject_collection.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M346 365c-43 95-43 133 0 229h32c-38-84-38-146-1-229zm295 181a123 123 0 0133-1c22-64 16-103-19-181h-32c30 67 36 121 18 182zM456 660H276c-14 0-25-11-25-25V302h498v265c19 2 36 9 51 18V251c0-28-23-51-51-51H251c-28 0-51 23-51 51v409c0 28 23 51 51 51h188c1-19 7-36 17-51zm164-49a57 57 0 0189 11c8-3 18-6 28-6 37 0 68 31 68 67 0 37-31 67-68 67l-13-1c-8 15-25 25-43 25-8 0-15-2-22-5-9 20-29 34-52 34-25 0-45-15-53-36l-11 1c-29 0-53-23-53-52 0-19 10-36 26-45-3-7-5-15-5-24 0-33 28-60 61-60 20 1 37 10 48 24zm-155-72l19-32 7 30c3 9 9 16 17 21 18-13 40-20 64-20h3c0-8-6-14-14-14l-6 1s-15 8-20 2c-4-7-7-16-9-28l-7-34 15-22s17 6 25 6 26-7 26-30-16-24-21-24c-10 0-20 7-29 22l-19 32-5-24c-2-9-13-30-35-30-23 0-43 13-43 13-4 2-6 7-6 12 0 8 6 14 14 14l6-1s17-10 21 0l3 10 12 48-15 21s-17-6-25-6-26 7-26 30 16 24 21 24c9 2 19-6 27-21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-r8m5e0cmg";
freezeTemplate(tmpl);
