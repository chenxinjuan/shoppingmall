import request from './request'
export function getHomeMultidata(params) {
  return request({
    url: '/yw_quota_record/ywQuotaRecord/list',
    method: 'get',
    params
  })
}