export class TestController {
    static $inject = ['$scope']
    title: string

    constructor (private $scope: any) {
        let that = this
        this.title = 'Test'
        $scope.title = 'This is a test page'
    }
}