const elements = document.querySelectorAll('.fade-in') ;
const checkVisibility = () => {
            for(let element of elements ){
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('animate'); // Add animate class when in view
            } else {
                element.classList.remove('animate'); 
            }

        };

    }
        
        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);
        checkVisibility(); // Initial check