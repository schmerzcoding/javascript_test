<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<html>
    <title>CG JavaScripts Test</title>
    <div class="w3-sidebar w3-light-grey w3-bar-block" style="width:20%; position:static;">
    <h2 class="w3-bar-item">ChicksGold Inc.</h2>
  <h3 class="w3-bar-item">JavaScript Test</h3>
  <h6 class="w3-bar-item"><strong>Made by Mario Mendoza</strong></h6>
  <a id="ex_1" href="#" class="w3-bar-item w3-button">Multiple Checker (1)</a>
  <a id="ex_2" href="#" class="w3-bar-item w3-button">FizzBuzz Printer (2)</a>
  <a id="ex_3" href="#" class="w3-bar-item w3-button">Letter Finder (3)</a>
  <a id="ex_4" href="#" class="w3-bar-item w3-button">Factorial Recursing (4)</a>
  <a id="ex_5" href="#" class="w3-bar-item w3-button">Cardinal Converter (5)</a>
  <a id="ex_6" href="#" class="w3-bar-item w3-button">Stepping Array (6)</a>
  <a id="ex_7" href="#" class="w3-bar-item w3-button">Word Truncate (7)</a>
  <a id="ex_8" href="#" class="w3-bar-item w3-button">Alphabetizer (8)</a>
  <a id="ex_9" href="#" class="w3-bar-item w3-button">Frequency Finder (9)</a>
  <a id="ex_10" href="#" class="w3-bar-item w3-button">Reverse Word (10)</a>
</div>
<body>
<div id="container" style="margin-left:25%; margin-right:10%;">
    <div style="display:none;">
    <h2>Write a function that checks if 2, 3, 5 and 7 are multiples of the number entered</h2>
    <center><input type="text" id="ex_1_number"></input>
    <button id="ex_1_btn" class="w3-button">Check</button><br>
    <span id="resultado_1"></span>
    </center>
    </div>
    <div style="display:none;">
    <h3>Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).</h3>
    <br><center><span id="resultado_2"></span>
    </center>
    </div>
    <div style="display:none;">
    <h4>You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string..</h4>
    <br><table class="w3-table w3-bordered" style="width:100%;">
        <tr>
            <td><input type="text" id="ex_3_sentence" clas="w3-input" placeholder="Sentence"></input><td>
    <td><button id="ex_3_btn" class="w3-button">Count B's</button></td></tr>
    <tr colspan="2"><td>
    <span id="resultado_3"></span></td></tr></table>
    <table class="w3-table w3-bordered" style="width:100%;">
        <tr>
            <td><input type="text" id="ex_3_2_sentence" clas="w3-input" placeholder="Sentence"></input><td>
            <td><input type="text" id="ex_3_key" clas="w3-input" placeholder="Key Letter"></input><td>
    <td><button id="ex_3_btn_2" class="w3-button">Count</button></td></tr>
    <tr colspan="2"><td>
    <span id="resultado_3_2"></span></td></tr></table>
    </div>
    <div style="display:none;">
    <h2>Using recursion write a JavaScript function to calculate the factorial of a number.
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120</h2>
    <center><input type="text" id="ex_4_number" maxlength="2"></input>
    <button id="ex_4_btn" class="w3-button">Calculate</button><br>
    <span id="resultado_4"></span>
    </center>
    </div>
    <div style="display:none;">
    <h2>Write a function to convert a Cardinal into an Ordinal number by adding a suffix. Suffix is added based on the last digit of a number: 1st, 2nd, 3rd. Other numbers are suffixed with th: 4th, 9th, 10th. Exception are numbers 11-13: 11th, 12th, 13th.</h2>
    <center><input type="text" id="ex_5_number"></input>
    <button id="ex_5_btn" class="w3-button">Convert</button><br>
    <span id="resultado_5"></span>
    </center>
    </div>
    <div style="display:none;">
    <h2>Write a range1 function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end. Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Write a range2 function to take an optional third argument that indicates the "step" value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to range1 behavior. Make sure it also works with negative step values.</h2>
    <center><input type="number" id="ex_6_number_1" placeholder="Start"></input>
            <input type="number" id="ex_6_number_2" placeholder="End"></input>
    <button id="ex_6_btn" class="w3-button">Calculate</button><br>
    <span id="resultado_6"></span><br><br>
    <input type="number" id="ex_6_step" placeholder="Number step"></input>
    <button id="ex_6_btn_2" class="w3-button">Step</button><br>
    <span id="resultado_6_2"></span><br><br>
    </center>
    </div>
    <div style="display:none;">
    <h2>Write a function to truncate a string to a certain number of words.</h2>
    <center><input type="text" id="ex_7_sentence" placeholder="Sentence"></input>
            <input type="number" id="ex_7_number" placeholder="Truncate Number"></input>
    <button id="ex_7_btn" class="w3-button">Check</button><br>
    <span id="resultado_7"></span>
    </center>
    </div>
    <div style="display:none;">
    <h2>Write a function to alphabetize a string, i.e. sort the letters alphabetically. Remove the whitespace.</h2>
    <center><input type="text" id="ex_8_sentence"></input>
    <button id="ex_8_btn" class="w3-button">Sort</button><br>
    <span id="resultado_8"></span>
    </center>
    </div>
    <div style="display:none;">
    <h2>Write a function to find the most frequent item of an array of primitive types.</h2>
    <center><input type="text" id="ex_9_item"></input>
    <button id="ex_9_btn" class="w3-button">Find</button><br>
    <h3 id="frequency" style="display:none;">The most frequent item is:</h3>
    <span id="resultado_9"></span>
    </center>
    </div>
    <div style="display:none;">
    <h2>Arrays have a method reverse, which changes the array by 
inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.</h2>
						<input type="text" id='reverseUser' maxlength="10" placeholder="Text">
						<input type="number" id='reverseInUser' maxlength="1" placeholder="Reverse Number">
                        <button id="ex_10_btn" class="w3-button">Reverse</button><br>
						<span id='respReverse'></span>						
					</div>
</div>
</body>
<script src="scripts.js"></script>
</html>