import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_service_campaign_item.css";

import _implicitScopedStylesheets from "./product_service_campaign_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M74 42a2 2 0 012 1.9V72a6 6 0 01-5.8 6H30a6 6 0 01-6-5.8V44a2 2 0 011.9-2zm-15.5 8.3l-.1.1L46.9 63l-5.2-5a1.5 1.5 0 00-2-.1l-2.2 2a1.2 1.2 0 00-.1 1.8l7.4 7a3 3 0 002.2 1 2.8 2.8 0 002-1l6-6.3.4-.4.5-.4.5-.6.2-.2.4-.5 5.7-6a1.5 1.5 0 000-1.7v-.1l-2.2-2a1.5 1.5 0 00-2 0zM74 22a6 6 0 016 6v6a2 2 0 01-2 2H22a2 2 0 01-2-2v-6a6 6 0 016-6z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-10rj6tbcg85";
freezeTemplate(tmpl);
