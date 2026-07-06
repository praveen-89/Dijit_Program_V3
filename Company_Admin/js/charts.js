// charts.js — Chart.js configurations for DIJIT Super Admin

document.addEventListener('DOMContentLoaded', () => {
    // Resolve CSS variables for Chart.js
    const style = getComputedStyle(document.documentElement);
    const primary = '#6366F1';
    const secondary = '#06B6D4';
    const success = '#10B981';
    const warning = '#F59E0B';
    const danger = '#EF4444';
    const textSecondary = '#6B7280';

    const fontConfig = {
        family: "'Inter', sans-serif",
        size: 11,
        weight: 400
    };

    // Common chart options
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#1F2937',
                titleFont: { family: "'Inter', sans-serif", size: 12, weight: 600 },
                bodyFont: { family: "'Inter', sans-serif", size: 11 },
                padding: { top: 8, bottom: 8, left: 12, right: 12 },
                cornerRadius: 8,
                displayColors: false
            }
        },
        scales: {
            x: {
                grid: { display: false, drawBorder: false },
                ticks: { color: textSecondary, font: fontConfig },
                border: { display: false }
            },
            y: {
                grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false },
                ticks: { color: textSecondary, font: fontConfig },
                border: { display: false }
            }
        }
    };

    // ===== REVENUE CHART =====
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        const gradient = revenueCtx.getContext('2d').createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.15)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

        const gradient2 = revenueCtx.getContext('2d').createLinearGradient(0, 0, 0, 300);
        gradient2.addColorStop(0, 'rgba(6, 182, 212, 0.1)');
        gradient2.addColorStop(1, 'rgba(6, 182, 212, 0)');

        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Revenue (₹L)',
                        data: [42, 48, 52, 55, 58, 62, 68, 72, 75, 78, 80, 84.5],
                        borderColor: primary,
                        backgroundColor: gradient,
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                        pointRadius: 0,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: primary,
                        pointHoverBorderColor: '#fff',
                        pointHoverBorderWidth: 2
                    },
                    {
                        label: 'Subscriptions',
                        data: [680, 720, 780, 810, 850, 890, 920, 960, 1000, 1040, 1070, 1102],
                        borderColor: secondary,
                        backgroundColor: gradient2,
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                        pointRadius: 0,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: secondary,
                        pointHoverBorderColor: '#fff',
                        pointHoverBorderWidth: 2,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    legend: {
                        display: true,
                        position: 'top',
                        align: 'end',
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                            color: textSecondary,
                            font: fontConfig,
                            padding: 16
                        }
                    }
                },
                scales: {
                    ...commonOptions.scales,
                    y1: {
                        position: 'right',
                        grid: { display: false, drawBorder: false },
                        ticks: { color: textSecondary, font: fontConfig },
                        border: { display: false }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    // ===== DAILY SIGNUPS CHART =====
    const usersCtx = document.getElementById('usersChart');
    if (usersCtx) {
        new Chart(usersCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'New Signups',
                    data: [65, 59, 80, 81, 56, 42, 35],
                    backgroundColor: primary,
                    borderRadius: 6,
                    borderSkipped: false,
                    barThickness: 24,
                    hoverBackgroundColor: '#4F46E5'
                }]
            },
            options: commonOptions
        });
    }

    // ===== APPLICATION FUNNEL CHART =====
    const applicationsCtx = document.getElementById('applicationsChart');
    if (applicationsCtx) {
        new Chart(applicationsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Screening', 'Interview', 'Offered', 'Hired', 'Rejected'],
                datasets: [{
                    data: [1200, 480, 150, 95, 320],
                    backgroundColor: [primary, secondary, warning, success, danger],
                    borderWidth: 0,
                    hoverOffset: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: textSecondary,
                            font: { family: "'Inter', sans-serif", size: 11 },
                            usePointStyle: true,
                            pointStyle: 'circle',
                            padding: 12
                        }
                    },
                    tooltip: {
                        backgroundColor: '#1F2937',
                        titleFont: { family: "'Inter', sans-serif", size: 12, weight: 600 },
                        bodyFont: { family: "'Inter', sans-serif", size: 11 },
                        padding: 10,
                        cornerRadius: 8
                    }
                },
                cutout: '72%'
            }
        });
    }

    // ===== RECRUITER USAGE CHART =====
    const recruiterCtx = document.getElementById('recruiterUsageChart');
    if (recruiterCtx) {
        new Chart(recruiterCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                    {
                        label: 'Searches',
                        data: [2400, 3200, 2800, 3600],
                        borderColor: primary,
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 3,
                        pointBackgroundColor: primary
                    },
                    {
                        label: 'Resume Unlocks',
                        data: [800, 1100, 950, 1300],
                        borderColor: secondary,
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 3,
                        pointBackgroundColor: secondary
                    },
                    {
                        label: 'Downloads',
                        data: [400, 550, 480, 620],
                        borderColor: success,
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 3,
                        pointBackgroundColor: success
                    }
                ]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    legend: {
                        display: true,
                        position: 'top',
                        align: 'end',
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                            color: textSecondary,
                            font: fontConfig,
                            padding: 12
                        }
                    }
                },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // ===== JOBS POSTED CHART (for analytics pages) =====
    const jobsCtx = document.getElementById('jobsPostedChart');
    if (jobsCtx) {
        new Chart(jobsCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Jobs Posted',
                    data: [320, 410, 380, 520, 480, 590],
                    backgroundColor: secondary,
                    borderRadius: 6,
                    barThickness: 28
                }]
            },
            options: commonOptions
        });
    }

    // ===== SUBSCRIPTION SALES CHART =====
    const subSalesCtx = document.getElementById('subscriptionSalesChart');
    if (subSalesCtx) {
        new Chart(subSalesCtx, {
            type: 'bar',
            data: {
                labels: ['Starter', 'Professional', 'Premium', 'Enterprise'],
                datasets: [{
                    label: 'Active',
                    data: [280, 420, 260, 142],
                    backgroundColor: primary,
                    borderRadius: 6,
                    barThickness: 32
                }, {
                    label: 'Expired',
                    data: [45, 52, 28, 18],
                    backgroundColor: '#E5E7EB',
                    borderRadius: 6,
                    barThickness: 32
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    legend: {
                        display: true,
                        position: 'top',
                        align: 'end',
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                            color: textSecondary,
                            font: fontConfig,
                            padding: 12
                        }
                    }
                }
            }
        });
    }
});
