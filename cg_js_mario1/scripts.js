var ex_1 = document.getElementById("ex_1");
var ex_2 = document.getElementById("ex_2");
var ex_3 = document.getElementById("ex_3");
var ex_4 = document.getElementById("ex_4");
var ex_5 = document.getElementById("ex_5");
var ex_6 = document.getElementById("ex_6");
var ex_7 = document.getElementById("ex_7");
var ex_8 = document.getElementById("ex_8");
var ex_9 = document.getElementById("ex_9");
var ex_10 = document.getElementById("ex_10");

var container = document.getElementById("container");

var ex_1_number = document.getElementById("ex_1_number");
var ex_1_btn = document.getElementById("ex_1_btn");

var ex_3_btn = document.getElementById("ex_3_btn");
var ex_3_sentence = document.getElementById("ex_3_sentence");

var ex_3_2_btn = document.getElementById("ex_3_2_btn");
var ex_3_2_sentence = document.getElementById("ex_3_2_sentence");

var ex_4_btn = document.getElementById("ex_4_btn");

var ex_5_btn = document.getElementById("ex_5_btn");

var ex_6_btn = document.getElementById("ex_6_btn");
var ex_6_btn_2 = document.getElementById("ex_6_btn_2");

var ex_7_btn = document.getElementById("ex_7_btn");

var ex_8_btn = document.getElementById("ex_8_btn");

var ex_9_btn = document.getElementById("ex_9_btn");

var ex_10_btn = document.getElementById("ex_10_btn");
var reverseUser = document.getElementById("reverseUser");
var resultReverse = document.getElementById("respReverse");
var reverseIn = document.getElementById("reverseInUser");
var respReverse = document.getElementById("respReverse");


ex_1_btn.onclick = function() {
    var resultado = document.getElementById("resultado_1");
    var cadena = '';
    if (ex_1_number.value % 2 == 0 || ex_1_number.value % 3 == 0 || ex_1_number.value % 5 == 0 || ex_1_number.value % 7 == 0) {
        cadena += 'The number is multiple of: ';
        if (ex_1_number.value % 2 == 0) {
            cadena += '2 '
        }
        if (ex_1_number.value % 3 == 0) {
            cadena += '3 '
        }
        if (ex_1_number.value % 5 == 0) {
            cadena += '5     '
        }
        if (ex_1_number.value % 7 == 0) {
            cadena += '7 '
        }
    } else {
        cadena += 'The number has no selected multiples'
    }
    resultado.innerHTML = cadena;
}

function ex_2_btn() {
    var resultado = document.getElementById("resultado_2");
    var cadena = ' ';
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 != 0) {
            cadena += ' <span style="color:green;">Fizz</span> ';
        } else {
            if (i % 5 == 0 && i % 3 != 0) {
                cadena += ' <span style="color:red;">Buzz</span> ';
            } else {
                if (i % 3 == 0 && i % 5 == 0) {
                    cadena += ' <span style="color:orange;">FizzBuzz</span> '
                } else {
                    cadena += i;
                }
            }
        }
        if (i != 100) {
            cadena += ', ';
        } else {
            cadena += '.';
        }
    }
    resultado.innerHTML = cadena;
}

ex_3_btn.onclick = function() {
    var resultado = document.getElementById("resultado_3");
    var b = 0;
    var sentence_array = ex_3_sentence.value.split('');
    var cadena = ' ';
    if (ex_3_sentence.value == '') {
        cadena += 'INSERT TEXT';
    } else {
        for (var i = 0; i < sentence_array.length; i++) {
            if (sentence_array[i] == 'B') {
                b++;
            }
        }
        cadena = b + " B's were found in the sentence"
    }

    console.log(cadena);
    resultado.innerHTML = cadena;
}
ex_3_btn_2.onclick = function() {
    var resultado = document.getElementById("resultado_3_2");
    var b = 0;
    var sentence_array = ex_3_2_sentence.value.split('');
    var ex_3_key = document.getElementById("ex_3_key").value;
    var cadena = ' ';
    if (ex_3_2_sentence.value == '') {
        cadena += 'INSERT TEXT';
    } else {
        for (var i = 0; i < sentence_array.length; i++) {
            if (sentence_array[i] == ex_3_key) {
                b++;
            }
        }
        cadena = b + " " + ex_3_key + "'s were found in the sentence";
    }

    console.log(cadena);
    resultado.innerHTML = cadena;
}

function factorial(number, index) {
    while (index != 0) {
        number = number * index;
        index = index - 1;
        factorial(number, index);
    }
    return number;

}
ex_4_btn.onclick = function() {
    var result_factorial = '';
    var resultado = document.getElementById("resultado_4");
    var n = document.getElementById("ex_4_number").value;
    if (n.value == '') {
        result_factorial += 'INSERT A NUMBER';
    } else {
        result_factorial = factorial(n, n - 1);
    }
    resultado.innerHTML = result_factorial;
}


ex_5_btn.onclick = function() {
    var resultado = document.getElementById("resultado_5");
    var cadena = '';
    var number = document.getElementById("ex_5_number");
    if (number.value == 0) {
        cadena += 'INSERT AN INTEGER NUMBER GREATER THAN 0'
    } else {
        if (number.value == 1) {
            cadena += 'st';
        } else {
            if (number.value == 2) {
                cadena += 'nd';
            } else {
                if (number.value == 3) {
                    cadena += 'rd';
                } else {
                    cadena += 'th';
                }
            }


        }

    }
    resultado.innerHTML = number.value + cadena;
}

