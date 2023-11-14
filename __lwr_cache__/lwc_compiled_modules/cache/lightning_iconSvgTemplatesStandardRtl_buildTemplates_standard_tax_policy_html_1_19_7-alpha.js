import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tax_policy.css";

import _implicitScopedStylesheets from "./tax_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M71.6 55.6c0 .9-.6 1.6-1.1 2.3l-1 1.4-.3 1.8c-.1.9-.2 1.8-.8 2.3s-1.5.7-2.4.9c-.6 0-1.2.1-1.7.3s-1 .6-1.3.9c-.8.6-1.6 1.1-2.4 1.1s-1.5-.5-2.2-1c-.6-.4-1-.8-1.5-1l-1.8-.3c-.9-.2-1.8-.3-2.3-.9s-.7-1.4-.9-2.3l-.3-1.8-.9-1.3c-.6-.8-1.1-1.5-1.1-2.4 0-.7.5-1.5 1-2.2.4-.5.8-1 1-1.5s.2-1.1.3-1.7c.2-1 .3-1.9.8-2.4s1.5-.7 2.4-.8c.6 0 1.2-.2 1.8-.4a5 5 0 001.3-.9c.8-.5 1.5-1 2.4-1 .7 0 1.5.5 2.2 1l1.5 1 1.7.3c1 .1 1.8.2 2.4.8s.7 1.5.8 2.4c0 .6.2 1.2.4 1.7.2.6.6 1.1 1 1.6.5.7 1 1.4 1 2.1zm-15.4 0c0-2.2 1.8-4.1 4-4.1s4.2 1.9 4.2 4.1-1.9 4.1-4.1 4.1-4.1-1.8-4.1-4zM69.6 67c-.9.5-1.8.7-2.6.9l-.8.1c-.2.2-.6.2-.9.2l-.7.4-.7.5c-.5.4-1 .8-1.8 1l7 9.8 1.7-4.7h4.6zm-11.2 3l-6.9 9.9-1.7-4.7H45l6-8c.9.4 1.8.6 2.5.8l.8.2.8.1.7.4c.5.4 1.3 1 2.5 1.3zm1.9-22a7.7 7.7 0 010 15.4c-4.3 0-7.7-3.3-7.7-7.7S56 48 60.3 48zM44.2 20.3l16 8.8c.4.3.7.7.7 1.2v1.2c0 .7-.6 1.3-1.3 1.3H25.9c-.7 0-1.3-.6-1.3-1.3v-1.3a1.1 1.1 0 01.6-1l16-9c.5-.2 1-.4 1.5-.4s1 .2 1.5.5zm-4.7 6.6a3.2 3.2 0 106.5 0c0-1.8-1.4-3.2-3.3-3.2s-3.2 1.4-3.2 3.2zM56.4 38v7.3l-1.7.3c-.8.1-1.6.2-2.2.5V38c0-.7.6-1.3 1.3-1.3H55c.7 0 1.3.6 1.3 1.3zm-7.8 14.2H50l-.8 1.1c-.6.9-1.3 1.8-1.3 2.7s.6 1.8 1.2 2.7H26c-.7 0-1.3-.6-1.3-1.3V56a4 4 0 013.9-3.9h.6V37.9c0-.7.6-1.3 1.3-1.3h1.3c.7 0 1.3.6 1.3 1.3v14.3H37V37.9c0-.7.6-1.3 1.3-1.3h1.3c.7 0 1.3.6 1.3 1.3v14.3h3.9V37.9c0-.7.6-1.3 1.3-1.3h1.3c.7 0 1.3.6 1.3 1.3v14.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6p6329p0j2j";
freezeTemplate(tmpl);
