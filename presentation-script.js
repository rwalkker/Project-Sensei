let currentSlide = 0;
const totalSlides = slidesData.length;

// Create particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const types = ['gold', 'orange'];
        const type = types[Math.floor(Math.random() * types.length)];
        
        particle.className = `particle ${type}`;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Render slide based on type
function renderSlide(slideData, index) {
    const slide = document.createElement('section');
    slide.className = `slide ${index === 0 ? 'active' : ''}`;
    slide.dataset.slide = index + 1;
    
    const content = document.createElement('div');
    content.className = 'slide-content';
    
    if (slideData.type === 'title') {
        content.innerHTML = renderTitleSlide(slideData.content);
    } else if (slideData.type === 'content') {
        content.innerHTML = renderContentSlide(slideData);
    } else if (slideData.type === 'table') {
        content.innerHTML = renderTableSlide(slideData);
    } else if (slideData.type === 'timeline') {
        content.innerHTML = renderTimelineSlide(slideData);
    } else if (slideData.type === 'closing') {
        content.innerHTML = renderClosingSlide(slideData);
    }
    
    slide.appendChild(content);
    return slide;
}

function renderTitleSlide(data) {
    return `
        <div class="title-slide">
            <div class="ninja-lineup">
                <span class="ninja-char">🥷</span>
                <span class="ninja-char">🥷</span>
                <span class="ninja-char">🥷</span>
                <span class="ninja-char">🥷</span>
                <span class="ninja-char">🥷</span>
            </div>
            <h1 class="main-title">${data.title}</h1>
            <p class="subtitle-large">${data.subtitle}</p>
            <p class="subtitle-medium">${data.tagline}</p>
            <div class="site-info">
                ${data.badges.map(badge => `<span class="badge">${badge}</span>`).join('<span class="separator">|</span>')}
            </div>
            <img src="assets/sensei-hero.jpg" alt="SENSEI Program" class="hero-image">
            <div class="belt-showcase">
                <span class="belt-icon">⬜</span>
                <span class="belt-icon">🟨</span>
                <span class="belt-icon">🟧</span>
                <span class="belt-icon">🟩</span>
                <span class="belt-icon">🟦</span>
                <span class="belt-icon">🟪</span>
                <span class="belt-icon">🟫</span>
                <span class="belt-icon">⬛</span>
            </div>
        </div>
    `;
}

function renderContentSlide(data) {
    let html = `<h2>${data.title}</h2>`;
    
    if (data.lead) {
        html += `<p class="lead">${data.lead}</p>`;
    }
    
    const content = data.content;
    
    // Principles grid
    if (content.principles) {
        if (content.emphasis) {
            html += `<p class="emphasis">${content.emphasis}</p>`;
        }
        html += '<div class="principles-grid">';
        content.principles.forEach(p => {
            html += `
                <div class="principle-card">
                    <div class="principle-icon">${p.icon}</div>
                    <h3>${p.title}</h3>
                    <p>${p.text}</p>
                </div>
            `;
        });
        html += '</div>';
        html += '<div class="belt-pins">';
        ['⬜', '🟨', '🟧', '🟩', '🟦', '🟪', '🟫', '⬛'].forEach(belt => {
            html += `<span class="pin">${belt}</span>`;
        });
        html += '</div>';
    }
    
    // Eligibility
    if (content.eligible) {
        html += `
            <div class="eligibility-box">
                <h3>✅ Eligible</h3>
                <p>${content.eligible}</p>
            </div>
        `;
    }
    
    // Two column layout
    if (content.whatCounts && content.whatDoesNot) {
        html += '<div class="two-column">';
        html += '<div class="column">';
        html += '<h3 class="counts-title">✅ What Counts Toward Your Hours</h3>';
        html += '<ul class="check-list">';
        content.whatCounts.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul></div>';
        
        html += '<div class="column">';
        html += '<h3 class="no-count-title">❌ What Does NOT Count</h3>';
        html += '<ul class="x-list">';
        content.whatDoesNot.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul></div>';
        html += '</div>';
    }
    
    if (content.callout) {
        html += `<div class="callout-box"><p class="callout-text">${content.callout}</p></div>`;
    }
    
    // Belt details
    if (content.belts) {
        if (content.intro) {
            html += `<p class="emphasis">${content.intro}</p>`;
        }
        html += '<div class="belt-details">';
        content.belts.forEach(belt => {
            html += `
                <div class="belt-card">
                    <div class="belt-header">
                        <div class="belt-emoji">${belt.emoji}</div>
                        <div class="belt-info">
                            <h3>${belt.name}</h3>
                            <div class="belt-hours">${belt.hours}</div>
                        </div>
                    </div>
                    <p class="belt-description">${belt.description}</p>
            `;
            if (belt.requirements) {
                html += '<ul class="belt-requirements">';
                belt.requirements.forEach(req => {
                    html += `<li>${req}</li>`;
                });
                html += '</ul>';
            }
            html += '</div>';
        });
        html += '</div>';
    }
    
    // Black Belt special
    if (content.emoji === '⬛') {
        html += `<p class="emphasis">${content.intro}</p>`;
        html += '<ul class="belt-requirements">';
        content.requirements.forEach(req => {
            html += `<li>${req}</li>`;
        });
        html += '</ul>';
        html += `<div class="callout-box"><p class="callout-text">${content.special}</p></div>`;
    }
    
    // Mentorship
    if (content.framework) {
        html += `<p class="emphasis">${content.intro}</p>`;
        html += '<ul class="belt-requirements">';
        content.framework.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
        html += `<p class="emphasis">${content.note}</p>`;
        html += `<div class="callout-box"><p class="callout-text">${content.multiplier}</p></div>`;
    }
    
    // Tracking
    if (content.scoreboard) {
        html += `<h3 style="color: #FFD700; font-size: 24px; margin: 30px 0 15px 0;">${content.scoreboard.title}</h3>`;
        html += '<ul class="belt-requirements">';
        content.scoreboard.features.forEach(feature => {
            html += `<li>${feature}</li>`;
        });
        html += '</ul>';
        
        html += `<h3 style="color: #FFD700; font-size: 24px; margin: 30px 0 15px 0;">${content.tracking.title}</h3>`;
        html += '<ul class="belt-requirements">';
        content.tracking.features.forEach(feature => {
            html += `<li>${feature}</li>`;
        });
        html += '</ul>';
    }
    
    // Recognition
    if (content.recognition) {
        html += `<p class="emphasis">${content.intro}</p>`;
        html += '<ul class="belt-requirements">';
        content.recognition.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
        html += `<div class="callout-box"><p class="callout-text">${content.special}</p></div>`;
    }
    
    return html;
}

