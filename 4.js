// Initialize fabric.js canvas
var canvas = new fabric.Canvas('tshirt-canvas');

// Function to upload an image (T-shirt image)
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
                scaleX: canvas.width / imgElement.width,
                scaleY: canvas.height / imgElement.height,
                selectable: false // Ensures the T-shirt image is not selectable
            });
            canvas.add(imgInstance); // Add image to the canvas
            canvas.sendToBack(imgInstance); // Send the image to the back layer
        };
    };
    
    reader.readAsDataURL(input.files[0]);
}

// Function to add text to the canvas
function addText() {
    var text = new fabric.Textbox('Custom Text', {
        left: 150,
        top: 100,
        width: 200,
        fontSize: 24,
        fill: '#000000',
        editable: true, // Allow users to edit the text
        zIndex: 10 // Ensure it's on top of the image
    });
    canvas.add(text); // Add text on top of the T-shirt image
}

// Listen for the color picker change and update the text color
document.getElementById('color').addEventListener('change', function(event) {
    canvas.getActiveObject().set('fill', event.target.value); // Change the color of the active text object
    canvas.renderAll(); // Rerender the canvas
});
