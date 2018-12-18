export function getRedirectPath({type, avator}){
  // 根据用户信息跳转不同地址
  let url = (type === 'boss')?'/boss':'/genius'
  if(!avator){
    url += "info"
  }
  return url;
}
