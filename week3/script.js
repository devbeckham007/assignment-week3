const cards = document.querySelectorAll(".card");
const selectedPlan = document.getElementById("selected-plan");

cards.forEach(function (card) {
    const button = card.querySelector(".select-button");

    button.addEventListener("click", function () {
        cards.forEach(function (item) {
            item.classList.remove("selected");
        });

        card.classList.add("selected");
        selectedPlan.textContent = card.dataset.plan;
    });
});
