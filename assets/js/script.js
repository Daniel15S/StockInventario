// Función para cargar el contenido de los paneles dinámicamente
function loadPanel(panel) {
    const mainContent = document.getElementById('main-content');
    
    // Usamos la API Fetch para cargar el contenido de los paneles
    fetch(panel + '.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Archivo no encontrado: ' + panel + '.html');
            }
            return response.text();
        })
        .then(html => {
            mainContent.innerHTML = html; // Inyectamos el contenido cargado en el contenedor
        })
        .catch(error => {
            mainContent.innerHTML = "<p>Error al cargar el contenido. " + error.message + "</p>";
            console.error("Error al cargar el archivo:", error);
        });
}

// Obtener el logo y el contenedor de la barra lateral
const logo = document.getElementById('logo');
const sidebar = document.getElementById('sidebar');

// Función para alternar la clase "collapsed" en la barra lateral
logo.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});


/*/ Obtener el botón de hamburguesa y la barra lateral
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

// Función para alternar la clase "collapsed" en la barra lateral
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});*/
