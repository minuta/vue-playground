const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Hello',
            vueLink: 'https://vuejs.org',

        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'one';
            } else {
                return 'two';
            }
        }
    }
});

app.mount('#user-goal');