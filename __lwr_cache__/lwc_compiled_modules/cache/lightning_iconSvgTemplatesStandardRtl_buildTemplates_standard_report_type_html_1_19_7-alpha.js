import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./report_type.css";

import _implicitScopedStylesheets from "./report_type.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M357 310h202a18 18 0 0018-18v-37a55 55 0 00-55-55H394a55 55 0 00-55 55v37a19 19 0 0018 18z"${3}/><g fill-rule="evenodd"${3}><path d="M659 611l65-65a9 9 0 000-12l-14-15a9 9 0 00-12 0l-66 66zm71 74l66-65a8 8 0 000-12l-14-14a9 9 0 00-13 0l-65 65zm-9 55a11 11 0 002-5 8 8 0 00-1-6l-1-1-132-133a8 8 0 00-7-3 9 9 0 00-6 3l-4 3a29 29 0 00-2 3 15 15 0 00-2 3l-2 3a11 11 0 00-3 5 25 25 0 00-2 5 19 19 0 00-3 7 34 34 0 00-2 7l-2 8-2 9-2 10a77 77 0 00-1 12 94 94 0 00-1 13v14a130 130 0 001 15l1 16 1 5-30 31a8 8 0 00-3 10 6 6 0 001 1l22 22a9 9 0 0012 0l30-30a301 301 0 0033 1h28a142 142 0 0022-3 152 152 0 0018-4 51 51 0 0013-6l10-5a56 56 0 0013-9z"${3}/><path d="M660 246h-19a9 9 0 00-9 8v38a74 74 0 01-73 73H357a73 73 0 01-73-73v-37a9 9 0 00-8-9h-19a55 55 0 00-55 55v394a55 55 0 0054 55h216a56 56 0 0118-24l11-11a106 106 0 01-1-18v-15a138 138 0 011-16 142 142 0 011-16v-2l2-8 2-11a86 86 0 012-10v-1a89 89 0 014-10 93 93 0 013-10 45 45 0 013-6l1-3a68 68 0 016-10l1-1 2-4 1-2 3-3 1-1a30 30 0 014-4 46 46 0 014-4l2-1a57 57 0 0138-15 62 62 0 0118 3h1l62-62a57 57 0 0151-16V301a55 55 0 00-53-55zM442 604a16 16 0 0016-15V442a16 16 0 00-16-16h-16a16 16 0 00-16 16v147a16 16 0 0016 15zm-81 0a16 16 0 0016-16v-81a16 16 0 00-16-16h-16a16 16 0 00-16 16v81a16 16 0 0016 16z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-2lh05uqdjfj";
freezeTemplate(tmpl);
