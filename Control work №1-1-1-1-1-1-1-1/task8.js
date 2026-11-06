const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Данные пользователя");
        }, 1000);
    });
};

const getPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Посты пользователя");
        }, 2000);
    });
};

const getComments = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Комментарии пользователя");
        }, 3000);
    });
};

Promise.all([
    getUser(),
    getPosts(),
    getComments()
])
.then(results => {
    console.log("Все данные загружены:");
    console.log(results);
})
.catch(error => {
    console.log("Ошибка:", error);
});