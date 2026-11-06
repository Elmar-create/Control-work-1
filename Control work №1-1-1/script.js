const count = () => {
    let i = 1;

    const interval = setInterval(() => {
        console.log(i);

        if (i === 10) {
            clearInterval(interval);
        }

        i++;
    }, 1000);
};

count();