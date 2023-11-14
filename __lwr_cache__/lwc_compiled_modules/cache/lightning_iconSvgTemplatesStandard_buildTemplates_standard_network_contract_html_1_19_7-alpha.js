import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./network_contract.css";

import _implicitScopedStylesheets from "./network_contract.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M480 692a175 175 0 0137-126c43-50 113-53 124-53s28-1 27-16l-1-90a18 18 0 00-18-17H529a52 52 0 01-51-51V218a18 18 0 00-18-18H288a52 52 0 00-51 52v414a52 52 0 0051 52h176c14 0 18-10 16-25zM298 310l42-6a17 17 0 002-1l19-39a5 5 0 011-1 4 4 0 015 1l20 39c0 2 1 2 2 2l42 6c2 1 5 4 2 6l-31 30-1 3 7 42a3 3 0 010 3 3 3 0 01-5 1l-38-20a2 2 0 00-3 0l-37 19a3 3 0 01-3 0 3 3 0 01-3-4l7-42v-4l-32-30a5 5 0 014-5zm137 305H322a18 18 0 01-18-18v-18a18 18 0 0118-17h112a18 18 0 0118 17v18a18 18 0 01-17 18zM322 511a18 18 0 01-18-18v-18a18 18 0 0118-17h208a18 18 0 0118 17v18a18 18 0 01-18 18zm242-171h91a12 12 0 0012-11v-1a12 12 0 00-3-10L550 204a11 11 0 00-9-3 12 12 0 00-12 11v93a36 36 0 0035 35zm76 214a123 123 0 10123 123 123 123 0 00-123-123zm-97 135h32a182 182 0 0017 74 98 98 0 01-49-74zm32-25l-32 1a99 99 0 0150-74 185 185 0 00-18 74zm53 105a123 123 0 01-28-81l28 1zm0-105l-28 1a123 123 0 0128-81zm110 0l-33 1a182 182 0 00-17-74 98 98 0 0150 74zm-86 105v-80l29-1a123 123 0 01-29 81zm0-104v-80a123 123 0 0129 81zm36 98a187 187 0 0017-74h33a98 98 0 01-50 74z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3v9bb0f4m2i";
freezeTemplate(tmpl);
