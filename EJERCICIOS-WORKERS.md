# 📚 Ejercicios de Web Workers - Del Básico al Avanzado

## Concepto Clave
Un **Web Worker** es como abrir una pestaña del navegador extra que trabaja en paralelo sin bloquear la interfaz.

```
Thread Principal (UI)          Worker (Fondo)
    ↓                              ↓
  Tu página                    Procesamiento
  sigue funcionando            sin bloquear
```

---

## Ejercicio 1: Hello Worker (El más simple)

### 1.1 Crear el archivo `worker-basico.js`
```javascript
// worker-basico.js
console.log('✅ Worker iniciado');

// Escuchar mensajes del thread principal
self.addEventListener('message', (event) => {
    console.log('Worker recibió:', event.data);
    
    // Enviar respuesta
    self.postMessage('Hola desde el worker!');
});
```

### 1.2 Usar el worker en HTML
```html
<!DOCTYPE html>
<html>
<head>
    <title>Ejercicio 1: Hello Worker</title>
</head>
<body>
    <h1>Web Worker Básico</h1>
    <button onclick="enviarMensaje()">Enviar Mensaje</button>
    <p id="respuesta"></p>

    <script>
        // Crear el worker
        const worker = new Worker('worker-basico.js');
        
        function enviarMensaje() {
            console.log('📤 Enviando mensaje al worker...');
            worker.postMessage('Hola worker!');
        }
        
        // Escuchar respuesta del worker
        worker.addEventListener('message', (event) => {
            console.log('📥 Respuesta del worker:', event.data);
            document.getElementById('respuesta').textContent = event.data;
        });
    </script>
</body>
</html>
```

**Qué aprenderás:**
- ✅ Crear un worker
- ✅ Enviar mensaje: `worker.postMessage()`
- ✅ Recibir respuesta: `worker.addEventListener('message')`

---

## Ejercicio 2: Pasar Números

### 2.1 Worker: `worker-suma.js`
```javascript
// worker-suma.js
self.addEventListener('message', (event) => {
    const numeros = event.data;  // Recibir array
    
    // Sumar todos los números
    const suma = numeros.reduce((a, b) => a + b, 0);
    
    // Enviar resultado
    self.postMessage(suma);
});
```

### 2.2 HTML: `ejercicio-2.html`
```html
<!DOCTYPE html>
<html>
<body>
    <h1>Ejercicio 2: Suma en Worker</h1>
    <button onclick="sumarNumeros()">Sumar 1 al 100</button>
    <p id="resultado"></p>

    <script>
        const worker = new Worker('worker-suma.js');
        
        function sumarNumeros() {
            // Crear array del 1 al 100
            const numeros = Array.from({length: 100}, (_, i) => i + 1);
            
            console.log('Enviando array al worker...');
            worker.postMessage(numeros);
        }
        
        worker.addEventListener('message', (event) => {
            document.getElementById('resultado').textContent = 
                `Suma total: ${event.data}`;
        });
    </script>
</body>
</html>
```

**Qué aprenderás:**
- ✅ Pasar datos complejos (arrays, objetos)
- ✅ Procesar datos en el worker
- ✅ Devolver resultados

---

## Ejercicio 3: Enviar Tipo de Mensaje (Más útil)

### 3.1 Worker: `worker-inteligente.js`
```javascript
// worker-inteligente.js
self.addEventListener('message', (event) => {
    const { accion, datos } = event.data;
    
    let resultado;
    
    if (accion === 'sumar') {
        resultado = datos.reduce((a, b) => a + b, 0);
    } 
    else if (accion === 'multiplicar') {
        resultado = datos.reduce((a, b) => a * b, 1);
    }
    else if (accion === 'contar') {
        resultado = datos.length;
    }
    
    // Enviar respuesta con el mismo accion
    self.postMessage({
        accion: accion,
        resultado: resultado
    });
});
```

### 3.2 HTML: `ejercicio-3.html`
```html
<!DOCTYPE html>
<html>
<body>
    <h1>Ejercicio 3: Worker Inteligente</h1>
    
    <button onclick="hacer('sumar')">Sumar</button>
    <button onclick="hacer('multiplicar')">Multiplicar</button>
    <button onclick="hacer('contar')">Contar</button>
    
    <p id="resultado"></p>

    <script>
        const worker = new Worker('worker-inteligente.js');
        const numeros = [1, 2, 3, 4, 5];
        
        function hacer(accion) {
            console.log(`📤 Enviando acción: ${accion}`);
            worker.postMessage({
                accion: accion,
                datos: numeros
            });
        }
        
        worker.addEventListener('message', (event) => {
            const { accion, resultado } = event.data;
            document.getElementById('resultado').textContent = 
                `${accion.toUpperCase()}: ${resultado}`;
        });
    </script>
</body>
</html>
```

