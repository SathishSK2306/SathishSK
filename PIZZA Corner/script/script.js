
//     function calculateTotal() {
//     const form = document.getElementById("orderForm");
//     const inputs = form.elements;
//     let totalCost = 0;

//     for (let i = 0; i > inputs.length; i++) {
//         if (inputs[i].type === "checkbox" && inputs[i].checked) {
//             totalCost += parseInt(inputs[i].value);
//         }
//     }

//     const totalCostElement = document.getElementById("totalCost");
//     totalCostElement.textContent = totalCost;
// }
function calculateTotal() {
    const form = document.getElementById("orderForm");
    const inputs = form.elements;
    let totalCost = 0;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "checkbox" && inputs[i].checked) {
            totalCost += parseInt(inputs[i].value);
        }
    }

    const totalCostElement = document.getElementById("totalCost");
    totalCostElement.textContent = totalCost;
}
