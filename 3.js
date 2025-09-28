// Initialize fabric.js canvas
var canvas = new fabric.Canvas('mug-canvas');

// Function to upload the mug image
function uploadImage() {
    var input = document.getElementById('upload-image');
    var reader = new FileReader();

    reader.onload = function(event) {
        var imgElement = new Image();
        imgElement.src = event.target.result;

        imgElement.onload = function() {
            var imgInstance = new fabric.Image(imgElement, {
                left: 0,
                top: 0,
                scaleX: canvas.width / imgElement.width,  // Scale the image to fit the canvas
                scaleY: canvas.height / imgElement.height,
                selectable: false  // Prevent selecting the image
            });
            canvas.add(imgInstance);  // Add the image to the canvas
            canvas.sendToBack(imgInstance);  // Ensure it's in the background
        };
    };

    reader.readAsDataURL(input.files[0]);
}

// Function to add text on the mug canvas
function addText() {
    var text = new fabric.Textbox('Custom Text', {
        left: 150,
        top: 150,  // Adjust the top to align text with the mug design
        width: 200,
        fontSize: 24,
        fill: '#000000',
        editable: true,  // Allow text to be edited
        zIndex: 10  // Ensure the text is on top
    });
    canvas.add(text);  // Add the text on the canvas
}

// Change text color dynamically using the color picker
document.getElementById('color').addEventListener('change', function(event) {
    if (canvas.getActiveObject() && canvas.getActiveObject().type === 'textbox') {
        canvas.getActiveObject().set('fill', event.target.value);  // Change the color of the text
        canvas.renderAll();  // Re-render the canvas to show changes
    }
});
