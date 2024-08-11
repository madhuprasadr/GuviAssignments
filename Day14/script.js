        // The countdown logic using callback hell
        (function() {
            let count = 10;
            const display = document.getElementById('countdown');
            const message = document.getElementById('message');

            setTimeout(() => {
                display.textContent = count--;
                setTimeout(() => {
                    display.textContent = count--;
                    setTimeout(() => {
                        display.textContent = count--;
                        setTimeout(() => {
                            display.textContent = count--;
                            setTimeout(() => {
                                display.textContent = count--;
                                setTimeout(() => {
                                    display.textContent = count--;
                                    setTimeout(() => {
                                        display.textContent = count--;
                                        setTimeout(() => {
                                            display.textContent = count--;
                                            setTimeout(() => {
                                                display.textContent = count--;
                                                setTimeout(() => {
                                                    display.textContent = "Happy Independence Day";
                                                  
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        })();