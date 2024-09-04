import { test, expect } from "@playwright/test";
import { apiData } from "../../src/data/api.data";
import {getCurrentDate} from "../../utilities/getCurrentDate"
import fs from 'fs';


test.describe.parallel("Fake Api Testing using json server ", () => {
  const currentDate = getCurrentDate();
  

  test("POST Request - Create New Employee ", async ({ request }) => {
    
    const employeeData ={
      id: `10_${currentDate}`,
      firstName: "Joe",
      lastName: "Dispenza",
      country: "USA",
      departmentId: 1,
      email: "Joe.Dispenza@example.com",
    };
    const response = await request.post(`${apiData.apiBaseUrl}/employees`, {
      data:employeeData,
    });

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
    expect(responseBody.id).toBe(employeeData.id);
   // Stock id in temporary file
    fs.writeFileSync('tempFiles/employeeId.txt', employeeData.id);
    
  });

  /********************************************************************************************************/
  test("POST Request - Create New Department ", async ({ request }) => {
    
    const departmentData ={
      id: `20_${currentDate}`,
      title: "Devops",
    };
    const response = await request.post(`${apiData.apiBaseUrl}/departments`, {
      data:departmentData,
    });

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
    expect(responseBody.id).toBe(departmentData.id);

    // Stock id in temporary file
    fs.writeFileSync('tempFiles/departmentId.txt', departmentData.id);
  });

});
