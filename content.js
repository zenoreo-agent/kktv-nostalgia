// content.js - Find and replace LINE TV logo

function replaceLogo() {
    // Attempt to find logo images
    const logos = document.querySelectorAll('img[src*="logo"], img[alt*="LINE TV"]');
    
    logos.forEach(logo => {
        // You would typically replace this with a real KKTV logo URL
        // Using a placeholder or text replacement for demonstration
        if (logo.tagName.toLowerCase() === 'img') {
             // Create a text node to replace the image if no source is available
             // Or replace src if you have a KKTV logo URL. 
             // We'll try to change the alt text and style it.
             logo.style.filter = "hue-rotate(270deg) saturate(200%) brightness(80%)"; // roughly make green red
             logo.alt = "KKTV";
        }
    });

    // Attempt to find SVG logos
    const svgLogos = document.querySelectorAll('svg');
    svgLogos.forEach(svg => {
        // Very basic heuristic
        if(svg.innerHTML.includes('LINE') || svg.getAttribute('aria-label')?.includes('LINE')) {
             svg.style.color = '#b40f42';
             svg.style.fill = '#b40f42';
        }
    });
}

// Run on load
replaceLogo();

// Observe for DOM changes (SPA navigation)
const observer = new MutationObserver((mutations) => {
    replaceLogo();
});

observer.observe(document.body, { childList: true, subtree: true });
