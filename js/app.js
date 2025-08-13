let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Puedes mostrar un botón personalizado aquí
  const installBtn = document.createElement("button");
  installBtn.textContent = "Instalar aplicación";
  installBtn.style.position = "fixed";
  installBtn.style.bottom = "20px";
  installBtn.style.right = "20px";
  installBtn.style.zIndex = "9999";
  document.body.appendChild(installBtn);

  installBtn.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      installBtn.remove();
    });
  });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => {
      // Service worker registrado correctamente
      // console.log('Service Worker registrado:', reg);
    })
    .catch((err) => {
      // console.error('Error al registrar el Service Worker:', err);
    });
}
