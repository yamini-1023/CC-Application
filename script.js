async function checkSymptom() {
    const symptom = document.getElementById("symptom").value.toLowerCase();
    const result = document.getElementById("result");

    // Fetch JSON data
    const response = await fetch("diseases.json");
    const diseases = await response.json();

    if (symptom in diseases) {
        result.textContent = diseases[symptom];
    } else {
        result.textContent = "No data available for this symptom.";
    }
}
