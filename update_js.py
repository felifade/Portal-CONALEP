import re

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'r') as f:
    content = f.read()

# Replace S3 dictation
content = content.replace(
    "dictation: 'Filtrar no elimina registros: oculta temporalmente los datos que no cumplen con un criterio específico. Permite responder preguntas estratégicas de inmediato sin alterar la información original.',",
    "dictation: 'Filtrar información no significa eliminar datos; consiste en crear una vista temporal y dinámica que aísla visualmente los registros que cumplen con condiciones específicas. Por otro lado, la herramienta de ordenamiento reestructura todas las filas en secuencia alfanumérica. Ambas herramientas nos permiten responder preguntas operativas en segundos sin alterar ni dañar la base de datos original.',"
)

# Replace S4 dictation
content = content.replace(
    "dictation: 'Un dashboard o panel de control reúne los indicadores más importantes de una base de datos mediante fórmulas matemáticas y gráficas ejecutivas, facilitando la toma de decisiones.',",
    "dictation: 'Un Dashboard, o panel de control, es una herramienta ejecutiva que sintetiza grandes volúmenes de datos mediante tarjetas de métricas (KPIs) y gráficas visuales. Su objetivo principal es transformar datos crudos en información digerible para tomar decisiones estratégicas rápidamente. Por su parte, las fórmulas en las hojas de cálculo son el motor que automatiza este análisis; al utilizar funciones nativas sobre rangos específicos, el sistema procesa la información y actualiza los resultados en tiempo real.',"
)

# Replace S5 dictation
content = content.replace(
    "dictation: 'La gestión de accesos y permisos es la última fase de la producción digital. Una entrega profesional debe asegurar que el destinatario tenga acceso de lectura inmediato sin fricciones.',",
    "dictation: 'El ciclo de producción de un documento no concluye al terminar su diseño, sino al garantizar su correcta distribución. La auditoría estricta de permisos de acceso en la nube es una competencia profesional ineludible; el mejor trabajo del mundo pierde su valor si el cliente final se topa con un mensaje de \"Acceso Denegado\".',"
)

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'w') as f:
    f.write(content)

print("teachingPlan.js updated!")
