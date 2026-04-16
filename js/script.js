// ---------- HARDWARE DATA (based on original context & enriched) ----------
// Extracted meaningful items from the provided HTML (Wikipedia & real hardware references)
// Each object includes image URL, title, description, source URL, alt text.
// Images are from the original freight.cargo.site CDN (all original, high-res hardware photos)
const hardwareItems = [
    { id: 1, title: "Pull-tight seal", description: "Tamper-evident security seal", src: "https://freight.cargo.site/t/original/i/5939661a632671be1e4dc46f20806f47e4fa83b9e6cb4e10dab11e42b94e0a41/135-anti-tamper-seal-04.jpg", sourceUrl: "https://en.wikipedia.org/wiki/Pull-tight_seal", sourceLabel: "Wikipedia" },
    { id: 2, title: "Whip antenna", description: "Flexible monopole antenna", src: "https://freight.cargo.site/t/original/i/059db7ce6fe39c1e0511f8bb2e61c4d94d0a2d0e932959a60ca5dc36aa0af7f0/134-whip-antenna-07.jpg", sourceUrl: "https://en.wikipedia.org/wiki/Whip_antenna", sourceLabel: "Wikipedia" },
    { id: 3, title: "Fibula (brooch)", description: "Ancient ornamental clasp / pin", src: "https://freight.cargo.site/t/original/i/9985e9b3ea874932c64ebcef9c96abfaa75c796512d386757cd04d47a40eb3a3/131-fibula.jpg", sourceUrl: "https://en.wikipedia.org/wiki/Fibula_(brooch)", sourceLabel: "Wikipedia" },
    { id: 4, title: "Mooring snubber", description: "Shock absorber for mooring lines", src: "https://freight.cargo.site/t/original/i/69bb35af304dfeb3b34d329493c0aca2130de4ab559263ea51676ac066030475/145-mooring-snubber-05.jpg", sourceUrl: "https://www.davisinstruments.com/pages/what-is-a-mooring-snubber", sourceLabel: "Davis Instruments" },
    { id: 5, title: "Lion's paw feet", description: "Ornamental furniture foot", src: "https://freight.cargo.site/t/original/i/b4c1f3d9cf291f2874e438ad958503075f76a290c59a7e904d91c22b64475e1c/137-lions-paw-02.jpg", sourceUrl: "https://en.wikipedia.org/wiki/Paw_feet", sourceLabel: "Wikipedia" },
    { id: 6, title: "Rat guard", description: "Conical shield on ropes / cables", src: "https://freight.cargo.site/t/original/i/94077fb5ac0d53efaf7145e4bf56e92b4b55eb577d3f55def6ed5bf21a3780ef/150-rat-guard-04.jpg", sourceUrl: "https://en.wikipedia.org/wiki/Rat_Guard", sourceLabel: "Wikipedia" },
    { id: 7, title: "Shim (spacer)", description: "Thin tapered wedge for leveling", src: "https://freight.cargo.site/t/original/i/4d51c2fb702c9cc1c30a6c66e74613f631c867214170dd412ced12f1ec66299e/136-shim-03.jpg", sourceUrl: "https://en.wikipedia.org/wiki/Shim_(spacer)", sourceLabel: "Wikipedia" },
    { id: 8, title: "Snow chains", description: "Tire traction device", src: "https://freight.cargo.site/t/original/i/e23423e92727d73254cc5d3566b90e270fbfae249b0e94dc9b05a6d9f99a11c6/181-snow-chain-04.jpg", sourceUrl: "https://en.wikipedia.org/wiki/Snow_chains", sourceLabel: "Wikipedia" },
    { id: 9, title: "Insulation pin", description: "Mechanical fastener for insulation", src: "https://freight.cargo.site/t/original/i/d394403c94ca78a419defe1e49fa0a57a40294b7ab4858ca527137f4d5e937d6/193-insulation-pin-03-02.jpg", sourceUrl: "https://insulref.com.my/NewsDetail/what-s-the-role-of-insulation-pins-", sourceLabel: "Insulref" },
    { id: 10, title: "Glass ball & claw", description: "Decorative furniture mount", src: "https://freight.cargo.site/t/original/i/3a205240d595c9ae3fd7cf7c2845181893174c8fc71e9898d64de3828b3de875/132-glass-ball-claw-08.jpg", sourceUrl: "https://www.furniturelibrary.com/use-of-the-ball-claw-design-motif/", sourceLabel: "Furniture Library" },
    { id: 11, title: "Window restrictor", description: "Safety limit for window opening", src: "https://freight.cargo.site/t/original/i/407c82fc0a263aba8c24749919e7da9f3f9b8a88d9152eeefe34c2aecc8c0d1f/133-window-restrictor-05.jpg", sourceUrl: "https://www.diy.com/hardware/window-furniture/window-restrictors.cat", sourceLabel: "DIY" },
    { id: 12, title: "Octopus deck peg", description: "Spiral tent peg / deck anchor", src: "https://freight.cargo.site/t/original/i/fc337c03ff8bd3ba19ea822f6d0ad1bfafa1ebfb4cabd05c8477a8b141fd2152/167-octopus-deck-peg-08.jpg", sourceUrl: "https://www.walmart.com/ip/Octopus-Deck-Peg", sourceLabel: "Walmart" },
    { id: 13, title: "Rubber-coated magnet", description: "Soft protective magnetic mount", src: "https://freight.cargo.site/t/original/i/86e2050c3981c386132e3b7231f1630488969f8098f73a5fd40c985f1a07f48d/157-rubber-coated-magnet-02.jpg", sourceUrl: "https://www.wzmagnetics.com/what-is-a-rubber-coated-magnet/", sourceLabel: "WZ Magnetics" },
    { id: 14, title: "Pinch guard", description: "Finger protection hinge cover", src: "https://freight.cargo.site/t/original/i/3aefd4d21ae71398b79de652cd06c5787d853d0941f98670cedaf49ba16f4bfb/146-pinch-guard-04.jpg", sourceUrl: "https://babiesguardian.com/products/finger-pinch-guard", sourceLabel: "BabyGuardian" },
    { id: 15, title: "Ladder clamp", description: "Lockable ladder mounting clamp", src: "https://freight.cargo.site/t/original/i/6cdf1f2e12247fb2bcd51e53c5a107ab7e4a6c2bc97ac82d8049c3edc0d0b66b/142-ladder-clamp-04.jpg", sourceUrl: "https://www.vehicle-accessories.net/van-guard/van-guard-lockable-ladder-clamp/", sourceLabel: "Van Guard" },
    { id: 16, title: "Ballcock valve", description: "Float-operated fill valve", src: "https://freight.cargo.site/t/original/i/d4216604435f5a3fa0a59ad9fb8cda48f4703b0795c80f629ddcaba31014249c/101.jpg", sourceUrl: "https://en.wikipedia.org/wiki/Ballcock", sourceLabel: "Wikipedia" },
    { id: 17, title: "Ball lock cable tie", description: "Reusable stainless steel tie", src: "https://freight.cargo.site/t/original/i/7f93522476ee4127968d3ed5627a7914de3363defa5a3a0b120ac08f45ae5a1f/138-stainless-steel-ball-lock-cable-tie-03.jpg", sourceUrl: "https://www.hwlok.com/en/technical-info/tech-02.html", sourceLabel: "HWLok" },
    { id: 18, title: "Brick clip", description: "Clip for hanging on brickwork", src: "https://freight.cargo.site/t/original/i/16b93cf351ea7320033acd3e1aaf7cc96599c97f2861904075b14d4af744ec2e/147-brick-clip-07.jpg", sourceUrl: "https://brickclip.com/", sourceLabel: "BrickClip" },
    { id: 19, title: "Kite line winder", description: "Line storage device", src: "https://freight.cargo.site/t/original/i/63e114d076f9a05b5028af777d2007c8460d79d80b71bad18b54faa44b9f3b0b/130.jpg", sourceUrl: "https://www.kiteworld.co.uk/acatalog/Winders-and-Line-Storage.html", sourceLabel: "Kite World" },
    { id: 20, title: "Fall arrest eyebolt", description: "Safety anchor point", src: "https://freight.cargo.site/t/original/i/fdfd369f38c8ad11efe9a68a7716e3313ec1e85838eb260fa777b3ce5467c044/144-fall-arrest-eyebolt-05.jpg", sourceUrl: "https://www.buildingdesignindex.co.uk/entry/138849/Kee-Safety/Kee-ibolt-safety-anchor", sourceLabel: "Kee Safety" }
];

