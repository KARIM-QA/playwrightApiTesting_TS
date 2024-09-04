import { test, expect } from "@playwright/test";
import { apiData } from "../../src/data/api.data";

test.describe.parallel("Fake Api Testing using json server ", () => {

  test("GET Request - Get All Employees ", async ({ request }) => {
    const response = await request.get(`${apiData.apiBaseUrl}/employees`);
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    console.log("List of employees:", JSON.stringify(responseBody, null, 2));
  });
/********************************************************************************************************/
  test("GET Request - Get Single Employee ", async ({ request }) => {
    const response = await request.get(`${apiData.apiBaseUrl}/employees/1`);
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.id).toBe(1);
    expect(responseBody.firstName).toBe("Karim");
    expect(responseBody.lastName).toBe("Laribi");
  });
/********************************************************************************************************/
  test("GET Request - Get Single Employee with invalid endpoint", async ({ request }) => {
    const response = await request.get(
      `${apiData.apiBaseUrl}/employees/invalid-endpoint`
    );
    expect(response.status()).toBe(404);
  });
/********************************************************************************************************/
  test("GET Request - Get All Departments", async ({ request }) => {
    const response = await request.get(`${apiData.apiBaseUrl}/departments`);
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    console.log("List of departments:", JSON.stringify(responseBody, null, 2));
  });
/********************************************************************************************************/
  test("GET Request - Get Single Departments ", async ({ request }) => {
    const response = await request.get(`${apiData.apiBaseUrl}/departments/1`);
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.id).toBe(1);
    expect(responseBody.title).toBe("QA Engineering");
  });
/********************************************************************************************************/
  test("GET Request - Get Single Departments with invalid endpoint", async ({ request }) => {
    const response = await request.get(
      `${apiData.apiBaseUrl}/departments/invalid-endpoint`
    );
    expect(response.status()).toBe(404);
  });
/********************************************************************************************************/
  test("GET Request - Get All Employees By department", async ({ request }) => {
    const response = await request.get(
      `${apiData.apiBaseUrl}/departments/1/employees`
    );
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    console.log("List of employees By Department:", JSON.stringify(responseBody, null, 2));
  });

});
