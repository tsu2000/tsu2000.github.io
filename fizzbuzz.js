// Clear local storage
// localStorage.clear();

// Functions required to be defined
let counter = 0
let score = 0
let ans = ''

function count() {
    counter++;
    document.querySelector('#bignum').innerHTML = counter;
    document.querySelector('#numget').innerHTML = counter;
    document.querySelector('#scorecount').innerHTML = counter;
    localStorage.setItem('counter', counter)
    console.log('Enter count success')
}

function get_correct_ans(counter) {
    let num = counter
    correct_ans = ''
    if (num % 15 === 0) {
        correct_ans = 'FizzBuzz'
    } else if (num % 5 === 0) {
        correct_ans = 'Buzz'
    } else if (num % 3 === 0) {
        correct_ans = 'Fizz'
    } else {
        correct_ans = 'Number'
    }
    return correct_ans
}


// Things to listen for after webpage loads completely
document.addEventListener('DOMContentLoaded', function() {

    localStorage.clear()

    document.querySelector('#fizz').onclick = function() {
        ans = 'Fizz'
        }

    document.querySelector('#fizzbuzz').onclick = function() {
        ans = 'FizzBuzz'
        }   

    document.querySelector('#buzz').onclick = function() {
        ans = 'Buzz'
        }
        
    document.querySelector('#numget').onclick = function() {
        ans = 'Number'
        }  
    
    let buttons = document.querySelectorAll('.btn');

    for(let i = 0; i < buttons.length; i++) {
    
        buttons[i].addEventListener('click', function() {
            if (get_correct_ans(counter) === ans) {
                score++;
                count();
                console.log(score);
            } else {
                const final_score = score;
                localStorage.setItem('finalscore', final_score);
                window.location.replace("file:///Users/ngtengsuan/Desktop/HTML:CSS%20Files/FizzBuzz/fb_gameover.html");
            }
        });
    }

})


