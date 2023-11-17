
//defining the target day
let targetDay;


//making the input field 1, disabled and enabled
function activateField() {
    var enDisAble = document.getElementById("startday");

    if (enDisAble.disabled == false) {
        enDisAble.disabled = true;
        enDisAble.readOnly = true;
    } else if (enDisAble.disabled == true) {
        enDisAble.disabled = false;
        enDisAble.readOnly = false;
    }
}




function calculateFromTargetDay() {
    const startdate = new Date(document.getElementById("startday").value);
    const targetDate = new Date(document.getElementById("inputDay").value);


    
    if (isNaN(targetDate)) {
        alert("Invalid date format. Please use yyyy-mm-dd");
        return;
    }

    if (isNaN(startdate)) {
        alert("Invalid date format. Please use yyyy-mm-dd");
        return;
    }

    const timeDifference = targetDate - startdate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const remainingMilliseconds = timeDifference % 1000;

    const displayT = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${remainingMilliseconds} milliseconds`;

    document.getElementById("day-counting").innerHTML = displayT;
}




function main() {
    const startdate = new Date();
    const targetDate = new Date(document.getElementById("inputDay").value);

    if (isNaN(targetDate)) {
        alert("Invalid date format. Please use yyyy-mm-dd");
        return;
    }

    const timeDifference = targetDate - startdate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const remainingMilliseconds = timeDifference % 1000;

    const displayT = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${remainingMilliseconds} milliseconds`;

    document.getElementById("day-counting").innerHTML = displayT;
}






function getDato() {
    const checker = document.getElementById("todayQ");


    if (checker.checked == true) {

        main();

    } else {

        calculateFromTargetDay();
    }

}
