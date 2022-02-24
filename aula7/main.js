Vue.component('task-list', {

    template: '<li><slot></slot></li>',

    data() {

        return {
            message: 'Foobar'
        }
    }

});

Vue.component('my-btn', {

    template: '<button style="padding:20px ;margin:10px"><slot></slot></button>'
})

new Vue( {
    el: '#root'
})

