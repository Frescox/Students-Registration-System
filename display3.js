function displayRow() {
    const TABLE_BODY = document.getElementById("studentBody");
    TABLE_BODY.innerHTML = "";
    let row = ""; 
    for (let i = 0; i < Students.length; i++) {
        let student = Students[i];
        row += `
            <tr>
                <td>
                    <button type="button" class="btn btn-primary w-100" onclick="removeStudent('${student.id}')">Remove</button>
                </td>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
            </tr>`;
    }
    TABLE_BODY.innerHTML = row;
}