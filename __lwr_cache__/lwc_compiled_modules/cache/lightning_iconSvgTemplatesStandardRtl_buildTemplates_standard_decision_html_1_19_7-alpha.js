import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./decision.css";

import _implicitScopedStylesheets from "./decision.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M794 288l-52-39c-8-5-15-8-24-8H540v-21c0-11-9-20-20-20h-40c-11 0-20 9-20 20v20H260c-11 0-20 9-20 20v80c0 11 9 20 20 20h458c9 0 18-2 24-8l52-39c8-7 8-19 0-25zm-54 172H540v-30c0-6-4-10-10-10h-60c-6 0-10 4-10 10v30H283c-9 0-18 2-24 8l-52 39c-9 6-9 19 0 26l52 39c8 5 15 8 24 8h457c11 0 20-9 20-20v-80c0-11-9-20-20-20zM540 716v-49c0-6-4-10-10-10h-60c-6 0-10 4-10 10v49c-40 11-62 35-69 65-2 9 5 19 15 19h189c10 0 18-9 15-19-7-30-30-53-70-65z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3h746mkfgbs";
freezeTemplate(tmpl);
