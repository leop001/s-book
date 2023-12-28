const user = require("../user");

const configHeader = {
  Cookie: user.cookie,
  Origin: "https://juejin.cn",
  Referer: "https://juejin.cn/",
  "Sec-Ch-Ua":
    '"Not_A Brand";v="8", "Chromium";v="120", "Microsoft Edge";v="120"',
  "Sec-Ch-Ua-Mobile": "?0",
  "Sec-Ch-Ua-Platform": '"macOS"',
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-site",
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
  "Content-Type": "application/x-www-form-urlencoded",
};

function getConfig(url, data = {}) {
  return {
    method: "post",
    url: `https://api.juejin.cn${url}?aid=${user.aid}&uuid=${user.uuid}&spider=0`,
    headers: configHeader,
    data: data,
  };
}

module.exports = {
  getConfig,
};
