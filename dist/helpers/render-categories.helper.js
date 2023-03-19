export const renderCategories = (categories, categoriesContainerElement, inputChangeCallback) => {
    categories.forEach((category) => {
        const listElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        listElement.appendChild(radioInputElement);
        listElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(listElement);
    });
};
