const checkButton = document.getElementById('checkButton');
        const phoneNumberInput = document.getElementById('phoneNumber');
        const message = document.getElementById('message');

        checkButton.addEventListener('click', () => {
            const phoneNumber = phoneNumberInput.value.trim();

            if (!phoneNumber) {
                message.textContent = 'Phone Number is required';
                message.className = 'error';
            } else if (!/^\d+$/.test(phoneNumber)) {
                message.textContent = 'Phone Number is invalid';
                message.className = 'error';
            } else if (phoneNumber.length !== 10) {
                message.textContent = 'Invalid length';
                message.className = 'error';
            } else {
                message.textContent = 'Your number is valid';
                message.className = 'valid';
            }
        });