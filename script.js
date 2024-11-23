document.addEventListener("DOMContentLoaded", function () {
    // Scroll Animation
    const scrollElements = document.querySelectorAll('.scroll-reveal');

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 80)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    // Typing Effect for Header
    const typingText = " | Mahasiswa Teknologi Informasi | UNISA";
    let index = 0;

    const typingEffect = () => {
        const headerElement = document.querySelector('header h1');
        if (index < typingText.length) {
            headerElement.innerHTML += typingText.charAt(index);
            index++;
            setTimeout(typingEffect, 100);
        }
    };
    typingEffect();

    // Back to Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

  
    const showMoreButtons = document.querySelectorAll(".show-more");

    showMoreButtons.forEach((button) => {
        button.addEventListener("click", function () {
            Swal.fire({
                title: "Detail Proyek",
                text: "Ini adalah detail proyek yang lebih lengkap.",
                icon: "info",
                confirmButtonText: "Close",
            });
        });
    });

    const downloadBtn = document.getElementById("download-cv");

    downloadBtn.addEventListener("click", function (e) {
       
        e.preventDefault();

       
        Swal.fire({
            title: "Download CV",
            text: "Apakah anda yakin ingin mengunduh Dokumen CV saya?",
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "Download Sekarang",
            cancelButtonText: "Batal",
        }).then((result) => {
            if (result.isConfirmed) {
                
                const link = document.createElement("a");
                link.href = downloadBtn.getAttribute("href"); 
                link.download = ""; 
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link); 
            }
        });
    });
});