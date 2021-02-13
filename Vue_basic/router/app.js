// module?
var Auth = {
    // cb?
    login: function (email, pass, cb) {
        setTimeout(function () {
            if (email === 'vue@example.com' && pass === 'vue') {
                localStorage.token = Math.random().toString(36).substring(7)
                if (cb) { cb(true) }
            } else {
                if (cb) { cb(false) }
            }
        }, 0)
    },

    logout: function () {
        delete localStorage.token
    },

    loggedIn: function () {
        return !!localStorage.token
    }
}

var userData = [
    {
        id: 1,
        name: 'Tanaka Taro',
        description: 'man'
    },
    {
        id: 2,
        name: 'Suzuki Hanako',
        description: 'woman'
    }
]

var getUsers = function (callback) {
    setTimeout(function () {
        callback(null, userData)
    }, 1000)
}

var getUser = function (userId, callback) {
    setTimeout(function () {
        // filter?
        var filteredUsers = userData.filter(function (user) {
            return user.id === parseInt(userId, 10)
        })
        // filteredUsers && filteredUsers[0] ?
        callback(null, filteredUsers && filteredUsers[0])
    }, 1000)
}
// callback?
var postUser = function (params, callback) {
    setTimeout(function () {
        params.id = userData.length + 1
        userData.push(params)
        callback(null, params)
    }, 1000);
}

var Login = {
    template: '#login',
    data: function () {
        return {
            email: 'vue@example.com',
            pass: '',
            error: false
        }
    },

    methods: {
        login: function () {
            // bind?
            // router and route?
            Auth.login(this.email, this.pass, (function (loggedIn) {
                if (!loggedIn) {
                    this.error = true
                } else {
                    this.$router.replace(this.$route.query.redirect || '/')
                }
            }).bind(this))
        }
    }
}

var UserList = {
    template: '#user-list',
    data: function () {
        return {
            loading: false,
            users: function () { return [] },
            error: null
        }
    },

    created: function () {
        this.fetchData()
    },

    watch: {
        '$route': 'fetchData'
    },

    methods: {
        fetchData: function () {
            this.loading = true
            getUsers((function (err,users) {
                this.loading = false
                if (err) {
                    this.error = err.toString()
                } else {
                    this.users = users
                }
            }).bind(this))
        }
    }
}

var UserDetail = {
    template: '#user-detail',
    data: function () {
        return {
            loading: false,
            user: null,
            error: null
        }
    },

    created: function () {
        this.fetchData()
    },

    watch: {
        '$route': 'fetchData'
    },

    methods: {
        fetchData: function () {
            this.loading = true
            getUser(this.$route.params.userId, (function (err,user) {
                this.loading = false
                if (err) {
                    this.error = err.toString()
                } else {
                    this.user = user
                }
            }).bind(this))
        }
    }
}

var UserCreate = {
    template: '#user-create',
    data: function () {
        return {
            sending: false,
            user: this.defaultUser(),
            error: null
        }
    },

    created: function () {
    },

    methods: {
        defaultUser: function () {
            return {
                name: '',
                description: ''
            }
        },

        createUser: function () {
            if(this.user.name.trim() === '') {
                this.error = 'Name should not be blank'
                return
            }
            if(this.user.description.trim() === '') {
                this.error = 'Description should not be blank'
                return
            }
            postUser(this.user, (function (err, user) {
                this.sending = false
                if (err) {
                    this.error = err.toString()
                } else {
                    this.error = null
                    this.user = this.defaultUser()
                    alert('New user is registered')
                    this.$router.push('/users')
                }
            }).bind(this))
        }
    }
}

var router = new VueRouter({
    routes: [
        {
            path: '/top',
            component: {
                template: '<div>This page is top page</div>'
            }
        },
        {
            path: '/users',
            component: UserList
        },
        {
            path: '/users/new',
            component: UserCreate,
            // beforeEnter ?
            beforeEnter: function (to, from, next) {
                if (!Auth.loggedIn()) {
                    next({
                        path: '/login',
                        query: { redirect: to.fullPath }
                    })
                } else {
                    next()
                }
            }
        },
        {
            path: '/users/:userId',
            component: UserDetail
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/logout',
            beforeEnter: function (to, from, next) {
                Auth.logout()
                next('/')
            }
        },
        {
            path: '*',
            redirect: '/top'
        }
    ]
})

var app = new Vue ({
    // P38 dataに渡すのはobhjectかfunction,しかしAuthはmodule
    data: {
        Auth: Auth
    },
    router: router
}).$mount('#app')