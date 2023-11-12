import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./voicemail_drop.css";

import _implicitScopedStylesheets from "./voicemail_drop.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M390 148a112 112 0 00-94 173h-72a112 112 0 00-94-173c-61 0-112 50-112 112 0 61 50 112 112 112h259c61 0 112-50 112-112a110 110 0 00-111-112zM72 259a60 60 0 0159-60c33 0 59 27 59 60s-27 60-59 60-59-26-59-60zm318 61c-33 0-59-27-59-60s27-60 59-60a60 60 0 0159 60c1 33-26 60-59 60z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-29ginn6jjo9";
freezeTemplate(tmpl);
