# Digits-semantic-ui:
<img src="doc/Landing.png">
It is a web app that lets you:
Sign up for an account,
build and look after your contact list, 
note down interactions with contacts with the time they occurred.

**How to Install:**

Get Meteor installed first.

Inside the app's folder, get set up with:
``` meteor npm install ```

Kick off the app with:
``` meteor npm run start ```

Note on bcrypt:
You might see a message about using a JavaScript version of bcrypt, which is slower. If you want the faster native one, run:

``` meteor npm install --save bcrypt ```

**Running the App:**

If all's good, the app goes live at http://localhost:3000. Log in with given details or sign up fresh.

**Code Quality Check:**

Run ESLint for the code inside the imports/ folder with:

```meteor npm run lint```

**Navigating the User Interface:**

**Landing Page:** Starts here for an intro to what Digits does.
<img src="doc/landing.png">

**Register:** No account? Hit “Login” then “Sign Up” to create one.
<img src="doc/Register.png">

**Sign In:** To log in, click “Login” and then “Sign In.”
<img src="doc/SignIn.png">

**User Home:** Once in, this page is your main hub. Add and see contacts here.
<img src="doc/UserHome.png">

**List Contacts:** This shows all your contacts and lets you note details on your meet-ups.
<img src="doc/ListContacts.png">

**Edit Contacts:** Want to change contact details? Click “Edit” on any contact.
<img src="doc/Edit.png">
