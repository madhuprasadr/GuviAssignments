document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Get food choices
    const foodChoices = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        foodChoices.push(checkbox.value);
    });

    if (foodChoices.length < 2) {
        alert('Please choose at least 2 food options.');
        return;
    }

    // Create a new table row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${foodChoices.join(', ')}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    // Append the new row to the table
    document.getElementById('dataTableBody').appendChild(newRow);

    // Clear form fields
    document.getElementById('userForm').reset();
});