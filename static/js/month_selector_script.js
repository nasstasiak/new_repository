const yearSelect = document.getElementById('yearSelect');
const currentYear = new Date().getFullYear();


for (let year = currentYear - 5; year <= currentYear + 5; year++) {
    let option = document.createElement('option');
    option.value = year;
    option.text = year;
    yearSelect.appendChild(option);
}