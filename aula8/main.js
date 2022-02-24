Vue.component('task-list', {

    template: '<div><task v-for="t in tasks"> {{ t.t }} </task></div>',

    data() {

        return{
            tasks: [
                {t: 'Go to the store', completed: true},
                {t: 'Finish screencast', completed: false},
                {t: 'Make donation', completed: false},
                {t: 'Clear Inbox', completed: false},
                {t: 'Make dinner', completed: false},
                {t: 'Clean room', completed: true},
            ]
        };
    }

});

Vue.component('task', {

    template: '<li><slot></slot></li>',
});

new Vue( {
    el: '#root'
})

