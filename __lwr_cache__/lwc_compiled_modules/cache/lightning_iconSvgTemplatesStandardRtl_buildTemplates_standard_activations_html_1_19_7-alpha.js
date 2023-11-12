import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./activations.css";

import _implicitScopedStylesheets from "./activations.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M38 60a2 2 0 012 2v16a2 2 0 01-2 2H22a2 2 0 01-2-2V62a2 2 0 012-2zm21.8-33.1a1 1 0 011.1 1.2l-.1 2.4a1.2 1.2 0 01-1.2 1.2l-4 .1a.8.8 0 00-.6 1.3l7.8 7.8A11 11 0 1169 61a11.2 11.2 0 01-5.5-1.4L55.1 68a.8.8 0 00.6 1.3l4 .1a1.2 1.2 0 011.2 1.2v2.3a1.2 1.2 0 01-1.2 1.2l-12.9-.2a1.2 1.2 0 01-1.2-1.2l-.2-12.9a1.2 1.2 0 011.2-1.2l2.4.1a1.2 1.2 0 011.2 1.2l.1 4a.8.8 0 001.3.6l8.3-8.3A11 11 0 0158 50a10.3 10.3 0 011.5-5.5l-7.9-7.9a.8.8 0 00-1.3.6l-.1 4a1.2 1.2 0 01-1.2 1.2h-2.3a1.2 1.2 0 01-1.2-1.2l.2-12.9a1.2 1.2 0 011.2-1.2l12.9-.2zM26 74h8v-8h-8zm38-24a5 5 0 105-5 5 5 0 00-5 5zM38 20a2 2 0 012 2v16a2 2 0 01-2 2H22a2 2 0 01-2-2V22a2 2 0 012-2zM26 34h8v-8h-8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-48hj09s3hom";
freezeTemplate(tmpl);
