// Mock data for SENSEI participants
const mockParticipants = [
    { name: "Sarah Chen", path: "CRET", belt: 8, emoji: "⬛", uph: 52.3, quality: 98, progress: 95, hours: 265 },
    { name: "Marcus Johnson", path: "AR/WHD", belt: 7, emoji: "🟫", uph: 51.2, quality: 97, progress: 88, hours: 235 },
    { name: "Aisha Patel", path: "CRET", belt: 7, emoji: "🟫", uph: 50.8, quality: 97, progress: 92, hours: 228 },
    { name: "David Rodriguez", path: "CRET", belt: 6, emoji: "🟪", uph: 49.1, quality: 96, progress: 85, hours: 195 },
    { name: "Emily Wong", path: "AR/WHD", belt: 6, emoji: "🟪", uph: 48.7, quality: 96, progress: 78, hours: 188 },
    { name: "James Mitchell", path: "CRET", belt: 5, emoji: "🟦", uph: 47.2, quality: 96, progress: 72, hours: 152 },
    { name: "Lisa Thompson", path: "AR/WHD", belt: 5, emoji: "🟦", uph: 46.9, quality: 95, progress: 68, hours: 148 },
    { name: "Carlos Mendez", path: "CRET", belt: 4, emoji: "🟩", uph: 46.8, quality: 95, progress: 82, hours: 115 },
    { name: "Nina Kowalski", path: "CRET", belt: 4, emoji: "🟩", uph: 46.5, quality: 95, progress: 75, hours: 108 },
    { name: "Tyler Brooks", path: "AR/WHD", belt: 3, emoji: "🟧", uph: 45.1, quality: 95, progress: 88, hours: 78 },
    { name: "Priya Sharma", path: "CRET", belt: 3, emoji: "🟧", uph: 44.8, quality: 95, progress: 65, hours: 72 },
    { name: "Kevin O'Brien", path: "AR/WHD", belt: 2, emoji: "🟨", uph: 43.5, quality: 94, progress: 92, hours: 48 },
    { name: "Jasmine Lee", path: "CRET", belt: 2, emoji: "🟨", uph: 43.1, quality: 94, progress: 58, hours: 44 },
    { name: "Andre Williams", path: "AR/WHD", belt: 1, emoji: "⬜", uph: 38.2, quality: 92, progress: 45, hours: 15 },
    { name: "Sofia Martinez", path: "CRET", belt: 1, emoji: "⬜", uph: 37.8, quality: 92, progress: 38, hours: 12 }
];

const beltNames = ["", "White", "Yellow", "Orange", "Green", "Blue", "Purple", "Brown", "Black"];

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const types = ['gold', 'orange', 'white'];
        const type = types[Math.floor(Math.random() * types.length)];
        
        particle.className = `particle ${type}`;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Render leaderboard
function renderLeaderboard() {
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = '';
    
    mockParticipants.forEach((participant, index) => {
        const rank = index + 1;
        const card = document.createElement('div');
        card.className = `rank-card ${rank <= 3 ? 'top-3 rank-' + rank : ''}`;
        card.style.animationDelay = (index * 0.1) + 's';
        
        const progressDeg = (participant.progress / 100) * 360;
        
        card.innerHTML = `
            <div class="rank-number">${rank <= 3 ? ['🥇', '🥈', '🥉'][rank - 1] : '#' + rank}</div>
            <div class="rank-info">
                <div class="rank-name">${participant.name}</div>
                <div class="rank-path">${participant.path} • ${beltNames[participant.belt]} Belt • ${participant.hours}h</div>
            </div>
            <div class="rank-belt">${participant.emoji}</div>
            <div class="rank-stats">
                <div class="stat-row">
                    <span class="stat-label">UPH:</span>
                    <span class="stat-value">${participant.uph}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Quality:</span>
                    <span class="stat-value">${participant.quality}%</span>
                </div>
            </div>
            <div class="rank-progress">
                <div class="progress-circle" style="--progress: ${progressDeg}deg">
                    ${participant.progress}%
                </div>
            </div>
        `;
        
        leaderboard.appendChild(card);
    });
}

// Update stats
function updateStats() {
    const totalParticipants = mockParticipants.length;
    const blackBelts = mockParticipants.filter(p => p.belt === 8).length;
    const avgUPH = (mockParticipants.reduce((sum, p) => sum + p.uph, 0) / totalParticipants).toFixed(1);
    const avgQuality = (mockParticipants.reduce((sum, p) => sum + p.quality, 0) / totalParticipants).toFixed(1);
    
    animateValue('totalParticipants', 0, totalParticipants, 1500);
    animateValue('blackBelts', 0, blackBelts, 1500);
    animateValue('avgUPH', 0, avgUPH, 2000, true);
    animateValue('qualityRate', 0, avgQuality, 2000, false, '%');
}

// Animate number counting
function animateValue(id, start, end, duration, isDecimal = false, suffix = '') {
    const element = document.getElementById(id);
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        
        const displayValue = isDecimal ? current.toFixed(1) : Math.floor(current);
        element.textContent = displayValue + suffix;
    }, 16);
}

// Add shimmer effect to top 3
function addShimmerEffects() {
    setInterval(() => {
        const top3Cards = document.querySelectorAll('.rank-card.top-3');
        top3Cards.forEach(card => {
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = '';
            }, 10);
        });
    }, 5000);
}

// Simulate live updates
function simulateLiveUpdates() {
    setInterval(() => {
        // Randomly update a participant's stats
        const randomIndex = Math.floor(Math.random() * mockParticipants.length);
        const participant = mockParticipants[randomIndex];
        
        // Small random changes
        participant.uph += (Math.random() - 0.5) * 0.5;
        participant.uph = Math.max(30, Math.min(55, participant.uph));
        participant.uph = parseFloat(participant.uph.toFixed(1));
        
        participant.progress += Math.floor((Math.random() - 0.3) * 3);
        participant.progress = Math.max(0, Math.min(100, participant.progress));
        
        // Re-sort and re-render
        mockParticipants.sort((a, b) => {
            if (b.belt !== a.belt) return b.belt - a.belt;
            if (b.uph !== a.uph) return b.uph - a.uph;
            return b.quality - a.quality;
        });
        
        renderLeaderboard();
        updateStats();
    }, 8000);
}

// Add glow effect to belt legend on hover
function addBeltLegendEffects() {
    const beltItems = document.querySelectorAll('.belt-item');
    beltItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const belt = item.dataset.belt;
            const cards = document.querySelectorAll('.rank-card');
            cards.forEach(card => {
                const cardBelt = card.querySelector('.rank-belt').textContent;
                const beltEmojis = {
                    'white': '⬜', 'yellow': '🟨', 'orange': '🟧', 'green': '🟩',
                    'blue': '🟦', 'purple': '🟪', 'brown': '🟫', 'black': '⬛'
                };
                if (cardBelt === beltEmojis[belt]) {
                    card.style.transform = 'translateX(20px) scale(1.03)';
                    card.style.transition = 'all 0.3s ease';
                } else {
                    card.style.opacity = '0.4';
                }
            });
        });
        
        item.addEventListener('mouseleave', () => {
            const cards = document.querySelectorAll('.rank-card');
            cards.forEach(card => {
                card.style.transform = '';
                card.style.opacity = '';
            });
        });
    });
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    renderLeaderboard();
    updateStats();
    addShimmerEffects();
    addBeltLegendEffects();
    
    // Start live updates after 3 seconds
    setTimeout(simulateLiveUpdates, 3000);
});
