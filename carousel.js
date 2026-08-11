// Pausar carousel al hacer hover en dispositivos táctiles
document.addEventListener('DOMContentLoaded', function() {
    const carouselTracks = document.querySelectorAll('.logo-track');
    
    // Detectar dispositivo táctil
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    
    if (isTouchDevice) {
        carouselTracks.forEach(track => {
            track.addEventListener('touchstart', function() {
                this.style.animationPlayState = 'paused';
            });
            
            track.addEventListener('touchend', function() {
                this.style.animationPlayState = 'running';
            });
        });
    }
    
    // Animación de entrada de los logos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar items de estadísticas
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});