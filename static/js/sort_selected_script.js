function setSortFilter() {
    const filterValueSpan = document.getElementById('filter-sort-value');
    const filterSortMessageDiv = document.getElementById('filter-sort-message');
    const selectedSortRadio = document.querySelector('input[name="order_by"]:checked');
    let displayValue;
  
    switch (selectedSortRadio.value) {
      case "default":
        displayValue = "По умолчанию";
        break;
      case "time_start":
        displayValue = "Раньше";
        break;
      case "-time_start":
        displayValue = "Позже";
        break;
      case "date":
        displayValue = "Сначала старые";
        break;
      case "-date":
        displayValue = "Сначала новые";
        break;
      default:
        displayValue = "Неизвестная сортировка";
    }
  
    filterValueSpan.textContent = displayValue;
  
    if (selectedSortRadio.value !== "default") {
      filterSortMessageDiv.classList.remove('hidden');
    } else {
      filterSortMessageDiv.classList.add('hidden');
    }
  
    localStorage.setItem('filterSortBy', selectedSortRadio.value);
    document.getElementById('sort-form').submit();
  }
  
  function clearSortFilter() {
    const radioButtons = document.querySelectorAll('input[name="order_by"]');
    const filterValueSpan = document.getElementById('filter-sort-value');
    const filterMessageDiv = document.getElementById('filter-sort-message');
  
    radioButtons.forEach(radio => radio.checked = radio.id === 'sort-time-default');
    filterValueSpan.textContent = '';
    filterMessageDiv.classList.add('hidden');
    localStorage.removeItem('filterSortBy');
    document.getElementById('sort-form').submit();
  }

document.getElementById('apply-sort-button').addEventListener('click', setSortFilter);
document.getElementById('delete-sort-filter').addEventListener('click', clearSortFilter);