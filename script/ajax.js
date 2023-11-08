$('#btnLoadData').click(function() {
    console.log("clicked");

    // URL to your JSON file
    let jsonURL = "demo.json";

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(data) {
            // Populate form fields with data from JSON
            $("#fname").val(data.fname);
            $("#lname").val(data.lname);
            $("#email").val(data.email);
            $("#pwd").val(data.password);
            $("#phone").val(data.phone);
            $("#birthday").val(data.birthday);

            // Handle the additional form elements here...

            // Checkbox handling
            $("input[type=checkbox][name=superpower]").each(function() {
                if (data.superpower.includes($(this).val())) {
                    $(this).prop('checked', true);
                } else {
                    $(this).prop('checked', false);
                }
            });
        }
    });
});
