function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return (useNativeDirPseudoclass ? '' : '[dir="rtl"]') + " .slds-dropdown_left" + (useNativeDirPseudoclass ? ':dir(rtl)' : '') + shadowSelector + " {left: 0;right: auto;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];