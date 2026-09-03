// إضافة حدث للأزرار
document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', function() {
        alert('تمت إضافة المنتج إلى السلة بنجاح! ✓');
    });
});

// معالجة نموذج التواصل
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('شكراً لتواصلك معنا! سنرد عليك قريباً.');
        this.reset();
    });
}

// تأثير التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});