import router from "@/router";
import JSEncrypt from "jsencrypt";

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDgTTOBlpkeTV9VUTC0v0wzNDib
WGpsOkPGR+K3A6wTHjDBeSYMKvw73c+Ur2SulvX4yxCLP8mpAFdgD6NpQI08DuMj
gzko7eLAwg3nW50kbbAJzNEt3pXuCIDFHsp1RlFLPF46KukJyc3nqTNypvS+wrCw
31vGK3NC3MD760kCYQIDAQAB`;

const privateKey = `MIICxjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQI4eYgGpXengACAggA
MBQGCCqGSIb3DQMHBAiTWrbOgVC0NASCAoDmwuxJbiKTxoNYlIhMbjpQEx4YK91h
T6MI/50sYsy45xw96hV6KoUf7NxHQMyIE8y8wYR0dsdYTD5I2CxsaTP6Ok/sC4Vl
nP/eSlmzrhvRRu85h+8R++Fe+1CFZ/Sr5mSdFN9BP3djUMwXVfvK4RNHxzMThYbT
BUyJdiSK730jp/pSg25boPeP5sdUv6ipAQxmQLM5kHvYX5xaVDMC6sawXFxGwXp/
KNPv9rARR0uqJxYAmtMVq5Ema99zSfXssFr9FbUjI3k5yc3n0rqcjpSwIQag8MYi
qjgI6Ek6fLKNZcWA0COcyiWY8y2rTDPbxbghNtZEysgrVZzRzMYbxxUb3IopTMx7
MgeCIBqHrx1/brQopRfbTrIDyLdbwtwtcNXk1wXrtbfR8SsfkPL06MR4pMNyH2Fn
X31QuUOLg40/z5wok9VWesD1Hm265tGZc4u0HafnjSxolOC0tClXtdgERx3hd7I6
1wkaN6py3oZ5/MLuubc9tmvIbtXjlJpg5ME+oTC5Ua9x3cedb/tLyBcUeeRWTpCs
n+iBQ784HlQFaCdTXx1Suzksp+ZyklTs3lNny9NaRZ5RhrztNaDaVgEQqp22O6pc
DFeil/GuIEqXcbG9XYJavUMInlya4qwa9f7+338zD9yekV50R2rWyoxTvT85l+Wp
4jtQejgriaMzrY4T5kd1C6DUCT4/nUudf+4af8g2VtXOD2PF53kOfWPSTP8OdO+b
LzTIa0/1/b/DMDbTah6fIYEYTWuvpbgRZKfojWjBhRlcLtlCJBZSAA4MOLBym6bb
CNb7w9o+7AXGxqRXbLJu4z87PU3UKaT9cpr06nElzPOCX004jUOlYGcT`;

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey); // 设置公钥
  return encryptor.encrypt(txt); // 对数据进行加密
}

// 解密
export function decrypt(txt) {
  const encryptor = new JSEncrypt();
  encryptor.setPrivateKey(privateKey); // 设置私钥
  return encryptor.decrypt(txt); // 对数据进行解密
}

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
});
