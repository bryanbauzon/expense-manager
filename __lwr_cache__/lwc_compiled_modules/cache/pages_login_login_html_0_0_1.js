import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./login.css";

import _implicitScopedStylesheets from "./login.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h1${3}>Expense Manager</h1>`;
const $fragment2 = parseFragment`<h2${3}>Gain total control of your money</h2>`;
const $fragment3 = parseFragment`<p${3}>Become your own money manager and make every cent count</p>`;
const $fragment4 = parseFragment`<img src="/public/assets/images/banner.png" alt="Expense Manager" class="login-img${0}"${2}>`;
const stc0 = {
  classMap: {
    "login-wrapper": true
  },
  key: 0
};
const stc1 = {
  "slds-button": true,
  "login-button": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, t: api_text, h: api_element} = $api;
  return [api_element("div", stc0, [api_static_fragment($fragment1(), 2), api_static_fragment($fragment2(), 4), api_static_fragment($fragment3(), 6), api_element("a", {
    classMap: stc1,
    attrs: {
      "href": $cmp.loginUrl
    },
    key: 7
  }, [api_text("Login")]), api_static_fragment($fragment4(), 9)])];
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
tmpl.stylesheetToken = "lwc-dd3g2h4cl9";
freezeTemplate(tmpl);