**Qué aprenderás:**
- ✅ Enviar diferentes tipos de acciones
- ✅ Estructurar mensajes con objetos
- ✅ Identificar el tipo de respuesta

---

## Ejercicio 4: Cálculo Pesado (El beneficio real)

### 4.1 Worker: `worker-fibonacci.js`
```javascript
// worker-fibonacci.js
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

self.addEventListener('message', (event) => {
    const numero = event.data;
    
    console.log(`Calculando fibonacci(${numero})...`);
    const resultado = fibonacci(numero);
    
    self.postMessage(resultado);
});
```

### 4.2 HTML: `ejercicio-4.html`
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial; }
        button { padding: 10px; margin: 5px; }
        .resultado { 
            margin-top: 20px; 
            padding: 10px; 
            background: #f0f0f0;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Ejercicio 4: Cálculo Pesado</h1>
    
    <p>Calcula Fibonacci(40) - toma unos segundos</p>
    
    <button onclick="calcularConWorker()">
        ✅ CON Worker (UI sigue funcionando)
    </button>
    
    <button onclick="calcularSinWorker()">
        ❌ SIN Worker (UI se congela)
    </button>
    
    <div class="resultado">
        <p id="resultado"></p>
    </div>

    <script>
        const worker = new Worker('worker-fibonacci.js');
        
        function fibonacci(n) {
            if (n <= 1) return n;
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
        
        function calcularConWorker() {
            document.getElementById('resultado').textContent = 
                '⏳ Calculando con worker...';
            
            const inicio = performance.now();
            worker.postMessage(40);
        }
        
        function calcularSinWorker() {
            document.getElementById('resultado').textContent = 
                '⏳ Calculando sin worker (esto congela)...';
            
            const inicio = performance.now();
            const resultado = fibonacci(40);
            const tiempo = performance.now() - inicio;
            
            document.getElementById('resultado').textContent = 
                `Resultado: ${resultado} (Tiempo: ${tiempo.toFixed(0)}ms)`;
        }
        
        worker.addEventListener('message', (event) => {
            const tiempo = performance.now();
            document.getElementById('resultado').textContent = 
                `Resultado: ${event.data} ⚡ (sin congelar la UI)`;
        });
    </script>
</body>
</html>
```

**Qué aprenderás:**
- ✅ Por qué realmente necesitas workers
- ✅ Diferencia entre cálculo paralelo y secuencial
- ✅ La UI NO se congela con workers

---

## 📋 Resumen

| Ejercicio | Concepto | Dificultad |
|-----------|----------|-----------|
| 1 | Crear worker y pasar mensajes | ⭐ Muy fácil |
| 2 | Pasar arrays y procesar | ⭐⭐ Fácil |
| 3 | Acciones y tipos de mensaje | ⭐⭐ Fácil |
| 4 | Cálculos pesados reales | ⭐⭐⭐ Intermedio |

---

## 🎯 Próximos Pasos

Una vez domines estos 4 ejercicios, puedes hacer:
- **Ejercicio 5:** Worker con timeout (simular demoras)
- **Ejercicio 6:** Múltiples workers en paralelo
- **Ejercicio 7:** Buscador (como el que ya hicimos)

---

## ⚠️ Notas Importantes

1. **Los workers NO funcionan con `file://`** (necesitas servidor local)
   ```bash
   # Opción 1: Python
   python -m http.server 8000
   
   # Opción 2: Node
   npx http-server
   ```

2. **Los workers tienen limitaciones:**
   - ✅ Pueden: calcular, procesar datos, hacer fetch
   - ❌ NO pueden: acceder al DOM, usar localStorage

3. **Comunicación es por copia:**
   ```javascript
   const datos = {nombre: "Juan"};
   worker.postMessage(datos);  // Se copia, no se comparte
   ```

---

¡Empieza con el Ejercicio 1 y ve subiendo de dificultad! 🚀
