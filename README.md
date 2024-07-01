Explicación de mi Proyecto

BrowserRouter
Utilizamos BrowserRouter de react-router-dom para manejar las rutas de la aplicación. Esto nos permite tener rutas amigables para el usuario y crear una experiencia de navegación fluida en una aplicación de página única (SPA).

Switch y Route
Configuramos las rutas en el componente App utilizando Switch para asegurar que solo una ruta se renderice a la vez, y Route para definir las rutas específicas. Esto nos permite definir diferentes componentes para cada ruta y manejar la navegación de manera eficiente.

Navbar
El componente Navbar contiene enlaces (Link) que permiten la navegación sin recargar la página. Esto proporciona una interfaz de usuario intuitiva y facilita la navegación entre diferentes secciones de la aplicación.

ItemListContainer
El componente ItemListContainer utiliza useParams para obtener el parámetro de la URL (categoryId) y useEffect para actualizar la lista de ítems cuando cambia la categoría. Esto nos permite mostrar dinámicamente los ítems correspondientes a la categoría seleccionada.

ItemDetailContainer
El componente ItemDetailContainer utiliza useParams para obtener el parámetro de la URL (itemId) y useEffect para cargar los detalles del ítem específico. Esto nos permite mostrar información detallada sobre un ítem individual cuando se selecciona desde la lista.

