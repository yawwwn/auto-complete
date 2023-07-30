$(document).ready(function() {
    // Set your Google Autocomplete API key here
    const API_KEY = 'AIzaSyAty9Uem6U_-mD_q3Rjk0KfewHT5yrGan8';
    const BASE_URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';

    // Get references to the input field and suggestions list
    const searchInput = $('#searchInput');
    const suggestionsList = $('#suggestions');

    // Add an event listener to the input field to detect changes in the text
    searchInput.on('input', function() {
        const query = searchInput.val();

        // Clear the existing suggestions
        suggestionsList.empty();

        // Make an API request to Google Autocomplete API using JSONP
        $.ajax({
            url: BASE_URL,
            dataType: 'jsonp', // Use JSONP to bypass CORS
            data: {
                input: query,
                key: API_KEY
            },
            success: function(data) {
                const predictions = data.predictions;
                if (predictions) {
                    predictions.forEach(function(prediction) {
                        suggestionsList.append('<li>' + prediction.description + '</li>');
                    });
                }
            }
        });
    });
});
