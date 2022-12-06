//Create a function to generate HTML


function generateHTML(data) {
    return `
    

    ${data.employeeName}, 
    ${data.employeeId},
    ${data.employeeEmail},    

    `;
  }

 module.exports = generateHTML;
  

 