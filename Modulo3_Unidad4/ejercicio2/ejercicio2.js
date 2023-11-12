const textarea = document.getElementById('Textarea');
const contador = document.getElementById('contador');


textarea.addEventListener('input', function(event) {
  const caracteres = event.target.value.length;
  contador.textContent = caracteres + ' caracteres';
});
  
 