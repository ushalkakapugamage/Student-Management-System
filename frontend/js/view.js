document.addEventListener("DOMContentLoaded", function () {
    let studentTable = document.getElementById("tbl-student");

    // Fetch student data and populate the table
    fetch("http://localhost:8080/student")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok (${response.status} ${response.statusText})`);
            }
            return response.json();
        })
        .then(data => {
            let tblbody = data.map(student => {
                return `<tr data-student='${JSON.stringify(student)}' class="tbl_data">
                            <td>${student.id}</td>
                            <td>${student.studentFirstName} ${student.studentLastName}</td>
                            <td>${student.studentContact}</td>
                            <td>${student.email}</td>
                        </tr>`;
            }).join(""); // Join the array of rows into a single string

            studentTable.innerHTML = `<tr>
                                        
                                    </tr>${tblbody}`;

            // Add click event listener to each row
            let rows = studentTable.getElementsByTagName("tr");
            for (let i = 1; i < rows.length; i++) { // Start from index 1 to skip header row
                rows[i].addEventListener("click", function () {
                    let studentData = JSON.parse(this.getAttribute("data-student"));
                    displayStudentDetails(studentData);
                });
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });

    // Display student details in the modal
    function displayStudentDetails(studentData) {
        let modal = document.getElementById("modal");
        let modalContent1 = document.getElementById("modal-content");
        let modalContent2 = document.getElementById("modal-content2");
        const imageUrl = `http://localhost:8080/image/${studentData.id}`;

        // Fetch and display the student image
        fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {
                const objectUrl = URL.createObjectURL(blob);
                const imageElement = document.getElementById("imageElement");
                if (imageElement) {
                    imageElement.src = objectUrl;
                } else {
                    console.error('Image element not found.');
                }

                modalContent1.innerHTML = `
                <img id="imageElement" src="${objectUrl}" alt="Fetched Image" class="fetchedImg">    
                    <table>
                    <tr>
                        <td>ID:</td>
                        <td>${studentData.id}</td>
                    </tr>
                    <tr>
                        <td>First Name:</td>
                        <td>${studentData.studentFirstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td>${studentData.studentLastName}</td>
                    </tr>
                    <tr>
                        <td>Date of Birth:</td>
                        <td>${studentData.dateOfBirth}</td>
                    </tr>
                    <tr>
                        <td>Age:</td>
                        <td>${studentData.age}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>${studentData.email}</td>
                    </tr>
                    <tr>
                        <td>Student Contact:</td>
                        <td>${studentData.studentContact}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>${studentData.address}</td>
                    </tr>
                    <tr>
                        <td>Guardian First Name:</td>
                        <td>${studentData.guardianFirstName}</td>
                    </tr>
                    <tr>
                        <td>Guardian Last Name:</td>
                        <td>${studentData.guardianLastName}</td>
                    </tr>
                    <tr>
                        <td>Guardian Contact:</td>
                        <td>${studentData.guardianContact}</td>
                    </tr>
                    </table>
                `;

                modal.style.display = "block";
            })
            .catch(error => {
                console.error('Error fetching image:', error);
            });
    }

   // Close the modal
let closeModalBtn = document.getElementsByClassName("close")[0];
closeModalBtn.addEventListener("click", function () {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
});

// Add a click event listener to the body
document.body.addEventListener("click", function (event) {
    let modal = document.getElementById("modal");

    // Check if the click target is outside the modal
    if (!modal.contains(event.target)) {
        modal.style.display = "none";
    }
});

});
