document.addEventListener('DOMContentLoaded', () => {
  // Slider Hero
  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;
  
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  setInterval(nextSlide, 5000);
  showSlide(0);

  // Modal Imágenes
  window.openModal = (src) => {
    document.getElementById('modalImage').src = src;
    document.getElementById('imageModal').style.display = 'block';
  };

  window.closeModal = () => {
    document.getElementById('imageModal').style.display = 'none';
  };

  // Cálculo de precios
  const calculatePrice = () => {
    const checkin = new Date(document.getElementById('checkin').value);
    const checkout = new Date(document.getElementById('checkout').value);
    
    if (!checkin || !checkout || checkin >= checkout) return;
    
    let weekdays = 0;
    let weekends = 0;
    const current = new Date(checkin);
    
    while (current < checkout) {
      const day = current.getDay();
      (day >= 1 && day <= 4) ? weekdays++ : weekends++;
      current.setDate(current.getDate() + 1);
    }
    
    document.getElementById('weekdays').textContent = weekdays;
    document.getElementById('weekends').textContent = weekends;
    document.getElementById('weekdays-total').textContent = `€${weekdays * 50}`;
    document.getElementById('weekends-total').textContent = `€${weekends * 100}`;
    document.getElementById('total-price').textContent = `€${(weekdays * 50) + (weekends * 100)}`;
  };

  document.getElementById('checkin').addEventListener('change', calculatePrice);
  document.getElementById('checkout').addEventListener('change', calculatePrice);

  // Procesar pago
  window.processPayment = () => {
    alert('¡Reserva confirmada! Recibirás un email de confirmación.');
    document.getElementById('paymentModal').style.display = 'none';
    document.getElementById('booking-form').reset();
  };

  document.getElementById('booking-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('final-price').textContent = 
      document.getElementById('total-price').textContent.replace('€','');
    document.getElementById('paymentModal').style.display = 'block';
  });

  // Cerrar modales al hacer clic fuera
  window.onclick = (e) => {
    if (e.target.classList.contains('image-modal') || 
        e.target.classList.contains('payment-modal')) {
      e.target.style.display = 'none';
    }
  };
});
