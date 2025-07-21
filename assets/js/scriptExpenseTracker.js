 const submitData = (e) => {
      e.preventDefault(); // Prevent form reload

      const textInputOne = document.getElementById("textInput1").value.trim();
      const textInputTwo = document.getElementById("textInput2").value.trim();
      const textInputThree = document.getElementById("textInput3").value.trim();

      if (textInputOne === "" || textInputTwo === "" || textInputThree === "") {
        alert("Please fill all required fields.");
        return;
      }

      // Create row and table cells
      const createRow = document.createElement("tr");
      const createTd1 = document.createElement("td");
      const createTd2 = document.createElement("td");
      const createTd3 = document.createElement("td");
      const createTd4 = document.createElement("td");

      createTd4.className = "d-flex"

      // Create input fields
      const createSpanone = document.createElement("input");
    //createSpanone.setAttribute("type", "text"); 
      createSpanone.type = "text";
      createSpanone.value = textInputOne;
      createSpanone.className = "form-control";
      createSpanone.disabled = true;

      const createSpanTwo = document.createElement("select");
      createSpanTwo.className = "form-select";
      const options = ["HouseHold", "Transportaion", "Travel", "Medical", "Fashion", "Vehicle", "Others"];
      options.forEach((optVal) => {
        const opt = document.createElement("option");
        opt.value = optVal;
        opt.textContent = optVal;
        if (optVal === textInputTwo) opt.selected = true;
        createSpanTwo.appendChild(opt);
      });
      createSpanTwo.disabled = true;

      const createSpanThree = document.createElement("input");
      //createSpanThree.setAttribute("type", "number"); 
      createSpanThree.type = "number";
      createSpanThree.value = textInputThree;
      createSpanThree.className = "form-control";
      createSpanThree.disabled = true;

      // Create buttons
      const createEditBtn = document.createElement("button");
      const createDelBtn = document.createElement("button");
      const createUpdBtn = document.createElement("button");

      createEditBtn.className = "btn btn-primary editBtn";
      createEditBtn.textContent = "Edit";

      createDelBtn.className = "btn btn-danger ms-2 delBtn";
      createDelBtn.textContent = "Delete";

      createUpdBtn.className = "btn btn-success ms-2 updateBtn d-none";
      createUpdBtn.textContent = "Update";

      // Append inputs to tds
      createTd1.appendChild(createSpanone);
      createTd2.appendChild(createSpanTwo);
      createTd3.appendChild(createSpanThree);

      // Append buttons to td
      createTd4.appendChild(createEditBtn);
      createTd4.appendChild(createDelBtn);
      createTd4.appendChild(createUpdBtn);

      // Add event listeners
      createDelBtn.addEventListener("click", () => {
        const shouldDelete = confirm("Are you sure you want to delete this row?");
        if (shouldDelete) {
          createRow.remove();
        }
      });

      createEditBtn.addEventListener("click", () => {
        createSpanone.disabled = false;
        createSpanTwo.disabled = false;
        createSpanThree.disabled = false;
        createEditBtn.classList.add("d-none");
        createDelBtn.classList.add("d-none");
        createUpdBtn.classList.remove("d-none");
      });

      createUpdBtn.addEventListener("click", () => {
        createSpanone.disabled = true;
        createSpanTwo.disabled = true;
        createSpanThree.disabled = true;
        createEditBtn.classList.remove("d-none");
        createDelBtn.classList.remove("d-none");
        createUpdBtn.classList.add("d-none");

        alert("Row updated successfully!");
      });

      // Append all tds to row
      createRow.appendChild(createTd1);
      createRow.appendChild(createTd2);
      createRow.appendChild(createTd3);
      createRow.appendChild(createTd4);

      // Append row to tbody
      document.getElementById("tbodyOne").appendChild(createRow);

      alert("Form submitted successfully!");

      e.target.reset(); // Clear form
    };