// dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    // Populate Activity Feed
    const activityFeedContainer = document.getElementById('activityFeed');
    if (activityFeedContainer) {
        const activities = [
            { type: 'company', text: 'New company TechCorp registered', time: '10 mins ago', icon: 'building' },
            { type: 'job', text: 'DevSolutions posted a new job', time: '1 hour ago', icon: 'briefcase' },
            { type: 'candidate', text: '5 new candidate profiles verified', time: '2 hours ago', icon: 'users' },
            { type: 'subscription', text: 'Amazon renewed Enterprise plan', time: '5 hours ago', icon: 'credit-card' },
            { type: 'consultancy', text: 'HR Consult added 3 new recruiters', time: '1 day ago', icon: 'user-plus' }
        ];

        let html = '';
        activities.forEach(activity => {
            let iconColor = 'var(--text-secondary)';
            if (activity.type === 'company') iconColor = 'var(--primary)';
            if (activity.type === 'job') iconColor = 'var(--success)';
            if (activity.type === 'subscription') iconColor = 'var(--warning)';

            html += `
                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; position: relative;">
                    <div style="width: 32px; height: 32px; border-radius: 50%; background-color: var(--bg-body); display: flex; align-items: center; justify-content: center; z-index: 1;">
                        <i data-lucide="${activity.icon}" style="width: 16px; height: 16px; color: ${iconColor};"></i>
                    </div>
                    <div style="flex: 1; padding-top: 6px;">
                        <p style="margin: 0; font-size: 0.875rem; color: var(--text-primary); font-weight: 500;">${activity.text}</p>
                        <span style="font-size: 0.75rem; color: var(--text-secondary);">${activity.time}</span>
                    </div>
                </div>
            `;
        });
        
        activityFeedContainer.innerHTML = html;
        if (window.lucide) lucide.createIcons();
    }
});
