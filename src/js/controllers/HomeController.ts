export class HomeController {
    static $inject = ['$scope']
    name: string
    loading: boolean

    constructor (private $scope: any) {
        this.name = 'everyone!'
        $scope.title = 'This is a demo!'
    }

    Greeting () {
        alert('Hello ' + this.name)
    }
}