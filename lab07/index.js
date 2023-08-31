$(document).ready(function () {
    $.getJSON("http://localhost:3000/getUser", function (data) {
        console.log("Success");
        // console.log(data);
        if (data.error == false) {
            $("#dataTable tbody").empty();
            data.data.forEach(user => {
                console.log(user);
                const tr = "<tr><td>" + user.id +
                    "</td><td>" + user.first_name +
                    "</td><td>" + user.last_name +
                    "</td><td>" + user.email +
                    "</td><td>" + user.created +
                    "</td><td>" + user.user_role_id +
                    "</td><td>" + user.hased_password +
                    '</td><td><button onclick="editData(' + user.id + ')" data-bs-toggle="modal" data-bs-target="#EditModal" data-bs-whatever="@mdo"><i class="fas fa-fw fa-cog "></i></button>' +
                    '<button onclick="deleteData(' + user.id + ')"><i class="fas fa-trash"></i></button></td>' +
                    "</tr>";
                $("#dataTable tbody").append(tr);
            });
        }
    }).fail(function () {
        console.log("get json Fail");
    });
});

function addData() {
    console.log('function addData() is called');
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/postUser",
        data: JSON.stringify({ first_name: $("#first_name").val(), last_name: $("#last_name").val(), email: $("#email").val(), hased_password: $("#hased_password").val(), user_role_id: $("#user_role_id").val() }),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).done(function (data) {
        if (data.msg === "OK") {
        } else {
            alert("Error");
        }
    });
    window.location.reload();
}

function deleteData(id) {
    console.log('function deleteData() is called');
    $.ajax({
        method: "DELETE",
        url: "http://localhost:3000/deleteUser/" + id,
    }).done(function (data) {
        if (data.msg === "OK") {
        } else {
            alert("Error");
        }
    });
    window.location.reload();
}

function editData(id) {
    console.log('function editData() is called');
    console.log("edit", id);
    $.ajax({
        url: "http://localhost:3000/getUser/" + id,
        method: "GET",
        success: function (res) {
            res = res.data;
            res = res[0];
            $('#valid').val(res.id);
            $('#edit_first_name').val(res['first_name']);
            $('#edit_email').val(res['email']);
            $('#edit_last_name').val(res['last_name']);
            $("#edit_hased_password").val(res['hased_password']);
            $('#edit_user_role_id').val(res['user_role_id']);
        }
    });
}

function updateData() {
    console.log('function updateData() is called');
    var selId = $('#valid').val();
    console.log(selId);
    $.ajax({
        method: "PUT",
        url: "http://localhost:3000/updateUser/" + selId,
        data: JSON.stringify({ first_name: $("#edit_first_name").val(), last_name: $("#edit_last_name").val(), email: $("#edit_email").val(), hased_password: $("#edit_hased_password").val(),user_role_id: $("#edit_user_role_id").val() }),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).done(function (data) {
        if (data.msg === "OK") {
            window.location.reload();
        } else {
            alert("Error");
        }
        console.log({ first_name: $("#edit_first_name").val(), last_name: $("#edit_last_name").val(), email: $("#edit_email").val(),hased_password: $("#edit_hased_password").val(), user_role_id: $("#edit_user_role_id").val(), })
    })


}








