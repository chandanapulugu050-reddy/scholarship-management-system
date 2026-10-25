function applyScholarship(name) {
  let applications = JSON.parse(localStorage.getItem("applications")) || [];

  let student = {
    name: "Ritha",
    percentage: "85%",
    income: "150000",
    qualification: "B.Tech",
    scholarship: name
  };

  applications.push(student);

  localStorage.setItem("applications", JSON.stringify(applications));

  alert("Applied for " + name);
}