# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# The Events App

The Events App is a web application that allows users to manage and organize their events. It utilizes local storage for data storage, eliminating the need for a backend server. The app consists of several key features, including a login page, a dashboard displaying events, event creation and editing functionality, event deletion capability, and a calendar page for viewing events. Additionally, the app ensures that user data is securely saved in the local storage, preventing any loss of information even if the page is accidentally refreshed. It's important to note that all user data is cleared upon logging out, ensuring privacy and data security.

## Features
## Login Page
The app begins with a login page where users can enter their credentials to access the app. The user can input any details to log in, as there is no backend authentication.

## Dashboard
After successfully logging in, users are directed to the dashboard. The dashboard provides an overview of all events, displaying relevant details such as event names, dates, and descriptions. Users can quickly scan through their events and access various actions, including adding new events, editing existing events, and deleting events.

## Event Creation
The app allows users to create new events by providing necessary information such as the event name, date, and description. Upon submission, the new event is added to the dashboard, and the user can view it alongside other events.

## Event Editing
Users have the ability to edit existing events. By selecting an event from the dashboard, users can modify its details, such as the event name, date, or description. The changes are reflected in real-time, ensuring accurate event information.

## Event Deletion
The app provides an option to delete events. Users can select an event from the dashboard and choose to delete it. Once confirmed, the event is permanently removed from the dashboard, ensuring a streamlined event management experience.

## Calendar Page
The calendar page offers a visual representation of events. Users can navigate through different months and view the events scheduled for each day. This feature provides a comprehensive overview of events, making it easier for users to plan and manage their schedules.

## Data Persistence
To prevent data loss, the app leverages local storage to save user data. Even if the page is accidentally refreshed, all event information and user modifications remain intact. This ensures a seamless user experience without the risk of data loss.

## Logout
Upon logging out, all user data stored in the local storage is cleared. This ensures user privacy and data security by removing any traces of personal information from the app.

By combining these features, the Events App offers users a convenient and efficient way to manage their events. With its intuitive interface and data persistence capabilities, users can stay organized and up-to-date with their schedules.