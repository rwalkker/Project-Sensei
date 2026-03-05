// SENSEI Presentation Slides Data
const slidesData = [
    {
        type: 'title',
        content: {
            title: 'SENSEI',
            subtitle: 'The Kaizen Belt Leadership Development Program',
            tagline: 'Sustaining Excellence through Networked Skills, Education and Impact',
            badges: ['PHX6', 'CRET Operations', 'L3 and L4 Leaders']
        }
    },
    {
        type: 'content',
        title: 'What Is SENSEI?',
        content: {
            lead: 'PHX6 CRETS Kaizen Belt Leadership Development Program',
            emphasis: 'A gamified belt progression system designed to develop process mastery, quality ownership, and leadership capability across L3 Process Assistants (PAs) and L4 Area Managers (AMs).',
            principles: [
                {
                    icon: '⚖️',
                    title: 'Pure Meritocracy',
                    text: 'Progression earned through direct process hours, individual UPH performance, quality yield, and knowledge demonstration'
                },
                {
                    icon: '📊',
                    title: 'Individual Performance',
                    text: 'UPH measured on direct CRET processing time only - baseline established at White Belt entry'
                },
                {
                    icon: '🤝',
                    title: 'Unified Standard',
                    text: 'Same criteria for PAs and AMs - leadership actions drive team UPH, individual performance gets measured'
                }
            ]
        }
    }
];

slidesData.push({
    type: 'content',
    title: 'Core Program Rules',
    content: {
        eligible: 'All Process Assistants (L3) and Area Managers (L4+) actively processing in CRET or AR/WHD paths at PHX6.',
        whatCounts: [
            '✅ Only direct CRET and AR/WHD processing time counts toward process hours',
            '✅ Peak and non-peak hours are weighted equally',
            '✅ Individual baseline established at White Belt entry using 4-week rolling average',
            '✅ Q1 rate adjustment (+1.9%) applied to all UPH baselines'
        ],
        whatDoesNot: [
            '⏸️ Process hours reset after 30 consecutive days of inactivity',
            '⏸️ Associates may request pause/hold during extended indirect assignments (OM approval)',
            '🚫 Indirect time excluded from UPH calculations',
            '🚫 New hire dilution periods (first 90 days) flagged but do not disqualify'
        ],
        callout: 'Belt certifications awarded by Brown Belt or Black Belt certified leaders only'
    }
});

slidesData.push({
    type: 'table',
    title: 'Unified Belt Progression — All Associates',
    lead: '8 Levels. 100 Hours. One Standard.',
    content: {
        headers: ['Belt', 'Hours', 'Individual UPH', 'Quality Yield', 'Knowledge Assessment'],
        rows: [
            { belt: 'White', hours: '5 hrs', uph: 'Baseline floor engagement', quality: '90%+', focus: 'Virtual quiz (80%)', color: 'white' },
            { belt: 'Yellow', hours: '20 hrs', uph: '≥ LP baseline UPH', quality: '92%+', focus: 'Virtual quiz (80%)', color: 'yellow' },
            { belt: 'Orange', hours: '35 hrs', uph: '+5% above baseline', quality: '93%+', focus: 'Virtual quiz (80%)', color: 'orange' },
            { belt: 'Green', hours: '50 hrs', uph: '+10% above baseline', quality: '94%+', focus: 'In-person assessment', color: 'green' },
            { belt: 'Blue', hours: '65 hrs', uph: '+12% above baseline', quality: '95%+', focus: 'In-person assessment', color: 'blue' },
            { belt: 'Purple', hours: '75 hrs', uph: '+15% above baseline', quality: '96%+', focus: 'In-person assessment', color: 'purple' },
            { belt: 'Brown', hours: '90 hrs', uph: '+18% above baseline', quality: '97%+', focus: 'Comprehensive + floor observation', color: 'brown' },
            { belt: 'Black', hours: '100 hrs', uph: '+20% above baseline', quality: '98%+', focus: 'Comprehensive + floor observation', color: 'black' }
        ]
    }
});

