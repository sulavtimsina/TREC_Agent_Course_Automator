# TREC_Agent_Course_Automator
When you are taking the TREC-Texas Real Estate Commission 180-hr courses, and you select ayporealestate as the course provider, you can run this extension to automate the clicking of next button when a modules completes. It plays a sound whenever the quiz is ready. You can fine tune a LLM (like Chat-GPT) with the course pdf and ask it question by pasting in the question/answer screenshot.
You only need to be in front of the computer, when the MCQ quiz is ready. You are alerted with a sound, which keeps on playing until the quiz screen is not complete.

This Chrome extension automates the process of clicking 'Next' buttons on specified web pages and alerts users with a sound when a submit button appears. 


# Features

Automatically clicks 'Next' buttons on specified web pages
Plays a 5-second alert sound when a submit button is detected
Works on pages from https://www.ayporealestate.com/ (customizable)
Continues attempting to find and click 'Next' buttons at regular intervals
Responds to dynamic changes in the webpage

# Installation

Clone this repository or download the source code.
Open Google Chrome and navigate to chrome://extensions/.
Enable "Developer mode" in the top right corner.
Click "Load unpacked" and select the directory containing the extension files.

# Usage
After installation, the extension will automatically run on the specified website (https://www.ayporealestate.com/ by default). It will:

Continuously attempt to find and click 'Next' buttons.
Play a 5-second alert sound when it detects a visible submit button.

No user interaction is required once the extension is installed and active.
Customization
To use this extension on different websites or to modify its behavior:

Edit the matches field in manifest.json to include the desired websites.
Modify the selectors in content.js to match the specific elements on your target websites.

# Files

manifest.json: Contains the extension's metadata and permissions.
content.js: The main script that runs on the web pages, handling button clicking and sound alerts.

# Permissions
This extension requires the following permissions:

activeTab: To interact with the current web page.
Access to https://www.ayporealestate.com/: To run on the specified website.

# Contributing
Contributions to improve the extension are welcome. Please feel free to submit pull requests or create issues for bugs and feature requests.
License
MIT License
Disclaimer
This extension is provided as-is, and users should be aware of any terms of service of websites they use it on. Always ensure you have permission to use automated tools on any website.
