// analytics.js — Chart.js configurations for Usage Analytics (Phase 2)

document.addEventListener('DOMContentLoaded', () => {
    const primary = '#6366F1';
    const secondary = '#06B6D4';
    const success = '#10B981';
    const warning = '#F59E0B';
    const danger = '#EF4444';
    const purple = '#8B5CF6';
    const pink = '#EC4899';
    const textSecondary = '#6B7280';
    const fontConfig = { family: "'Inter', sans-serif", size: 11, weight: 400 };

    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#1F2937',
                titleFont: { family: "'Inter', sans-serif", size: 12, weight: 600 },
                bodyFont: { family: "'Inter', sans-serif", size: 11 },
                padding: 10,
                cornerRadius: 8
            }
        },
        scales: {
            x: { grid: { display: false }, ticks: { color: textSecondary, font: fontConfig }, border: { display: false } },
            y: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { color: textSecondary, font: fontConfig }, border: { display: false } }
        }
    };

    // DAU Chart
    const dauCtx = document.getElementById('dauChart');
    if (dauCtx) {
        new Chart(dauCtx, {
            type: 'line',
            data: {
                labels: ['1', '5', '10', '15', '20', '25', '30'],
                datasets: [{
                    label: 'DAU',
                    data: [1200, 1450, 1300, 1600, 1850, 1700, 2100],
                    borderColor: primary,
                    borderWidth: 3,
                    tension: 0.4,
                    pointBackgroundColor: primary,
                    pointRadius: 4
                }]
            },
            options: commonOptions
        });
    }

    // Feature Adoption Chart
    const faCtx = document.getElementById('featureAdoptionChart');
    if (faCtx) {
        new Chart(faCtx, {
            type: 'bar',
            data: {
                labels: ['Job Posting', 'Candidate Search', 'Messaging', 'Interviews', 'Reports'],
                datasets: [{
                    label: 'Adoption %',
                    data: [85, 92, 45, 60, 35],
                    backgroundColor: [primary, secondary, success, warning, purple],
                    borderRadius: 6
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    x: commonOptions.scales.x,
                    y: { ...commonOptions.scales.y, max: 100 }
                }
            }
        });
    }

    // Credit Consumption Chart
    const ccCtx = document.getElementById('creditConsumptionChart');
    if (ccCtx) {
        new Chart(ccCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                    { label: 'Job Credits', data: [450, 600, 550, 800], borderColor: primary, borderWidth: 2, tension: 0.4 },
                    { label: 'Resume Unlocks', data: [1200, 1800, 1600, 2400], borderColor: pink, borderWidth: 2, tension: 0.4 }
                ]
            },
            options: {
                ...commonOptions,
                plugins: { ...commonOptions.plugins, legend: { display: true, position: 'top', labels: { color: textSecondary, font: fontConfig, usePointStyle: true } } }
            }
        });
    }

    // Device Usage Chart
    const duCtx = document.getElementById('deviceUsageChart');
    if (duCtx) {
        new Chart(duCtx, {
            type: 'doughnut',
            data: {
                labels: ['Desktop', 'Mobile', 'Tablet'],
                datasets: [{
                    data: [75, 20, 5],
                    backgroundColor: [primary, secondary, warning],
                    borderWidth: 0,
                    hoverOffset: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: { position: 'bottom', labels: { color: textSecondary, font: fontConfig, usePointStyle: true, padding: 15 } }
                }
            }
        });
    }
});
