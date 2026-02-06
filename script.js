function answer(option) {
    let result = document.getElementById("result");

    if (option === "Japan") {
        result.style.color = "green";
        result.innerText = "✅ Correct! Japan is the Land of the Rising Sun.";
    } else {
        result.style.color = "red";
        result.innerText = "❌ Wrong! Try again.";
    }
}
