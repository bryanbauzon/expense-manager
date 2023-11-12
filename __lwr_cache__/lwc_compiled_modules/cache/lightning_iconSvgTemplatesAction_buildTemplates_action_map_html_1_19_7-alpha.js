import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./map.css";

import _implicitScopedStylesheets from "./map.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M488 95L344 23c-7-3-15-3-21 0L190 90 56 23c-8-4-18-4-25 1-7 4-11 12-11 20v360c0 9 5 17 13 21l144 72c7 3 15 3 21 0l134-67 133 67c3 2 7 3 11 3s9-1 13-4c7-4 11-12 11-20V116c0-9-4-17-12-21zm-38 46v190c0 11-10 19-20 15-37-14-7-76-34-110-25-31-57 1-88-48-29-47 10-81 46-99 5-2 10-2 14 0l74 37c6 3 8 9 8 15zM249 419c-6 3-13 2-18-2-10-9-18-23-18-37 0-24-40-16-40-64 0-39-46-49-85-45-10 1-17-6-17-16V109c0-12 12-20 22-14l86 43 2 1 3 2c36 21 29 38 14 64-17 29-24 0-48-8s-48 8-40 24 32 0 48 16 16 40 64 24 56-8 72 8 24 48 0 72c-14 14-20 44-26 64-1 4-4 8-8 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-716t20n6fkt";
freezeTemplate(tmpl);
