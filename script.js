document.addEventListener("DOMContentLoaded", function () {
  // Modal de imágenes
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.getElementsByClassName("close")[0];

  document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  // Cálculo de precio según los días seleccionados
  document.getElementById("calculate").addEventListener("click", function () {
    const checkIn = new Date(document.getElementById("check-in").value);
    const checkOut = new Date(document.getElementById("check-out").value);

    if (isNaN(checkIn) || isNaN(checkOut) || checkOut <= checkIn) {
      alert("Por favor, selecciona fechas válidas.");
      return;
    }

    let total = 0;
    let currentDate = new Date(checkIn);

    while (currentDate < checkOut) {
      let day = currentDate.getDay();
      total += (day >= 1 && day <= 4) ? 50 : 100; // Lunes a Jueves: 50€, Viernes a Domingo: 100€
      currentDate.setDate(currentDate.getDate() + 1);
    }

    document.getElementById("price").innerText = `Total: ${total}€`;
  });

  // Simulación de pago
  document.getElementById("pay-button").addEventListener("click", function () {
    alert("Pago procesado con éxito. ¡Gracias por tu reserva!");
  });
});
