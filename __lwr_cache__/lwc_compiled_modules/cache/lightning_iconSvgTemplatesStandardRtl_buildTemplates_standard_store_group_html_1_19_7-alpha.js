import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./store_group.css";

import _implicitScopedStylesheets from "./store_group.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M772 452H601c-16 0-28 13-28 28 0 5 4 9 9 9h208c5 0 9-4 9-9 1-15-12-28-27-28zm0 66H602c-5 0-9 4-9 9v199c0 5 4 9 9 9h52c5 0 9-4 9-9v-38c0-5 5-9 10-9h27c5 0 10 4 10 9v38c0 5 4 9 9 9h52c5 0 9-4 9-9V528c1-6-3-10-8-10zM672 646c0 5-4 9-9 9h-19c-5 0-9-4-9-9v-19c0-5 4-9 9-9h19c5 0 9 4 9 9zm0-66c0 5-4 9-9 9h-19c-5 0-9-4-9-9v-19c0-5 4-9 9-9h19c5 0 9 4 9 9zm67 66c0 5-4 9-9 9h-20c-5 0-9-4-9-9v-19c0-5 4-9 9-9h19c5 0 9 4 9 9v19zm0-66c0 5-4 9-9 9h-20c-5 0-9-4-9-9v-19c0-5 4-9 9-9h19c5 0 9 4 9 9v19zM531 264H246c-26 0-46 21-46 46v1c0 9 7 16 16 16h346c9 0 16-7 16-16v-1c-1-24-22-46-47-46zm-1 110H247c-9 0-16 7-16 16v330c0 9 7 16 16 16h87c9 0 15-7 15-16v-63c0-9 8-16 16-16h46c9 0 16 7 16 16v63c0 9 6 16 15 16h88c9 0 16-7 16-16V390c0-9-7-16-16-16zM365 586c0 9-7 16-16 16h-31c-9 0-16-7-16-16v-31c0-9 7-16 16-16h31c9 0 16 7 16 16zm0-110c0 9-7 16-16 16h-31c-9 0-16-7-16-16v-31c0-9 7-16 16-16h31c9 0 16 7 16 16zm110 110c0 9-7 16-16 16h-31c-9 0-16-7-16-16v-31c0-9 7-16 16-16h31c9 0 16 7 16 16zm0-110c0 9-7 16-16 16h-31c-9 0-16-7-16-16v-31c0-9 7-16 16-16h31c9 0 16 7 16 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-16sah1njrjv";
freezeTemplate(tmpl);
