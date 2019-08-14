import Base from './base'
import $http from '@/utils/http'
class User extends Base{
  getUser (data) {
    return $http.get(`${this.apiV1}/sugrec`, data)
  }
}
export default new User()