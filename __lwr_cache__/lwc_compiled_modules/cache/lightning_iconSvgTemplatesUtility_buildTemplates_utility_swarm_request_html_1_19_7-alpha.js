import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./swarm_request.css";

import _implicitScopedStylesheets from "./swarm_request.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M322 463a28 28 0 0022-9 31 31 0 009-22v-70a47 47 0 00-47-47l-92 1a47 47 0 00-47 46v70a32 32 0 0031 31zm-202-31v-70a91 91 0 0126-64 8 8 0 00-5-14l-74 1a47 47 0 00-47 46v70a32 32 0 0031 31zm349 0a28 28 0 0022-9 31 31 0 009-22v-70a47 47 0 00-46-47h-75a8 8 0 00-5 14 93 93 0 0126 64v70z"${3}/><circle cx="202" cy="100" r="43"${3}/><circle cx="318" cy="100" r="43"${3}/><circle cx="114" cy="200" r="54"${3}/><circle cx="408" cy="200" r="54"${3}/><circle cx="261" cy="231" r="54"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4h257oapcbg";
freezeTemplate(tmpl);
