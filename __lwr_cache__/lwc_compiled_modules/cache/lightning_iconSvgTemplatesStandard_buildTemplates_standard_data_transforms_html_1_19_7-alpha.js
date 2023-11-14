import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_transforms.css";

import _implicitScopedStylesheets from "./data_transforms.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M800 218c0-10-8-18-17-18H608c-10 0-18 9-18 18v134c0 9 8 18 18 18h175c9 0 17-9 17-18zM410 648c0-9-8-18-17-18H218c-10 0-18 8-18 18v134c0 9 8 18 18 18h175c9 0 17-8 17-18zm283-156c4-3 10-3 14 0l80 77c6 4 1 13-9 13h-48c0 83-71 148-160 148v-55c60 0 100-37 100-93h-47c-10 0-15-8-9-13zm-400 16c4 3 10 3 14 0l79-77c6-5 1-13-9-13h-47c0-55 40-92 100-92v-56c-89 0-160 65-160 148h-48c-10 0-15 8-9 13zm177-8c0-16 13-28 29-28s28 12 28 28-12 29-28 29-28-13-28-29zm92 12l13 11c4 3 6 10 2 14l-5 9c-2 3-6 6-10 6l-4-1-16-6c-6 6-14 10-22 13l-3 17c-1 6-6 10-11 10h-12c-6 0-10-4-11-9l-3-18c-8-2-15-6-21-12l-17 6-3 1c-5 0-9-2-11-6l-5-10c-3-5-2-11 2-15l14-11a67 67 0 010-24l-14-11c-4-3-5-10-2-15l5-10a12 12 0 0114-5l17 6c6-5 13-9 21-12l3-16c1-6 6-9 12-9h11c6 0 11 3 12 9l3 17c7 2 14 6 21 12l16-6 4-1c4 0 8 2 10 6l6 10c3 5 1 11-3 15l-13 11a71 71 0 010 24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6qdte14f7r9";
freezeTemplate(tmpl);
