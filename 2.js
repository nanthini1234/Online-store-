const models = {
    'Apple': ['iPhone 10', 'iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15', 'iPhone 15 Pro Max'],
    'OnePlus': ['OnePlus 7', 'OnePlus 8', 'OnePlus 9', 'OnePlus 10', 'OnePlus Nord'],
    'Oppo': ['Oppo A9', 'Oppo Reno 4', 'Oppo Find X2', 'Oppo F17'],
    'Samsung': ['Galaxy S20', 'Galaxy S21', 'Galaxy S22', 'Galaxy S23'],
    'Xiaomi': ['Mi 9', 'Mi 10', 'Mi 11', 'Mi 12'],
    'RealMe': ['RealMe 5', 'RealMe 6', 'RealMe 7', 'RealMe 8'],
    'Vivo': ['Vivo X50', 'Vivo X60', 'Vivo X70', 'Vivo X80'],
    'Google': ['Pixel 4', 'Pixel 5', 'Pixel 6', 'Pixel 7'],
    // Add more brands and models as needed
};

function selectBrand(brand) {
    document.getElementById('brand-selection').style.display = 'none';
    document.getElementById('model-selection').style.display = 'block';

    const modelList = document.getElementById('model-list');
    modelList.innerHTML = ''; // Clear previous models

    models[brand].forEach(model => {
        const modelDiv = document.createElement('div');
        modelDiv.className = 'model';
        modelDiv.textContent = model;
        modelDiv.onclick = () => selectModel(model);
        modelList.appendChild(modelDiv);
    });
}

function selectModel(model) {
    document.getElementById('model-selection').style.display = 'none';
    document.getElementById('customization').style.display = 'block';
    // Optional: Update the preview based on the model selected
    document.getElementById('selected-model').textContent = `Selected Model: ${model}`;
}

function addText() {
    const text = prompt("Enter text to add:");
    if (text) {
        const textElement = document.createElement('div');
        textElement.className = 'custom-text draggable';
        textElement.textContent = text;
        textElement.style.position = 'absolute';
        textElement.style.left = '50px'; // Default position
        textElement.style.top = '50px'; // Default position
        document.getElementById('customization-area').appendChild(textElement);
        makeElementDraggable(textElement); // Make the text draggable
    }
}

function addImage() {
    const imageUrl = prompt("Enter the URL of the image to add:");
    if (imageUrl) {
        const imgElement = document.createElement('img');
        imgElement.className = 'custom-image draggable';
        imgElement.src = imageUrl;
        imgElement.style.position = 'absolute';
        imgElement.style.left = '50px'; // Default position
        imgElement.style.top = '50px'; // Default position
        imgElement.style.width = '100px'; // Default size
        document.getElementById('customization-area').appendChild(imgElement);
        makeElementDraggable(imgElement); // Make the image draggable
    }
}

function makeElementDraggable(element) {
    let offsetX, offsetY, isDown = false;

    element.onmousedown = function (e) {
        isDown = true;
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;
    };

    document.onmousemove = function (e) {
        if (isDown) {
            element.style.left = `${e.clientX - offsetX}px`;
            element.style.top = `${e.clientY - offsetY}px`;
        }
    };

    document.onmouseup = function () {
        isDown = false;
    };
}

function clearCustomization() {
    document.getElementById('customization-area').innerHTML = '';
}
