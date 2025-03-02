
const closeNavbar = document.querySelector('.close-navbar');
const mobileNav = document.querySelector('.mobile-nav');
const container = document.querySelectorAll('.container');


container.forEach(function(e){
    e.addEventListener('click', function(el){
        if (el.target.className == 'company-logo')
        {
            mobileNav.classList.toggle('active');
            closeNavbar.classList.add('active');
            
        }

        else if (el.target.className != 'mobile-nav')
        {
            mobileNav.classList.remove('active');
            closeNavbar.classList.remove('active');
            
            
        }
        
        console.log(el.target);

    });
});


