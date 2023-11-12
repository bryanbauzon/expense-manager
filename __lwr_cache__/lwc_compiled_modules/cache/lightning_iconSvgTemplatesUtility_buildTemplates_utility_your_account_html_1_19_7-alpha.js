import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./your_account.css";

import _implicitScopedStylesheets from "./your_account.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M365 395h108c4 0 7-2 7-5l20-71c1-5-3-9-7-9H326l-3-10c-2-5-6-9-11-9h-18c-5 0-11 5-11 11-1 7 5 11 11 11h10l10 33 25 84c1 5 5 9 10 9h128c5 0 11-5 11-11 1-7-5-12-10-12l-113 1c-5 0-9-4-11-8v-1c-2-6 3-13 11-13zm-6-372H40c-18 0-20 18-20 20v405c1 10 7 27 36 27h231c26 0 25-18 23-24l-1-3-2-9-2-5-25-84c-2-5-8-8-8-8-4-2-9-5-11-8a44 44 0 0133-74h18c12 0 23 5 31 13l1 1c1 2 4 4 9 4h12c10 0 11-11 12-14l1-86V48c1-20-13-25-19-25zM125 408c0 11-9 19-19 19H87c-11 0-19-8-19-19v-19c0-10 8-18 19-18h19c10 0 19 8 19 18zm0-97c0 11-9 19-19 19H87c-11 0-19-8-19-19v-19c0-10 8-19 19-19h19c10 0 19 9 19 19zm0-96c0 11-9 19-19 19H87c-11 0-19-8-19-19v-18c0-11 8-19 19-19h19c10 0 19 8 19 19zm0-96c0 11-9 19-19 19H87c-11 0-19-8-19-19v-19c0-10 8-19 19-19h19c10 0 19 9 19 19zm103 289c0 11-8 19-18 19h-19c-11 0-19-8-19-19v-19c0-10 8-18 19-18h19c10 0 18 8 18 18zm0-97c0 11-8 19-18 19h-19c-11 0-19-8-19-19v-19c0-10 8-19 19-19h19c10 0 18 9 18 19zm0-96c0 11-8 19-18 19h-19c-11 0-19-8-19-19v-18c0-11 8-19 19-19h19c10 0 18 8 18 19zm0-96c0 11-8 19-18 19h-19c-11 0-19-8-19-19v-19c0-10 8-19 19-19h19c10 0 18 9 18 19zm104 96c0 11-8 19-19 19h-18c-11 0-19-8-19-19v-18c0-11 8-19 19-19h18c11 0 19 8 19 19zm0-96c0 11-8 19-19 19h-18c-11 0-19-8-19-19v-19c0-10 8-19 19-19h18c11 0 19 9 19 19z"${3}/><circle cx="367" cy="479" r="18"${3}/><circle cx="456" cy="479" r="18"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-d47hrc0av8";
freezeTemplate(tmpl);
