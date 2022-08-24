GUIA PARA CORRER AMBOS PROYECTOS:

- SERVER:
NPM CI
NPM RUN SERVER

- CLIENT:
NPM CI
NPM RUN DEV PARA MODO DESARROLLO
NPM RUN START PARA MODO PRODUCCION

LA BASE DE DATOS NO ESTA DEPLOYADA

TABLA

producto
- id INT
- nombre VARCHAR(45)
- descripcion VARCHAR(400)
- imagen VARCHAR(500)

IMPORTANTE RESPETAR LAS MINUSCULAS

COMPONENTES
#


CARPETA PRODUCT

Ruta : client\components\Product

~ PRODUCTO: client\components\Product\index.js

    Este componente posee una componente de la dependencia react-bootstrap llamado Card, el cual tiene incluido un Link que permite que cuando entremos clickeemos sobre el producto, nos envíe a la ruta de edicion del mismo.

    Este mismo importa 
    Los datos del producto
    ------------------------------
    - id
    - nombre
    - precio 
    - descripcion
    - image 
    ------------------------------

    Métodos declarados en el ProductPage client\pages\products\[id].js
    ------------------------------
    - withButtons : es una forma de indicarle al componente que el card debe mostrar los botones de editar y eliminar ya que este componente es reutilizado y solo queremos ver los botones cuando estamos en la page del producto especifico y no cuando estamos viendo la lista de productos, esto es mediante un booleano que es enviado 
    en client\pages\products\[id].js

    - handleDelete : cuando se clickea en el boton eliminar, este hace una peticion DELETE al servidor mediante deleteProduct 

    - handleEdit: cuando se clickea en el boton editar, el router redirige a la pagina edit que se encuentra en client\pages\products\edit\[id].js
    ------------------------------

~ PRODUCTLIST: client\components\Product\ProductList\index.js

    Este componente se encarga de mapear la lista de productos que recibe al componente PRODUCTO, enviandole los datos correspondientes para cada uno de los mismos.

____________________________________________________________________________________________________________________________________________________________________________________________

CARPETA FORMS

Ruta : client\components\Forms

~ PRODUCTFORM:

    - DataForm: Es el objeto del producto, se setea el estado base del mismo con un useState con todos los campos vacios.

    - useEffect: Se usa este método ya que este ProductForm es utilizado para la página de new (nuevo producto) y edit (para editar productos), en caso de que sea este ultimo, recibe un   product desde client\pages\products\edit\[id].js y refleja los datos existentes en el form para ser modificados, en caso de que sea un new, no hace nada.

    - handleSubmit: Metodo ejecutado cuando se hace el submit (envio) del formulario, si al componente ProductForm le llego un Producto previamente (es decir, es un edit), hace un llamado al  metodo updateProduct, este mismo le hace una peticion de tipo PUT al servidor para updatear el producto (esto peticion se efectua en el backend, va a ser explicado en el readme de ese proyecto).
    En caso de no haber recibido un Producto previamente (es decir, es un alta) realiza una peticion POST al servidor mediante el metodo saveProduct y el servidor del lado del backend se encarga de realizar el insert.

    Estos métodos que realizan peticiones al servidor se encuentra en la ruta client\services\api-mysql

    - handleChange: Método que se ejecuta cada vez que se modifica cualquiera de los inputs, guardando el dato asociado al campo y seteándoselo al DataForm )objeto con los campos del producto), luego cuando se hace el submit se envia la última instancia de modificación de los campos que registró este método.

    Finalmente, se encuentra el Form correspondiente creado gracias a la dependencia React-Bootstrap que cuando hace un submit invoca a handleSubmit, cada vez que uno de los inputs cambia, este llama a handleChange para guardar el nuevo cambio del campo y tambien definiendo el valor de los inputs mediante value para que cada input sea asignado al campo correspondiente del objeto Product de manera correcta.

____________________________________________________________________________________________________________________________________________________________________________________________

CARPETA FOOTER

Ruta : client\components\Footer

~ FOOTER: client\components\Footer\index.js

    Este componente es un footer sencillo con su correspondiente estilo. 

____________________________________________________________________________________________________________________________________________________________________________________________

CARPETA CAROUSEL

Ruta : client\components\Carousel

~ CAROUSEL: client\components\Carousel\index.js

    Es un Carousel basico el cual tiene como estado base 0 asignado por el useState y si se clickea en las flechas este estado cambia a 1, 2 y se muestra el correspondiente item del carrousel.

____________________________________________________________________________________________________________________________________________________________________________________________

