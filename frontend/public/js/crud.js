function all_person() {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:6005/api/user/person',
        dataType: 'json',
        success: function(data) {
            if (data.success == 1) {
                let html = ''
                for (let i = 0; i < data.data.length; i++) {
                    html += '<tr>'
                    html += '<td>' + (i + 1) + '</td>'
                    html += '<td>' + data.data[i].name + '</td>'
                    html += '<td>' + data.data[i].age + '</td>'
                    html += '<td>' + data.data[i].email + '</td>'
                    html += '<td>' + data.data[i].address + '</td>'
                    html += '<td>'
                    html += '<span class="btn btn-sm btn-outline-dark person-edit" action-id="' + data.data[i]._id + '" name="' + data.data[i].name + '" age="' + data.data[i].age + '" email="' + data.data[i].email + '" address="' + data.data[i].address + '"><i class="fas fa-edit"></i></span> '
                    html += '<span class="btn btn-sm btn-outline-danger person-delete" action-id="' + data.data[i]._id + '"><i class="fas fa-trash"></i></span>'
                    html += '</td>'
                    html += '</tr>'
                }
                $('#person').html(html)
            } else {
                alert(data.message)
            }
        },
        error: function(err) {
            alert(err)
        }
    })
}

all_person()

$(document).on('click', '.add-person', function() {
    $.ajax({
        method: 'POST',
        url: 'http://localhost:6005/api/user/add-person',
        dataType: 'json',
        data: {
            name: $('.name').val(),
            age: $('.age').val(),
            email: $('.email').val(),
            address: $('.address').val()
        },
        success: function(data) {
            if (data.success == 1) {
                alert(data.message)
                all_person()
            } else {
                alert(data.message)
            }
        },
        error: function(err) {
            alert(err)
        }
    })
})
$(document).on('click', '.person-delete', function() {
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:6005/api/user/delete-person',
        dataType: 'json',
        data: {
            action_id: $(this).attr('action-id')
        },
        success: function(data) {
            if (data.success == 1) {
                alert(data.message)
                all_person()
            } else {
                alert(data.message)
            }
        },
        error: function(err) {
            alert(err)
        }
    })
})
$(document).on('click', '.person-edit', function() {
    $('.name').val($(this).attr('name'))
    $('.age').val($(this).attr('age'))
    $('.email').val($(this).attr('email'))
    $('.address').val($(this).attr('address'))
    $('.action-id').val($(this).attr('action-id'))
    $('.add-person').addClass('d-none')
    $('.update-person').removeClass('d-none')
})
$(document).on('click', '.update-person', function() {
    $.ajax({
        method: 'PUT',
        url: 'http://localhost:6005/api/user/update-person/' + $('.action-id').val(),
        dataType: 'json',
        data: {
            name: $('.name').val(),
            age: $('.age').val(),
            email: $('.email').val(),
            address: $('.address').val()
        },
        success: function(data) {
            if (data.success == 1) {
                $('.add-person').removeClass('d-none')
                $('.update-person').addClass('d-none')
                alert(data.message)
                all_person()
            } else {
                alert(data.message)
            }
        },
        error: function(err) {
            alert(err)
        }
    })
})