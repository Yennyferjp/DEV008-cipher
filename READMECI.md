## Índice

* [1. Definición del proyecto Cipher](#1-definicion-proyecto)
* [2. Objetivos del proyecto](#2-objetivos-del-proyecto)
* [3. ¿Cómo se piensa en las usuarias?](#3-como-se-piensa-enlas-usuarias)
* [4. Proceso para la creación de la página web CipherPrivate](#4-proceso-para-la-creacion-de-la-página-web-chipherprivate)
* [5. ¿Cómo resuelve el problema CipherPrivate?](#5-como-resuelve-el-problema-cipherprivate)


## 1. Definición del proyecto Cipher
El proyecto es una página web que ofrece una herramienta gratuita para cifrar y descifrar mensajes de texto utilizando el algoritmo de cifrado César. La página web cuenta con una descripción de la herramienta y sus usos, así como instrucciones sobre cómo utilizarla. También hay un botón de descarga para descargar la herramienta y una imagen que muestra cómo se vería la herramienta en un teléfono móvil. La herramienta permite ingresar un mensaje de texto y un número de desplazamiento para cifrar o descifrar el mensaje. El resultado se muestra en un cuadro de texto en la página web. El código fuente HTML de la página web se incluye en el proyecto.

## 2. Objetivos del proyecto 
  - Desarrollar una herramienta de cifrado de mensajes utilizando el cifrado César.
  - Ofrecer una plataforma gratuita para enviar y recibir mensajes encriptados de manera segura y privada.
  - Limitar la entrada de caracteres a solo letras en mayúsculas, números y los símbolos "," y "." con un máximo de 200 caracteres para garantizar la eficacia del cifrado.
  - Proporcionar instrucciones claras sobre cómo utilizar la herramienta de cifrado.
  - Brindar una experiencia de usuario agradable y atractiva, mediante el uso de un diseño visualmente atractivo y fácil de usar.
  - Fomentar la conciencia de la importancia de la privacidad en línea y la protección de datos personales.

## 3. ¿Cómo se piensa en las usuarias?
 Está pensado en las usuarias que desean enviar y recibir mensajes de manera privada y segura, protegiendo la información confidencial que se comparte. Se enfoca en ofrecer una herramienta gratuita y fácil de usar para cifrar y descifrar mensajes, utilizando el algoritmo de Cifrado César.

El diseño y la organización de la página está pensado para que las usuarios encuentren fácilmente las instrucciones y los campos para ingresar el mensaje a cifrar, seleccionar el número de desplazamientos y ver el mensaje cifrado resultante. Además, se proporciona una breve descripción de cómo funciona el cifrado César y se mencionan las limitaciones en cuanto a los caracteres permitidos.

También se incluyen imágenes y un botón de descarga para hacer la experiencia de uso más atractiva y accesible para las usuarias. En general, el proyecto está diseñado para ser útil y beneficioso para aquellos usuarios que desean mantener sus conversaciones privadas y proteger su información confidencial.

## 4. Proceso para la creación de la página web CipherPrivate 
### Planificación y diseño: 
Se define la finalidad del sitio web, su estructura, el tipo de contenido y la experiencia de la usuaria. Se crea prototipos en lapiz y papel para  visualizar el diseño del sitio web definiendole la paleta de colores negro, rojo y blanco que es adecuada para una página web que busca transmitir un sentido de elegancia, exclusividad y el lujo, autoridad, urgencia e importancia, con un toque de emoción y energía. 

### Desarrollo: 
Se empieza a codificar combinando diferentes lenguajes de programación, como HTML, CSS, JavaScript  para crear la estructura del sitio web, definir su estilo y crear la funcionalidad de cifrar y descifrar un mensaje utilizando el cifrado César. La usuaria introduce un mensaje y un número de desplazamiento (offset), que indica cuántas posiciones se deben desplazar las letras del alfabeto. La función encrypt() toma el mensaje y el desplazamiento y devuelve el mensaje cifrado. La función decrypt() toma el mensaje cifrado y el desplazamiento y devuelve el mensaje original.

* **Las funcionalidades específicas del código son:** 

Obtener el mensaje y el desplazamiento introducidos por el usuario a través de los elementos de HTML con los ids "mensaje" y "offset".
  - Validar que el desplazamiento es un número entre 0 y 26 y mostrar una alerta si no cumple con esta condición.
  - Crear un nuevo alfabeto cifrado rotando el alfabeto original el número de posiciones indicado por el desplazamiento.
  - Para cada letra del mensaje, buscar su posición en el alfabeto original y sustituirla por la letra correspondiente en el alfabeto cifrado. Si la letra no se encuentra en el alfabeto original (por ejemplo, un espacio), mantenerla sin cambios.
  - Devolver el mensaje cifrado en el elemento de HTML con el id "output" (en el caso de la función encrypt()) o el mensaje descifrado en el mismo elemento (en el caso de la función decrypt()).

### Pruebas y ajustes: 
Se realizan pruebas para detectar y corregir errores y se realizan ajustes para mejorar la funcionalidad y la experiencia del usuario.

### Despliegue y mantenimiento: 
Una vez que el sitio web está terminado y probado es importante llevar a cabo actualizaciones y mantenimiento para asegurarse de que el sitio web esté funcionando correctamente.

## 5. ¿Cómo resuelve el problema CipherPrivate?
Este proyecto resuelve el problema de la necesidad de mantener la privacidad y seguridad de los mensajes y la información que se envía a través de medios digitales. Al ofrecer una plataforma gratuita para cifrar y descifrar mensajes, CipherPrivate proporciona una herramienta para proteger la privacidad de las comunicaciones y evitar que terceros no autorizados puedan acceder a información confidencial. Esto puede ser útil tanto para usuarios individuales como para empresas que necesitan mantener la confidencialidad de la información que comparten.