// Additional items from the original set (diverse hardware to enrich gallery)
const extraItems = [
    { id: 21, title: "Door ball catch", description: "Magnetic/latching door fastener", src: "https://freight.cargo.site/t/original/i/4fea49ee7305be35d4b80301553bc08f0cf80407bb5d350c02af7d5276348db1/140-door-ball-catch-07.jpg", sourceUrl: "https://toolsforworkingwood.com/store/item/BR-BC.XX/Brusso+Ball+Catches", sourceLabel: "Brusso" },
    { id: 22, title: "Mudflap", description: "Vehicle splash guard", src: "https://freight.cargo.site/t/original/i/cb57538ef462cb2be0062b60fbff9b5277839e1db3a02ba57323639d8a4158d3/143-mudflap-06-05.jpg", sourceUrl: "https://en.wikipedia.org/wiki/Mudflap", sourceLabel: "Wikipedia" },
    { id: 23, title: "Panoramic mirror", description: "Convex safety mirror", src: "https://freight.cargo.site/t/original/i/45f78be0be2e96b2757935f3553416cafba812f4bc39f06e17666e1319c4e1f0/148-90-observation-mirror-04.jpg", sourceUrl: "https://startsafety.uk/products/panoramic-90-mirror", sourceLabel: "Start Safety" },
    { id: 24, title: "Rope fender", description: "Marine dock protection", src: "https://freight.cargo.site/t/original/i/2a459313c50ad10babd64ef946b644dab264fb74f69ad5d5990e387008e11c5d/151-rope-fender-02.jpg", sourceUrl: "https://en.wikipedia.org/wiki/Fender_(boating)", sourceLabel: "Wikipedia" },
    { id: 25, title: "Spring clip", description: "Retaining ring / fastener", src: "https://freight.cargo.site/t/original/i/6d66a1fdaf5338a81cd5d7b4499a2d8e704dd28031fa628d81ce86fcb9534b18/139-spring-clip-06.jpg", sourceUrl: "https://twcn.rs-online.com/web/c/fasteners-fixings/clips-springs/spring-clips/", sourceLabel: "RS Online" }
];

