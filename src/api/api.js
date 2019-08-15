import Base from './base'
import $http from '@/utils/http'
class User extends Base{
  sendGet (data) {
    return $http.get(`${this.apiV1}sendGet`, data)
  }
  sendPost (data) {
    return $http.post(`${this.apiV1}sendPost`, data)
  }
}
export default new User()