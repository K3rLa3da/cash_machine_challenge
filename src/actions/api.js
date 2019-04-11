const API_URL = 'http://localhost:8080/api/';

const makeRequest = (uri, config) => {
    const init = {
        ...config,
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return fetch(`${API_URL}${uri}`, init)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
        }).catch(() => ({error: 'serverError'}));
};

export async function apiRequest(uri, config) {
    const response = await makeRequest(uri, config);
    return response;
}
