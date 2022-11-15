var user1 = 0;
var user2 = 0;

const employees = document.querySelector(".employees");

const updateexpense = document.querySelector(".enter-expense");

const updateUI = (data) => {
    const s1 = data.firstexpense;
    const s2 = data.secondexpense;

    //destructure properties

    // const {cityDetails, weather} = data;

    //update details temp

    employees.innerHTML = `
    <div class="user1 users">
                    <h2>User1 pays</h2>
                    <h1 class="cost">${user1}</h1>
                </div>
        

    <div class="user2 users">
                    <h2>User2 pays</h2>
                    <h1 class="cost">${user2}</h1>
                </div>
    `;

    // update the night/day & icon images
};

const updateCity = async (expense) => {
    const firstexpense = expense / 2;
    const secondexpense = expense / 2;
    user1 = user1 + firstexpense;
    user2 = user2 + secondexpense;
    return { firstexpense, secondexpense }; // object shorthand notation
};

updateexpense.addEventListener("submit", (e) => {
    //prevent default action
    e.preventDefault();

    const expense = updateexpense.city.value.trim();
    updateexpense.reset();

    // update the ui with new city

    updateCity(expense)
        .then((data) => updateUI(data))
        .catch((err) => console.log(err));
});
