/*
  Your Own Loop

  Write a higher-order function `loop` that behaves like a `for` loop.

  Parameters:
    - value: initial loop value
    - test: a function that tests the current value; 
            if it returns false, the loop stops
    - update: a function that produces the next value
    - body: a function that performs an action with the current value

  Behavior:
    1. Run the test function on the current value.
       - If it returns false, stop the loop.
    2. Call the body function with the current value.
    3. Call the update function to produce a new value.
    4. Repeat from step 1.

  Note:
    You may use a regular loop internally to implement this behavior.
*/


function myloop(value, test, update, body) {
        for (let current = value; test(current); current = update(current))
                body(current);

}

myloop(0, n => n < 10, n => n + 1, console.log);