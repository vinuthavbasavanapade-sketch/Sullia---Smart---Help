
function loadAdminReports() {
    const adminReports = document.getElementById("adminReports");

    let reports = JSON.parse(
        localStorage.getItem("sulliaReports") || "[]"
    );

    if (reports.length === 0) {
        adminReports.innerHTML = "<p>No reports available.</p>";
        return;
    }

    adminReports.innerHTML = "";

    reports.forEach(function(report, index) {
        const card = document.createElement("div");
        card.className = "report-card";

        const title = document.createElement("h3");
        title.textContent = report.problem;

        const name = document.createElement("p");
        name.textContent = "Reported by: " + report.name;

        const location = document.createElement("p");
        location.textContent = "Location: " + report.location;

        const description = document.createElement("p");
        description.textContent = "Description: " + report.description;

        const date = document.createElement("p");
        date.textContent = "Date: " + report.date;

        const status = document.createElement("p");
        status.textContent = "Current Status: " + report.status;

        const select = document.createElement("select");

        ["Submitted", "Under Review", "Resolved"].forEach(function(value) {
            const option = document.createElement("option");
            option.value = value;
            option.textContent = value;

            if (report.status === value) {
                option.selected = true;
            }

            select.appendChild(option);
        });

        select.addEventListener("change", function() {
            reports[index].status = select.value;

            localStorage.setItem(
                "sulliaReports",
                JSON.stringify(reports)
            );

            alert("Report status updated!");
            loadAdminReports();
        });

        card.append(title, name, location, description, date, status);

        const label = document.createElement("p");
        label.textContent = "Update Status:";

        card.append(label, select);
        adminReports.appendChild(card);
    });
}

loadAdminReports();
