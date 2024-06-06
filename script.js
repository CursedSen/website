document.getElementById('profile-picture').addEventListener('click', function() {
    let newProfilePicture = prompt('Enter the URL of the new profile picture:');
    if (newProfilePicture) {
        this.src = newProfilePicture;
    }
});
