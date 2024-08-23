document.addEventListener
('DOMContentLoaded', function() {

    var userName = prompt("What's your name?");

        alert(`✨ Welcome to Hinata's Starry Birthday Party, dear ${userName}! ✨\n\nPrepare to be dazzled by a night of magic and wonder. Enjoy the festivities under the shimmering stars!`);

        console.log("hello, please fill it up");
     
    var sendButton = document.querySelector('.resp3 button');
    var firstNameInput = document.querySelector('input[placeholder="First Name"]');
    var lastNameInput = document.querySelector('input[placeholder="Last Name"]');
    var radios = document.querySelectorAll('input[name="response"]');
    var noteInput = document.querySelector('.resp3 input[type="text"]');
    
    
    if (sendButton) {
        sendButton.addEventListener('click', function() {
            // Get the values from the inputs
            var firstName = firstNameInput.value;
            var lastName = lastNameInput.value;
            var response = Array.from(radios).find(radio => radio.checked)?.value;
            var note = noteInput.value;

            
            if (!firstName || !lastName) {
                alert('Please enter both your first and last names.');
                return;
            }

            if (!response) {
                alert('Please select your response.');
                return;
            }

            
            alert(`Thank you, ${firstName} ${lastName}! Your response: "${response === 'yes' ? "We'll be there!" : "We can't make it."}" ${note ? `Note: "${note}"` : ''}`);

            
            console.log('First Name:', firstName);
            console.log('Last Name:', lastName);
            console.log('Response:', response);
            console.log('Note:', note);

        });
    }
});
