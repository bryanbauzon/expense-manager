import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_service_campaign.css";

import _implicitScopedStylesheets from "./product_service_campaign.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M47.4 61.7a1 1 0 011 .9v14.3a3 3 0 01-2.8 3H25a3 3 0 01-3-2.8V62.7a1 1 0 01.9-1zm29.6 0a1 1 0 011 .9v14.3a3 3 0 01-3 3H54.7a3 3 0 01-3-2.8V62.7a1 1 0 01.9-1zm-37.4 4.2l-.1.1-5.8 6.3-2.7-2.5a.8.8 0 00-1-.1l-1.1 1a.6.6 0 00-.1 1l3.8 3.6a1.6 1.6 0 001 .4 1.4 1.4 0 001.2-.4l3.1-3.3.6-.7 3.2-3.3a.8.8 0 000-1l-1.1-1a.8.8 0 00-1-.1zm29.5 0l-.1.1-5.8 6.3-2.7-2.5a.8.8 0 00-1-.1l-1.1 1a.6.6 0 00-.1 1l3.8 3.6a1.5 1.5 0 001 .4 1.4 1.4 0 001.2-.4l3.1-3.3.6-.7 3.2-3.3a.8.8 0 000-1L70 66a.8.8 0 00-1-.1zM45.7 51.5a3 3 0 012.8 2.9v3.2a1 1 0 01-.8 1H21a1 1 0 01-1-1v-3a3 3 0 012.8-3.1h23zm31.5 0a3 3 0 012.8 2.9v3.2a1 1 0 01-.8 1H52.4a1 1 0 01-1-1v-3a3 3 0 012.7-3.1h23zm-15-21.3a1 1 0 011 .9v14.4a3 3 0 01-3 3H39.9a3 3 0 01-3-2.8V31.2a1 1 0 01.9-1h24.5zm-7.9 4.2l-6 6.4-2.5-2.5a.8.8 0 00-1-.1l-1.2 1a.6.6 0 000 1l3.7 3.6a1.6 1.6 0 001.1.4 1.4 1.4 0 001.1-.4l3.2-3.3.6-.7 3.1-3.3a.8.8 0 000-1l-1-1a.8.8 0 00-1 0zM62.2 20a3 3 0 013 2.9V26a1 1 0 01-1 1H35.9a1 1 0 01-1-.9V23a3 3 0 012.8-3h24.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6a9eqmtiqsd";
freezeTemplate(tmpl);
