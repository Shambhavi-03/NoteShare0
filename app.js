document.addEventListener('DOMContentLoaded', () => {
    const lockIcon = document.getElementById('lock-icon');
    const noteArea = document.getElementById('note-area');
    const passwordModal = document.getElementById('password-modal');
    const closeModal = document.querySelector('.close');
    const applyPasswordBtn = document.getElementById('apply-password');
    const passwordInput = document.getElementById('password-input');

    let password = '';

    // Function to open a unique URL
    function generateUniqueURL() {
        const uniqueString = Math.random().toString(36).substring(2, 10);
        window.history.replaceState(null, null, `/${uniqueString}`);
    }

    // Generate the unique URL on page load
    generateUniqueURL();

    // Event to show the password modal
    lockIcon.addEventListener('click', () => {
        passwordModal.style.display = 'block';
    });

    // Event to close the modal
    closeModal.addEventListener('click', () => {
        passwordModal.style.display = 'none';
    });

    // Apply password functionality
    applyPasswordBtn.addEventListener('click', () => {
        password = passwordInput.value;
        passwordModal.style.display = 'none';
        lockIcon.textContent = password ? '🔒' : '🔓';
        passwordInput.value = '';
        alert('Password applied!');
    });

    // Password protection for note area
    noteArea.addEventListener('focus', () => {
        if (password) {
            const enteredPassword = prompt('Enter the password to unlock the notes:');
            if (enteredPassword !== password) {
                noteArea.blur();
                alert('Incorrect password!');
            }
        }
    });
});
