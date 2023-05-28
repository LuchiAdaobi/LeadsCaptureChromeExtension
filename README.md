# LeadCapture App

MyLeads is a powerful lead management tool that allows you to organize and track your leads with ease. This project was inspired by Scrimba's lead management tutorial, but I added my own unique twists and extended its functionality to create a personalized tool.

## Getting Started

To use this application, follow the steps below:

1. Clone the repository:

```
git clone https://github.com/yourusername/myleads.git```

Open the index.html file in your preferred web browser.

2. Open the `index.html` file in your preferred web browser.

The app will load, and you can start managing your leads right away.

## Features

MyLeads offers the following features:

- **Saving Leads:** Save leads with a single click or by entering a URL.
- **Deleting Leads:** Delete individual leads or clear the entire list with the "Delete All" button.
- **Viewing Leads:** All your saved leads are displayed as clickable links, allowing you to open them in new tabs.
- **Searching Leads:** Use the search feature to find specific leads quickly.
- **Preventing Duplicate Entries:** The app automatically checks for duplicate entries and prevents saving the same lead multiple times.
- **Saving the Active Tab:** Click the "Save Tab" button to save the URL of the currently active tab as a lead.

### Local Storage

The application utilizes local storage to persist your saved leads. Whenever you add, delete, or modify leads, the changes are automatically saved in the local storage of your browser. When you revisit the app, your leads will be loaded from the local storage, ensuring your data is retained between sessions.

## MyLeads: Lead Management Chrome Extension

To use MyLeads as a Chrome extension in your local environment, follow these steps:

1. Clone the repository:

```
git clone https://github.com/yourusername/myleads.git```

2. Open Google Chrome and go to `chrome://extensions`.
3. Turn on the "Developer mode" toggle in the top right corner.
4. Click on "Load unpacked" and select the cloned repository folder.
5. The MyLeads extension should now be added to your Chrome browser.

### Favicon

To add a favicon to the LeadCapture App, follow these steps:

1. Create or find an image that you want to use as your favicon. The recommended size for favicons is 16x16 pixels or 32x32 pixels.
2. Save the favicon image file with a suitable format (e.g., .ico, .png, .jpg) and give it a meaningful name (e.g., `favicon.ico`).
3. Place the favicon file in the root directory of the project.
4. The favicon will be automatically loaded by the browser when you open the application.

Please ensure that the favicon file is named `favicon.ico` and placed in the root directory of the project. I named mine `dollar-icon.png`.

### Manifest.json

Here's the content of the `manifest.json` file used for the MyLeads Chrome extension:

```json
{
"manifest_version": 3,
"name": "Leads Tracker",
"version": "1.0",
"action": {
 "default_popup": "index.html",
 "default_icon": {
   "16": "dollar-icon.png",
   "48": "dollar-icon.png",
   "128": "dollar-icon.png"
 }
},
"permissions": ["tabs"],
"host_permissions": ["<all_urls>"],
"icons": {
 "16": "dollar-icon.png",
 "48": "dollar-icon.png",
 "128": "dollar-icon.png"
}
}

Make sure to include this file in the root directory of your extension.

Make sure to include this file in the root directory of your extension.

### Save Tab Feature in Chrome Extension

Please note that the "Save Tab" feature in the MyLeads app will only work when it is functioning as a Chrome extension. This is because it relies on the Chrome tabs API to access the active tab information.

When the MyLeads app is running as a Chrome extension, clicking the "Save Tab" button will save the URL of the currently active tab in your browser as a lead. If the URL is not already present in the list, it will be added. However, if you are running the app outside the context of a Chrome extension (e.g., opening the HTML file directly in your browser), the "Save Tab" feature will not work as expected.

To utilize the full functionality of the MyLeads app, make sure it is set up and running as a Chrome extension in your local environment.

Please note that this application uses the Chrome tabs API to save the active tab. It may not work as expected in browsers other than Chrome.

##Feedback and Contributions
I welcome your feedback and suggestions to enhance the functionality and usability of MyLeads. Feel free to open issues or submit pull requests in the GitHub repository.

Live site: [Link to Live Site](https://leadcaptureapp.netlify.app/)
Git repo: [Link to Git Repo](https://github.com/LuchiAdaobi/chromeExtension)

A heartfelt shout-out to Scrimba for providing the initial spark of inspiration, and to the amazing coding community for its unwavering support and camaraderie.

Happy lead management! 🚀
```
