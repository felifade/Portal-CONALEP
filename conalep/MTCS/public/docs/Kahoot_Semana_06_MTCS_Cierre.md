# 🎯 Kahoot: Auditoría en la Nube y Caso Tesla (Semana 06 - MTCS-20)

**Módulo:** Manejo de Tecnologías de Ciberseguridad (MTCS-20)  
**Institución:** CONALEP Plantel Pachuca de Soto · Grupo 501  
**Unidad / Corte:** Segundo Corte (35%) · RA 2.1  
**Fecha de Aplicación:** Viernes 25 de Septiembre de 2026 (Cierre de Semana 06)  

### 📌 Ejes Temáticos Evaluados:
1. **Caso Tesla (Cryptojacking en Kubernetes / AWS):** Intrusión sin rescate, Monero (XMR), servidores Headless y alerta financiera.
2. **Auditoría de Identidad y Carga en Cloud Shell:** `whoami`, `id` (UID 1000) y `uptime` (load average < 4.00).
3. **Reconocimiento de Hardware y Almacenamiento:** `lscpu` (Intel Xeon / AMD EPYC), `free -h` y `df -h /home`.
4. **Inspección del Árbol Raíz y Bastionado:** `/etc/os-release`, `/etc/passwd` y hardening con `/usr/sbin/nologin`.
5. **Redes Cloud y Doble IP:** `hostname -I` (IP privada) vs `curl -s ifconfig.me` (IP pública de Google).
6. **Manipulación de Archivos en Consola:** `mkdir lab_mtcs`, editor `nano` (`Ctrl+O` y `Ctrl+X`) y filtrado con `grep`.

**Número de reactivos:** 20  
**Límite de tiempo:** 20 segundos por reactivo  

---

## 📋 Banco de Preguntas y Respuestas Oficiales

### Reactivo 1 (20 seg) · *Caso Tesla / Cryptojacking*
**¿Qué es el Cryptojacking en entornos de cómputo en la nube?**

- [1] ❌ Secuestro de archivos para pedir un rescate en bitcoins
- [2] ✅ Robo no autorizado de poder de cómputo para minar criptomonedas
- [3] ❌ Infección que apaga físicamente los servidores del centro de datos
- [4] ❌ Técnica para robar contraseñas de correos institucionales

### Reactivo 2 (20 seg) · *Caso Tesla / Vectores de Ataque*
**¿Por qué los atacantes de Tesla no destruyeron ni borraron ningún archivo?**

- [1] ❌ Porque no sabían cómo usar comandos de eliminación en Linux
- [2] ✅ Para no alertar al personal y minar Monero de forma silenciosa
- [3] ❌ Porque el sistema operativo Windows bloqueó sus permisos
- [4] ❌ Porque solo querían cambiar el fondo de pantalla del servidor

### Reactivo 3 (20 seg) · *Caso Tesla / Vulnerabilidad*
**¿Cuál fue la brecha de seguridad que permitió la intrusión en Tesla?**

- [1] ❌ Un virus que entró por una memoria USB en una laptop corporativa
- [2] ✅ Una consola de Kubernetes expuesta a internet sin contraseña
- [3] ❌ Un cable de fibra óptica roto en el centro de datos de AWS
- [4] ❌ Un ataque de fuerza bruta que duró más de tres meses continuos

### Reactivo 4 (20 seg) · *Caso Tesla / Minería*
**¿Qué criptomoneda minaban parásitamente en los servidores de Tesla?**

- [1] ❌ Bitcoin (BTC)
- [2] ❌ Dogecoin (DOGE)
- [3] ✅ Monero (XMR), optimizada para CPUs y de difícil rastreo
- [4] ❌ Ethereum clásico

### Reactivo 5 (20 seg) · *Caso Tesla / Telemetría*
**¿Qué síntoma delató el ataque de Cryptojacking a los administradores?**

- [1] ❌ Mensajes de burla en las pantallas de las oficinas corporativas
- [2] ✅ Procesadores al 100% de CPU y factura de nube disparada
- [3] ❌ Falla total en los frenos de los automóviles eléctricos de prueba
- [4] ❌ Computadoras apagándose repentinamente por sobrecalentamiento

### Reactivo 6 (20 seg) · *Arquitectura Linux / Modo Headless*
**¿Por qué operar servidores en modo «Headless» dificultó notar el hackeo?**

- [1] ✅ Porque no tienen interfaz gráfica ni pantallas con ventanas visuales
- [2] ❌ Porque las tarjetas de video se desconectan de la red interna
- [3] ❌ Porque los cables de red funcionan a la mitad de su velocidad
- [4] ❌ Porque Linux no registra ninguna actividad en sus archivos de log

### Reactivo 7 (20 seg) · *Auditoría Cloud Shell / Identidad*
**En la auditoría forense con Bash, ¿qué comando revela el usuario activo?**

- [1] ✅ whoami
- [2] ❌ hostname
- [3] ❌ uname -a
- [4] ❌ ifconfig

### Reactivo 8 (20 seg) · *Auditoría Cloud Shell / Privilegios*
**¿Qué información técnica esencial nos proporciona el comando «id»?**

