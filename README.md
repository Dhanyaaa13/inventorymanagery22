# inventorymanagery22
Developing a web application for managing a small inventory, allowing users to add, view, and update inventory items. The system should include a basic analytical dashboard to provide key insights.

Features:

1.  Add Inventory Items:
     A form allows users to add new inventory items, including name, quantity, category, and price.
2.  View Inventory Items:
    * Inventory items are displayed in a table.
    * Includes search and category filtering.
3.  Update Inventory Items:
    * Users can update existing inventory items through prompt dialogs.
4.  Remove Inventory Items:
    * Users can remove inventory items from the table.
5.  Analytics Dashboard:
    * Displays the total number of items per category.
    * Identifies the top 3 most frequently stocked items.
    * Calculates and shows the total inventory value.
    * Provides low stock alerts for items below a specified threshold.
6.  Local Storage Persistence:
    * Inventory data is stored in the browser's `localStorage`, allowing data to persist across sessions.

**Technologies Used:**

1.  HTML:
    * Provides the structure of the web page.
2.  CSS:
    * Styles the web page for a better user interface.
3.  JavaScript:
    * Handles the application's logic, including:
        * Adding, updating, and removing inventory items.
        * Rendering the inventory table.
        * Calculating and displaying analytics.
        * Searching and filtering the inventory.
        * Storing and retrieving data from local storage.
4.  localStorage:
    * Used for simple data persistence in the user's browser.


Prerequisites:

* A web browser (Chrome, Firefox, Safari, Edge, etc.).
* A text editor or IDE (VS Code, Sublime Text, etc.) to edit the code.

Installation
Deployment, and Setup:

1.  Setup:
    * Create an HTML file (e.g., `index.html`).
    * Copy and paste the provided HTML, CSS, and JavaScript code into the `index.html` file.
    * Alternatively, save the css into a file named styles.css, and link it to the html file.
2.  Deployment (Simple):
    * Open the `index.html` file in your web browser. This will run the application directly from your local file system.
3.  Deployment (Web Server):
    * For wider access, you can deploy the `index.html` file (and `styles.css` if you created it) to a web server (e.g., using GitHub Pages, Netlify, or a traditional web hosting service).
4.  Running:
    * Once the html file is opened in a browser, the application is running.
5. Follow the prompts to set up and deploy the application.

The deployed application is available at: C:/Users/Rashmi%20M/Downloads/inventorymanegry.html
Application Structure:

1.  HTML (`index.html`):
    * Contains the basic structure of the web page, including:
        * The inventory form.
        * The search and filter inputs.
        * The inventory table.
        * The analytics dashboard.
2.  CSS (Embedded or `styles.css`):
    * Styles the HTML elements for a visually appealing interface.
3.  JavaScript (Embedded in `<script>` tag):
    * Handles the application's logic, including:
        * Data manipulation (adding, updating, removing items).
        * Rendering the inventory table and analytics.
        * Interacting with `localStorage`.
        * Handling user interactions (search, filter, button clicks).
4.  `localStorage`:
    * Stores the inventory data as a JSON string in the user's browser.

Key JavaScript Functions:

* `addItem()`: Adds a new item to the inventory.
* `renderInventory()`: Renders the inventory table based on the current data and filters.
* `updateItem()`: Updates an existing item.
* `removeItem()`: Removes an item.
* `renderAnalytics()`: Calculates and displays the analytics data.

This setup provides a simple, client-side inventory management application using basic web technologies.

