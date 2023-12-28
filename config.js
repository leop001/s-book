const cookie = '_tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227301946889732752905%2522%252C%2522user_unique_id%2522%253A%25227301946889732752905%2522%252C%2522timestamp%2522%253A1700117005333%257D; csrf_session_id=6c1401e428aa152e7681883b19729800; passport_csrf_token=9fba349d6d4b7decc0ae0405d1baf788; passport_csrf_token_default=9fba349d6d4b7decc0ae0405d1baf788; n_mh=tJqGLHMRtPcpNEFzCjt2aLduWVs_lf8nk91PvMnNK-w; sid_guard=12a24dcdcbae7a25ca3fd21e792eec49%7C1702374272%7C31536000%7CWed%2C+11-Dec-2024+09%3A44%3A32+GMT; uid_tt=604ce25f8ee107f952b1c2cb59ca5bd9; uid_tt_ss=604ce25f8ee107f952b1c2cb59ca5bd9; sid_tt=12a24dcdcbae7a25ca3fd21e792eec49; sessionid=12a24dcdcbae7a25ca3fd21e792eec49; sessionid_ss=12a24dcdcbae7a25ca3fd21e792eec49; sid_ucp_v1=1.0.0-KDI3YmVmYjFjNmZhOGExMTEyODM2N2I1YjNlOWQ3YTA0Yzk5NzM5ZGEKFwiY8PGkvoyQBRCA1-CrBhiwFDgHQPQHGgJscSIgMTJhMjRkY2RjYmFlN2EyNWNhM2ZkMjFlNzkyZWVjNDk; ssid_ucp_v1=1.0.0-KDI3YmVmYjFjNmZhOGExMTEyODM2N2I1YjNlOWQ3YTA0Yzk5NzM5ZGEKFwiY8PGkvoyQBRCA1-CrBhiwFDgHQPQHGgJscSIgMTJhMjRkY2RjYmFlN2EyNWNhM2ZkMjFlNzkyZWVjNDk; store-region=cn-ln; store-region-src=uid; msToken=KQPKaijRABDpbQdH8DMEZu8B-CkMLJf9D8ujhv7nkzo-eJCnHVmwyu_ibLNjkch8SJLNMYyIn25MmXDP_2BT4iEE3WTKkSHwyd5U_CrMTRyDuOvWRswVtb7ivJzZxPI='

const configHeader = {
  'Cookie': cookie,
  'Origin': 'https://juejin.cn',
  'Referer': 'https://juejin.cn/',
  'Sec-Ch-Ua': '"Not_A Brand";v="8", "Chromium";v="120", "Microsoft Edge";v="120"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"macOS"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-site',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
  'Content-Type': 'application/x-www-form-urlencoded'
}

function getConfig(url, data = {}) {
  return {
    method: 'post',
    url: `https://api.juejin.cn${url}?aid=2608&uuid=7301946889732752905&spider=0`,
    headers: configHeader,
    data: data
  }
}

module.exports = {
  getConfig
}