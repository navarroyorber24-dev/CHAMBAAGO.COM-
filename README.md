<title>CHAMBAGO - Servicios al toque</title> <style> body{font-family:Arial,sans-serif;background:#0a0a0a;color:#fff;margin:0;padding:20px} .card{background:#1a1a1a;padding:20px;border-radius:12px;margin-bottom:15px;border:1px solid #333} input,select,button{width:100%;padding:12px;margin:8px 0;border-radius:8px;border:1px solid #444;background:#222;color:#fff} button{background:#00ff88;color:#000;font-weight:bold;border:none;cursor:pointer} button:hover{background:#00cc66} h1{color:#00ff88;text-align:center} .logo{font-size:28px;font-weight:bold} a{color:#00ff88;text-decoration:none} </style>
CHAMBAGO
Pide tu servicio
Plomería Electricidad Gasfitería Limpieza Carpintería Pedir ahora
Soy Técnico | Admin <script> function pedir(){ const data = { nombre: document.getElementById('nombre').value, cel: document.getElementById('cel').value, servicio: document.getElementById('servicio').value, direccion: document.getElementById('direccion').value, estado: 'Pendiente', fecha: new Date().toLocaleString() }; localStorage.setItem('pedido_'+Date.now(), JSON.stringify(data)); document.getElementById('estado').style.display='block'; document.getElementById('estado').innerHTML='
✅ Pedido enviado
Un técnico te contactará pronto

'; } </script> <title>CHAMBAGO PRO</title> <style> body{font-family:Arial,sans-serif;background:#0a0a0a;color:#fff;margin:0;padding:20px} .card{background:#1a1a1a;padding:15px;border-radius:12px;margin-bottom:12px;border:1px solid #333} button{padding:10px 15px;border-radius:8px;border:none;background:#00ff88;color:#000;font-weight:bold;cursor:pointer;margin-right:5px} h1{color:#00ff88} a{color:#00ff88} </style>
CHAMBAGO PRO
Volver
<script> function cargar(){ const lista = document.getElementById('lista'); lista.innerHTML=''; for(let i=0; i ${data.servicio}
Cliente: ${data.nombre}
Cel: ${data.cel}
Dir: ${data.direccion}
Fecha: ${data.fecha}
Estado: ${data.estado}

Aceptar `; } } } function aceptar(key){ let data = JSON.parse(localStorage.getItem(key)); data.estado = 'Aceptado'; localStorage.setItem(key, JSON.stringify(data)); cargar(); } cargar(); setInterval(cargar, 3000); </script> <title>CHAMBAGO ADMIN</title> <style> body{font-family:Arial,sans-serif;background:#0a0a0a;color:#fff;margin:0;padding:20px} .card{background:#1a1a1a;padding:15px;border-radius:12px;margin-bottom:12px;border:1px solid #00ff88} h1{color:#00ff88} .stat{font-size:24px;font-weight:bold;color:#00ff88} .stats{display:flex;gap:15px;flex-wrap:wrap} a{color:#00ff88} </style>
CHAMBAGO ADMIN
Volver
Total: 0
Pendientes: 0
Aceptados: 0
<script> function cargar(){ let total=0, pend=0, acep=0; const lista = document.getElementById('lista'); lista.innerHTML=''; for(let i=0; i${data.fecha}
${data.servicio} - ${data.nombre} - ${data.estado}`; } } document.getElementById('total').innerText=total; document.getElementById('pend').innerText=pend; document.getElementById('acep').innerText=acep; } cargar(); setInterval(cargar, 3000); </script>