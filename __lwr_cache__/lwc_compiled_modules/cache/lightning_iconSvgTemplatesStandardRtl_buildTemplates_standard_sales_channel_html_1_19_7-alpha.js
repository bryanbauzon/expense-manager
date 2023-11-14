import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sales_channel.css";

import _implicitScopedStylesheets from "./sales_channel.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M748 450c-7-34-21-65-39-92a50 50 0 00-36-84c-12 0-25 5-34 14-27-17-56-30-89-37 0-28-22-50-50-50s-50 22-50 50c-33 7-64 20-91 38a50 50 0 00-35-15c-13 0-26 5-35 15a50 50 0 000 71c-19 26-31 57-39 90-27 0-49 23-49 50s22 50 49 50c6 32 19 63 37 89l-2 1a50 50 0 000 71c10 10 23 15 35 15 13 0 26-5 35-15l1-1c28 19 59 32 93 39 0 28 22 50 50 50s50-22 50-50c33-7 63-20 90-37 10 10 23 15 35 15 13 0 26-5 35-15 20-20 20-51 0-71 18-27 31-58 38-91h1c28 0 50-22 50-50s-23-50-50-50zm-90-140l5-3c3-2 6-2 9-2 5 0 10 2 14 6 6 6 7 16 3 23l-3 5c-4 4-9 6-14 6s-10-2-14-6c-9-9-9-21 0-29zm-180-63c2-9 10-16 20-16s18 7 20 16v4c0 11-9 20-20 20s-20-9-20-20zm-170 63a20 20 0 0125-3l3 3c8 8 8 20 0 28-4 4-9 6-14 6s-10-2-14-6l-3-3c-5-8-5-18 3-25zm-58 210l-5-1c-9-2-15-10-15-19s7-17 15-19l5-1c11 0 20 9 20 20s-10 20-20 20zm83 169l-2 2c-3 3-8 4-12 4-5 0-10-2-14-6s-6-9-6-14 2-9 4-12l1-2c4-4 9-6 14-6s10 2 14 6c9 8 9 20 1 28zm185 64c-2 9-10 16-20 16s-18-7-20-16v-4c0-11 9-20 20-20s20 9 20 20zm200-213c-6 32-18 61-36 87l-8-1c-13 0-26 5-35 15a52 52 0 00-14 44c-25 17-54 30-86 36-9-13-24-21-41-21s-32 8-41 21c-33-6-63-19-89-38a50 50 0 00-49-57l-6 1c-17-25-30-54-36-86 13-9 22-24 22-41s-9-32-22-41c6-31 18-60 36-86l8 1c13 0 26-5 35-15 12-12 16-28 14-44 26-18 55-30 87-36a51 51 0 0082 0c30 6 59 17 83 34-3 16 1 33 14 45 10 10 23 15 35 15l10-1c18 26 30 55 36 87-12 9-21 24-21 40s9 31 22 41zm32-20h-3c-11 0-20-9-20-20s9-20 20-20h3c9 2 17 10 17 20s-7 18-17 20zm-202 4c-21-9-25-18-25-26 0-9 6-18 13-24 12-12 19-28 19-46 0-35-21-65-59-65s-59 30-59 65c0 19 7 35 19 46 7 7 13 15 13 24s-3 17-25 26c-31 13-60 28-61 56 0 19 14 34 32 34h163c18 0 32-15 32-34-1-28-31-42-62-56z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7sl2482elta";
freezeTemplate(tmpl);
