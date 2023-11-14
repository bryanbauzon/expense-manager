import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_line_outcome.css";

import _implicitScopedStylesheets from "./contract_line_outcome.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M411 190H303a47 47 0 01-47-46V36c0-9-7-16-15-16H86a47 47 0 00-46 46v371a47 47 0 0046 47h166a149 149 0 01-32-93h-28c-8 0-15-7-15-16v-15c0-8 7-15 15-15h35c5-17 14-33 25-47h-60c-8 0-15-7-15-15v-16c0-8 7-15 15-15h121a150 150 0 01114 0v-47c0-8-7-15-16-15zM114 392c-13 0-24-11-24-24s11-24 24-24 24 11 24 24-11 24-24 24zM90 275c0 13 11 24 24 24s24-10 24-24c0-13-11-24-24-24s-24 11-24 24zm62-99l-34 18c-2 2-5-1-5-3l7-38-1-3-28-27c-1-2 1-5 3-6l38-5 2-1 17-35c2-3 5-3 7 0l17 35 2 1 38 5c2 1 4 4 1 6l-28 27v3l6 38c1 2-3 5-5 3l-34-18a2 2 0 00-3 0zm264-32h-82a31 31 0 01-31-31V31c0-6 4-11 11-11 3 0 5 1 7 3l102 102a10 10 0 013 8c0 6-4 11-10 11zm63 247a109 109 0 11-218 0 109 109 0 01218 0zm-94-60v-1c-3-2-6-2-8 1l-8 8h-1c-2 3-2 7 1 9l21 23 1 3c0 2-1 4-4 4h-80c-3 0-5 3-6 6v13c1 3 3 6 6 7h81l2 1c1 1 2 4 0 6l-21 23c-2 2-2 6 0 8l8 9v1a5 5 0 008-1l51-56c2-2 2-6 0-8l-51-57z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5l6bp71bpp8";
freezeTemplate(tmpl);
