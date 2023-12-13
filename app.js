// Agregar función registrarUsuario
function registrarUsuario() {
    var userId = document.getElementById("userId").value;
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPhone = document.getElementById("userPhone").value;

    // Crear una fila para la tabla
    var newRow = document.createElement("tr");

    // Crear celdas para la fila
    var idCell = document.createElement("td");
    idCell.textContent = userId;
    newRow.appendChild(idCell);

    var nameCell = document.createElement("td");
    nameCell.textContent = userName;
    newRow.appendChild(nameCell);

    var emailCell = document.createElement("td");
    emailCell.textContent = userEmail;
    newRow.appendChild(emailCell);

    var phoneCell = document.createElement("td");
    phoneCell.textContent = userPhone;
    newRow.appendChild(phoneCell);

    // Agregar la fila a la tabla
    document.getElementById("userTable").getElementsByTagName('tbody')[0].appendChild(newRow);

    // Limpiar el formulario
    document.getElementById("userForm").reset();
}

// Agregar función buscarUsuario
function buscarUsuario() {
    var input, filter, table, tbody, tr, td, i, txtValue;
    input = document.getElementById("searchUserId");
    filter = input.value.toUpperCase();
    table = document.getElementById("userTable");
    tbody = table.getElementsByTagName("tbody")[0];
    tr = tbody.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0]; // La primera celda es la del ID
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// Agregar función agendarCita
function agendarCita() {
    var userIdAppointment = document.getElementById("userIdAppointment").value;
    var appointmentDate = document.getElementById("appointmentDate").value;
    var appointmentTime = document.getElementById("appointmentTime").value;

    // Buscar el usuario en la tabla de usuarios registrados
    var table = document.getElementById("userTable");
    var tbody = table.getElementsByTagName("tbody")[0];
    var tr = tbody.getElementsByTagName("tr");

    var userFound = false;
    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[0]; // La primera celda es la del ID
        if (td) {
            var txtValue = td.textContent || td.innerText;
            if (txtValue === userIdAppointment) {
                userFound = true;
                break;
            }
        }
    }

    if (userFound) {
        // Crear una fila para la tabla de citas
        var appointmentRow = document.createElement("tr");

        // Crear celdas para la fila de citas
        var userIdCell = document.createElement("td");
        userIdCell.textContent = userIdAppointment;
        appointmentRow.appendChild(userIdCell);

        var dateCell = document.createElement("td");
        dateCell.textContent = appointmentDate;
        appointmentRow.appendChild(dateCell);

        var timeCell = document.createElement("td");
        timeCell.textContent = appointmentTime;
        appointmentRow.appendChild(timeCell);

        // Agregar la fila a la tabla de citas
        document.getElementById("appointmentTable").getElementsByTagName('tbody')[0].appendChild(appointmentRow);

        // Limpiar el formulario de citas
        document.getElementById("appointmentForm").reset();
    } else {
        alert("Usuario no encontrado. Por favor, registra al usuario antes de agendar una cita.");
    }
}