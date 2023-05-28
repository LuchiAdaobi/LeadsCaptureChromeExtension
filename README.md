LeadCapture App
This is a simple web application that allows you to save and manage a list of leads (URLs) for future reference. You can add new leads, delete individual leads, delete all leads, search for specific leads, and even save the currently active tab as a lead.

Getting Started
To use this application, simply open the index.html file in your preferred web browser. The app will load, and you can start managing your leads right away.

Features
Saving Leads
You can save leads by entering the URL in the input field and clicking the "Save" button. The lead will be added to the list if it is not already present.

Deleting Leads
To delete a single lead, click the "x" button next to the lead you want to remove. The lead will be removed from the list, and the changes will be saved automatically.

To delete all leads, double-click the "Delete All" button. This action will clear the entire list of leads, and the changes will be saved automatically.

Viewing Leads
All your saved leads are displayed in a list format. Each lead is presented as a clickable link, allowing you to open it in a new tab. To visit a lead, simply click on the link.

Searching Leads
You can search for specific leads by typing your search query in the search input field. The list will dynamically update, showing only the leads that match your search term.

Saving the Active Tab
By clicking the "Save Tab" button, the currently active tab in your web browser will be saved as a lead. If the URL of the active tab is already in the list, it will not be saved again.

Local Storage
The application uses local storage to persist your saved leads. When you add, delete, or modify leads, the changes are automatically saved in the local storage of your browser. When you revisit the app, your leads will be loaded from the local storage, ensuring your data is retained between sessions.


MyLeads Chrome Extension
This is a guide on how to set up the MyLeads app as a Chrome extension in your local environment. Additionally, we will explain that the "Save Tab" feature only works when the app is functioning as a Chrome extension.

Setting Up as a Chrome Extension
To set up the MyLeads app as a Chrome extension on your local machine, follow these steps:

Create a new directory for your project and navigate to it using the command line or terminal.

Copy and paste the code for the MyLeads app into a new JavaScript file (e.g., popup.js) within the project directory.

Create a new HTML file (e.g., popup.html) within the project directory.

Inside popup.html, add the following code:

html
Copy code
<!DOCTYPE html>
<html>
<head>
  <title>MyLeads Extension</title>
  <script src="popup.js"></script>
</head>
<body>
  <!-- Add any necessary HTML elements here -->
</body>
</html>
Open Google Chrome and go to chrome://extensions in a new tab.

Enable the "Developer mode" toggle switch located in the top right corner of the extensions page.

Click the "Load unpacked" button that appears after enabling developer mode.

In the file selection dialog, navigate to and select the directory containing your project files (the directory where popup.html and popup.js are located).

Click "Open" to load the MyLeads extension into Chrome.

The MyLeads icon should now appear among your Chrome extensions. You can click on it to open the popup HTML page and interact with the app.

Save Tab Feature in Chrome Extension
Please note that the "Save Tab" feature in the MyLeads app will only work when it is functioning as a Chrome extension. This is because it relies on the Chrome tabs API to access the active tab information.

When the MyLeads app is running as a Chrome extension, clicking the "Save Tab" button will save the URL of the currently active tab in your browser as a lead. If the URL is not already present in the list, it will be added. However, if you are running the app outside the context of a Chrome extension (e.g., opening the HTML file directly in your browser), the "Save Tab" feature will not work as expected.

To utilize the full functionality of the MyLeads app, make sure it is set up and running as a Chrome extension in your local environment.

Please note that this application uses the Chrome tabs API to save the active tab. It may not work as expected in browsers other than Chrome.

Feel free to explore and use this simple lead management application to stay organized and keep track of important URLs!