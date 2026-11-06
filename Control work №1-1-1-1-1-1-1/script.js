const loginInput = document.getElementById("loginInput");
const checkBtn = document.getElementById("checkBtn");
const userCard = document.getElementById("userCard");
const message = document.getElementById("message");

checkBtn.addEventListener("click", () => {
    const login = loginInput.value.trim();

    userCard.innerHTML = "";
    message.textContent = "";

    if (login === "") {
        message.textContent = "Введите логин!";
        return;
    }

    fetch("./users.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Ошибка загрузки пользователей");
            }

            return response.json();
        })
        .then(users => {
            const user = users.find(item => item.login === login);

            if (user) {
                userCard.innerHTML = `
                    <h2>${user.login}</h2>
                    <p>Роль: ${user.role}</p>
                    <p>Email: ${user.email}</p>
                `;

                message.textContent = "Пользователь найден!";
            } else {
                message.textContent = "Пользователь не найден!";
            }
        })
        .catch(error => {
            message.textContent = "Не удалось загрузить пользователей!";
            console.error(error);
        });
});