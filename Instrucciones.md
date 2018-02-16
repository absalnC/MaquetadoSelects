

# Planteamiento de problema

Uno de los casos de uso de una determinada aplicación web es pedir que los usuarios dejen la siguiente información:

- Nombre
- Edad
- Ciudad

La cual será capturada dentro de una forma.

Actualmente se cuenta con una serie de servicios web desarrollados que realizan las siguientes funciones:

- Obtener el listado de países disponibles.
- Obtener el listado de estados de un país (por medio del identificador del país).
- Obtener el listado de ciudades de un estado (por medio del identificador del estado).
- Guardar los datos del usuario.

# Tarea

Desarrollar una página usando únicamente HTML, Javascript y CSS que cumpla con la interacción anterior. La solución deberá de tener el comportamiento mostrado en el video adjunto **como mínimo**.

Para el ingreso del país, el estado y la ciudad se utilizarán controles de dropdown. La interacción será de la siguiente forma:

- Inicialmente los dropdowns de estado y ciudad deberán de estar vacíos o no existir.
- El dropdown de país deberá de inicialmente estar populado con los países.
- Al seleccionar un ítem del dropdown de países se debe de popular el dropdown de estados con los estados del país seleccionado.
- Al seleccionar un ítem del dropdown de estados se debe de popular el dropdown de ciudades con las ciudades del estado seleccionado.
- Se debe de validar:
  * El nombre debe de ser de 50 caracteres máximo y únicamente pueden ingresar letras (considerar acentos), espacios y puntos.
  * La edad debe ser entre 18 a 100 años.
- Al someter la forma se debe de enviar los siguientes datos al servicio web para guardar:
  * Nombre
  * Edad
  * Identificador de la ciudad
- Una vez sometida la información la página debe mostrar el mensaje regresado por el servicio web.



# Consideraciones técnicas

- La solución debe de utilizar comunicación asíncrona entre la página y el servidor (AJAX) para popular todos los dropdowns y hacer el envío de los datos del usuario.
- Se deben de validar los datos ingresados en la página antes de enviarlos a los servicios web.
- No hay restricciones de marcos de trabajo o librerías posibles a utilizar, siempre y cuando sean de Javascript y sin necesidad de instalar algo adicional.
- El header de Content-Type de toda la comunicación hecha por POST debe ser "application/json", de lo contrario no responderá el backend.
- En caso de usar jQuery es necesario que el JSON enviado se le aplique anteriormente la función JSON.stringify().

# Aspectos a evaluar

Lo siguiente son puntos que serán evaluados en la solución:

- Cumplimiento de todos los requerimientos
- Claridad del código
- Documentación de código
- Diseño lógico y gráfico
- Creatividad y calidad de la solución

# Material a entregar

- Archivos HTML, CSS y Javascript con la solución
- Enviar los archivos en formato ZIP usando el servicio de WeTransfer a jobs@sisu.mx con el asunto: "<Nombre del candidato> ENTREGA: Ejercicio entrevista".
- **Importante:** No adjuntar directamente el archivo ZIP en el correo electrónico, únicamente enviar el link de WeTransfer.


# Instalación de los servicios web (backend)

Los servicios web están desarrollados usando Spring. Se hace uso de Spring Boot para la ejecución, por lo que no es necesario instalar un servidor de aplicaciones.

## Requerimientos

- JRE (Java Runtime Environment) 8 para ejecutar el backend
- JDK (Java Development Kit) 8 y Maven para compilar el backend

## Instrucciones

Existen 2 carpetas:

- /fuente_servidor: Contiene el código fuente del backend
- /ejecutable: Contiene el backend en un archivo ejecutable

### Ejecución

Para correr el servidor con el backend simplemente hay que ejecutar el archivo .jar en la  carpeta de /ejecutable, usando:

```sh
java -jar challengeajax-0.0.1-SNAPSHOT.jar
```

Esto levantará el servidor de forma local en el puerto **8080**. No debe de existir algún otro servicio corriendo en ese puerto.

```
http://localhost:8080
```

### Edición

El código fuente del backend se encuentra en la carpeta /fuente_servidor. En caso de modificarlo se puede compilar y correr el servidor en modo de desarrollo usando:

```sh
mvn spring-boot:run
```

Como nota adicional, si se desea re-empacar el código como un archivo .jar como el que está en la carpeta /ejecutable, hay que usar el comando:

```sh
mvn clean package
```

Esto creará una carpeta /target con el archivo jar compilado.

## Documentación y URLs de los servicios web

Para visualizar la documentación de los servicios web hay que ir a la dirección:

```
http://localhost:8080/docapi/index.html
```

 ***Es muy importante revisar la documentación de los servicios web para hacer el ejercicio.***
Se puede encontrar en esa dirección la funcionalidad de cada servicio web, la URL y el método (GET o POST) aceptado por cada uno. Adicionalmente se pueden hacer pruebas con ellos usando diferentes parámetros.

El nombre del API es "servicio".


# Tarea adicional

Esta tarea no es obligatoria, pero será tomada en consideración si se envía junto con la solución.

- Implementar en el backend el guardado de los datos del usuario en una base de datos después de enviarlos desde la página. Puede ser MySQL, PostgreSQL o una base de datos en memoria como H2.
