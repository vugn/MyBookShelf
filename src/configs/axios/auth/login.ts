import axios from 'axios'
import { UserModel } from '../../../models/UserModel'

export default {
    getData: (username: string, password: string) =>
    axios<UserModel>({
        'method':'POST',
        'url':'https://dummyjson.com/auth/login',
        'data' : {
            username: username,
            password: password
        }
    })
}