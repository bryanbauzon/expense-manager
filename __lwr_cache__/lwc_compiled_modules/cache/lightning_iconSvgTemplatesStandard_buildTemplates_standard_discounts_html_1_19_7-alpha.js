import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./discounts.css";

import _implicitScopedStylesheets from "./discounts.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M538 603a4 4 0 01-3 2h-16a4 4 0 01-3-6l110-202a4 4 0 013-2h17a4 4 0 011 5zm111-74a22 22 0 11-22 22 22 22 0 0122-22m0-29a52 52 0 1051 51 51 51 0 00-51-51zm140-29l-24-28a52 52 0 01-12-30l-2-36a47 47 0 00-43-44l-32-2a67 67 0 01-38-16l-24-21a47 47 0 00-61 0l-26 22a59 59 0 01-34 14l-34 2a47 47 0 00-43 43l-3 31a68 68 0 01-14 35v46l20-24a97 97 0 0023-55l3-31a17 17 0 0116-15l34-3a89 89 0 0051-20l26-22a17 17 0 0111-5 18 18 0 0112 5l24 20a96 96 0 0055 23l31 3a17 17 0 0116 16l3 37a80 80 0 0019 46l24 28a18 18 0 010 23l-20 22a104 104 0 00-25 59l-3 30a17 17 0 01-16 15l-36 3a82 82 0 00-47 19l-28 23a18 18 0 01-23 0l-24-21a95 95 0 00-55-23l-32-3a17 17 0 01-15-14l-23 22a47 47 0 0036 22l31 2a66 66 0 0138 16l25 21a47 47 0 0061 1l27-24a54 54 0 0131-12l36-3a47 47 0 0044-42l2-30a75 75 0 0118-42l19-22a47 47 0 001-61zM318 327v244a7 7 0 01-13 5l-70-71a11 11 0 00-15 0l-16 16a11 11 0 000 16l129 128a11 11 0 0015 0l129-128a11 11 0 000-16l-16-15a11 11 0 00-15 0l-70 70a8 8 0 01-14-5l1-244a11 11 0 00-10-11h-23a11 11 0 00-12 11zm198 100a22 22 0 11-22 22 22 22 0 0122-22m0-30a52 52 0 1052 52 52 52 0 00-52-52z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2nbrpp9ruta";
freezeTemplate(tmpl);
