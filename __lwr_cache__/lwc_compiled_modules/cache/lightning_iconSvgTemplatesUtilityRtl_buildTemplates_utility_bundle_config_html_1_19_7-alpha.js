import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bundle_config.css";

import _implicitScopedStylesheets from "./bundle_config.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M144 20H80a60 60 0 00-60 60v60a60 60 0 0060 60h64a60 60 0 0060-60V80a60 60 0 00-60-60zm-29 131h-5a41 41 0 010-82h6a41 41 0 010 82zm197 49h64a60 60 0 0060-60V80a60 60 0 00-60-60h-64a60 60 0 00-60 60v60a60 60 0 0060 60zm29-130h6a41 41 0 010 81h-6a41 41 0 010-82zM144 250H80a60 60 0 00-60 60v59a60 60 0 0060 60h64a60 60 0 0060-60v-60a60 60 0 00-60-60zm-29 130h-5a41 41 0 010-82h6a41 41 0 010 82zm378-30a148 148 0 01-20-1 2 2 0 01-1-3 184 184 0 00-9-20v-3c4-5 9-10 12-16a8 8 0 00-1-10l-20-22a8 8 0 00-6-2 24 24 0 00-5 2c-6 3-10 9-16 12a1 1 0 00-1 0h-1c-7-1-13-6-20-8a2 2 0 01-2-2l-3-17a9 9 0 00-5-8 3 3 0 00-3-2h-30a9 9 0 00-5 2c-2 2-5 5-5 8a112 112 0 01-2 18 2 2 0 01-2 2c-7 2-13 7-20 9h-1l-2-1c-5-3-10-9-16-12a6 6 0 00-5-2l-6 2-21 21a8 8 0 00-1 11l11 16a2 2 0 010 3c-2 8-6 13-8 20a2 2 0 01-2 2l-17 1a9 9 0 00-8 7v36a16 16 0 008 7 97 97 0 0118 2 2 2 0 012 2c2 8 6 13 8 20v3l-11 16a8 8 0 000 11l22 21c2 3 3 3 6 3a16 16 0 005-2c5-5 10-9 16-12l2-1c8 2 13 6 20 8a2 2 0 013 2l2 20c1 6 3 7 8 7h30c5 0 8-2 9-8l2-19a2 2 0 012-2 185 185 0 0020-8h2c5 4 10 10 15 13a9 9 0 006 2l6-2 20-22a8 8 0 002-10c-3-6-8-10-12-17a2 2 0 010-3c2-7 7-12 9-20a2 2 0 012-2c6 0 12 0 19-2s7-3 7-8v-30c0-8-2-10-7-11zm-70 25a50 50 0 01-46 48 47 47 0 01-47-46v-2a47 47 0 0194-4 30 30 0 010 4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2f5jsb4jctm";
freezeTemplate(tmpl);
