const formUser = document.getElementById("formUser");
const userContainer = document.querySelector(".users");
const nameInput = formUser['name']
const ageInput = formUser['age']

const users = JSON.parse(localStorage.getItem("users")) || [];
const addUsers = (name, age) => {
    users.push({
        name,
        age
    })
    localStorage.setItem("users", JSON.stringify(users))
    return { name, age }

};


const createUserElement = ({ name, age }) => {
    const userDiv = document.createElement('div');
    const userName = document.createElement('h2');
    const userAge = document.createElement('p');

    userName.innerHTML = "Nombre del jugador:" + ' ' + '<br/>' + name
    userAge.innerHTML = "Edad del jugador:" + ' ' + '<br/>' + age;
    userDiv.append(userName, userAge);
    userContainer.appendChild(userDiv);
    userContainer.style.display = users.length === 0 ? "none" : "flex";
};
userContainer.style.display = users.length === 0 ? "none" : "flex";

users.forEach(createUserElement);
formUser.onsubmit = (e) => {
    e.preventDefault();
    const newUser = addUsers(nameInput.value, ageInput.value)
    createUserElement(newUser);
    userName.value = "";
    userAge.value = "";


}

function jugar() {
    window.location = 'game.html';
}
document.getElementById("jugar").onclick = function() {
    window.location.href = 'game.html'
}