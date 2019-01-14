# Summary
Use a lightning component to render fields from any object, in 1 or 2 columns, change the mode, and add a header (optional). This package installs a lightning component in your org that can be used from any lightning page.

# Installation
Install the package based on the details below:
* Install Link: /packaging/installPackage.apexp?p0=04t1U000000o1Wl

# Configure Layout Component
This component can be used on any Lightning page.  Click edit page in the gear icon on a lightning page and click "Edit Page"
Once inside the Lightning App Builder drag the Layout Component onto the Lightning Record Page.
![dev org layout component drag](https://user-images.githubusercontent.com/20356405/51133383-c4bf2680-182c-11e9-91f5-3cbaf74abea1.gif)

# Edit the attributes
* Object API Name - API name of the object found in setup menu
* Field Names - Comma separated list of API Field names from object (limit 4000 characters)
* Mode - Mode of the layout
	* readonly - The readonly mode loads the form with output fields only, and without Submit or Cancel buttons.
	* view - The view mode loads the form using output fields with inline editing enabled, indicated by the edit icons near each field. If the user clicks an edit icon, all fields in the form become editable, and the form displays Submit and Cancel buttons.
	* edit - When a recordId is passed, edit mode loads the form with input fields displaying the specified record’s field values. The form also displays Submit and Cancel buttons.
* Number of Columns - Integer of number of columns (can only be 1 or 2)
* Header - fill in the value for a header to create a collapisable section that mimics a Salesforce lightning page layout section
![dev org layout component attributes](https://user-images.githubusercontent.com/20356405/51133424-db657d80-182c-11e9-87b9-eab41157e626.gif)

# Example Uses
Use this component inside other lightning components to create a UI or inside certain experiences since it is global in scope.  Examples of component usage will be added in a separate folder.

# Shoutouts
SFDCPanther - for teaching me lightning components  
SFDCMonkey - for teaching me lightning components
