import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveDatatableTooltipBubble.css";

import _implicitScopedStylesheets from "./primitiveDatatableTooltipBubble.scoped.css?scoped=true";

import _lightningButtonIcon from "lightning/buttonIcon";
import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import {registerTemplate} from "lwc";
const stc0 = [["outline", "none", false]];
const stc1 = {
  "slds-float_right": true,
  "slds-popover__close": true
};
const stc2 = {
  "data-close": "true"
};
const stc3 = {
  classMap: {
    "slds-popover__header": true
  },
  key: 2
};
const stc4 = {
  classMap: {
    "slds-media": true,
    "slds-media_center": true,
    "slds-has-flexi-truncate": true
  },
  key: 3
};
const stc5 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 4
};
const stc6 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-utility-ban": true
  },
  key: 5
};
const stc7 = {
  classMap: {
    "slds-media__body": true
  },
  key: 7
};
const stc8 = {
  "slds-truncate": true,
  "slds-text-heading_medium": true
};
const stc9 = {
  "slds-popover__body": true
};
const stc10 = {
  styleDecls: [["list-style", "disc", false], ["margin-left", "1.5rem", false]],
  key: 10
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, b: api_bind, c: api_custom_element, h: api_element, d: api_dynamic_text, t: api_text, k: api_key, i: api_iterator} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_element("section", {
    styleDecls: stc0,
    attrs: {
      "role": "dialog",
      "aria-describedby": api_scoped_id("primitive-datatable-tooltip-bubble-body-id"),
      "aria-labelledby": api_scoped_id("primitive-datatable-tooltip-bubble-header-id"),
      "tabindex": "0"
    },
    key: 0,
    on: {
      "focusout": _m0 || ($ctx._m0 = api_bind($cmp.handleBlur)),
      "keydown": _m1 || ($ctx._m1 = api_bind($cmp.handleBubbleKey))
    }
  }, [!$cmp.hideCloseButton ? api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    classMap: stc1,
    attrs: stc2,
    props: {
      "iconName": "utility:close",
      "variant": "bare-inverse",
      "size": "small",
      "alternativeText": $cmp.i18n.closeButtonAssistiveText
    },
    key: 1,
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.handleCloseButtonClick)),
      "keydown": _m3 || ($ctx._m3 = api_bind($cmp.handleCloseButtonKey))
    }
  }) : null, api_element("header", stc3, [api_element("div", stc4, [api_element("div", stc5, [api_element("span", stc6, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": $cmp.computedHeaderIconName,
      "size": "x-small",
      "variant": "inverse"
    },
    key: 6
  })])]), api_element("div", stc7, [api_element("h2", {
    classMap: stc8,
    attrs: {
      "id": api_scoped_id("primitive-datatable-tooltip-bubble-header-id"),
      "title": $cmp.header
    },
    key: 8
  }, [api_text(api_dynamic_text($cmp.header))])])])]), api_element("div", {
    classMap: stc9,
    attrs: {
      "id": api_scoped_id("primitive-datatable-tooltip-bubble-body-id")
    },
    key: 9
  }, [$cmp.isContentList ? api_element("ul", stc10, api_iterator($cmp.content, function (item, index) {
    return api_element("li", {
      key: api_key(11, item)
    }, [api_text(api_dynamic_text(item))]);
  })) : null, !$cmp.isContentList ? api_text(api_dynamic_text($cmp.content)) : null])])];
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
tmpl.stylesheetToken = "lwc-5848ua7hl67";
freezeTemplate(tmpl);
