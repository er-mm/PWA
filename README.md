# Progressive Web Apps - Complete Guide
This source code is part of Maximilian Schwarzmüller's "Progressive Web Apps - Complete Guide" course on udemy.com.

# How to Use
You need [Node.js](https://nodejs.org) installed on your machine. Simply download the installer from [nodejs.org](https://nodejs.org) and go through the installation steps.

Once Node.js is installed, open your command prompt or terminal and **navigate into this project folder**. There, run `npm install` to install all required dependencies.

Finally, run `npm start` to start the development server and visit [localhost:8080](http://localhost:8080) to see the running application.
_______________________________________________________________________________________________________________________________________________

`manifist properties` : 

`{
    "name": "any long name for your app (eg SplashScreen)",
    "short_name": "short name for app (eg below icon)", 
    "start_url": "/index.html", // which page to load on startup
	"scope": ".", // which pages are included in PWA Experiences
	"display": "standalone", // should it look like a standalone app ? other values // fullscreen, minimal-ui, browser
	"orientation": "potrait-primary", // Set and enforce default orientation // other values / any, potrait, landscape
	"background_color": "#fff", // background whilest loading on splash screen
	"theme-color": "#3f51b5", // eg top bar in the task switcher
	"description": "A simple insta clone implementing a lot of PWA",
	"dir": "ltr", // read direction of our app
	"lang": "en-US" // main language of app,
    "icons":[...] // Configure icons
}`





// "display": "standalone", // fullscreen, minimal-ui, browser
// 	"orientation": "potrait-primary", // any, potrait, landscape

_______________________________________________________________________________________________________________________________________________
Useful Resources & Links
Useful Links: For Manifest

`Web App Manifest - Browser Support: http://caniuse.com/#feat=web-app-manifest`
`MDN Article on the Web App Manifest (includes List of all Properties): https://developer.mozilla.org/en-US/docs/Web/Manifest`
`A detailed Web App Manifest Explanation by Google: https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/`
`More about the "Web App Install Banner" (including Requirements): https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/`

_______________________________________________________________________________________________________________________________________________
/***********************************************************SERVICE WORKERS*******************************************************************/
_______________________________________________________________________________________________________________________________________________

* aLLOW us to make our app offline ready.
* allow us to use lot of next gen features like push notifications or background sync. 

# What are SW : 
* SW works on *SEPERATE* SINGLE THREAD AS js 
* They have their own thread because they run in background. 
* They also are decoupled from HTML pages
* Manage all pages of give  scope. 
* SW lives on even after pages have been closed (its a background processes)
_______________________________________________________________________________________________________________________________________________

**SERVICE WORKERS EVENTS** (Listenable Events)
* FETCH: Browser or page-related JS initiates a Fetch (http request)
* PUSH NOTIFICATIONS: SW receives Web Push Notifications (from server)
* NOTIFICATION INTERACTION: user interacts with displayed Notification
* BACKGROUNG SYNC: SW receives Background Sync Event (eg Internet connection was restored)
* SERVICE WORKER LIFECYCLE: SW phase changes

* Note: you can decide what is to be put in SW.
* the browser will install a sw if it is a updated verision not on every page refresh. 
_______________________________________________________________________________________________________________________________________________

**Registering a SW**
`SW LifeCycle : 
index.html --> **loads** app.js
    |                |
    |                V
	|   |--------**registers** sw.js 
    |   |           |
    |   |           V
    V   V       Installation ==> **install** Event
	Fetch           |
      |trigger          V
	Idle    <-- Activation ==> **activate** Event (SW now controls all the pages of Scope)
	  |
	  V
	Terminated`
_______________________________________________________________________________________________________________________________________________

**Meaning of -c-1 in start (package.jsonm)**
* it will ensure that we dont cache any assets using normal browser. 

**Put sw.js in root folder so that it cann access all the folders and subfolders of your project**
**before you put any code in SW you have to register it**

* register Sw in app.js because it is available in both the HTML files
_______________________________________________________________________________________________________________________________________________
# The App Install Banner & Chrome 68+
* In the next lecture, I'll show you how Chrome automatically shows an "App Install Banner". Starting with Chrome version 68, it'll not do this automatically anymore. You instead have to listen to a specific event (beforeinstallprompt ) and then show the banner manually.

* This approach is covered in this course! You'll learn all about it in lecture 38 - don't skip the next lectures though, they're still important.

* Read more about this change [here](https://developers.google.com/web/fundamentals/app-install-banners/)

* Also, if you want to manually trigger the installation of the app, you might not see the "Add to Homescreen" button in the same place I do in the lecture.

* You can manually trigger installation via the Chrome website menu ("Install Instagram as Progressive Web App"):

# Connecting Chrome Developer Tools to a Real/ Emulated Device
* It's easy to connect your Chrome Developer Tools with a Real or Emulated Android Device (event though the latter unfortunately never worked for me).

* The following article explains it step-by-step and by using helpful images: https://developers.google.com/web/tools/chrome-devtools/remote-debugging/

* Make sure you enabled "Developer Mode" on your Device! You do that by tapping your Android Build Number (in the Settings) 7 times. Yes, this is no joke ;-)
