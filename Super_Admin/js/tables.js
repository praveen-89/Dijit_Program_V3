// tables.js
// Reusable table logic and dummy data

const usersData = [
    { id: 1, name: 'Alice Cooper', company: 'TechCorp', email: 'alice@techcorp.com', type: 'Company Admin', plan: 'Enterprise', status: 'Active' },
    { id: 2, name: 'Bob Dylan', company: 'DevSolutions', email: 'bob@devsol.com', type: 'Recruiter', plan: 'Professional', status: 'Active' },
    { id: 3, name: 'Charlie Puth', company: 'HR Consult', email: 'charlie@hrconsult.com', type: 'Consultancy', plan: 'Starter', status: 'Suspended' },
    { id: 4, name: 'Diana Prince', company: 'Amazon', email: 'diana@amazon.com', type: 'Company Admin', plan: 'Enterprise', status: 'Active' },
    { id: 5, name: 'Evan Rachel', company: 'Westworld', email: 'evan@westworld.inc', type: 'Company Admin', plan: 'Premium', status: 'Pending' }
];

const jobsData = [
    { id: 101, title: 'Senior Frontend Developer', company: 'TechCorp', location: 'Remote', applicants: 45, status: 'Active' },
    { id: 102, title: 'Backend Engineer (Node.js)', company: 'DevSolutions', location: 'New York', applicants: 12, status: 'Active' },
    { id: 103, title: 'Product Manager', company: 'Amazon', location: 'Seattle', applicants: 120, status: 'Closed' },
    { id: 104, title: 'UI/UX Designer', company: 'TechCorp', location: 'San Francisco', applicants: 89, status: 'Paused' }
];

function generateStatusBadge(status) {
    if (status === 'Active') return `<span class="badge badge-success">Active</span>`;
    if (status === 'Suspended' || status === 'Closed') return `<span class="badge badge-danger">${status}</span>`;
    if (status === 'Pending' || status === 'Paused') return `<span class="badge badge-warning">${status}</span>`;
    return `<span class="badge badge-secondary">${status}</span>`;
}

function renderUsersTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
        <table class="table">
            <thead>
                <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Account Type</th>
                    <th>Plan</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
    `;

    usersData.forEach(user => {
        const initial = user.name.charAt(0);
        html += `
            <tr>
                <td>
                    <div class="entity-cell">
                        <div class="entity-avatar">${initial}</div>
                        <div class="entity-info">
                            <span class="entity-name">${user.name}</span>
                            <span class="entity-sub">${user.company}</span>
                        </div>
                    </div>
                </td>
                <td>${user.email}</td>
                <td>${user.type}</td>
                <td><span class="badge badge-primary">${user.plan}</span></td>
                <td>${generateStatusBadge(user.status)}</td>
                <td>
                    <button class="btn btn-outline" style="padding: 0.25rem 0.5rem;"><i data-lucide="more-vertical" style="width: 16px; height: 16px;"></i></button>
                </td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
        <div class="pagination">
            <span class="pagination-info">Showing 1 to 5 of 50 entries</span>
            <div class="pagination-controls">
                <button class="page-btn" disabled><i data-lucide="chevron-left"></i></button>
                <button class="page-btn active">1</button>
                <button class="page-btn">2</button>
                <button class="page-btn">3</button>
                <button class="page-btn"><i data-lucide="chevron-right"></i></button>
            </div>
        </div>
    `;

    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

function renderJobsTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
        <table class="table">
            <thead>
                <tr>
                    <th>Job Title</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th>Applicants</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
    `;

    jobsData.forEach(job => {
        html += `
            <tr>
                <td class="font-medium">${job.title}</td>
                <td>${job.company}</td>
                <td>${job.location}</td>
                <td>${job.applicants}</td>
                <td>${generateStatusBadge(job.status)}</td>
                <td>
                    <button class="btn btn-outline" style="padding: 0.25rem 0.5rem;"><i data-lucide="eye" style="width: 16px; height: 16px;"></i></button>
                </td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

// Auto-render if elements exist
document.addEventListener('DOMContentLoaded', () => {
    renderUsersTable('usersTableContainer');
    renderJobsTable('jobsTableContainer');
});
