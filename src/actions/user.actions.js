import userService from './../services/user.service'

const userActions = {
    signin,
    logout,
    signup,
    _delete
};

function signin(email, password) {
    return userService.signin(email, password)
        .then(
            user => {
                success(user);
            }, error => {
                failure(error)
            }
        );


    function request(user) {
        return {type: 'LOGIN_REQUEST', user}
    }

    function success(user) {
        return {type: 'LOGIN_SUCCESS', user}
    }

    function failure(error) {
        return {type: 'LOGIN_FAILURE', error}
    }

}

function logout() {
    userService.logout();
    return {type: 'LOGOUT'};
}

function signup(user) {
    return dispatch => {
        dispatch(request(user));

        userService.signup(user)
            .then(
                user => {
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) {
        return {type: 'SIGNUP_REQUEST', user}
    }

    function success(user) {
        return {type: 'SIGNUP_SUCCESS', user}
    }

    function failure(error) {
        return {type: 'SIGNUP_FAILURE', error}
    }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => {
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) {
        return {type: 'DELETE_REQUEST', id}
    }

    function success(id) {
        return {type: 'DELETE_SUCCESS', id}
    }

    function failure(id, error) {
        return {type: 'DELETE_FAILURE', id, error}
    }
}

export default userActions;