- [1] ❌ La marca y número de serie de la tarjeta madre del equipo
- [2] ✅ El identificador numérico de usuario (UID) y sus grupos asignados
- [3] ❌ La dirección física MAC de la tarjeta de red del servidor
- [4] ❌ La contraseña encriptada del superusuario administrador root

### Reactivo 9 (20 seg) · *Debian GNU/Linux / UID*
**En Debian GNU/Linux, ¿qué indica un identificador de usuario UID 1000?**

- [1] ❌ Es el superusuario supremo (root) con control absoluto
- [2] ❌ Es una cuenta especial de un hacker atacante infiltrado
- [3] ✅ Es el primer usuario estándar regular creado en el sistema
- [4] ❌ Es una cuenta temporal exclusiva para reparar el disco duro

### Reactivo 10 (20 seg) · *Auditoría Cloud Shell / Carga*
**¿Para qué sirve el comando «uptime» durante una investigación forense?**

- [1] ❌ Para medir la velocidad de descarga de archivos en internet
- [2] ✅ Para ver el tiempo encendido y la carga media de CPU (load average)
- [3] ❌ Para reiniciar el servidor remoto inmediatamente sin avisar
- [4] ❌ Para cambiar la hora del reloj del sistema operativo en la nube

### Reactivo 11 (20 seg) · *Forense / Detección de Parásitos*
**Si «uptime» muestra un load average mayor a 4.00 en reposo, ¿qué sugiere?**

- [1] ❌ Que la computadora está apagada correctamente
- [2] ✅ Actividad anómala o procesos parásitos saturando el procesador
- [3] ❌ Que la conexión Wi-Fi es de excelente calidad y velocidad
- [4] ❌ Que la memoria RAM se encuentra completamente vacía

### Reactivo 12 (20 seg) · *Auditoría Cloud Shell / Hardware*
**¿Qué comando permite inspeccionar el modelo y arquitectura del CPU?**

- [1] ✅ lscpu
- [2] ❌ free -h
- [3] ❌ df -h
- [4] ❌ lsblk

### Reactivo 13 (20 seg) · *Auditoría Cloud Shell / Silicio*
**¿Qué procesadores de alta potencia descubrimos en Google Cloud Shell?**

- [1] ❌ Procesadores Intel Atom o Celeron de muy baja gama
- [2] ✅ Procesadores empresariales Intel Xeon o AMD EPYC
- [3] ❌ Chips ARM diseñados exclusivamente para relojes inteligentes
- [4] ❌ Tarjetas de sonido integradas a la tarjeta madre física

### Reactivo 14 (20 seg) · *Auditoría Cloud Shell / Memoria*
**¿Qué comando muestra la memoria RAM total y disponible en GiB?**

- [1] ✅ free -h
- [2] ❌ ram -show
- [3] ❌ cat /proc/mem
- [4] ❌ df -h

### Reactivo 15 (20 seg) · *Estructura Linux / Directorio /etc*
**¿Qué archivo del sistema contiene la lista de usuarios y cuentas locales?**

- [1] ✅ /etc/passwd
- [2] ❌ /etc/shadow
- [3] ❌ /etc/hosts
- [4] ❌ /etc/network

### Reactivo 16 (20 seg) · *Seguridad y Hardening / Cuentas*
**¿Por qué cuentas como «daemon» tienen la shell «/usr/sbin/nologin»?**

- [1] ❌ Porque están descompuestas y no se pueden arreglar
- [2] ✅ Bastionado: evita que intrusos abran consola si vulneran el servicio
- [3] ❌ Porque son cuentas exclusivas para ver videos en internet
- [4] ❌ Para que el sistema gaste menos energía eléctrica en reposo

### Reactivo 17 (20 seg) · *Redes Cloud / Doble IP*
**¿Qué diferencia existe entre «hostname -I» y «curl -s ifconfig.me»?**

- [1] ✅ hostname -I muestra la IP privada interna y curl la IP pública
- [2] ❌ Uno mide la velocidad del disco y el otro la temperatura del CPU
- [3] ❌ Ambos comandos hacen exactamente lo mismo sin ninguna diferencia
- [4] ❌ Uno apaga la máquina remota y el otro borra las carpetas

### Reactivo 18 (20 seg) · *Manipulación en Consola / Directorios*
**En la consola Linux, ¿qué comando usamos para crear una nueva carpeta?**

- [1] ❌ touch
- [2] ✅ mkdir
- [3] ❌ create-folder
- [4] ❌ dir-make

### Reactivo 19 (20 seg) · *Editor Nano / Atajos de Teclado*
**¿Cuáles son los atajos esenciales para guardar y salir del editor «nano»?**

- [1] ❌ Ctrl + S para guardar y Alt + F4 para salir de la ventana
- [2] ✅ Ctrl + O para escribir en disco y Ctrl + X para salir
- [3] ❌ Esc :wq como en el editor Vim clásico
- [4] ❌ Ctrl + C para guardar y Ctrl + V para pegar el texto

### Reactivo 20 (20 seg) · *Filtros Bash / Comando grep*
**¿Qué comando usamos para filtrar y verificar la línea «ALUMNO» en el texto?**

- [1] ✅ grep "ALUMNO" bitacora_semana06.txt
- [2] ❌ find "ALUMNO" bitacora_semana06.txt
- [3] ❌ search "ALUMNO" en archivo
- [4] ❌ filter "ALUMNO" bitacora.txt