ex_6_btn.onclick = function() {
    var resultado = document.getElementById("resultado_6");
    var ex_6_number_1 = document.getElementById("ex_6_number_1");
    var ex_6_number_2 = document.getElementById("ex_6_number_2");
    var cadena = '';
    var suma = 0;
    if (parseInt(ex_6_number_1.value) == parseInt(ex_6_number_2.value)) {
        cadena += 'THE NUMBERS CANNOT BE THE SAME ';
    }
    if (parseInt(ex_6_number_1.value) == '' || parseInt(ex_6_number_2.value) == '') {
        cadena += 'INSERT START AND END NUMBERS';
    } else {
        if (parseInt(ex_6_number_1.value) < parseInt(ex_6_number_2.value)) {
            for (var i = parseInt(ex_6_number_1.value); i <= parseInt(ex_6_number_2.value); i++) {
                cadena += "" + i + " ";
                suma = suma + i;
            }
        }
        if (parseInt(ex_6_number_1.value) > parseInt(ex_6_number_2.value)) {
            for (var i = parseInt(ex_6_number_1.value); i >= parseInt(ex_6_number_2.value); i--) {
                cadena += "" + i + " ";
                suma = suma + i;
            }
        }

    }
    resultado.innerHTML = cadena;
    resultado.innerHTML += "<br>The sum is:" + suma;

}

ex_6_btn_2.onclick = function() {
    var resultado = document.getElementById("resultado_6_2");
    var ex_6_number_1 = document.getElementById("ex_6_number_1");
    var ex_6_number_2 = document.getElementById("ex_6_number_2");
    var step = document.getElementById("ex_6_step");
    var cadena = '';

    if (parseInt(ex_6_number_1.value) < parseInt(ex_6_number_2.value)) {
        for (var i = parseInt(ex_6_number_1.value); i <= parseInt(ex_6_number_2.value); i += parseInt(step.value)) {
            cadena += "" + i + " ";
        }
    }
    if (parseInt(ex_6_number_1.value) > parseInt(ex_6_number_2.value)) {
        for (var i = parseInt(ex_6_number_1.value); i >= parseInt(ex_6_number_2.value); i -= parseInt(step.value)) {
            cadena += "" + i + " ";
        }
    }
    resultado.innerHTML = cadena;
}

ex_7_btn.onclick = function() {
    var resultado = document.getElementById("resultado_7");
    var sentence = document.getElementById("ex_7_sentence");
    var number = document.getElementById("ex_7_number");
    var cadena = '';

    if (sentence.value == '') {
        cadena += 'INSERT A SENTENCE';
    } else {
        var sentence_array = sentence.value.split(' ');
        for (var i = 0; i < number.value; i++) {
            cadena += sentence_array[i] + ' ';
        }
    }
    resultado.innerHTML = cadena;
}

ex_8_btn.onclick = function() {
    var resultado = document.getElementById("resultado_8");
    var sentence = document.getElementById("ex_8_sentence");
    var cadena = '';
    var sentence_a = sentence.value.split("");
    var aux;

    for (var i = 0; i < sentence_a.length; i++) {

        for (var j = 0; j < sentence_a.length; j++) {
            if (sentence_a[j] > sentence_a[i]) {
                aux = sentence_a[i];
                sentence_a[i] = sentence_a[j];
                sentence_a[j] = aux;

            }
        }
    }


    for (var i = 0; i < sentence_a.length; i++) {
        if (sentence_a[i] != ' ') {
            cadena += sentence_a[i];
        }
    }
    resultado.innerHTML = cadena;
}

ex_9_btn.onclick = function() {
    var resultado = document.getElementById("resultado_9");
    var item = document.getElementById("ex_9_item");
    var cadena = '';
    var frequent_item = item.value.split("");
    var cant = 0;

    var frequency = document.getElementById("frequency");

    for (var i = 0; i < frequent_item.length; i++) {
        var cont = 0;
        for (var j = 0; j < frequent_item.length; j++) {

            if (frequent_item[j] == frequent_item[i]) {
                cont++;
            }

        }

        if (cont > cant) {
            cant = cont;
            cadena = frequent_item[i];
        }


    }
    frequency.style.display = '';
    resultado.innerHTML = cadena;

}

ex_10_btn.onclick = function() {
    var reversed = reverseArray(reverseUser.value.split(""));
    var reversedInd = reverseArrayInPlace(reverseUser.value.split(""), parseInt(reverseIn.value));

    resultReverse.innerHTML = "The reverse array is: <br>" + reversed + "<br>The reverse array in position " + reverseIn.value + " is:<br>" + reversedInd;


}

function reverseArray(array) {
    var i = array.length - 1;
    var result = "";
    while (i >= 0) {
        result += array[i];
        i--;
    }

    return result.split("");
}


function reverseArrayInPlace(array, num) {

    var result = "";

    for (var i = 0; i < num; i++) {
        result += array[i];
    }

    var j = array.length - 1;


    while (j >= num) {
        result += array[j];
        j--;
    }

    return result.split("");
}

ex_1.onclick = function() {

    window_switcher(0);
}
ex_2.onclick = function() {

    window_switcher(1);
    ex_2_btn();
}
ex_3.onclick = function() {

    window_switcher(2);
}
ex_4.onclick = function() {

    window_switcher(3);
}
ex_5.onclick = function() {

    window_switcher(4);
}
ex_6.onclick = function() {

    window_switcher(5);
}
ex_7.onclick = function() {

    window_switcher(6);
}
ex_8.onclick = function() {

    window_switcher(7);
}
ex_9.onclick = function() {

    window_switcher(8);
}
ex_10.onclick = function() {

    window_switcher(9);
}

function window_switcher(index) {

    var divs = container.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        console.log(index);
        if (i == index) {
            divs[i].style.display = '';
        } else {
            divs[i].style.display = 'none';
        }
    }

}