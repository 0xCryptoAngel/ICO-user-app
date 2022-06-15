export function getUrlQueryString(names, urls) {
  urls = urls || window.location.href;
  urls && urls.indexOf("?") > -1 ? urls = urls.substring(urls.indexOf("?") + 1) : "";
  let reg = new RegExp("(^|&)" + names + "=([^&]*)(&|$)", "i");
  let r = urls ? urls.match(reg) : window.location.search.substr(1).match(reg);
  if (r != null && r[2] !== "") return unescape(r[2]);
  return "";
}