import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./proposition.css";

import _implicitScopedStylesheets from "./proposition.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M258 606h-45c-7 0-13 6-13 13v161c0 7 6 13 13 13h22c20 0 36-16 36-36V620c1-8-6-14-13-14zm541 88c-7-16-20-33-39-35-10-1-20 3-29 6l-108 38c-23 8-47 16-72 18h-51c-9 0-17-7-17-17s7-17 17-17h91c17 0 30-14 30-30s-14-30-30-30h-70c-3 0-22-1-34-6-13-6-30-7-30-6H334c-15 0-27 12-27 27v113c0 13 10 24 23 26h3c23 0 46 5 69 9a317 317 0 00159-3c29-8 57-19 85-28l145-49c6-3 11-8 8-16zM580 401v150c0 5 5 7 9 6l119-67c12-7 19-19 19-33V322c0-5-5-7-9-6l-132 74c-3 3-6 7-6 11m-12-41l132-74c4-2 4-8 0-10l-120-68c-12-7-26-7-38 0l-120 68c-4 2-4 8 0 10l134 74c3 2 8 2 12 0m-31 31l-132-74c-4-2-9 1-9 6v134c0 13 7 26 19 33l119 67c4 2 9-1 9-6V401c0-4-2-8-6-10"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2315q0seaev";
freezeTemplate(tmpl);
