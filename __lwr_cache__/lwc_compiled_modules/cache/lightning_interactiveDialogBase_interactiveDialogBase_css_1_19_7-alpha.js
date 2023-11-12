function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return [".fix-slds-modal", shadowSelector, " {visibility: visible;z-index: unset;}.fix-slds-backdrop", shadowSelector, " {z-index: unset;}.slds-modal", shadowSelector, " {opacity: 0;visibility: hidden;transition: opacity 0.1s linear, -webkit-transform 0.1s linear;transition: opacity 0.1s linear, -webkit-transform 0.1s linear;transition: transform 0.1s linear, opacity 0.1s linear;transition: transform 0.1s linear, opacity 0.1s linear,\n -webkit-transform 0.1s linear;position: fixed;top: 0;right: 0;bottom: 0;left: 0;z-index: 9001;}.slds-modal__container", shadowSelector, " {position: relative;transform: translate(0, 0);transform: translate(0, 0);transition: opacity 0.1s linear, -webkit-transform 0.1s linear;transition: opacity 0.1s linear, -webkit-transform 0.1s linear;transition: transform 0.1s linear, opacity 0.1s linear;transition: transform 0.1s linear, opacity 0.1s linear,\n -webkit-transform 0.1s linear;display: -webkit-box;display: flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;flex-direction: column;flex-direction: column;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;margin: 0 2rem;height: 100%;padding: 3rem 0 5rem;border-radius: 0.25rem;}@media (min-width: 48em) {.slds-modal__container", shadowSelector, " {margin: 0 auto;width: 50%;max-width: 40rem;min-width: 20rem;}}.slds-p-around_medium", shadowSelector, ",.slds-p-around--medium", shadowSelector, " {padding: 1rem;}.slds-modal__header", shadowSelector, ",.slds-modal__footer", shadowSelector, " {-ms-flex-negative: 0;flex-shrink: 0;}.slds-modal__header", shadowSelector, " {position: relative;border-top-right-radius: var(--sds-c-modal-radius-border, 0.25rem);border-top-left-radius: var(--sds-c-modal-radius-border, 0.25rem);border-bottom-width: var(--sds-c-modal-sizing-border, 2px);border-bottom-style: solid;border-bottom-color: var(--sds-c-modal-color-border, #e5e5e5);background-color: var(\n --sds-c-modal-header-color-background,\n var(--sds-c-modal-color-background, white)\n );color: var(--sds-c-modal-header-text-color, var(--sds-c-modal-text-color));padding-top: var(--sds-c-modal-header-spacing-block-start, 1rem);padding-right: var(--sds-c-modal-header-spacing-inline-end, 1rem);padding-bottom: var(--sds-c-modal-header-spacing-block-end, 1rem);padding-left: var(--sds-c-modal-header-spacing-inline-start, 1rem);text-align: center;}.slds-modal__content_headless", shadowSelector, " {border-top-right-radius:var(--slds-c-modal-radius-border, var(--sds-c-modal-radius-border, 0.25rem));border-top-left-radius:var(--slds-c-modal-radius-border, var(--sds-c-modal-radius-border, 0.25rem));}.slds-modal__content", shadowSelector, " {background-color: var(\n --sds-c-modal-content-color-background,\n var(--sds-c-modal-color-background, white)\n );color: var(--sds-c-modal-content-text-color, var(--sds-c-modal-text-color));overflow: hidden;overflow-y: auto;}.slds-modal__footer", shadowSelector, " {border-bottom-right-radius: var(--sds-c-modal-radius-border, 0.25rem);border-bottom-left-radius: var(--sds-c-modal-radius-border, 0.25rem);border-top-width: var(--sds-c-modal-sizing-border, 2px);border-top-style: solid;border-top-color: var(--sds-c-modal-color-border, #e5e5e5);background-color: var(\n --sds-c-modal-footer-color-background,\n var(--sds-c-modal-color-background, #f3f2f3)\n );color: var(--sds-c-modal-footer-text-color, var(--sds-c-modal-text-color));padding-top: var(--sds-c-modal-footer-spacing-block-start, 0.75rem);padding-right: var(--sds-c-modal-footer-spacing-inline-end, 1rem);padding-bottom: var(--sds-c-modal-footer-spacing-block-end, 0.75rem);padding-left: var(--sds-c-modal-footer-spacing-inline-start, 1rem);text-align: right;box-shadow: var(\n --sds-c-modal-shadow,\n 0 2px 3px 0 rgb(0 0 0 / 16%)\n );box-shadow: var(--sds-c-modal-shadow, 0 2px 3px 0 rgb(0 0 0 / 16%));}.slds-modal__footer_directional", shadowSelector, " .slds-button:first-child", shadowSelector, ",.slds-modal__footer--directional", shadowSelector, " .slds-button:first-child", shadowSelector, " {float: left;}.slds-modal__footer", shadowSelector, " .slds-button", shadowSelector, " + .slds-button", shadowSelector, " {margin-left: 0.5rem;}.slds-theme_default", shadowSelector, ",.slds-theme--default", shadowSelector, " {background-color: white;color: #080707;}@media (min-width: 48em) {.slds-modal_small", shadowSelector, " .slds-modal__container", shadowSelector, " {width: 60%;max-width: 52.0625rem;min-width: 40rem;}}@media (min-width: 48em) {.slds-modal_medium", shadowSelector, " .slds-modal__container", shadowSelector, " {width: 70%;max-width: 75rem;min-width: 40rem;}}@media (min-width: 48em) {.slds-modal_large", shadowSelector, " .slds-modal__container", shadowSelector, ", .slds-modal--large", shadowSelector, " .slds-modal__container", shadowSelector, " {width: 90%;max-width: none;min-width: 40rem;}}.slds-backdrop", shadowSelector, " {transition-duration: 0.4s;transition-duration: 0.4s;width: 100%;height: 100%;opacity: 0;visibility: hidden;position: fixed;top: 0;right: 0;bottom: 0;left: 0;background: var(--sds-c-backdrop-color-background, rgb(8 7 7 / 60%));z-index: 9000;}.slds-backdrop_open", shadowSelector, ",.slds-backdrop--open", shadowSelector, " {visibility: visible;opacity: 1;transition: opacity 0.4s linear;transition: opacity 0.4s linear;}.slds-fade-in-open", shadowSelector, " {opacity: 1;visibility: visible;transition: opacity 0.1s linear;transition: opacity 0.1s linear;}.slds-fade-in-open", shadowSelector, " .slds-modal__container-reset", shadowSelector, " {opacity: 1;visibility: visible;transform: translate(0, 0);transform: translate(0, 0);}.slds-modal_prompt", shadowSelector, " .slds-modal__close", shadowSelector, ",.slds-modal--prompt", shadowSelector, " .slds-modal__close", shadowSelector, " {display: none;}.slds-modal_prompt", shadowSelector, " .slds-modal__header", shadowSelector, ",.slds-modal--prompt", shadowSelector, " .slds-modal__header", shadowSelector, " {border-bottom: 0;}.slds-modal_prompt", shadowSelector, " .slds-modal__content", shadowSelector, ",.slds-modal--prompt", shadowSelector, " .slds-modal__content", shadowSelector, " {padding-left: 2rem;padding-right: 2rem;}.slds-modal_prompt", shadowSelector, " .slds-modal__footer", shadowSelector, ",.slds-modal--prompt", shadowSelector, " .slds-modal__footer", shadowSelector, " {border-top: 0;text-align: center;}.slds-button", shadowSelector, " {position: relative;display: inline-box;display: inline-flexbox;display: inline-flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;padding-top: var(--sds-c-button-spacing-block-start, 0);padding-right: var(--sds-c-button-spacing-inline-end, 0);padding-bottom: var(--sds-c-button-spacing-block-end, 0);padding-left: var(--sds-c-button-spacing-inline-start, 0);background: none;background-color: var(--sds-c-button-color-background, transparent);background-clip: border-box;border-color: var(--sds-c-button-color-border, transparent);border-style: solid;border-width: var(--sds-c-button-sizing-border, 1px);border-radius: var(--sds-c-button-radius-border, 0.25rem);box-shadow: var(--sds-c-button-shadow);box-shadow: var(--sds-c-button-shadow);line-height: var(--sds-c-button-line-height, 1.875rem);text-decoration: none;color: var(--sds-c-button-text-color, #0176d3);appearance: none;white-space: normal;user-select: none;user-select: none;user-select: none;user-select: none;}.slds-button:hover", shadowSelector, ",.slds-button:focus", shadowSelector, ",.slds-button:active", shadowSelector, ",.slds-button:visited", shadowSelector, " {text-decoration: none;}.slds-button:hover", shadowSelector, ",.slds-button:focus", shadowSelector, " {color: var(--sds-c-button-text-color-hover, #014486);}.slds-button:focus", shadowSelector, " {outline: 0;box-shadow: var(--sds-c-button-shadow-focus, 0 0 3px #0176d3);box-shadow: var(--sds-c-button-shadow-focus, 0 0 3px #0176d3);}.slds-button:active", shadowSelector, " {color: var(--sds-c-button-text-color-active, #014486);background-color:var(--slds-c-button-color-background-active);border-color:var(--slds-c-button-color-border-active);}.slds-button_neutral", shadowSelector, ",.slds-button--neutral", shadowSelector, " {padding-left: var(--sds-c-button-neutral-spacing-inline-start, 1rem);padding-right: var(--sds-c-button-neutral-spacing-inline-end, 1rem);text-align: center;vertical-align: middle;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;transition: border 0.15s linear;transition: border 0.15s linear;background-color: var(--sds-c-button-neutral-color-background, white);border-color: var(--sds-c-button-neutral-color-border, #c9c9c9);}.slds-button_neutral:hover", shadowSelector, ",.slds-button_neutral:focus", shadowSelector, ",.slds-button--neutral:hover", shadowSelector, ",.slds-button--neutral:focus", shadowSelector, " {background-color: var(\n --sds-c-button-neutral-color-background-hover,\n #f3f3f3\n );border-color: var(--sds-c-button-neutral-color-border-hover, #c9c9c9);}.slds-button_neutral:active", shadowSelector, ",.slds-button--neutral:active", shadowSelector, " {background-color: var(\n --sds-c-button-neutral-color-background-active,\n #f3f2f3\n );border-color: var(--sds-c-button-neutral-color-border-active, #c9c9c9);}.slds-button_brand", shadowSelector, ",.slds-button--brand", shadowSelector, " {padding-left: var(--sds-c-button-brand-spacing-inline-start, 1rem);padding-right: var(--sds-c-button-brand-spacing-inline-end, 1rem);text-align: center;vertical-align: middle;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;transition: border 0.15s linear;transition: border 0.15s linear;background-color: var(--sds-c-button-brand-color-background, #0176d3);border-color: var(--sds-c-button-brand-color-border, #0176d3);color: var(--sds-c-button-brand-text-color, white);}.slds-button_brand:hover", shadowSelector, ",.slds-button_brand:focus", shadowSelector, ",.slds-button--brand:hover", shadowSelector, ",.slds-button--brand:focus", shadowSelector, " {background-color: var(--sds-c-button-brand-color-background-hover, #014486);border-color: var(--sds-c-button-brand-color-border-hover, #014486);color: var(--sds-c-button-brand-text-color-hover, white);}.slds-button_brand:active", shadowSelector, ",.slds-button--brand:active", shadowSelector, " {background-color: var(\n --sds-c-button-brand-color-background-active,\n #014486\n );border-color: var(--sds-c-button-brand-color-border-active, #014486);color: var(--sds-c-button-brand-text-color-active, white);}.slds-modal_prompt", shadowSelector, " {font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n 'Segoe UI Symbol';text-size-adjust: 100%;text-size-adjust: 100%;font-size: 0.8125rem;line-height: 1.5;color: #080707;-webkit-tap-highlight-color: rgb(0 0 0 / 0%);}button", shadowSelector, " {color: inherit;font: inherit;margin: 0;overflow: visible;text-transform: none;appearance: button;cursor: pointer;}button", shadowSelector, "::-moz-focus-inner,input", shadowSelector, "::-moz-focus-inner {border: 0;padding: 0;}button", shadowSelector, ",html", shadowSelector, " input[type='button']", shadowSelector, ",input[type='reset']", shadowSelector, ",input[type='submit']", shadowSelector, " {appearance: button;cursor: pointer;}*", shadowSelector, ",*", shadowSelector, "::before,*", shadowSelector, "::after {box-sizing: border-box;box-sizing: border-box;}.slds-theme_default", shadowSelector, ",.slds-theme--default", shadowSelector, " {background-color: white;color: #080707;}.slds-theme_shade", shadowSelector, ",.slds-theme--shade", shadowSelector, " {background-color: #f3f2f2;}.slds-theme_inverse", shadowSelector, ",.slds-theme--inverse", shadowSelector, " {color: white;background-color: #001639;border-color: #001639;}.slds-theme_alt-inverse", shadowSelector, ",.slds-theme--alt-inverse", shadowSelector, " {color: white;background-color: #032d60;border-color: #032d60;}.slds-theme_success", shadowSelector, ",.slds-theme--success", shadowSelector, " {color: white;background-color: #2e844a;}.slds-theme_info", shadowSelector, ",.slds-theme--info", shadowSelector, " {color: white;background-color: #706e6b;}.slds-theme_warning", shadowSelector, ",.slds-theme--warning", shadowSelector, " {background-color: #fe9339;color: #080707;}.slds-theme_error", shadowSelector, ",.slds-theme--error", shadowSelector, " {color: white;background-color: #ea001e;}.slds-theme_offline", shadowSelector, ",.slds-theme--offline", shadowSelector, " {color: white;background-color: #444;}.slds-theme_alert-texture", shadowSelector, ",.slds-theme--alert-texture", shadowSelector, " {background-image: linear-gradient(\n 45deg,\n rgb(0 0 0 / 2.5%) 25%,\n transparent 25%,\n transparent 50%,\n rgb(0 0 0 / 2.5%) 50%,\n rgb(0 0 0 / 2.5%) 75%,\n transparent 75%,\n transparent\n );background-size: 64px 64px;}.slds-text-heading_medium", shadowSelector, ",.slds-text-heading--medium", shadowSelector, " {font-size: 1.25rem;line-height: 1.25;}h2", shadowSelector, " {margin: 0;padding: 0;font-weight: inherit;font-size: 1em;orphans: 3;widows: 3;page-break-after: void;}.slds-assistive-text", shadowSelector, " {position: absolute !important;margin: -1px !important;border: 0 !important;padding: 0 !important;width: 1px !important;height: 1px !important;overflow: hidden !important;clip: rect(0 0 0 0) !important;text-transform: none !important;white-space: nowrap !important;}"].join('');
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];