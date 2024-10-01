document.getElementById('date').addEventListener('focus', function() {
    this.type = 'date';
  });

  document.getElementById('date').addEventListener('blur', function() {
    if (!this.value) {
      this.type = 'text';
    }
  });