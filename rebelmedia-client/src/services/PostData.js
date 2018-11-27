export function PostData(type, userData) {
let BaseURL = 'http://localhost:8080/api/login/';

return new Promise((resolve, reject) => {
    fetch(BaseURL, {
        method: 'POST',
        body: JSON.stringify(userData)
    })
    .then((response) => response.json())
    .then((res) => {
        resolve(res);
    })
    .catch((error) => {
        reject(error);
    });
});
}