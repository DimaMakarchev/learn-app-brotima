const store = {
    _global: {
        articlePage: {
            dataForPost: [
                {id: 3, text: 'Bro BROOOOOOO 3', like: 12},
            ],
            defaultForTextAreaPost: 'Bro',
        },

        messagesPage: {
            users: [
                {id: 1, name: 'Bro'},
                {id: 2, name: 'Ti'},
                {id: 3, name: 'Ma'},
                {id: 4, name: 'I'},
            ],
            messages: [
                {id: 1, message: 'Уроки React JS 1'},
                {id: 2, message: 'Уроки React JS 2'},
                {id: 3, message: 'Уроки React JS 3 '},
                {id: 4, message: 'Уроки React JS 4'},
            ]
        }
    },
    getGlobal() {
        return this._global;
    }
};

export default store;
window.state = store;