CARPETA NAVBAR

Ruta : client\components\Navbar

~ NAVBAR: client\components\Navbar\index.js

    Es un Navbar basico que posee un brand con el nombre de la empresa y un dropdown con dos items que te llevan al listado de productos o a crear un nuevo producto mediante href

____________________________________________________________________________________________________________________________________________________________________________________________

CARPETA LAYOUT

Ruta : client\layout

~ LAYOUT: 

    Este componente es el que define el estandar de todas las paginas del frontend, este estandar se compone por el Componente HEADER (es el navbar) y luego children que es el componente que le pueda llegar a layout (es decir, el page de new, edit, etc), este children es envuelto en un div que importa el style generico de la pagina y finalmente el footer, de esta forma, en todas las paginas se puede observar el navbar, el footer y el estilo base de la app.

____________________________________________________________________________________________________________________________________________________________________________________________

CARPETA PAGES

Ruta : client\pages

~ APP: client\pages\_app.js

    Este componente es el entrypoint de la aplicacion, es el que ejecuta el componente correspondiente recibido por props, lo envuelve en un layout y luego en ssrprovider para que haya consistencia entre los ids en server side rendering y client side rendering.

~ HOME: client\pages\index.js

    Esta pagina es la que muestra el inicio de la app, con el carousel, navbar y footer correspondiente.

____________________________________________________________________________________________________________________________________________________________________________________________

CARPETA PRODUCTS CON SUS PAGES

Ruta : client\pages\products


~ ID: client\pages\products\[id].js

Posee un router

    - handleDelete: este metodo se encarga de realizar una peticion de DELETE en el servidor que se encuentra en el backend mediante el metodo deleteProduct junto al id para que el servidor pueda realizar la peticion de eliminar el producto con ese id correspondiente y luego mediante el router el usuario es redirigido al inicio de la pagina.

    - handleEdit: mediante el router, este metodo redirige a la persona a la ruta para editar el producto junto al id del mismo para que desde el backend, el servidor pueda realizar la peticion getProductById y traerlo de la base de datos.

    Este componente envia la informacion necesaria al producto para poder traer el card con la info correspondiente, los metodos handleEdit y handleDelete y el withButtoms (explicado al principio) en true.

   - getStaticPaths: metodo utilizado para guardar de manera estatica las rutas para ingresar a cualquiera de todos los productos desde un principio haciendo un destructuring del id del producto para generar dicha ruta con cada id que exista.

    - getStaticProps: metodo utilizado para guardar de manera estatica los props del producto desde un principio, haciendo un destructuring de data para devolver product y enviarlo al frontend desde el servidor.

~ LIST: client\pages\products\list.js

    Se setea un array de products vacio con el useState, luego mediante el useEffect(es un metodo que sirve para asignar una funcionalidad especifica que se ejecuta una sola vez cuando se renderiza la pagina ) se traen los productos mediante una peticion GET al servidor gracias a getProducts(client\services\api-mysql\index.js) que trae todos los productos, luego se hace un destructuring de data, tomando solo result que son los productos y se van seteando en el array products mediante setProducts, finalmente, retorna el componente PRODUCTLIST(client\components\Product\ProductList\index.js) que mapea dichos productos dentro del componente PRODUCTO (client\components\Product\index.js).

~ NEW: client\pages\products\new.js

    Es una pagina que llama al componente PRODUCTFORM, su funcionalidad fue detallada anteriormente.

____________________________________________________________________________________________________________________________________________________________________________________________

CARPETA EDIT DENTRO DE PAGES/PRODUCTS

Ruta : client\pages\products\edit

~ ID: client\pages\products\edit\[id].js

    Devuelve un formulario de producto (PRODUCTFORM) pero en este caso le envia un producto, para que la logica dle form se adapte al caso de un UPDATE, mostrando los datos existentes del producto en cuestion para ser modificados.

    - getStaticPaths: metodo  utilizado para guardar de manera estatica las rutas para ingresar a cualquiera de todos los productos desde un principio haciendo un destructuring del id del producto para generar dicha ruta con cada id que exista.

    - getStaticProps: metodo  utilizado para guardar de manera estatica los props del producto desde un principio, haciendo un destructuring de data para devolver product y enviarlo al frontend desde el servidor.


____________________________________________________________________________________________________________________________________________________________________________________________

CARPETA SERVICES

Ruta : client\services

~ SERVICEBASE:  

____________________________________________________________________________________________________________________________________________________________________________________________

CARPETA API-MYSQL DENTRO DE SERVICES

~ DATABASESERVICE: 
