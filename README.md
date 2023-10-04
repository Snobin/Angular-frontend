Employee Management Application

This is a simple Angular application for managing employee records. It allows you to create new employee records, list existing records, verify data, and delete records.

Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

   git clone <repository-url>

2. Navigate to the project directory:

   cd employee-management-app

3. Install the required dependencies:

   npm install

4. Start the development server:

   ng serve

5. Open your web browser and access the application at http://localhost:4200.

Features

Create Employee Records

Click on the "Create Record" link in the navigation to create a new employee record.
Fill in the required details, including Transaction Reference, Bank Code, Amount, Account No, IBAN, and Account Name.
Click the "Submit" button to save the record.

List Employee Records

The "Employee List" link in the navigation displays a table of existing employee records.
Records include Transaction Reference, Bank Code, Account No, Amount, Created On, IBAN, Account Name, and Status.
The "Status" field is color-coded based on the status (Verified, Pending, or Rejected).

Verify Data

In the employee list, click the "Verify" button to verify data for a specific record.
If the data verification is successful, the status of the record changes to "Verified."

Delete Records

In the employee list, click the "Delete" button to delete a specific record.
Deleted records will be permanently removed from the system.

Folder Structure

src/app/components: Contains Angular components for creating, listing, and verifying employee records.
src/app/services: Contains the service for making HTTP requests to the backend API.
src/app/models: Contains the data models used in the application.

Technologies Used

Angular
HttpClient for making API requests


