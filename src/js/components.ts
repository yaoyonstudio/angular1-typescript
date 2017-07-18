import { app } from '../app'
import { MyHeaderCom } from './components/MyHeaderCom'

app.component('myHeader', MyHeaderCom)
app.component('myTest', {
    template: '<div>Test Component</div>'
})