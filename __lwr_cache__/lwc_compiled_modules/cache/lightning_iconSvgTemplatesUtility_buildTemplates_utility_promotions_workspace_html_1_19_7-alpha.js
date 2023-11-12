import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./promotions_workspace.css";

import _implicitScopedStylesheets from "./promotions_workspace.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M151 20a17 17 0 0117 16v12a17 17 0 01-16 18h-52a34 34 0 00-34 32v322a34 34 0 0032 34h322a34 34 0 0034-32v-53a17 17 0 0116-17h13a17 17 0 0117 16v64a68 68 0 01-68 68H88a68 68 0 01-68-68V88a68 68 0 0168-68h63zm230 190a22 22 0 1023 22 22 22 0 00-23-22zm-106-82a22 22 0 1022 22 22 22 0 00-22-22zm216 40.7l-18.7-22.4a39.4 39.4 0 01-9.3-23.1l-2.2-28.6a36.6 36.6 0 00-33.5-34.1l-24.9-2a53 53 0 01-30-12.8l-18.9-16.6a36.8 36.8 0 00-47.9-.5L285 46a47.2 47.2 0 01-27 11l-26.7 1.8a36.9 36.9 0 00-34.2 33.6l-1.9 24.4a52.8 52.8 0 01-12.9 30L166 165.9a36.7 36.7 0 000 47.8l17.7 21.4a44.2 44.2 0 0110 25.4l2 27.5a36.8 36.8 0 0033.5 34.2l25 2.2a51.7 51.7 0 0130 12.7l19 16.4a37 37 0 0047.9 0l21.8-18.2a40.8 40.8 0 0124.3-10l28.5-2.1A36.8 36.8 0 00460 290l2-23.1a59.3 59.3 0 0114.3-33.2l15.2-17.3a36.6 36.6 0 00-.5-47.7zM233.8 150a41.5 41.5 0 1141.5 41.4 41.3 41.3 0 01-41.7-41.4zm60 122.2a3.9 3.9 0 01-2.5 1.7h-12.4a3.3 3.3 0 01-2.6-1.6 2.9 2.9 0 010-3.1L362.8 110a4 4 0 012.6-1.6h12.9a3.1 3.1 0 011.5 4.2zm129.4-40a41.5 41.5 0 11-41.7-41.2 41.3 41.3 0 0141.2 41.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4ilhsets4th";
freezeTemplate(tmpl);
