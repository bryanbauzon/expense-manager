import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sobject_collection.css";

import _implicitScopedStylesheets from "./sobject_collection.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M136 151c-34 75-34 105 0 181h25c-30-66-30-115-1-181h-24zm233 143l15-2 11 1c17-51 13-81-15-143h-25a190 190 0 0114 144zm-146 90H81a20 20 0 01-20-20V102h394v209c15 2 28 7 40 14V61a40 40 0 00-40-40H62a40 40 0 00-40 40v323a40 40 0 0040 40h148c1-14 5-28 13-40zm130-38c8-8 19-13 32-13 17 0 31 9 39 22 6-2 14-5 22-5 29 0 54 24 54 53s-24 53-54 53l-10-1c-6 12-20 20-34 20-6 0-12-2-17-4a45 45 0 01-41 27c-20 0-36-12-42-28l-9 1a41 41 0 01-42-41c0-15 8-28 21-36-2-6-4-12-4-19 0-26 22-47 48-47 15-1 28 7 37 18zm-123-57l15-25 6 24c2 7 7 13 13 17 14-10 32-16 51-16h2c0-6-5-11-11-11l-5 1s-12 6-16 2a586 586 0 01-13-49l12-17s13 5 20 5 21-6 21-24-13-19-17-19c-8 0-16 6-23 17l-15 25-4-19c-2-7-10-24-28-24s-34 10-34 10c-3 2-5 6-5 9 0 6 5 11 11 11l5-1s13-8 17 0l2 8 9 38-12 17s-13-5-20-5-21 6-21 24 13 19 17 19c9 1 17-5 23-17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4nuna1ucvbe";
freezeTemplate(tmpl);
