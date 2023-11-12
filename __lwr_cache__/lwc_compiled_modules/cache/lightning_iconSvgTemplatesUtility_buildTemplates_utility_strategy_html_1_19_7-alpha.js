import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./strategy.css";

import _implicitScopedStylesheets from "./strategy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M469 187h-81a32 32 0 00-32 32v20h-75V81c0-5-5-10-10-10H166V52c0-18-14-32-32-32H53a32 32 0 00-32 32v81c0 18 14 32 32 32h81c18 0 32-14 32-32v-19h74v125h-74v-19c0-18-14-32-32-32H53a32 32 0 00-32 32v80c0 18 14 32 32 32h81c18 0 32-14 32-32v-19h74v125h-74v-18c0-18-14-32-32-32H53a32 32 0 00-32 32v81c0 18 14 32 32 32h81c18 0 32-14 32-32v-19h106c6 0 10-6 10-10V282h75v18c0 18 14 32 32 32h81c18 0 32-14 32-32v-81a33 33 0 00-33-32zm-344-63H62V60h63v64zm0 104v63H62v-63h63zm0 232H62v-63h63v63zm336-232v63h-63v-63h63z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4qtid0gidr";
freezeTemplate(tmpl);
