function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".wrapper" + shadowSelector + "{background-color: #002249;min-height: 100vh;}th" + shadowSelector + "{background-color: #04AA6D;color: #fff;padding: 8px;}td" + shadowSelector + "{padding: 8px;}tr:nth-child(even)" + shadowSelector + "{background-color: #f2f2f2;}.noData" + shadowSelector + "{color: #fff;flex: content;justify-content: center;align-items: center;text-align: center;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];