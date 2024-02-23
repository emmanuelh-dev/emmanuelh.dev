---
title: 'Cómo instalar Traccar en Ubuntu en DigitalOcean - Guía paso a paso'
date: '2024-02-23'
tags: ['español', 'digitalocean', 'deploy', 'traccar']
draft: false
summary: 'Aprende a instalar y configurar Traccar, una plataforma de rastreo GPS de código abierto, en un servidor Ubuntu en DigitalOcean con esta guía detallada.'
---

# Cómo instalar Traccar en Ubuntu en DigitalOcean

Traccar es una plataforma de rastreo GPS de código abierto muy popular. En esta guía, veremos cómo instalar Traccar en un servidor Ubuntu en DigitalOcean y configurarlo para usar una base de datos MySQL.

## Registrarse en DigitalOcean

Lo primero que necesitamos es una cuenta en DigitalOcean. Puedes registrarte usando [este enlace](https://m.do.co/c/5ac4ff8a5bab) para recibir $200 de crédito gratis para probar los servicios de DigitalOcean.

## Crear un droplet Ubuntu

Una vez registrado, crea un nuevo "droplet" (instancia de servidor virtual) con Ubuntu como sistema operativo. Elige la configuración más básica que incluye 1GB de RAM y 1 CPU, que es suficiente para ejecutar Traccar.

## Instalar software necesario

Conectamos al droplet por SSH y ejecutamos los siguientes comandos para instalar el software necesario:

```
apt update && apt -y install unzip mysql-server
```

Esto instalará la utilidad unzip y el servidor MySQL.

## Configurar la base de datos MySQL

A continuación configuramos la base de datos:

```
mysql -u root --execute="ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'; GRANT ALL ON *.* TO 'root'@'localhost' WITH GRANT OPTION; FLUSH PRIVILEGES; CREATE DATABASE traccar;"
```

Esto establece la contraseña de root, otorga permisos totales al usuario root y crea una nueva base de datos llamada "traccar".

## Descargar e instalar Traccar

Ahora descargamos la última versión de Traccar y la instalamos:

```
wget https://www.traccar.org/download/traccar-linux-64-latest.zip
unzip traccar-linux-*.zip
./traccar.run
```

## Configurar Traccar para MySQL

Por último, editamos el archivo de configuración para que Traccar use la base de datos MySQL que creamos:

```
cat > /opt/traccar/conf/traccar.xml << EOF
<?xml version='1.0' encoding='UTF-8'?>

<!DOCTYPE properties SYSTEM 'http://java.sun.com/dtd/properties.dtd'>

<properties>

  <entry key="config.default">./conf/default.xml</entry>

  <entry key='database.driver'>com.mysql.jdbc.Driver</entry>
  <entry key='database.url'>jdbc:mysql://localhost/traccar?zeroDateTimeBehavior=round&serverTimezone=UTC&allowPublicKeyRetrieval=true&useSSL=false&allowMultiQueries=true&autoReconnect=true&useUnicode=yes&characterEncoding=UTF-8&sessionVariables=sql_mode=''</entry>
  <entry key='database.user'>root</entry>
  <entry key='database.password'>root</entry>

</properties>
EOF
```

## Iniciar el servicio Traccar

Finalmente iniciamos el servicio Traccar:

```
service traccar start
```

¡Y eso es todo! Traccar debería estar ejecutándose ahora en el puerto 8082, listo para ser configurado y utilizado para rastrear dispositivos GPS.
