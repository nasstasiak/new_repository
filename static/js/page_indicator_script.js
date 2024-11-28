const pages = document.querySelectorAll('.page');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const indicatorsContainer = document.querySelector('.indicators');
        let currentPageIndex = 0;

        function createIndicators() {
            for (let i = 0; i < pages.length; i++) {
                const indicator = document.createElement('div');
                indicator.classList.add('indicator');
                indicator.dataset.index = i;
                indicator.addEventListener('click', function () {
                    showPage(parseInt(this.dataset.index, 10));
                });
                if (i === 0) {
                    indicator.classList.add('active');
                }
                indicatorsContainer.appendChild(indicator);
            }
            updateIndicators();
        }

        function updateIndicators() {
            const indicators = document.querySelectorAll('.indicator');
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === currentPageIndex);
            });
        }

        function updateButtonStates() {
            prevBtn.disabled = currentPageIndex === 0;
            nextBtn.disabled = currentPageIndex === pages.length - 1;
        }

        function showPage(index) {
            pages.forEach((page, i) => {
                page.classList.toggle('active', i === index);
            });
            currentPageIndex = index;
            updateIndicators();
            updateButtonStates();
        }

        prevBtn.addEventListener('click', () => {
            const prevIndex = (currentPageIndex - 1 + pages.length) % pages.length;
            showPage(prevIndex);
        });

        nextBtn.addEventListener('click', () => {
            const nextIndex = (currentPageIndex + 1) % pages.length;
            showPage(nextIndex);
        });

        createIndicators();
        updateButtonStates();