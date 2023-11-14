import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_wallet_group.css";

import _implicitScopedStylesheets from "./crypto_wallet_group.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M539 208c16-9 35-9 51 0l51 29c16 9 25 26 25 44v60c0 18-9 34-25 43l-51 30c-16 9-35 9-51 0l-52-30c-15-9-25-26-25-44v-59c0-18 10-35 25-44zm-42 112c-4-4-4-11 0-15l11-10c4-4 10-4 14 0l18 18c3 4 10 4 14 0l53-54c4-4 10-4 14 0l11 10c4 4 4 11 0 15l-78 79c-4 4-10 4-14 0z"${3}/><path d="M433 351h-54c-28 0-50 22-50 50v219c0 28 22 51 50 51h371c27 0 50-23 50-51V502c0-28-22-50-50-50H404a25.5 25.5 0 010-51h55-1c-15-9-25-26-25-44zm235 50h81c0-28-22-50-50-50h-4v5c0 19-10 36-26 45zm-404 78v206c0 27 23 50 51 50h356v14c0 28-22 50-50 50H251c-28 0-51-22-51-50V530c0-28 23-51 51-51z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-16ui543cisn";
freezeTemplate(tmpl);
