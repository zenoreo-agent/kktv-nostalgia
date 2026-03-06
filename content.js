// KKTV Nostalgia - UI Logic

const KKTV_LOGO_URL = 'https://www.kktv.me/static/images/sunset-logo.png';

function applyKKTV() {
    // 1. Replace Logos
    const logoSelectors = [
        'img[src*="logo"]',
        'img[alt*="LINE TV"]',
        'a[class*="Logo"] img',
        'svg[aria-label*="LINE TV"]'
    ];

    logoSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            if (el.tagName.toLowerCase() === 'img') {
                el.src = KKTV_LOGO_URL;
                el.style.height = 'auto';
                el.style.width = '120px';
            } else if (el.tagName.toLowerCase() === 'svg') {
                // If it's an SVG, hide it and prepend an image
                const kktvImg = document.createElement('img');
                kktvImg.src = KKTV_LOGO_URL;
                kktvImg.style.height = '24px';
                kktvImg.style.marginRight = '10px';
                el.parentNode.insertBefore(kktvImg, el);
                el.style.display = 'none';
            }
        });
    });

    // 2. Adjust specific UI elements that are hard to catch with CSS
    document.querySelectorAll('[style*="color: rgb(0, 195, 0)"]').forEach(el => {
        el.style.setProperty('color', '#b40f42', 'important');
    });
    
    document.querySelectorAll('[style*="background-color: rgb(0, 195, 0)"]').forEach(el => {
        el.style.setProperty('background-color', '#b40f42', 'important');
    });
}

// Initial Run
applyKKTV();

// Handle SPA Navigation
const observer = new MutationObserver((mutations) => {
    applyKKTV();
});

observer.observe(document.body, { childList: true, subtree: true });

console.log('KKTV Nostalgia active: Remember the good times.');
