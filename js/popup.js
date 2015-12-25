(function() {
    // Handle any user actions
    ext.User = {
        update: function(options) {
            return;
        }
    };

    ext.Users = {
        getAll: function() {
            return JSON.parse(localStorage.getItem('testUsers')) || [];
        },
        get: function(guid) {
            var users = Users.getAll();
            return users[guid];
        },
        add: function(user) {
            var users = Users.getAll();
            var guid = Tools.guid();
            user.guid = guid;
            users.push(user);
            localStorage.setItem('testUsers', JSON.stringify(users));
        }
    };

    ext.Template = {
        userTable: function(user) {
            tmpl = '<tr><td>%user%</td><td>%pwd%</td><td>%descr%</td><td><a id="case-id" href="%link%">%case%</a></td>';
            sub_templ = tmpl.replace('%user%', user.username)
                            .replace('%pwd%', user.pwd)
                            .replace('%descr%', user.description)
                            .replace('%case%', user.case)
                            .replace('%link%', 'http://www.google.com');
            return sub_templ
        }
    }

    ext.View = {
        populateUserTable: function() {
            var users = ext.Users.getAll();
            _.each(users, function(user) {
                var htmlUser = ext.Template.userTable(user);
                $('.user-table').append(htmlUser);
            });
        },
        openUserTab: function(e) {
            e.preventDefault();
            var caseUrl = e.currentTarget.href;
            chrome.tabs.create({url: caseUrl});
        },
        addUserForm: function(e) {
            $('.main-page').hide();
            $('.add-user-form').show();
        },
        backToMain: function(e) {
            $('.add-user-form').hide();
            $('.main-page').show();
        }
    }
    function init() {
        ext.View.populateUserTable();
        // listeners
        $('a[id="case-id"]').on('click', ext.View.openUserTab);
        $('.add_user').on('click', ext.View.addUserForm);
        $('.back-to-main').on('click', ext.View.backToMain);
    }

    init();

})();