slidesData.push({
    type: 'content',
    title: 'Foundation Belts: White, Yellow, Orange',
    lead: 'The On-Ramp. Approachable. Earned.',
    content: {
        intro: 'These three levels establish your baseline and prove consistent performance. Virtual quiz assessments (80% passing score) ensure you understand the fundamentals.',
        belts: [
            {
                emoji: '⬜',
                name: 'White Belt',
                hours: '5 hrs',
                description: 'Baseline floor engagement. 90%+ quality yield. Virtual quiz. Your first Peccy pin is closer than you think.'
            },
            {
                emoji: '🟨',
                name: 'Yellow Belt',
                hours: '20 hrs',
                description: 'Meet LP baseline UPH. 92%+ quality yield. Virtual quiz. Prove it was not a fluke.'
            },
            {
                emoji: '🟧',
                name: 'Orange Belt',
                hours: '35 hrs',
                description: '+5% above your baseline. 93%+ quality yield. Virtual quiz. You are starting to understand why the process works, not just how to run it.'
            }
        ]
    }
});

slidesData.push({
    type: 'content',
    title: 'Knowledge Belts: Green & Blue',
    lead: 'Depth. Mastery. In-Person Assessment.',
    content: {
        intro: 'Green and Blue belts require in-person or virtual assessments with scenario-based questions administered by Brown/Black Belt leaders. You must demonstrate deep process knowledge.',
        belts: [
            {
                emoji: '🟩',
                name: 'Green Belt',
                hours: '50 hrs',
                description: '+10% above baseline. 94%+ quality yield. In-person assessment with process scenarios. You understand the why behind the work.'
            },
            {
                emoji: '🟦',
                name: 'Blue Belt',
                hours: '65 hrs',
                description: '+12% above baseline. 95%+ quality yield. In-person assessment covering site TPH fundamentals. You can teach others.'
            }
        ]
    }
});

slidesData.push({
    type: 'content',
    title: 'Leadership Belts: Purple & Brown',
    lead: 'Influence. Development. Comprehensive Assessment.',
    content: {
        intro: 'Purple and Brown belts demonstrate leadership through coaching conversations, process improvement initiatives, and associate development outcomes. Comprehensive assessments include leadership scenarios.',
        belts: [
            {
                emoji: '🟪',
                name: 'Purple Belt',
                hours: '75 hrs',
                description: '+15% above baseline. 96%+ quality yield. In-person assessment with leadership scenarios. Your actions drive team performance.'
            },
            {
                emoji: '🟫',
                name: 'Brown Belt',
                hours: '90 hrs',
                description: '+18% above baseline. 97%+ quality yield. Comprehensive assessment + live floor observation. You can certify White and Yellow Belt candidates.'
            }
        ]
    }
});

slidesData.push({
    type: 'content',
    title: 'Black Belt: The Highest Standard',
    lead: 'Mastery. Strategy. Program Leadership.',
    content: {
        intro: 'Black Belt is the pinnacle of SENSEI. You are a TPH optimization strategist with full certification authority across all belt levels.',
        requirements: [
            '100 hours of direct CRET/AR/WHD processing',
            '+20% above your individual baseline UPH',
            '98%+ quality yield sustained over 30 days',
            'Comprehensive assessment including process knowledge, leadership scenarios, and live floor observation',
            'Cross-site eligible for assessment'
        ],
        recognition: [
            '🏅 Peccy Black Belt pin',
            '👔 SENSEI program leadership role',
            '✅ Full certification authority for all belt levels',
            '📊 Featured on site recognition board'
        ]
    }
});

slidesData.push({
    type: 'content',
    title: 'Knowledge Assessments',
    lead: 'Fair. Transparent. Administered by Certified Leaders.',
    content: {
        formats: [
            {
                level: 'White–Orange',
                format: 'Virtual quiz',
                details: '10–15 questions, 80% passing score, covers process fundamentals'
            },
            {
                level: 'Green–Purple',
                format: 'In-person assessment',
                details: 'Scenario-based questions administered by Brown/Black Belt leader'
            },
            {
                level: 'Brown–Black',
                format: 'Comprehensive assessment',
                details: 'Process knowledge + leadership scenarios + live floor observation (cross-site eligible)'
            }
        ],
        authority: [
            '🟫 Brown Belts: May certify White and Yellow Belt candidates',
            '⬛ Black Belts: Full certification authority across all belt levels',
            '📝 All certifications must be logged in FCLM/LMS for official record'
        ]
    }
});

