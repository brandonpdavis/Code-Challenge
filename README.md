## Getting Started 
This is a sample project that allows end users to search for food trucks in a given area.

## Global Dependencies and Setup
These steps are necessary to get started regardless of local setup

- Create an account or login to [DataSF][https://data.sfgov.org/login]
- When logged in go to the <a href="https://data.sfgov.org/profile/edit/developer_settings" target="_blank">Developer Settings</a> page and click the 'Create new API Key' button
- Name your key
- Copy your Key ID and update the `DataSFKey` variable in the .env file
- Copy your Key Secret and update the `DataSFSecret` variable in the .env file
- In your .env file set the `PORT` variable to `3306` (You can set it to whatever port, but this port number useful for future use of mySQL)

## Setup Local Environment (Windows)
## Dependencies
- [node.js](https://nodejs.org)

Node.js and npm can be installed from a download link. Go to the <a href="https://nodejs.org/en/download/" target="_blank">Node installation page</a>, and download the Node installer.
Once it's done, you can test to see both node and npm functioning by opening PowerShell (or any shell) and typing:
```sh
node -v
npm -v
```

## Setup Local Environment (Mac)
## Dependencies

- [node.js](https://nodejs.org)
- [Homebrew](https://brew.sh) (optional but I recommend using brew because it keeps the latest version of node available.)

<h4>Installing Homebrew<h4>
Open terminal and type the following
```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
To ensure it succesfully installed and to check the version, type the following command:
```sh
brew -v
```
```sh
brew install node

```
Verify node installed and check the version, type the following command:
```sh
node -v
npm -v
```
<h4>Clone repo and start your local environment<h4>
Clone this repository into a new folder on your local machine, then:

```
cd repo-name

npm init

npm install
```

Terminal 1 Run - `npm start`

(if nodemon is not installed, run this to install it): `npm install -g nodemon`

```
nodemon app.js
```

Now you should be able to load the app via:
http://localhost:3306/


<h2> API Documentation </h2>

<h3>Quick Reference Guide</h3>
<a target="_blank" href="https://dev.socrata.com/foundry/data.sfgov.org/rqzj-sfat">Detailed Documentation</a>
<b>Endpoint: </b> https://data.sfgov.org/resource/rqzj-sfat.json
<h4>Field Names</h4>
<table style="width: 100%;">
<tbody>
  <tr>
    <td>Key</td>
    <td>Type</td>
    <td>Example Value</td>
    <td>description</td>
  </tr>
  <tr>
    <td>objectid</td>
    <td>number</td>
    <td>1334734</td>
    <td>locationId</td>
  </tr>
  <tr>
    <td>applicant</td>
    <td>text</td>
    <td>Rita's Catering</td>
    <td>Name of Business/Applicant</td>
  </tr>
  <tr>
    <td>facilitytype</td>
    <td>text</td>
    <td>Truck</td>
    <td>Type of Facility</td>
  </tr>
  <tr>
    <td>cnn</td>
    <td>number</td>
    <td>1334734</td>
    <td></td>
  </tr>
  <tr>
    <td>locationdescription</td>
    <td>text</td>
    <td>MISSION ST: 06TH ST to 07TH ST (1000 - 1099)</td>
    <td>Location(s) where to find the truck</td>
  </tr>
  <tr>
    <td>address</td>
    <td>text</td>
    <td>1028 MISSION ST</td>
    <td>Address for applicant</td>
  </tr>
  <tr>
    <td>blocklot</td>
    <td>text</td>
    <td>3703033</td>
    <td>Parcel number</td>
  </tr>
  <tr>
    <td>block</td>
    <td>text</td>
    <td>??</td>
    <td>??</td>
  </tr>
  <tr>
    <td>lot</td>
    <td>text</td>
    <td>??</td>
    <td>??</td>
  </tr>
  <tr>
    <td>permit</td>
    <td>text</td>
    <td>??</td>
    <td>??</td>
  </tr>
  <tr>
    <td>status</td>
    <td>text</td>
    <td>??</td>
    <td>??</td>
  </tr>
  <tr>
    <td>fooditems</td>
    <td>text</td>
    <td>??</td>
    <td>??</td>
  </tr>
  <tr>
    <td>x</td>
    <td>number</td>
    <td>??</td>
    <td>??</td>
  </tr>
  <tr>
    <td>y</td>
    <td>number</td>
    <td>??</td>
    <td>??</td>
  </tr>
  <tr>
    <td>lattitude</td>
    <td>number</td>
    <td>??</td>
    <td>??</td>
  </tr>
  <tr>
    <td>longitude</td>
    <td>number</td>
    <td>??</td>
    <td>??</td>
  </tr>
  <tr>
    <td>schedule</td>
    <td>text</td>
    <td>??</td>
    <td>??</td>
  </tr>
  <tr>
    <td>dayshours</td>
    <td>text</td>
    <td>??</td>
    <td>??</td>
  </tr>
  <tr>
    <td>noisent</td>
    <td>floating_timestamp</td>
    <td>??</td>
    <td>??</td>
  </tr>
  <tr>
    <td>approved</td>
    <td>floating_timestamp</td>
    <td>??</td>
    <td>??</td>
  </tr>
  <tr>
    <td>recieved</td>
    <td>text</td>
    <td>??</td>
    <td>??</td>
  </tr>
  <tr>
    <td>priorpermit</td>
    <td>number</td>
    <td>??</td>
    <td>??</td>
  </tr>
  <tr>
    <td>expirationdate</td>
    <td>floating_timestamp</td>
    <td>??</td>
    <td>??</td>
  </tr>
  <tr>
    <td>location</td>
    <td>point</td>
    <td>??</td>
    <td>??</td>
  </tr>
</tbody>
</table>
