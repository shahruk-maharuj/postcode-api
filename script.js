document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById('postcode-input');

    idealPostcodes.setupAddressFinder({
        apiKey: "ak_ll4hm1c4fLsVIsUqJtH880S6cWOYV",
        inputField: input,
        outputFields: {
            line_1: "postcode-input"
        },
        onAddressSelected: function(address) {
            input.value = address.line_1 + ", " + address.post_town + ", " + address.postcode;
        }
    });

    document.getElementById('submit-postcode').addEventListener('click', function() {
        const postcodeValue = document.getElementById('postcode-input').value;
        if(postcodeValue) {
            localStorage.setItem('postcode', postcodeValue);
            window.location.href = "https://hrmsofty.com/contact/";
        }
    });
});
