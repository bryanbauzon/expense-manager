import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bundle_config.css";

import _implicitScopedStylesheets from "./bundle_config.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M37 20H26a6 6 0 00-6 6.1v10.3a6 6 0 006 6.1h11a6 6 0 006-6.1V26a6 6 0 00-6-6.1zm-5 16.4h-1A5.1 5.1 0 0131 26h1a5.1 5.1 0 110 10.3zm23 6.1h11a6 6 0 006-6.1V26a6 6 0 00-6-6.1H55a6 6 0 00-6 6.1v10.3a6 6 0 006 6.1zm5-16.4h1a5.1 5.1 0 010 10.3h-1A5.1 5.1 0 0160 26zM37 48.7H26a6 6 0 00-6 6.1V65a6 6 0 006 6.2h11a6 6 0 006-6.2V54.8a6 6 0 00-6-6.1zM32 65h-1a5.1 5.1 0 010-10.2h1A5.1 5.1 0 0132 65zm47.1-3.7l-2.4-.2a.3.3 0 01-.2-.3 26 26 0 00-1-2.5v-.4l1.4-2a1 1 0 00-.1-1.4L74.2 52a1 1 0 00-.7-.3 2.2 2.2 0 00-.6.3l-2 1.4a.1.1 0 00-.1.2h-.2c-.9-.3-1.5-.8-2.4-1a.3.3 0 01-.3-.4l-.3-2.2a1.1 1.1 0 00-.6-1.1.4.4 0 00-.3-.1H63a1.1 1.1 0 00-.6.1c-.3.3-.7.7-.7 1a13.4 13.4 0 01-.2 2.3.3.3 0 01-.3.3c-.9.3-1.5.8-2.5 1h-.3l-2-1.5a.8.8 0 00-.7-.3c-.4 0-.4.1-.8.3l-2.6 2.6a1 1 0 00-.1 1.4c.4.6 1 1.2 1.4 2a.3.3 0 010 .3c-.2 1-.8 1.6-1 2.5a.3.3 0 01-.2.3l-2.3.3a1.1 1.1 0 00-1 .8v4.5a2.1 2.1 0 001 .8 12.7 12.7 0 012.3.3.3.3 0 01.2.3c.3.9.8 1.6 1 2.5 0 .1.2.3 0 .4l-1.4 2a1 1 0 00.1 1.3l2.6 2.7c.3.3.4.3.8.3a2 2 0 00.7-.3 21.6 21.6 0 012-1.5l.2-.1h.1c1 .3 1.6.8 2.5 1a.3.3 0 01.3.3l.2 2.4c.1.8.4 1 1 1h3.8c.7 0 1-.3 1-1l.3-2.4a.3.3 0 01.3-.2 25.6 25.6 0 002.5-1h.1a.1.1 0 01.1 0l2 1.5a1 1 0 00.7.3l.8-.3 2.6-2.6a1 1 0 000-1.4c-.3-.6-1-1.2-1.3-2a.3.3 0 010-.3c.2-1 .7-1.6 1-2.6a.3.3 0 01.2-.2l2.4-.3c.8 0 .9-.4.9-1v-3.8c0-1-.3-1.2-.9-1.4zm-14.5 9.1a5.8 5.8 0 01-5.8-5.8v-.2a5.9 5.9 0 0111.7 0 6.2 6.2 0 01-5.9 6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1lucbq2nipb";
freezeTemplate(tmpl);
