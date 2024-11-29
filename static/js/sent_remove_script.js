const sentAppButton = document.querySelector('.btn-sent_app');
    const removeAppButton = document.querySelector('.btn-remove_app');

    sentAppButton.addEventListener('click', () => {
        sentAppButton.classList.add('hidden');
        removeAppButton.classList.remove('hidden');
    });

    removeAppButton.addEventListener('click', () => {
            removeAppButton.classList.add('hidden');
            sentAppButton.classList.remove('hidden');
    });