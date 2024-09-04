// delete-api.spec.ts
import { test, expect } from "@playwright/test";
import { apiData } from "../../src/data/api.data";
import fs from "fs";

test.describe.parallel("Fake Api Testing - Delete Operations", () => {
  test("DELETE Request - Remove Employee", async ({ request }) => {
    // read employee id from temporary file
    const employeeId = fs.readFileSync("tempFiles/employeeId.txt", "utf8");

    const response = await request.delete(
      `${apiData.apiBaseUrl}/employees/${employeeId}`
    );
    expect(response).toBeTruthy();
    // Optionally, verify that the employee has been deleted
    const getResponse = await request.get(
      `${apiData.apiBaseUrl}/employees/${employeeId}`
    );
    // Should return 404 if the employee was deleted successfully
    expect(getResponse.status()).toBe(404); 
  });

  test("DELETE Request - Remove Department", async ({ request }) => {
    // read department id from temporary file
    const departmentId = fs.readFileSync("tempFiles/departmentId.txt", "utf8");

    const response = await request.delete(
      `${apiData.apiBaseUrl}/departments/${departmentId}`
    );
    expect(response).toBeTruthy();
    // Optionally, verify that the employee has been deleted
    const getResponse = await request.get(
      `${apiData.apiBaseUrl}/departments/${departmentId}`
    );
    expect(getResponse.status()).toBe(404); 
  });
});
