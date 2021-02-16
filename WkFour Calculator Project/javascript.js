
// Key down
document.addEventListener("keydown", (event) => {
   
    if (event.which === 97 || event.which === 49) {
        event.preventDefault();
        insert(1);
        document.querySelector('#pressOne').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";
    } else {
        if (event.which === 98 || event.which === 50) {
            event.preventDefault();
            insert(2);
            document.querySelector('#pressTwo').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";            
        } else {
            if (event.which === 99 || event.which === 51) {
                event.preventDefault();
                insert(3);
                document.querySelector('#pressThree').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";                
            } else {
                if (event.which === 100 || event.which === 52) {
                    event.preventDefault();
                    insert(4);
                    document.querySelector('#pressFour').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";                    
                } else {
                    if (event.which === 101 || event.which === 53) {
                        event.preventDefault();
                        insert(5);
                        document.querySelector('#pressFive').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";                        
                    } else {
                        if (event.which === 102 || event.which === 54) {
                            event.preventDefault();
                            insert(6);
                            document.querySelector('#pressSix').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";                            
                        } else {
                            if (event.which === 103 || event.which === 55) {
                                event.preventDefault();
                                insert(7);
                                document.querySelector('#pressSeven').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";                                
                            } else {
                                if (event.which === 104 || event.which === 56) {
                                    event.preventDefault();
                                    insert(8);
                                    document.querySelector('#pressEight').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";
                                    
                                } else {
                                    if (event.which === 105 || event.which === 57) {
                                        event.preventDefault();
                                        insert(9);
                                        document.querySelector('#pressNine').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";
                                        
                                    } else {
                                        if (event.which === 48 || event.which === 96) {
                                            event.preventDefault();
                                            insert(0);
                                            document.querySelector('#pressTen').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";
                                            
                                        } else {
                                            if (event.which === 107) {
                                                event.preventDefault();
                                                insert('+');
                                                document.querySelector('#pressPlus').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";
                                                
                                            } else {
                                                if (event.which === 109) {
                                                    event.preventDefault();
                                                    insert('-');
                                                    document.querySelector('#pressMinus').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";
                                                    
                                                } else {
                                                    if (event.which === 106) {
                                                        event.preventDefault();
                                                        insert('*');
                                                        document.querySelector('#pressMul').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";
                                                        
                                                    } else {
                                                        if (event.which === 111) {
                                                            event.preventDefault();
                                                            insert('/');
                                                            document.querySelector('#pressDiv').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";
                                                            
                                                        } else {
                                                            if (event.which === 13) {
                                                                event.preventDefault();
                                                                equal();
                                                                document.querySelector('#pressEqual').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";
                                                                
                                                            } else {
                                                                if (event.which === 46) {
                                                                    event.preventDefault();
                                                                    Clear()
                                                                    document.querySelector('#pressAc').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";
                                                                    
                                                                } else {
                                                                    if (event.which === 190 || event.which === 110) {
                                                                        event.preventDefault();
                                                                        insert('.');
                                                                        document.querySelector('#pressDot').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";
                                                                        
                                                                    } else {
                                                                        if (event.which === 8) {
                                                                            event.preventDefault();
                                                                            back();
                                                                            document.querySelector('#pressDel').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";
                                                                            
                                                                        } else {
                                                                            if (event.code == 'KeyS') {
                                                                                event.preventDefault();
                                                                                resultview.value = Math.sqrt(resultview.value)
                                                                                document.querySelector('#pressSquare').style.cssText = "background-image: linear-gradient(to left, rgba(248, 248, 239, 0.73), rgba(124, 123, 120, 0.73));";
                                                                                
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

 //Keyup
 document.addEventListener("keyup", (event) => {
    if (event.which === 97 || event.which === 49) {
        event.preventDefault();
        document.querySelector('#pressOne').style.cssText ="";
    } else {
        if (event.which === 98 || event.which === 50) {
            event.preventDefault();
            document.querySelector('#pressTwo').style.cssText = "";
        } else {
            if (event.which === 99 || event.which === 51) {
                event.preventDefault();
                document.querySelector('#pressThree').style.cssText = "";
            } else {
                if (event.which === 100 || event.which === 52) {
                    event.preventDefault();
                    document.querySelector('#pressFour').style.cssText = "";
                } else {
                    if (event.which === 101 || event.which === 53) {
                        event.preventDefault();
                        document.querySelector('#pressFive').style.cssText = "";
                    } else {
                        if (event.which === 102 || event.which === 54) {
                            event.preventDefault();
                            document.querySelector('#pressSix').style.cssText = "";
                        } else {
                            if (event.which === 103 || event.which === 55) {
                                event.preventDefault();
                                document.querySelector('#pressSeven').style.cssText = "";
                            } else {
                                if (event.which === 104 || event.which === 56) {
                                    event.preventDefault();
                                    document.querySelector('#pressEight').style.cssText = "";
                                } else {
                                    if (event.which === 105 || event.which === 57) {
                                        event.preventDefault();
                                        document.querySelector('#pressNine').style.cssText = "";
                                    } else {
                                        if (event.which === 48 || event.which === 96) {
                                            event.preventDefault();
                                            document.querySelector('#pressZero').style.cssText = "";
                                        } else {
                                            if (event.which === 107) {
                                                event.preventDefault();
                                                document.querySelector('#pressPlus').style.cssText = "";
                                            } else {
                                                if (event.which === 109) {
                                                    event.preventDefault();
                                                    document.querySelector('#pressMinus').style.cssText = "";
                                                } else {
                                                    if (event.which === 106) {
                                                        event.preventDefault();
                                                        document.querySelector('#pressMul').style.cssText = "";
                                                    } else {
                                                        if (event.which === 111) {
                                                            event.preventDefault();
                                                            document.querySelector('#pressDiv').style.cssText = "";
                                                        } else {
                                                            if (event.which === 13) {
                                                                event.preventDefault();
                                                                document.querySelector('#pressEqual').style.cssText = "";
                                                            } else {
                                                                if (event.which === 46) {
                                                                    event.preventDefault();
                                                                    document.querySelector('#pressAc').style.cssText = "";
                                                                } else {
                                                                    if (event.which === 190 || event.which === 110) {
                                                                        event.preventDefault();
                                                                        document.querySelector('#pressDot').style.cssText = "";
                                                                    } else {
                                                                        if (event.which === 8) {
                                                                            event.preventDefault();
                                                                            document.querySelector('#pressDel').style.cssText = "";
                                                                        }
                                                                        else {
                                                                            if (event.code == 'KeyS') {
                                                                                document.querySelector('#pressSquare').style.cssText = "";
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

function mouseOver(){
        /*var i, x;
         x = document.getElementsByClassName('container-hint');
         for (i = 0; i < x.length; i++) {
             x[i].style.display = "none";
         }
         document.getElementById(tabName).style.display = "flex"; */

         var hint = document.getElementById('para');
         hint.style.visibility ="visible" 
    
    }
   

function mouseOut(){
    var hint = document.getElementById('para');
    hint.style.visibility = "hidden"
  
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

//keyboard Events
  let choose = function(click){   
  }