Use a lightning component to render fields from any object, in 1 or 2 columns, change the mode, and add a header (optional). This package installs a lightning component in your org that can be used from any lightning page.

# Installation
* Install Link:  /packaging/installPackage.apexp?p0=04t1Q000001MP7Y
* No Password

# Configure Layout Component
This component can be used on any Lightning page.  Click edit page in the gear icon on a lightning page and click "Edit Page"
Once inside the Lightning App Builder drag the Layout Component onto the Lightning Record Page.

![dev org layout component drag](https://user-images.githubusercontent.com/20356405/52106218-dc96f880-25e9-11e9-8bcd-b88db808391f.gif)

# Edit the attributes
* Field Names - Comma separated list of API Field names from object (limit 4000 characters)
* Mode - Mode of the layout
    * readonly - The readonly mode loads the form with output fields only, and without Submit or Cancel buttons.
    * view - The view mode loads the form using output fields with inline editing enabled, indicated by the edit icons near each field. If the user clicks an edit icon, all fields in the form become editable, and the form displays Submit and Cancel buttons.
    * edit - When a recordId is passed, edit mode loads the form with input fields displaying the specified record’s field values. The form also displays Submit and Cancel buttons.
* Number of Columns - Integer for number of columns (can only be 1 or 2)
* Header - fill in the value for a header to create a collapisable section that mimics a Salesforce lightning page layout section

![layout component 1 5](https://user-images.githubusercontent.com/20356405/52106213-d012a000-25e9-11e9-9836-7ef884c74ef0.gif)

# Example Uses
Use this component inside other lightning components to create a UI or inside certain experiences since it is global in scope.  Examples of component usage will be added in a separate folder.

# Shoutouts
* SFDCPanther - for teaching me lightning components
* SFDCMonkey - for teaching me lightning components

# Versions
* 1.6 - Altered header functionality
* 1.5 - Changed the divs to <lightning:accordion>, added support for blanks in field names, and used sObjectName natively instead of user entering it
* 1.4 - Mocked the header sections from Salesforce page layout using CSS and made the header conditional
* 1.3 - Added header section from SLDS header section and controlled by CSS
* 1.2 - Added header to component as a static value rendered, and to design file
* 1.1 - Added mode and columns as attributes to be controlled by the admin and added values to design file
* 1.0 - Initial attempt...
