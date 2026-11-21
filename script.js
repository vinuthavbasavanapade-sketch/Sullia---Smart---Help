import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

// Welcome message
console.log("Welcome to Sullia Smart Help!");
// Welcome message
console.log("Welcome to Sullia Smart Help!");

// Explore services
function exploreServices() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
}


// Handle problem reports
const reportForm = document.getElementById("reportForm");

if (reportForm) {
    reportForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const report = {
            name: document.getElementById("userName").value,
            problem: document.getElementById("problemType").value,
            location: document.getElementById("location").value,
            description: document.getElementById("description").value,
            date: new Date().toLocaleString(),
            status: "Submitted"
        };

        try {
            await addDoc(collection(db, "reports"), report);

            alert("Your report has been submitted successfully!");

            reportForm.reset();
        } catch (error) {
            console.error("Error saving report:", error);
            alert("Unable to submit report. Please try again.");
        }
    });
}


function displayReports() {
    const reportsList = document.getElementById("reportsList");

    if (!reportsList) return;

    const reports = JSON.parse(
        localStorage.getItem("sulliaReports") || "[]"
    );

    if (reports.length === 0) {
        reportsList.innerHTML = "<p>No reports submitted yet.</p>";
        return;
    }

    reportsList.innerHTML = "";

    reports.forEach(function(report) {
        const card = document.createElement("div");
        card.className = "report-card";

        const title = document.createElement("h3");
        title.textContent = report.problem;

        const location = document.createElement("p");
        location.textContent = "Location: " + report.location;

        const description = document.createElement("p");
        description.textContent = "Description: " + report.description;

        const date = document.createElement("p");
        date.textContent = "Date: " + report.date;

        const status = document.createElement("p");
        status.textContent = "Status: " + report.status;

        card.append(title, location, description, date, status);
        reportsList.appendChild(card);
    });
}

displayReports();
