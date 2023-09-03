let profilePic = document.getElementById("profile-Pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function () {
    if (inputFile.files && inputFile.files[0]) {
        profilePic.src = URL.createObjectURL(inputFile.files[0]);
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("studentForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();



        const formData = {
            studentFirstName: document.getElementById("txtStudentFirstName").value,
            studentLastName: document.getElementById("txtStudentLastName").value,
            dateOfBirth: document.getElementById("txtBirthDate").value,
            email: document.getElementById("txtEmail").value,
            studentContact: document.getElementById("txtStudentContact").value,
            address: document.getElementById("txtAddress").value,
            guardianFirstName: document.getElementById("txtGuardianFirstName").value,
            guardianLastName: document.getElementById("txtGuardianLastName").value,
            guardianContact: document.getElementById("txtGuardianContact").value
        };

        // Send the form data to the backend
        fetch("http://localhost:8080/student", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                if (data && Object.keys(data).length > 0) {
                    // Custom error response received from the backend
                    const errorMessages = Object.values(data).join('\n');
                    alert(errorMessages);
                }
                const selectedFile = inputFile.files[0];
                if (selectedFile) {
                    const formData = new FormData();
                    formData.append('image', selectedFile);

                    fetch("http://localhost:8080/image", {
                        method: "POST",
                        body: formData
                    })
                        .then(response => {
                            if (response.ok) {
                                alert("Image uploaded successfully!");
                            } else {
                                alert("Error uploading the image.");
                            }
                        })
                        .catch(error => {
                            console.error("Error:", error);
                            alert("An error occurred: " + error.message);
                        });
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred: " + error.message);
            });
    });
});
