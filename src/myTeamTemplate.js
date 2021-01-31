const render = team => {
    const renderManager = manager => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-subtitle">${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="body-details">
                    <li class="body-details-item">Employee ID: ${manager.getId()}</li>
                    <li class="body-details-item">
                        Employee email: 
                            <a href="mailto:${manager.getEmail()}">
                            ${manager.getEmail()}
                            </a>
                    </li>
                    <li class="body-details-item">Mananger's office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    const renderEngineer = engineer => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-subtitle">${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="body-details">
                    <li class="body-details-item">Employee ID: ${engineer.getId()}</li>
                    <li class="body-details-item">
                        Employee email: 
                            <a href="mailto:${engineer.getEmail()}">
                                ${engineer.getEmail()}
                            </a>
                    </li>
                    <li class="body-details-item">
                        Visit this engineer's GitHub profile: 
                            <a href="${engineer.getGithub()}">
                                ${engineer.getGithub()}
                            </a>
                    </li>
                </ul>
            </div>
        </div>
        `;
    };

    const renderIntern = intern => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-subtitle">${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="body-details">
                    <li class="body-details-item">Employee ID: ${intern.getId()}</li>
                    <li class="body-details-item">
                        Employee email: 
                            <a href="mailto:${intern.getEmail()}">
                                ${intern.getEmail()}
                            </a>
                    </li>
                    <li class="body-details-item">
                        School: ${intern.getSchool()}       
                    </li>
                </ul>
            </div>
        </div>
        `;
    };

    const html = [];

    // push employees for each role into html
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))  
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer)).join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern)).join("")
    );

    return html.join("");

}

module.exports = team => {
    return `
    ${render(team)}
    `
};