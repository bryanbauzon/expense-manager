import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_hierarchy.css";

import _implicitScopedStylesheets from "./asset_hierarchy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M513 561c-20 27-31 59-31 92 0 10 1 20 4 29l-108 1v26c0 13-11 25-25 25h-29c-14 0-25-12-26-25v-26h-55c-14-1-25-12-25-25V225c0-14 11-25 25-25h435c14 0 26 11 26 25v278c-32-13-68-15-101-5V374c0-3-1-5-3-7-1-2-4-3-7-2h-17a9 9 0 00-10 9v132l1 5c-11 6-21 13-30 21H324a9 9 0 00-9 10v9c0 3 1 5 3 7l4 2h2l188 1zm-91-46c2-2 3-4 2-7V374a9 9 0 00-9-9h-18a9 9 0 00-9 9v134c-1 3 0 5 2 7s4 3 7 3h18c2 0 5-1 7-3zm81 0c2-2 2-4 2-7V374c1-3 0-5-2-7s-5-3-7-2h-36a9 9 0 00-9 9v134c-1 3 0 5 2 7s5 3 7 3h36c2 0 5-1 7-3zm28 3c5 0 9-4 9-10V374c0-5-4-10-9-10-6 0-10 4-10 10v134c0 5 4 10 10 10zM319 322c-2 2-3 4-3 7h-1v9c0 3 1 5 3 7 1 2 4 3 7 3h270a9 9 0 0010-10v-9c0-3-1-5-3-7-1-2-4-3-7-2H326c-3-1-6 0-7 2zm-2 48l-1 4v134c0 3 1 5 3 7s4 3 7 3h35a9 9 0 0010-10V374a9 9 0 00-10-9h-35c-4-1-8 2-9 5z"${3}/><path fill-rule="evenodd" d="M793 658c0-78-64-141-143-141s-142 63-142 141 63 142 142 142 143-64 143-142zm-150-12h-41c-2 0-4 2-4 5v34h-14c-3 0-5 2-5 5v33c0 2 2 4 5 4h45l3-1 2-3v-33c0-3-2-5-5-5h-13v-21h72v21h-14c-2 0-4 2-4 5v33c0 2 2 4 4 4h46c2 0 4-2 4-4v-33c0-3-2-5-4-5h-14v-34c0-3-2-5-5-5h-40v-21h13a5 5 0 005-4v-33c0-3-2-4-5-5h-45l-3 2-2 3v33c0 2 3 4 5 4h14v21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3db3gjpde4f";
freezeTemplate(tmpl);
