// JavaScript code for calculator functionality will be added here
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
      document.getElementById('display').value = 'Error';
    }
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  