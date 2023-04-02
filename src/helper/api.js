import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.github.com/'
})

const getRepos = () => {
    return api.get('users/eneskalkann/repos')
}

export {getRepos};