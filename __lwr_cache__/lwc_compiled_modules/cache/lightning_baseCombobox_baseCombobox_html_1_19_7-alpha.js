import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./baseCombobox.css";

import _implicitScopedStylesheets from "./baseCombobox.scoped.css?scoped=true";

import _lightningIcon from "lightning/icon";
import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import _lightningBaseComboboxItem from "lightning/baseComboboxItem";
import _lightningSpinner from "lightning/spinner";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-spinner__dot-a${0}"${2}></div>`;
const $fragment2 = parseFragment`<div class="slds-spinner__dot-b${0}"${2}></div>`;
const stc0 = {
  classMap: {
    "slds-combobox_container": true
  },
  key: 0
};
const stc1 = {
  "role": "none"
};
const stc2 = {
  "slds-icon_container": true,
  "slds-combobox__input-entity-icon": true
};
const stc3 = {
  attrs: {
    "part": "input-text"
  },
  key: 4
};
const stc4 = {
  attrs: {
    "part": "input-container"
  },
  key: 5
};
const stc5 = {
  classMap: {
    "slds-truncate": true
  },
  key: 8
};
const stc6 = {
  classMap: {
    "slds-input__icon-group": true,
    "slds-input__icon-group_right": true
  },
  key: 9
};
const stc7 = {
  "slds-button": true,
  "slds-button_icon": true,
  "slds-input__icon": true,
  "slds-input__icon_right": true
};
const stc8 = {
  props: {
    "iconName": "utility:close",
    "variant": "bare",
    "svgClass": "slds-button__icon"
  },
  key: 11
};
const stc9 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 12
};
const stc10 = {
  classMap: {
    "slds-input__icon-group": true,
    "slds-input__icon-group_right": true
  },
  key: 13
};
const stc11 = {
  classMap: {
    "slds-spinner": true,
    "slds-spinner_brand": true,
    "slds-spinner_x-small": true,
    "slds-input__spinner": true
  },
  attrs: {
    "role": "status"
  },
  key: 14
};
const stc12 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 15
};
const stc13 = {
  "slds-input__icon": true,
  "slds-input__icon_right": true
};
const stc14 = {
  "slds-media": true,
  "slds-listbox__option": true,
  "slds-media_center": true
};
const stc15 = {
  classMap: {
    "slds-listbox__item": true
  },
  attrs: {
    "role": "presentation"
  },
  key: 24
};
const stc16 = {
  classMap: {
    "slds-media": true,
    "slds-listbox__option": true,
    "slds-listbox__option_plain": true,
    "slds-media_small": true
  },
  attrs: {
    "role": "presentation"
  },
  key: 25
};
const stc17 = {
  "slds-listbox__item": true
};
const stc18 = {
  "role": "presentation"
};
const stc19 = {
  classMap: {
    "slds-listbox__item": true,
    "slds-spinner_inline": true
  },
  attrs: {
    "role": "presentation"
  },
  key: 29
};
const stc20 = {
  classMap: {
    "slds-align_absolute-center": true,
    "slds-p-top_medium": true,
    "slds-p-bottom_medium": true
  },
  key: 30
};
const stc21 = {
  classMap: {
    "slds-align_absolute-center": true
  },
  key: 32
};
const stc22 = {
  "slds-inline-logo": true
};
const stc23 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, gid: api_scoped_id, h: api_element, d: api_dynamic_text, t: api_text, st: api_static_fragment, k: api_key, i: api_iterator, f: api_flatten} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10, _m11, _m12, _m13, _m14, _m15, _m16, _m17} = $ctx;
  return [api_element("div", stc0, [api_element("div", {
    className: $cmp.computedDropdownTriggerClass,
    key: 1,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleTriggerClick))
    }
  }, [api_element("div", {
    className: $cmp.computedFormElementClass,
    attrs: stc1,
    key: 2
  }, [$cmp.hasInputPill ? api_custom_element("lightning-icon", _lightningIcon, {
    classMap: stc2,
    props: {
      "iconName": $cmp.inputPill.iconName,
      "alternativeText": $cmp.inputPill.iconAlternativeText,
      "size": "x-small"
    },
    key: 3
  }) : null, !$cmp.isUserInputDisabled ? api_element("div", stc3, [api_element("div", stc4, [api_element("input", {
    className: $cmp.computedInputClass,
    attrs: {
      "id": api_scoped_id("combobox-input"),
      "type": "text",
      "role": $cmp.customRole,
      "aria-expanded": $cmp.computedAriaExpanded,
      "aria-haspopup": $cmp.customAriaHasPopup,
      "required": $cmp.required ? "" : null,
      "readonly": $cmp._inputAriaReadOnly ? "" : null,
      "autocomplete": $cmp.autocomplete,
      "data-value": $cmp.computedInputValue,
      "name": $cmp.name,
      "placeholder": $cmp.computedPlaceholder,
      "maxlength": $cmp.inputMaxlength,
      "disabled": $cmp.disabled ? "" : null,
      "aria-readonly": $cmp._inputAriaReadOnly,
      "aria-autocomplete": $cmp.computedAriaAutocomplete,
      "aria-owns": api_scoped_id("dropdown-element"),
      "aria-label": $cmp.inputLabel,
      "part": "input"
    },
    props: {
      "value": $cmp.computedInputValue
    },
    key: 6,
    on: {
      "focus": _m1 || ($ctx._m1 = api_bind($cmp.handleFocus)),
      "select": _m2 || ($ctx._m2 = api_bind($cmp.handleInputSelect)),
      "change": _m3 || ($ctx._m3 = api_bind($cmp.handleTextChange)),
      "input": _m4 || ($ctx._m4 = api_bind($cmp.handleInput)),
      "keydown": _m5 || ($ctx._m5 = api_bind($cmp.handleInputKeyDown)),
      "blur": _m6 || ($ctx._m6 = api_bind($cmp.handleBlur))
    }
  })])]) : null, $cmp.isUserInputDisabled ? api_element("button", {
    className: $cmp.computedInputClass,
    attrs: {
      "id": api_scoped_id("combobox-button"),
      "type": "button",
      "aria-expanded": $cmp.computedAriaExpanded,
      "aria-haspopup": $cmp.customAriaHasPopup,
      "name": $cmp.name,
      "role": $cmp.customRole,
      "data-value": $cmp.computedInputValue,
      "disabled": $cmp.disabled ? "" : null,
      "aria-label": $cmp.computedButtonTriggerAriaLabel,
      "aria-required": $cmp.required
    },
    key: 7,
    on: {
      "focus": _m7 || ($ctx._m7 = api_bind($cmp.handleFocus)),
      "keydown": _m8 || ($ctx._m8 = api_bind($cmp.handleInputKeyDown)),
      "blur": _m9 || ($ctx._m9 = api_bind($cmp.handleBlur))
    }
  }, [api_element("span", stc5, [$cmp.computedInputValue ? api_text(api_dynamic_text($cmp.computedInputValue)) : null, !$cmp.computedInputValue ? api_text(api_dynamic_text($cmp.computedPlaceholder)) : null])]) : null, $cmp.isCloseVisible ? api_element("div", stc6, [api_element("button", {
    classMap: stc7,
    attrs: {
      "type": "button",
      "title": $cmp.i18n.pillCloseButtonAlternativeText
    },
    key: 10,
    on: {
      "click": _m10 || ($ctx._m10 = api_bind($cmp.handlePillRemove))
    }
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc8), api_element("span", stc9, [api_text(api_dynamic_text($cmp.i18n.pillCloseButtonAlternativeText))])])]) : null, !$cmp.hasInputPill ? api_element("div", stc10, [$cmp.showInputActivityIndicator ? api_element("div", stc11, [api_element("span", stc12, [api_text(api_dynamic_text($cmp.i18n.loadingText))]), api_static_fragment($fragment1(), 17), api_static_fragment($fragment2(), 19)]) : null, $cmp.inputIconName ? api_custom_element("lightning-icon", _lightningIcon, {
    classMap: stc13,
    props: {
      "alternativeText": $cmp.inputIconAlternativeText,
      "iconName": $cmp.inputIconName,
      "size": $cmp.inputIconSize
    },
    key: 20
  }) : null]) : null]), api_element("div", {
    className: $cmp.computedDropdownClass,
    attrs: {
      "id": api_scoped_id("dropdown-element"),
      "data-dropdown-element": "",
      "role": "listbox",
      "part": "dropdown overlay",
      "aria-label": $cmp.inputLabel
    },
    key: 21,
    on: {
      "scroll": _m11 || ($ctx._m11 = api_bind($cmp.handleListboxScroll)),
      "mousedown": _m12 || ($ctx._m12 = api_bind($cmp.handleDropdownMouseDown)),
      "mouseup": _m13 || ($ctx._m13 = api_bind($cmp.handleDropdownMouseUp)),
      "mouseleave": _m14 || ($ctx._m14 = api_bind($cmp.handleDropdownMouseLeave)),
      "click": _m15 || ($ctx._m15 = api_bind($cmp.handleOptionClick))
    }
  }, $cmp._hasDropdownOpened ? api_flatten([api_iterator($cmp._items, function (item) {
    return [!item.items ? api_custom_element("lightning-base-combobox-item", _lightningBaseComboboxItem, {
      classMap: stc14,
      attrs: {
        "data-item-id": item.id,
        "data-value": item.value
      },
      props: {
        "role": "option",
        "item": item,
        "id": api_scoped_id(item.id),
        "ariaChecked": item.checked
      },
      key: api_key(22, item.value),
      on: {
        "mouseenter": _m16 || ($ctx._m16 = api_bind($cmp.handleOptionMouseEnter))
      }
    }) : null, item.items ? api_element("ul", {
      attrs: {
        "role": "group",
        "aria-label": item.label
      },
      key: api_key(23, item.label)
    }, api_flatten([item.label ? api_element("li", stc15, [api_element("div", stc16, [api_element("h3", {
      attrs: {
        "role": "presentation",
        "title": item.label
      },
      key: 26
    }, [api_text(api_dynamic_text(item.label))])])]) : null, api_iterator(item.items, function (groupItem) {
      return api_element("li", {
        classMap: stc17,
        attrs: stc18,
        key: api_key(27, groupItem.value)
      }, [api_custom_element("lightning-base-combobox-item", _lightningBaseComboboxItem, {
        classMap: stc14,
        attrs: {
          "data-item-id": groupItem.id,
          "data-value": groupItem.value
        },
        props: {
          "role": "option",
          "item": groupItem,
          "id": api_scoped_id(groupItem.id),
          "ariaChecked": groupItem.checked
        },
        key: 28,
        on: {
          "mouseenter": _m17 || ($ctx._m17 = api_bind($cmp.handleOptionMouseEnter))
        }
      })]);
    })])) : null];
  }), $cmp.showDropdownActivityIndicator ? api_element("div", stc19, [api_element("div", stc20, [api_custom_element("lightning-spinner", _lightningSpinner, {
    props: {
      "size": "x-small",
      "alternativeText": $cmp.i18n.loadingText
    },
    key: 31
  })])]) : null, $cmp.showAttribution ? api_element("div", stc21, [api_element("img", {
    classMap: stc22,
    attrs: {
      "src": $cmp.attributionLogoUrl,
      "alt": $cmp.attributionLogoAssistiveText,
      "title": $cmp.attributionLogoAssistiveText
    },
    key: 33
  })]) : null]) : stc23)])])];
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
tmpl.stylesheetToken = "lwc-4kb6kaqheak";
freezeTemplate(tmpl);
