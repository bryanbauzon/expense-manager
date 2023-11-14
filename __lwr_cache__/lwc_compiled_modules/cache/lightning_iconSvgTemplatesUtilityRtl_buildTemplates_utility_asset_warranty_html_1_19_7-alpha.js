import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_warranty.css";

import _implicitScopedStylesheets from "./asset_warranty.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M407 20a21 21 0 0120 20v210a70 70 0 01-14-4 100 100 0 01-20-13 60 60 0 00-33-16 34 34 0 00-15 4v-58a7 7 0 00-7-7h-16a7 7 0 00-6 7v77a63 63 0 01-10 5 74 74 0 01-12 4v-87a7 7 0 00-14 0v90l-14 2v-92a7 7 0 00-8-7h-30a7 7 0 00-6 7v111a8 8 0 002 5 7 7 0 005 2h10a116 116 0 00-2 14H117a7 7 0 00-6 7v8a7 7 0 002 5 7 7 0 005 1h114a34 34 0 01-1 6 94 94 0 01-13 20 60 60 0 00-17 34 60 60 0 0017 33l5 8h-62v21a21 21 0 01-20 21h-24a21 21 0 01-20-20v-21H50a21 21 0 01-20-20V41a21 21 0 0120-21zM258 156zm80 0zm-189 0a7 7 0 017 7v110a7 7 0 01-8 7h-30a7 7 0 01-7-6V163a7 7 0 017-7h30zm44 0a7 7 0 017 7v110a7 7 0 01-8 7h-15a7 7 0 01-7-6V163a7 7 0 016-7h17zm147-37a7 7 0 017 7v7a7 7 0 01-8 8H120a7 7 0 01-8-7v-8a7 7 0 017-7h221zm46 145a47 47 0 00-26-13 47 47 0 00-26 13 70 70 0 01-16 10 84 84 0 01-19 5 48 48 0 00-27 9 44 44 0 00-10 27 76 76 0 01-4 19 70 70 0 01-10 15 47 47 0 00-13 27 47 47 0 0013 26 70 70 0 0110 15 84 84 0 014 20 48 48 0 0010 26 44 44 0 0027 10 78 78 0 0119 4 79 79 0 0115 10 47 47 0 0027 13 47 47 0 0026-13 79 79 0 0116-10 84 84 0 0119-4 48 48 0 0027-10 44 44 0 0010-27 78 78 0 014-18 70 70 0 0110-16 47 47 0 0013-26 47 47 0 00-13-27 70 70 0 01-10-15 84 84 0 01-5-19 48 48 0 00-9-27 44 44 0 00-27-10 78 78 0 01-19-4 70 70 0 01-16-10zm11 71a6 6 0 0110 0l8 9a7 7 0 010 8l-57 64a12 12 0 01-9 4 13 13 0 01-9-4l-31-31a6 6 0 010-9l9-8a6 6 0 0110 0l21 22z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-fb0ak4mfij";
freezeTemplate(tmpl);
