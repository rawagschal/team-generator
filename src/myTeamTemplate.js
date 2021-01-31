const render = team => {
    const renderManager = manager => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h4 class="card-subtitle">${manager.getRole()}</h4>
            </div>
            <div class="card-body">
                <ul class="body-details">
                    <li class="body-details-item">Employee ID: ${manager.getId()}</li>
                    <li class="body-details-item">
                        Employee Email: 
                            <a href="mailto:${manager.getEmail()}">
                            ${manager.getEmail()}
                            </a>
                    </li>
                    <li class="body-details-item">Office Number: ${manager.getOfficeNumber()}</li>
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
                <h4 class="card-subtitle">${engineer.getRole()}</h4>
            </div>
            <div class="card-body">
                <ul class="body-details">
                    <li class="body-details-item">Employee ID: ${engineer.getId()}</li>
                    <li class="body-details-item">
                        Employee Email: 
                            <a href="mailto:${engineer.getEmail()}">
                                ${engineer.getEmail()}
                            </a>
                    </li>
                    <li class="body-details-item">
                        Employee GitHub: 
                            <a href="https://github.com/${engineer.getGithub()}" target="blank">
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
                <h4 class="card-subtitle">${intern.getRole()}</h4>
            </div>
            <div class="card-body">
                <ul class="body-details">
                    <li class="body-details-item">Employee ID: ${intern.getId()}</li>
                    <li class="body-details-item">
                        Employee Email: 
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
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../src/style.css">
    </head>

    <body>
        <div class="container">
            <div class="row">
                <div class="col-12 jumbotron"> 
                    <h1>My Team</h1>
                </div>
            </div>
        </div>

        <div class ="container">
            <div class ="row">
                ${render(team)}
            </div>
        </div>
    </body>
    </html>
    `;
};