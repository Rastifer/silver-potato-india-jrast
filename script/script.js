$(function () {
    let animal = [
        ["dog", ["Labrador Retriever", "German Shepherd", "Dobermann", "English Bulldog"]],
        ["bird", ["Bald Eagle", "Falcon", "Hawk", "Mockingbird"]],
        ["bear", ["Grizzly Bear", "Polar Bear", "Black Bear", "Panda"]],
        ["cat", ["Lion", "Tiger", "Cheetah", "Siamese"]],
        ["insect", ["Dragonfly", "Dung Beetle", "Hornet", "Butterfly"]]
    ];



$("#animalType").on("change", function (e) {
    //enables the animal dropdown
    $("#animal").prop("disabled", false);

    let inputVal = this.value;

    console.log(inputVal);

    //loop though array of animals
    $.each(animal, function (key, value) {
      //match animal to user selected
      if (inputVal === value[0]) {
        console.log(
          "value[0]:" + value[0] + ", key:" + key + "value: " + value
        );
        $.each(value, function (nestKey, nestValue) {
          // console.log(nestKey);

          switch (nestKey) {
            case 0:
              $("label[for=animal]").text(nestValue);
              $("#animal").empty();
              $("#animal").append(
                $("<option>").text(`select a ${nestValue} `)
              );
              break;
            case 1:
              $.each(nestValue, function (nameKey, nameValue) {
                console.log(nameKey, nameValue);

                $("#animal").append(
                  $("<option>").val(nameValue).text(nameValue)
                );
              });
              break;
          }
        });
      }
    });
  });

  $("#submitForm").on("click", function () {
    console.log("display button clicked: ");

    $("#dataContainer").append(
      $("#fname").val() + ", thank you for your submission!"
    );
  });

var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var maxAllowed = 3;

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', function() {
            var checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            if (checkedCheckboxes.length > maxAllowed) {
                this.checked = false;
            }
        });
    }

});