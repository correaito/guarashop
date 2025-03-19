document.addEventListener('DOMContentLoaded', function() {
    // Rolagem suave para links de navegação
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Efeito de destaque para o menu ao rolar
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'white';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Tratamento de erros de imagem
    const productImages = document.querySelectorAll('.product-card img');
    const fallbackImageUrl = 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRyaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60';
    
    productImages.forEach(img => {
        // Verificar se a imagem já foi carregada
        if (img.complete) {
            if (img.naturalHeight === 0) {
                img.src = fallbackImageUrl;
            }
        }
        
        // Tratar erro de carregamento
        img.onerror = function() {
            this.src = fallbackImageUrl;
            this.onerror = null; // Previne loop infinito
        };
        
        // Monitorar o carregamento
        img.onload = function() {
            if (this.naturalHeight === 0) {
                this.src = fallbackImageUrl;
            }
        };
    });
    
    // Animação simples para os cartões de produtos
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Formulário de contato - Prevenção de submissão e mensagem de confirmação
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio do formulário
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }
});