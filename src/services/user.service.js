import {authHeader} from './../helpers/authHeader';

const userService = {
    signin,
    signup,
    logout,
    getById,
    _delete,
    update
};

function formBodyBuilder(body) {let formBody = [];
    for (let prp in body) {
        let encodedKey = encodeURIComponent(prp);
        let encodedValue = encodeURIComponent(body[prp]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return formBody;
}

function signin(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: formBodyBuilder({email: email, password: password})
    };

    return fetch(`http://localhost:9001/v1/signin`, requestOptions)
        .then((response) => response.json())
        .then(user => {

            // store user details and jwt token in local storage to keep user logged in between page refreshes
            console.log();
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users/${id}`, requestOptions).then(this.handleResponse);
}

function signup(user) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(`/v1/signup`, requestOptions).then(this.handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(`/users/${user.id}`, requestOptions).then(this.handleResponse);
    ;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`/users/${id}`, requestOptions).then(this.handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                this.logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export default userService;