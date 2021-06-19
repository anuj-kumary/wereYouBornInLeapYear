const inputValue = document.getElementById('input-value');
const inputDate = document.getElementById('input-date')
const btn = document.getElementById('btn-click')
const containers = document.querySelectorAll('.container');
const heading = document.getElementById('heading')
const btnDate = document.getElementById('btn-date')
const answer = document.getElementById('input-answer')

const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const leapYearMessage = "Your birth year is a leap year!";
const notLeapYearMessage = "Your birth year is not a leap year!"
const error = "Enter a valid date in the format DD/MM/YYYY";






btn.addEventListener('click', function() {
    if (inputValue.value) {
        const userName = inputValue.value;
        containers[0].style.display = "none";
        containers[1].style.display = "block";
        console.log(userName);
        heading.innerText = userName;
    }
})
btnDate.addEventListener('click', btnDates);

function btnDates() {
    const date = inputDate.value;
    console.log(date)

    if (date) {
        const dateArray = date.split(/[/,-]/);
        const dd = dateArray[0];
        const mm = dateArray[1];
        const yy = dateArray[2];

        if (isNaN(dd) || isNaN(mm) || isNaN(yy)) {
            answer.innerText = error;
        }
        else if (mm > 12 || dd > 31 || yy > 2021 || mm <= 0 || dd <= 0 || yy <= 0) {
            answer.innerText = error;
        }
        else if (dd > monthDays[mm - 1]) {
            answer.innerText = error;
        }
        else {
            if (mm == 2 && dd == 29) {
                if (isLeapYear(yy))
                    answer.innerText = leapYearMessage;

                else
                    answer.innerText = error;
            }
            else {
                if (isLeapYear(yy))
                    answer.innerText = leapYearMessage;

                else
                    answer.innerText = notLeapYearMessage;
                    
            }
        }
    }
}

function isLeapYear(Year) {
    if (Year % 4 === 0) {
        if (Year % 100 === 0) {
            if (Year % 400 === 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    return false;
}