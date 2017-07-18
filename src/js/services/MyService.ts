import {IHttpService} from 'angular'

export class MyService {
    static $inject = ['$http']

    constructor (private $http: ng.IHttpService) {
    }

    getData () {
        return this.$http.get('http://localhost:3000/posts')
    }
}