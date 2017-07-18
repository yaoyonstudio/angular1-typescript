import { MyService } from '../services/MyService'
import { Post } from '../types/Post'

export class PostsController {
    static $inject = ['$scope', 'MyService']
    title: string
    keyword: string
    loading: boolean
    data: Array<Post>

    constructor (private $scope: any, private MyService: MyService) {
        this.loading = false
        this.keyword = ''
    }

    load () {
        let that = this
        this.loading = true
        this.MyService.getData().then((res: any) => {
            if (res.status === 200 && res.data) {
                that.data = res.data
                this.loading = false
            }
        })
    }
}