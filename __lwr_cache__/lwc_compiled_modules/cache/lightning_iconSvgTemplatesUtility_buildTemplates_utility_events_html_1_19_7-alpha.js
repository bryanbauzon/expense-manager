import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./events.css";

import _implicitScopedStylesheets from "./events.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M88 90a236 236 0 00-68 166c0 14 11 24 24 24s24-11 24-24c-1-49 19-96 54-131s83-54 131-54c14 0 24-11 24-24 0-14-11-24-24-24A229 229 0 0088 90zm29 166c0 14 10 24 24 24s24-11 24-24c0-23 9-46 26-62a91 91 0 0162-26c14 0 24-11 24-24 0-14-10-24-24-24a140 140 0 00-97 39c-4 5-41 42-39 97zm338-104l-23-28c-3-2-7-4-11-4s-8 1-10 4L310 224a62 62 0 00-87 87l-97 97c-3 3-5 7-5 11 0 5 2 10 6 13l27 20a214 214 0 00301-300z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2vr8hftq21";
freezeTemplate(tmpl);
