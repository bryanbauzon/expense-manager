import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./swarm_request.css";

import _implicitScopedStylesheets from "./swarm_request.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M591 800a42 42 0 0032-14 46 46 0 0014-32V651a69 69 0 00-68-68H432a69 69 0 00-69 68v103a47 47 0 0046 46zm-298-46V652a134 134 0 0139-95 12 12 0 000-17 12 12 0 00-8-3H214a69 69 0 00-68 68v104a47 47 0 0045 45zm516 0a42 42 0 0032-13 46 46 0 0013-32V606a69 69 0 00-68-69H676a11 11 0 00-8 20 137 137 0 0139 95v102z"${3}/><circle cx="414" cy="264" r="63"${3}/><circle cx="586" cy="264" r="63"${3}/><circle cx="284" cy="412" r="80"${3}/><circle cx="718" cy="412" r="80"${3}/><circle cx="501" cy="457" r="80"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-if6vdo1c7b";
freezeTemplate(tmpl);
