function increasePettingCount(button) {
    const petProfile = button.closest('.petProfile');
    const pettingCount = petProfile.querySelector('.pettingCount');

    if (pettingCount.style.display === 'none') {
        pettingCount.style.display = 'block';
        pettingCount.textContent = '1 petting';
    } else {
        let count = parseInt(pettingCount.textContent);

        if (isNaN(count)) {
            count = 0;
        }

        count++;
        pettingCount.textContent = count + ' petting(s)';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // Update the givePetsButtons selection to use the new class name
    const givePetsButtons = document.querySelectorAll('.givePetsButton');

    givePetsButtons.forEach(button => {
        button.addEventListener('click', function() {
            increasePettingCount(this);
        });
    });

    const clickableItems = document.querySelectorAll('.clickable');

    clickableItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.style.opacity === '0') {
                item.style.opacity = '1';
            } else {
                item.style.opacity = '0';
            }
        });
    });

    const lookingForDropdown = document.querySelector('.dropdown');
    const locationInput = document.querySelector('.locationInput');
    const findFriendBox = document.querySelector('#findFriendBox');

    findFriendBox.addEventListener('click', () => {
        let selectedOption = lookingForDropdown.value;
        let location = locationInput.value;

        let message = 'You are looking for:';
        if (selectedOption === 'dog') {
            message += ' a dog';
        } else if (selectedOption === 'cat') {
            message += ' a cat';
        } else {
            message += ' a friend';
        }

        if (location.trim() !== '') {
            message += '\nIn or near: ' + location;
        }

        alert(message);
    });
});