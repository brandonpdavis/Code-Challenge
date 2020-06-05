<h1>San Fran Food Finder</h1>
This starter app leverages Azure Maps and data from the city and county of San Francisco. It is a quick set up and you can get a working app up and running leveraging the free tier from Azure. 

## Getting Started 
This is a sample project that allows end users to search for food trucks in a given area. This is a basic app that can be built off on. Currently it leverages extenal services, but is set up to where you can set up local data, set proxy end points, etc.

## SFData and API Key Setup
These steps are necessary to get started regardless of local setup

- Create an account or login to [DataSF](https://data.sfgov.org/login)
- When logged in go to the <a href="https://data.sfgov.org/profile/edit/developer_settings" target="_blank">Developer Settings</a> page and click the 'Create new API Key' button
- Name your key
- Copy your Key ID and update the `DataSFKey` variable in the .env file
- Copy your Key Secret and update the `DataSFSecret` variable in the .env file
- In your .env file set the `PORT` variable to `3306` (You can set it to whatever port, but this port number useful for future use of mySQL)

# Azure Maps Setup
( [Click Here](https://docs.microsoft.com/en-us/azure/azure-maps/) for more detailed documentation on Azure Maps.)
- In the upper left-hand corner of the Azure portal, click Create a resource.
- In the Search the Marketplace box, type Maps.
- From the Results, select Maps. Click Create button that appears below the map.
- On the Create Maps Account page, enter the following values:
- The Subscription that you want to use for this account.
- The Resource group name for this account. You may choose to Create new or Use existing resource group.
- The Name of your new account.
- The Pricing tier for this account.
- Read the License and Privacy Statement, and check the checkbox to accept the terms.
- Click the Create button.

Once your Maps account is successfully created, retrieve the primary key that enables you to query the Maps APIs.

- Open your Maps account in the portal.
- In the settings section, select Authentication.
- Copy the Primary Key to your clipboard. Save it locally or to your .env file.



## Setup Local Environment (Windows)
## Dependencies
- [node.js](https://nodejs.org)

Node.js and npm can be installed from a download link. Go to the <a href="https://nodejs.org/en/download/" target="_blank">Node installation page</a>, and download the Node installer.
Once it's done, you can test to see both node and npm functioning by opening PowerShell (or any shell) and typing:
```
node -v
npm -v
```

## Setup Local Environment (Mac)
## Dependencies

- [node.js](https://nodejs.org)
- [Homebrew](https://brew.sh) (optional but I recommend using brew because it keeps the latest version of node available.)

# Installing Homebrew
Open terminal and type the following:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
To ensure it succesfully installed and to check the version, type the following command:
```
brew -v
```
```
brew install node
```
Verify node installed and check the version, type the following command:
```
node -v
npm -v
```
# Clone repo and start your local environment 
Clone this repository into a new folder on your local machine, then:

```
cd repo-name

npm init

npm install
```

If nodemon is not installed, run this to install it): `npm install -g nodemon`

```
npm start
```

Now you should be able to load the app via:
http://localhost:3306/

![](truck.gif)
## How it Works
There are two input boxes on the page. The first is a look up that leverages [Azure Maps](https://atlas.microsoft.com/). It is an autocomplete look up leveraging jQuery. Upon selecting it feeds longitude and latitude coordinates to two hidden fields (tech debt). The next field is hitting the data provided by the City an County of San Francisco. It is taking the input value and querying against the `fooditems` field. When you click search it takes all of that data and builds a new map.

## Future Improvements/Ideas
- Given the time and resources, you could add more filtering fields agaisnt what is avaiable from the San Francisco data set such as days of operation or permit status. I provided a quick cheat list of fields as well as a link to detailed documentation. 


## API Documentation 

# Quick Reference Guide
(For more information on the SFData endpoint you can go to the detailed documentation<a target="_blank" href="https://dev.socrata.com/foundry/data.sfgov.org/rqzj-sfat">here</a></br>

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
    <td>3703</td>
    <td>The block value of the block lot or parcel</td>
  </tr>
  <tr>
    <td>lot</td>
    <td>text</td>
    <td>033</td>
    <td>The lot number from the blocklot</td>
  </tr>
  <tr>
    <td>permit</td>
    <td>text</td>
    <td>19MFF-00047</td>
    <td>Permit number of applicant</td>
  </tr>
  <tr>
    <td>status</td>
    <td>text</td>
    <td>APPROVED</td>
    <td>Status of application</td>
  </tr>
  
  <tr>
    <td>fooditems</td>
    <td>text</td>
    <td>Filipino Food</td>
    <td>Description of food served</td>
  </tr>
  <tr>
    <td>x</td>
    <td>number</td>
    <td>6009812.085</td>
    <td>X Coordinate</td>
  </tr>
  <tr>
    <td>y</td>
    <td>number</td>
    <td>2112361.07</td>
    <td>Y Coordinate</td>
  </tr>
  <tr>
    <td>lattitude</td>
    <td>number</td>
    <td>37.7806943774082</td>
    <td>Lattitude Coordinate</td>
  </tr>
  <tr>
    <td>longitude</td>
    <td>number</td>
    <td>-122.409668813219</td>
    <td>Longitude Coordinate</td>
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
    <td>Fr:11AM-3PM</td>
    <td>Hours of Operation</td>
  </tr>


  <tr>
    <td>location</td>
    <td>point</td>
    <td>POINT (-122.409668813219 37.7806943774082)</td>
    <td>Location variable to find Food Truck based off longitude and latitude</td>
  </tr>
</tbody>
</table>
