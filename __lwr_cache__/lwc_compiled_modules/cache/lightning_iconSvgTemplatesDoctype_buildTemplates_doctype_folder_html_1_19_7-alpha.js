import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./folder.css";

import _implicitScopedStylesheets from "./folder.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#032d60" d="M5148 1546a452 452 0 01452 454v3100a452 452 0 01-452 452H448A452 452 0 010 5100V1300a452 452 0 01452-448h1148c382 0 423 114 674 445 207 274 711 249 1039 249z"${3}/><path fill="#90d0fe" d="M5148 1812H924a452 452 0 00-452 452v284l447-648h4235l446 649v-285a452 452 0 00-452-452z"${3}/><path fill="#1ab9ff" d="M457 5548h4691a452 452 0 00452-448V2348a452 452 0 00-452-448H925a452 452 0 00-452 452v2748a465 465 0 01-6 72 233 233 0 01-460 0 450 450 0 00450 376z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 5600 6400",
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
tmpl.stylesheetToken = "lwc-71suqn62rtf";
freezeTemplate(tmpl);
