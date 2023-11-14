import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./connect_wallet.css";

import _implicitScopedStylesheets from "./connect_wallet.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M458 210c20-12 44-12 64 0l66 38c20 11 32 32 32 55v76c0 23-12 44-32 56l-66 38a64 64 0 01-64 0l-66-38a64 64 0 01-32-56v-76c0-23 12-44 32-55zM323 392h-69c-35 0-64 29-64 64v279c0 35 29 64 64 64h472c35 0 64-29 64-64V585c0-36-29-65-64-65H286a32 32 0 110-64h69a64 64 0 01-32-56zm88 338l9 11c4 5 1 13-5 14h-24c-53 0-96-45-94-98 2-51 45-90 96-90h71a96 96 0 0178 42 90 90 0 0116 52l-1 15c-2 3-4 6-8 6h-28c-5 1-9-4-8-10l1-1 1-10c0-8-2-14-4-21-4-10-12-19-22-25-7-3-16-6-26-6h-73c-30 0-55 25-52 55 1 28 25 49 54 49h4c4 0 6 1 8 4 1 4 7 13 7 13zm176-164c51-1 94 39 96 90 1 53-41 98-95 95h-74a96 96 0 01-91-72c-2-7-2-15-2-21v-15c2-3 4-6 9-6h27c6-1 10 4 8 9v2l-2 10c0 8 2 14 4 21 4 10 13 19 22 25 8 3 16 6 26 6h73c30 0 55-25 53-55-2-28-26-49-54-49h-5c-3 0-6-1-7-4-5-9-10-17-16-24-4-5 0-13 6-13zm35-110h104c0-35-29-64-65-64h-4v7c0 23-13 45-34 56z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-9oisj4e21";
freezeTemplate(tmpl);
