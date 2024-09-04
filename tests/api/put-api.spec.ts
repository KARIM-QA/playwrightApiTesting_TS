import { test, expect } from "@playwright/test";
import { apiData } from "../../src/data/api.data";
import {getCurrentDate} from "../../utilities/getCurrentDate"
import fs from 'fs';


test.describe.parallel("Fake Api Testing using json server ", () => {
  const currentDate = getCurrentDate();
  
  test("PUT Request - Update Employee ", async ({ request }) => {
    
    const employeeId = fs.readFileSync("tempFiles/employeeId.txt", "utf8");
    const employeeData ={
      firstName: "Jimmy",
      lastName: "Jones",
      country: "Portugal",
      departmentId: 1,
      email: "Jimmy.Jones@example.pt",
    };
    const response = await request.put(`${apiData.apiBaseUrl}/employees/${employeeId}`, {
      data:employeeData,
    });
     expect(response.status()).toBe(200);

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
    expect(responseBody.country).toBe(employeeData.country);
    expect(responseBody.email).toBe(employeeData.email);
    
  });

  /********************************************************************************************************/
  test("PUT Request - Update Department ", async ({ request }) => {
    const departmentId = fs.readFileSync("tempFiles/departmentId.txt", "utf8");
    const departmentData ={
      title: "artificial intelligence",
    };
    const response = await request.put(`${apiData.apiBaseUrl}/departments/${departmentId}`, {
      data:departmentData,
    });

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
    expect(responseBody.title).toBe(departmentData.title);
  });

});
