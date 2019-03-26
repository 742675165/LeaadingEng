import request from '@/utils/request'

export function sendCode(param) {
  return request({
    url:'/api/user/sendCode',
    method:'get',
    param
  })
}
