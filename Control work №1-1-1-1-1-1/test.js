const xhr = new XMLHttpRequest();

xhr.open("GET", "./test.json");

xhr.onload = function() {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);

        console.log(data);
    } else {
        console.log("Ошибка загрузки:", xhr.status);
    }
};

xhr.onerror = function() {
    console.log("Ошибка запроса");
};

xhr.send();