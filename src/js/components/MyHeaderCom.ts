export interface Menu {
    id: number
    link: string,
    title: string
}

export class MyHeaderComCtrl {
    title: string
    menus: Array<Menu>

    constructor () {
        this.title = 'Angular 1.65 + Webpack 3.3 + TypeScript'
        this.menus = [
            {id: 1, link: 'home', title: '首页'},
            {id: 2, link: 'posts', title: '文章页'},
            {id: 3, link: 'test', title: '测试页'}
        ]
    }
}

export const MyHeaderCom = {
    bindings: {
    },
    template: `
        <div class="site_header">
            <h1>{{vm.title}}</h1>
            <nav>
                <ul>
                    <li ng-repeat="menu in vm.menus" ui-sref="{{menu.link}}" ui-sref-active="active">{{menu.title}}<li>
                </ul>
            </nav>
        </div>
    `,
    controller: MyHeaderComCtrl,
    controllerAs: 'vm'
}
