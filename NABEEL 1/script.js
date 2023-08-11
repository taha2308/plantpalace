document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and page from refreshing

    const formData = new FormData(event.target);

    // Get form data as an object
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Redirect to thank you page with data encoded in URL
    const queryParams = new URLSearchParams(formDataObject).toString();
    window.location.href = `thankyou.html?${queryParams}`;
});
