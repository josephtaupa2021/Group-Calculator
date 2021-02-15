
// Keyboard Events
document.addEventListener("keydown", (event) => {
    if (event.which === 97 || event.which === 49) {
        event.preventDefault();
        insert(1);
    } else {
        if (event.which === 98 || event.which === 50) {
            event.preventDefault();
            insert(2);
        } else {
            if (event.which === 99 || event.which === 51) {
                event.preventDefault();
                insert(3);
            } else {
                if (event.which === 100 || event.which === 52) {
                    event.preventDefault();
                    insert(4);
                } else {
                    if (event.which === 101 || event.which === 53) {
                        event.preventDefault();
                        insert(5);
                    } else {
                        if (event.which === 102 || event.which === 54) {
                            event.preventDefault();
                            insert(6);
                        } else {
                            if (event.which === 103 || event.which === 55) {
                                event.preventDefault();
                                insert(7);
                            } else {
                                if (event.which === 104 || event.which === 56) {
                                    event.preventDefault();
                                    insert(8);
                                } else {
                                    if (event.which === 105 || event.which === 57) {
                                        event.preventDefault();
                                        insert(9);
                                    } else {
                                        if (event.which === 48 || event.which === 96) {
                                            event.preventDefault();
                                            insert(0);
                                        } else {
                                            if (event.which === 107) {
                                                event.preventDefault();
                                                insert('+');
                                            } else {
                                                if (event.which === 109) {
                                                    event.preventDefault();
                                                    insert('-');
                                                } else {
                                                    if (event.which === 106) {
                                                        event.preventDefault();
                                                        insert('*');
                                                    } else {
                                                        if (event.which === 111) {
                                                            event.preventDefault();
                                                            insert('/');
                                                        } else {
                                                            if (event.which === 13) {
                                                                event.preventDefault();
                                                                equal();
                                                            } else {
                                                                if (event.which === 46) {
                                                                    event.preventDefault();
                                                                    Clear()
                                                                } else {
                                                                    if (event.which === 190 || event.which === 110) {
                                                                        event.preventDefault();
                                                                        insert('.');
                                                                    } else {
                                                                        if (event.which === 8) {
                                                                            event.preventDefault();
                                                                            back();
                                                                        } else {
                                                                            if (event.shiftKey) {
                                                                                event.preventDefault();
                                                                                resultview.value = Math.sqrt(resultview.value)
                                                                            } else {
                                                                                return
                                                                            }

                                                                        }
                                                                    }

                                                                }

                                                            }

                                                        }

                                                    }

                                                }

                                            }

                                        }

                                    }

                                }

                            }

                        }

                    }

                }

            }

        }
    }
});

// Mouse Events
function insert(input) {
    if (input === '.' && document.form.resultview.value.includes('.')) return

    if (input === '+' && document.form.resultview.value.includes('+')) return equal()
    if (input === '-' && document.form.resultview.value.includes('+')) return equal()
    if (input === '*' && document.form.resultview.value.includes('+')) return equal()
    if (input === '/' && document.form.resultview.value.includes('+')) return equal()

    if (input === '-' && document.form.resultview.value.includes('-')) return equal();
    if (input === '+' && document.form.resultview.value.includes('-')) return equal();
    if (input === '*' && document.form.resultview.value.includes('-')) return equal();
    if (input === '/' && document.form.resultview.value.includes('-')) return equal();

    if (input === '*' && document.form.resultview.value.includes('*')) return equal();
    if (input === '+' && document.form.resultview.value.includes('*')) return equal();
    if (input === '-' && document.form.resultview.value.includes('*')) return equal();
    if (input === '/' && document.form.resultview.value.includes('*')) return equal();

    if (input === '/' && document.form.resultview.value.includes('/')) return equal();
    if (input === '+' && document.form.resultview.value.includes('/')) return equal();
    if (input === '-' && document.form.resultview.value.includes('/')) return equal();
    if (input === '*' && document.form.resultview.value.includes('/')) return equal();

    document.form.resultview.value = (document.form.resultview.value + input).slice(0, 20);
}

function equal() {
    const outputs = document.form.resultview.value;
    if (outputs == '') {
        return null;
    } else {
        document.form.resultview.value = eval(outputs);
    }

}

function Clear() {
    document.form.resultview.value = null;
}

function back() {
    const inputData = document.form.resultview.value;
    document.form.resultview.value = inputData.toString().slice(0, -1);
}

//CSS JS

function theme1() {
    document.querySelectorAll('.button').forEach((integer, i) => {
        integer.style.backgroundColor = 'rgba(0, 0, 0, 0.87)';
        integer.style.color = "#f3ca20";
        integer.style.borderColor = "rgba(189, 162, 41, 0.28)";

    })

    document.querySelectorAll('.op').forEach((operation, i) => {
        operation.style.backgroundColor = "rgba(243, 201, 32, 0.75)";
    })
    var bg = document.getElementById('main')
    bg.style.backgroundImage = "url('blackMustard.jpg')";
    bg.document.body.style.backgroundRepeat = "no-repeate";
    bg.document.body.style.backgroundSize = "cover";

}



function theme2() {
    document.querySelectorAll('.button').forEach((integer, i) => {
        integer.style.backgroundColor = 'rgba(150, 62, 223, 0.55)';
        integer.style.color = "white";

        integer.style.borderColor = "rgba(189, 162, 41, 0.28)";

    })

    document.querySelectorAll('.op').forEach((operation, i) => {
        operation.style.backgroundColor = "rgba(60, 60, 221, 0.57)";
        operation.style.color = "white";
    })
    var bg = document.getElementById('main')
    bg.style.backgroundImage = "url('maroon.jpg')";
    bg.document.body.style.backgroundRepeat = "no-repeate";
    bg.document.body.style.backgroundSize = "cover";
}


function theme3() {
    document.querySelectorAll('.button').forEach((integer, i) => {
        integer.style.backgroundColor = 'rgba(179, 138, 91, 0.5)';
        integer.style.borderColor = "rgba(224, 210, 210, 0.07)";
        integer.style.color = "white";

    })

    document.querySelectorAll('.op').forEach((operation, i) => {
        operation.style.backgroundColor = "rgba(130, 144, 121, 0.77)";
        operation.style.borderColor = "rgba(224, 210, 210, 0.07)";
        operation.style.color = "white";

    })
    var bg = document.getElementById('main')
    bg.style.backgroundImage = "none";
    bg.style.backgroundColor = "gray"

}
