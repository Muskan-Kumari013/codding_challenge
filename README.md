**Codding Challenge - Testing Framework**

This repository contains a testing framework for both Functional and Load Testing scenarios. It uses Cucumber.js for behavior-driven development (BDD) and K6 for load testing. The framework is structured to allow easy execution of tests, clear reporting, and detailed insights into both functional and load testing.

**Prerequisites**

Before running the tests locally, ensure the following are installed:
Node.js (v16.0 or higher)
npm (Node package manager)
K6 (for load testing)
You can check for Node.js and npm versions using the following commands:
node -v
npm -v

**Setup Instructions**

Clone the Repository
To begin, clone the repository to your local machine:
git clone https://github.com/Muskan-Kumari013/codding_challenge.git

**Install Dependencies**
Install the required npm dependencies:
npm install
This will install the following key packages:
Cucumber.js: For Functional testing using Behavior-Driven Development (BDD).
Playwright: For browser automation during functional tests (if needed).
K6: For load testing the application.

**Functional Testing**

The Functional Testing is based on Cucumber with BDD (Behavior Driven Development) approach. This testing framework uses .feature files to define tests and .js files to implement step definitions and hooks.

Directory Structure for Functional Tests-

features: Contains the .feature files with test scenarios.
steps: Contains the .js files defining the implementation for each step in the .feature files.
hooks: Contains setup and teardown code for running the tests.
pages: Contains page object model classes, which are responsible for interacting with the pages.
locators: Contains files that define the locators used in the tests.

**Running Functional Tests**

To run the functional tests with Cucumber:
npm test
This will execute the tests defined in the src/test/functional/features directory.
By default, the results will be stored in an HTML report under results/cucumber-report.html and screenshot under results/screenshots.

**Configuration**

The Cucumber configuration is set in the cucumber.json file, which specifies:
Paths to feature files
Step definitions
Format options (HTML report generation, progress bar)
Parallel execution (can be adjusted based on your system capacity)
Running Tests in Parallel
The tests are set to run in parallel by default with a parallel: 1 setting. If you want to change the number of parallel processes, modify the parallel value in the cucumber.json file.

**Load Testing**

The Load Testing scenario is defined using k6. It is located in the src/test/LoadTesting/loadTest.js file.

**Running Load Tests**

To run the load tests, use the following command:
npm run test_Load
This command runs the loadTest.js script located in the src/test/LoadTesting directory using k6.

**Customizing Load Tests**

You can modify the loadTest.js file to customize the load test scenario, such as adjusting the number of virtual users, duration of the test, and the request details.

**Reporting**

Functional Test Report: The results of the functional tests are generated in results/cucumber-report.html. You can open this file in any browser to view a detailed report of the tests.

Load Testing: the results will be displayed in the terminal where the k6 test is executed. k6 also provides detailed performance metrics, such as response time, request rate, and error rate.

**GitHub Actions CI/CD Workflow**

The CI/CD pipeline in GitHub Actions is defined in the playwright.yml file. The key steps are:
Checkout code: The latest code is fetched from the GitHub repository.
Set up Node.js: The required Node.js version is set up for the environment.
Install dependencies: Dependencies are installed via npm ci for a clean and fast installation.
Install Playwright Browsers: Playwright is installed with the necessary browsers using npx playwright install --with-deps.
Run Test: The npm run test script executes the functional tests.
Upload reports and screenshots: After the tests, the results (including HTML reports) are uploaded as *artifacts* for further analysis.




