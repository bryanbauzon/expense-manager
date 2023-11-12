function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return (useNativeDirPseudoclass ? '' : '[dir="rtl"]') + " input[type=\"tel\"]" + (useNativeDirPseudoclass ? ':dir(rtl)' : '') + shadowSelector + " {direction: ltr;text-align: right;unicode-bidi: embed;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];