import { app } from '../app'
import * as AppCtrl from './controllers'

app.config(['$stateProvider', '$urlMatcherFactoryProvider', '$urlRouterProvider', ($stateProvider: any, $urlMatcherFactoryProvider: any, $urlRouterProvider: any) => {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: AppCtrl.HomeController,
            controllerAs: 'hc'
        })
        .state('posts', {
            url: '/posts',
            templateUrl: 'templates/posts.html',
            controller: AppCtrl.PostsController,
            controllerAs: 'pc'
        })
        .state('test', {
            url: '/test',
            templateUrl: 'templates/test.html',
            controller: AppCtrl.TestController,
            controllerAs: 'tc'
        })

    $urlMatcherFactoryProvider.caseInsensitive(true)
    $urlRouterProvider.otherwise('/home')
}])