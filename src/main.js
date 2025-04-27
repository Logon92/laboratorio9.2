    const commonPasswords = [
        "password", "123456", "qwerty", "admin", "letmein", "welcome", "monkey",
        "sunshine", "password1", "123456789", "football", "iloveyou", "1234567",
        "123123", "12345678", "abc123", "qwerty123", "1q2w3e4r", "baseball",
        "password123", "superman", "987654321", "mypass", "trustno1", "hello123",
        "dragon", "1234", "555555", "loveme", "hello", "hockey", "letmein123",
        "welcome123", "mustang", "shadow", "12345", "passw0rd", "abcdef", "123abc",
        "football123", "master", "jordan23", "access", "flower", "qwertyuiop",
        "admin123", "iloveyou123", "welcome1", "monkey123", "sunshine1", "password12",
        "1234567890",
    ];
    
    const tieneMayusculasYMinusculas = (clave) => {
        const tieneMayuscula = /[A-Z]/.test(clave);
        const tieneMinuscula = /[a-z]/.test(clave);
        if (!tieneMayuscula || !tieneMinuscula) {
        return { esValida: false, error: "La clave debe de tener mayúsculas y minúsculas" };
        }
        return { esValida: true };
    };
    
    const tieneNumeros = (clave) => {
        const tieneNumero = /\d/.test(clave);
        if (!tieneNumero) {
        return { esValida: false, error: "La clave debe de tener números" };
        }
        return { esValida: true };
    };
    
    const tieneCaracteresEspeciales = (clave) => {
        const tieneEspecial = /[@#_+\-!$%^&*(),.?":{}|<>]/.test(clave);
        if (!tieneEspecial) {
        return { esValida: false, error: "La clave debe de tener caracteres especiales" };
        }
        return { esValida: true };
    };
    
    const tieneLongitudMinima = (clave) => {
        if (clave.length < 8) {
        return { esValida: false, error: "La clave debe de tener una longitud mínima de 8 caracteres" };
        }
        return { esValida: true };
    };
    
    const tieneNombreUsuario = (nombreUsuario, clave) => {
        if (clave.toLowerCase().includes(nombreUsuario.toLowerCase())) {
        return { esValida: false, error: "La clave no debe tener el nombre del usuario" };
        }
        return { esValida: true };
    };
    
    const tienePalabrasComunes = (clave, commonPasswords) => {
        const claveLower = clave.toLowerCase();
        for (const palabra of commonPasswords) {
        if (claveLower.includes(palabra.toLowerCase())) {
            return { esValida: false, error: "La clave no debe de contener palabras comunes" };
        }
        }
        return { esValida: true };
    };
    
    const validarClave = (nombreUsuario, clave, commonPasswords) => {
        let validacion;
    
        validacion = tieneMayusculasYMinusculas(clave);
        if (!validacion.esValida) return validacion;
    
        validacion = tieneNumeros(clave);
        if (!validacion.esValida) return validacion;
    
        validacion = tieneCaracteresEspeciales(clave);
        if (!validacion.esValida) return validacion;
    
        validacion = tieneLongitudMinima(clave);
        if (!validacion.esValida) return validacion;
    
        validacion = tieneNombreUsuario(nombreUsuario, clave);
        if (!validacion.esValida) return validacion;
    
        validacion = tienePalabrasComunes(clave, commonPasswords);
        if (!validacion.esValida) return validacion;
    
        return { esValida: true };
    };
    
    const validar = () => {
        const nombreUsuarioInput = document.getElementById("nombreUsuario");
        const claveInput = document.getElementById("clave");
        const mensajeDiv = document.getElementById("mensaje");
    
        if (!nombreUsuarioInput || !claveInput || !mensajeDiv) {
        console.error("Error: No se encontraron los elementos en el DOM");
        return;
        }
    
        const nombreUsuario = nombreUsuarioInput.value.trim();
        const clave = claveInput.value;
    
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);
    
        if (resultado.esValida) {
        mensajeDiv.textContent = "? ¡Contraseña válida!";
        mensajeDiv.className = "exito";
        } else {
        mensajeDiv.textContent = `? Error: ${resultado.error}`;
        mensajeDiv.className = "error";
        }
    };
  