const fullHardwareList = [...hardwareItems, ...extraItems];

// Helper to render gallery cards
function renderGallery() {
    const container = document.getElementById('hardware-gallery');
    if (!container) return;

    // clear loading skeletons
    container.innerHTML = '';

    fullHardwareList.forEach(item => {
        const card = document.createElement('div');
        card.className = 'hardware-card';
        // set data attributes for lightbox
        card.setAttribute('data-img-src', item.src);
        card.setAttribute('data-title', item.title);
        card.setAttribute('data-source', item.sourceLabel);
        
        // image block
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'card-image';
        const img = document.createElement('img');
        img.loading = 'lazy';
        img.src = item.src;
        img.alt = item.title;
        img.onerror = () => { img.src = 'https://placehold.co/600x600?text=hardware'; };
        imgWrapper.appendChild(img);
        
        // info block
        const infoDiv = document.createElement('div');
        infoDiv.className = 'card-info';
        const titleSpan = document.createElement('div');
        titleSpan.className = 'card-title';
        titleSpan.innerText = item.title;
        const descSpan = document.createElement('div');
        descSpan.className = 'card-description';
        descSpan.innerText = item.description;
        const linkSpan = document.createElement('a');
        linkSpan.href = item.sourceUrl;
        linkSpan.target = '_blank';
        linkSpan.rel = 'noopener noreferrer';
        linkSpan.className = 'source-link';
        linkSpan.innerText = `↗ ${item.sourceLabel || 'source'}`;
        descSpan.appendChild(linkSpan);
        infoDiv.appendChild(titleSpan);
        infoDiv.appendChild(descSpan);
        
        card.appendChild(imgWrapper);
        card.appendChild(infoDiv);
        
        // lightbox trigger on image click
        imgWrapper.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(item.src, item.title, item.sourceLabel);
        });
        
        container.appendChild(card);
    });
}

// LIGHTBOX LOGIC
const lightbox = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.getElementById('close-lightbox-btn');

function openLightbox(imgSrc, title, source) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = title;
    lightboxCaption.innerHTML = `${title} — ${source || 'hardware archive'}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    // optional reset img src to avoid flicker
    setTimeout(() => {
        if (!lightbox.classList.contains('active')) {
            lightboxImg.src = '';
        }
    }, 200);
}

if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
if (lightbox) lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// initialize gallery after DOM ready
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
});