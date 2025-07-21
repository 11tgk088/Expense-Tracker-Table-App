// Get form and input fields
const itemNameInput = document.getElementById("textInput1");
const categorySelect = document.getElementById("textInput2");
const amountInput = document.getElementById("textInput3");
const formDataET = document.querySelector(".formDataET");
const tbodyOne = document.getElementById("tbodyOne");

// Form submit handler
formDataET.addEventListener("submit", (e) => {
    e.preventDefault();
    addData();
});

const addData = () => {
    const itemName = itemNameInput.value.trim();
    const category = categorySelect.value;
    const amount = amountInput.value.trim();

    if (itemName === "") {
        alert("Please enter the name of the item.");
        return;
    }
    if (category === "") {
        alert("Please select the category.");
        return;
    }
    if (amount === "") {
        alert("Please enter the amount of the item.");
        return;
    }

    // Check for duplicates (case insensitive)
    const existingInputs = document.querySelectorAll("#tbodyOne input[type='text']");
    for (let input of existingInputs) {
        if (input.value.trim().toLowerCase() === itemName.toLowerCase()) {
            alert("Name already exists!");
            return;
        }
    }

    // Create new table row
    const createRow = document.createElement("tr");
    const tdItem = document.createElement("td");
    const tdCategory = document.createElement("td");
    const tdAmount = document.createElement("td");
    const tdActions = document.createElement("td");

    // Item input
    const itemInput = document.createElement("input");
    itemInput.type = "text";
    itemInput.className = "form-control";
    itemInput.value = itemName;
    itemInput.disabled = true;
    tdItem.appendChild(itemInput);

    // Category dropdown
    const selectTag = document.createElement("select");
    selectTag.className = "form-select";
    selectTag.disabled = true;
    const options = ["HouseHold", "Transportaion", "Travel", "Medical", "Fashion", "Vehicle", "Others"];
    options.forEach((opt) => {
        const optionTag = document.createElement("option");
        optionTag.value = opt;
        optionTag.textContent = opt;
        if (opt === category) optionTag.selected = true;
        selectTag.appendChild(optionTag);
    });
    tdCategory.appendChild(selectTag);

    // Amount input
    const amountInputField = document.createElement("input");
    amountInputField.type = "number";
    amountInputField.className = "form-control";
    amountInputField.value = amount;
    amountInputField.disabled = true;
    tdAmount.appendChild(amountInputField);

    // Buttons
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const updateBtn = document.createElement("button");

    editBtn.className = "btn btn-primary";
    editBtn.textContent = "Edit";

    deleteBtn.className = "btn btn-danger ms-2";
    deleteBtn.textContent = "Delete";

    updateBtn.className = "btn btn-success ms-2 d-none";
    updateBtn.textContent = "Update";

    const actionWrap = document.createElement("div");
    actionWrap.className = "d-flex gap-2";
    actionWrap.appendChild(editBtn);
    actionWrap.appendChild(updateBtn);
    actionWrap.appendChild(deleteBtn);

    tdActions.appendChild(actionWrap);

    // Append all td to row
    createRow.appendChild(tdItem);
    createRow.appendChild(tdCategory);
    createRow.appendChild(tdAmount);
    createRow.appendChild(tdActions);

    tbodyOne.appendChild(createRow);

    // DELETE
    deleteBtn.addEventListener("click", () => {
        const confirmDelete = confirm("Are you sure you want to delete this row?");
        if (confirmDelete) {
            createRow.remove();
        }
    });

    // EDIT
    editBtn.addEventListener("click", () => {
        itemInput.disabled = false;
        selectTag.disabled = false;
        amountInputField.disabled = false;
        editBtn.classList.add("d-none");
        deleteBtn.classList.add("d-none");
        updateBtn.classList.remove("d-none");
    });

    // UPDATE
    updateBtn.addEventListener("click", () => {
        const newName = itemInput.value.trim();
        const newAmount = amountInputField.value.trim();

        if (newName === "") {
            alert("Name of the item can't be empty!");
            return;
        }
        if (newAmount === "") {
            alert("Price can't be empty");
            return;
        }

        // Check duplicates excluding current row
        const allInputs = document.querySelectorAll("#tbodyOne input[type='text']");
        for (let input of allInputs) {
            if (input !== itemInput && input.value.trim().toLowerCase() === newName.toLowerCase()) {
                alert("Name already exists in the list!");
                return;
            }
        }

        itemInput.disabled = true;
        selectTag.disabled = true;
        amountInputField.disabled = true;

        editBtn.classList.remove("d-none");
        deleteBtn.classList.remove("d-none");
        updateBtn.classList.add("d-none");

        alert("Row updated successfully!");
    });

    // Success
    alert("Successfully submitted the details!");
    formDataET.reset();
};