slidesData.push({
    type: 'content',
    title: 'Quality Yield Standards',
    lead: 'Sustained Performance. Not Just One Good Day.',
    content: {
        definition: 'Quality yield is measured as the percentage of units processed without a defect, rework, or sort error within a rolling 30-day window.',
        emphasis: 'Thresholds must be sustained — not just achieved once — to qualify for belt advancement.',
        thresholds: [
            '⬜ White: 90%+ quality yield',
            '🟨 Yellow: 92%+ quality yield',
            '🟧 Orange: 93%+ quality yield',
            '🟩 Green: 94%+ quality yield',
            '🟦 Blue: 95%+ quality yield',
            '🟪 Purple: 96%+ quality yield',
            '🟫 Brown: 97%+ quality yield',
            '⬛ Black: 98%+ quality yield'
        ]
    }
});

slidesData.push({
    type: 'content',
    title: 'Individual UPH Measurement',
    lead: 'Your Baseline. Your Progress. Your Achievement.',
    content: {
        howItWorks: [
            '📊 Individual baseline established at White Belt entry using 4-week rolling average',
            '📈 Q1 rate adjustment (+1.9%) applied to all UPH baselines',
            '⏱️ UPH measured on direct CRET processing time only (indirect time excluded)',
            '🆕 New hire dilution periods (first 90 days) flagged but do not disqualify progression'
        ],
        forAMs: 'For AMs who spend limited time on the floor, baseline may be lower than a PA\'s — which makes the relative improvement thresholds more achievable without needing a separate track.',
        alternativeMetrics: 'Associates without direct processing time may substitute URR engagement quality scores or documented coaching impact (OM discretion, requires documentation)'
    }
});

slidesData.push({
    type: 'content',
    title: 'SENSEI Dashboard',
    lead: 'Live. Transparent. Competitive.',
    content: {
        features: [
            '📺 Live scoreboard displayed on Cube on TV',
            '🏆 Shows belt distribution by shift',
            '⭐ Top performers highlighted',
            '🎉 Recent certifications celebrated',
            '🔄 Updated in real-time via Slack/SharePoint automation (under development)'
        ],
        visibility: 'Everyone can see where they stand. Everyone knows what it takes to advance. No secrets. No politics. Just performance.'
    }
});

slidesData.push({
    type: 'content',
    title: 'Recognition & Rewards',
    lead: 'Every Belt Earned. Every Achievement Celebrated.',
    content: {
        recognition: [
            '⬜ White: Digital badge + welcome to SENSEI acknowledgment',
            '🟨 Yellow: Peccy Yellow Belt pin',
            '🟧 Orange: Peccy Orange Belt pin',
            '🟩 Green: Peccy Green Belt pin + shoutout on SENSEI Dashboard',
            '🟦 Blue: Peccy Blue Belt pin',
            '🟪 Purple: Peccy Purple Belt pin + featured on site recognition board',
            '🟫 Brown: Peccy Brown Belt pin + certification authority',
            '⬛ Black: Peccy Black Belt pin + SENSEI program leadership role'
        ],
        careerBenefits: [
            '📈 Belt progression documented in FCLM/LMS',
            '💼 Demonstrated leadership capability for promotion consideration',
            '🎯 Clear development path with measurable milestones'
        ]
    }
});

slidesData.push({
    type: 'content',
    title: 'Program Timeline',
    lead: 'Launch. Scale. Sustain.',
    content: {
        phases: [
            {
                phase: 'Phase 1: Soft Launch',
                timing: 'Q1 2026',
                details: 'White–Orange belts available. Virtual quiz assessments. Dashboard v1 deployed.'
            },
            {
                phase: 'Phase 2: Full Rollout',
                timing: 'Q2 2026',
                details: 'Green–Black belts available. Brown/Black Belt certification authority established. Live dashboard with real-time updates.'
            },
            {
                phase: 'Phase 3: Optimization',
                timing: 'Q3 2026',
                details: 'Cross-site assessment eligibility. Advanced analytics. Program refinement based on feedback.'
            }
        ]
    }
});

slidesData.push({
    type: 'closing',
    content: {
        title: 'The Standard Is You',
        message: 'SENSEI is not about being better than someone else. It is about being better than you were yesterday.',
        callToAction: 'Your hours start now. Your baseline is set. Your belt is waiting.',
        contact: 'Questions? Talk to your Brown Belt or Black Belt certified leader.'
    }
});
