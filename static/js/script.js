document.addEventListener('DOMContentLoaded', function() {
    const filterToggle = document.getElementById('filter-toggle');
    const filterSection = document.getElementById('filter-section');
  
    filterToggle.addEventListener('click', function() {
      if (filterSection.style.display === 'flex') {
        filterSection.style.display = 'none';
      } else {
        filterSection.style.display = 'flex';
      }
    });
  });