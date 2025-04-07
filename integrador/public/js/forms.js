// Basic form validation functions
function validateLoginForm() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    
    if (!email.value || !password.value) {
        alert('Por favor complete todos los campos');
        return false;
    }
    return true;
}

function validateRegisterForm() {
    var inputs = document.querySelectorAll('#registerForm input');
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            alert('Por favor complete todos los campos');
            return false;
        }
    }
    return true;
}

function validateProductForm() {
    var name = document.getElementById('name');
    var description = document.getElementById('description');
    var image = document.getElementById('image');
    
    if (!name.value || !description.value || !image.value) {
        alert('Por favor complete todos los campos');
        return false;
    }
    return true;
}

function validateCommentForm() {
    var text = document.getElementById('commentText');
    if (!text.value) {
        alert('Por favor ingrese un comentario');
        return false;
    }
    return true;
}

// Attach event listeners when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.onsubmit = validateLoginForm;
    
    var registerForm = document.getElementById('registerForm');
    if (registerForm) registerForm.onsubmit = validateRegisterForm;
    
    var productForm = document.getElementById('productForm');
    if (productForm) productForm.onsubmit = validateProductForm;
    
    var commentForm = document.getElementById('commentForm');
    if (commentForm) commentForm.onsubmit = validateCommentForm;
});