function renderTableSlide(data) {
    let html = `<h2>${data.title}</h2>`;
    if (data.lead) html += `<p class="lead">${data.lead}</p>`;
    if (data.subtitle) html += `<p class="emphasis">${data.subtitle}</p>`;
    
    html += '<table><thead><tr>';
    data.content.headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += '</tr></thead><tbody>';
    
    data.content.rows.forEach(row => {
        const colorClass = row.color ? `belt-row ${row.color}` : '';
        html += `<tr class="${colorClass}">`;
        Object.keys(row).forEach(key => {
            if (key !== 'color') {
                html += `<td>${row[key]}</td>`;
            }
        });
        html += '</tr>';
    });
    html += '</tbody></table>';
    
    // Assessment phases
    if (data.content.phases) {
        html += '<h3 style="color: #FFD700; font-size: 24px; margin: 30px 0 15px 0;">Assessment Ownership — Phased Rollout:</h3>';
        html += '<div class="timeline">';
        data.content.phases.forEach(phase => {
            html += `
                <div class="timeline-item">
                    <div class="timeline-phase">${phase.phase}</div>
                    <div class="timeline-time"></div>
                    <div class="timeline-milestone">${phase.owner}</div>
                </div>
            `;
        });
        html += '</div>';
    }
    
    return html;
}

function renderTimelineSlide(data) {
    let html = `<h2>${data.title}</h2>`;
    if (data.lead) html += `<p class="lead">${data.lead}</p>`;
    
    html += '<div class="timeline">';
    data.content.phases.forEach(phase => {
        html += `
            <div class="timeline-item">
                <div class="timeline-phase">${phase.phase}</div>
                <div class="timeline-time">${phase.timeline}</div>
                <div class="timeline-milestone">${phase.milestone}</div>
            </div>
        `;
    });
    html += '</div>';
    
    return html;
}

function renderClosingSlide(data) {
    let html = `
        <div class="closing-slide">
            <h2>${data.title}</h2>
            <p class="emphasis">${data.content.intro}</p>
            <div class="closing-statements">
    `;
    
    data.content.statements.forEach(statement => {
        html += `<p>${statement}</p>`;
    });
    
    html += `
            </div>
            <p class="tagline">${data.content.tagline}</p>
            <p class="closing-text">${data.content.closing}</p>
            <div class="belt-showcase" style="margin-top: 40px;">
                <span class="belt-icon">⬜</span>
                <span class="belt-icon">🟨</span>
                <span class="belt-icon">🟧</span>
                <span class="belt-icon">🟩</span>
                <span class="belt-icon">🟦</span>
                <span class="belt-icon">🟪</span>
                <span class="belt-icon">🟫</span>
                <span class="belt-icon">⬛</span>
            </div>
        </div>
    `;
    
    return html;
}

// Initialize presentation
function initPresentation() {
    const container = document.getElementById('slides-container');
    
    slidesData.forEach((slideData, index) => {
        const slide = renderSlide(slideData, index);
        container.appendChild(slide);
    });
    
    createSlideIndicators();
    updateNavigation();
}

// Create slide indicators
function createSlideIndicators() {
    const indicator = document.getElementById('slideIndicator');
    
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = `indicator-dot ${i === 0 ? 'active' : ''}`;
        dot.onclick = () => goToSlide(i);
        indicator.appendChild(dot);
    }
}

// Navigation functions
function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        goToSlide(currentSlide + 1);
    }
}

function previousSlide() {
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    }
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.indicator-dot');
    
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('prev');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.remove('prev');
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    updateNavigation();
}

function updateNavigation() {
    document.getElementById('currentSlide').textContent = currentSlide + 1;
    document.getElementById('totalSlides').textContent = totalSlides;
    
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previousSlide();
    }
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initPresentation();
});
