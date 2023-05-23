import axios from 'axios'
import { UserModel } from '../../../models/UserModel'

export default {
    login: (username: string, password: string) =>
    axios<UserModel>({
        'method':'POST',
        'url':'https://dummyjson.com/auth/login',
        'data' : {
            username: username,
            password: password
        }
    })
}
