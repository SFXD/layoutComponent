Use a lightning component to render fields from any object, in 1 or 2 columns, change the mode, and add a header (optional). This package installs a lightning component in your org that can be used from any lightning page.

# Installation
* Install Link:  /packaging/installPackage.apexp?p0=04t4J000000B1d0
* No Password

# Configure Components
## Lightning Record Page Section (lgt_rec_pg_section)
This component can be used on any Lightning page. Click edit page in the gear icon on a lightning page and click "Edit Page" Once inside the Lightning App Builder drag the Layout Component onto the Lightning Record Page.
![Lightning Record Page Drag On](https://user-images.githubusercontent.com/20356405/55030392-2efdff80-5004-11e9-8c0d-9bb28ad07523.gif)

## Community Record Page Section (com_rec_pg_section)
The component can be used on any Community Record Detail page.  From the community builder go to a custom object page and drag the component on the page.
![Community Record Drag On](https://user-images.githubusercontent.com/20356405/55030212-c878e180-5003-11e9-9c48-f4e68e7deed8.gif)

# Edit the attributes
* Object API Name - The API name of the object where the layout was placed (Community Record Page only)
* Field Names - Comma separated list of API Field names from object (limit 4000 characters)
* Header - fill in the value for a header to create a collapisable section that mimics a Salesforce lightning page layout section
* Mode - Mode of the layout
    * readonly - The readonly mode loads the form with output fields only, and without Submit or Cancel buttons.
    * view - The view mode loads the form using output fields with inline editing enabled, indicated by the edit icons near each field. If the user clicks an edit icon, all fields in the form become editable, and the form displays Submit and Cancel buttons.
    * edit - When a recordId is passed, edit mode loads the form with input fields displaying the specified record’s field values. The form also displays Submit and Cancel buttons.
* Number of Columns - Integer for number of columns (can only be 1 or 2)

## Lightning Record Page Section (lgt_rec_pg_section)
![Lightning Record Page Config](https://user-images.githubusercontent.com/20356405/55031053-9ec0ba00-5005-11e9-9d5b-ad94b0d12f5a.gif)

## Community Record Page Section (com_rec_pg_section)
![Community Record Page Configuration](https://user-images.githubusercontent.com/20356405/55030245-d75f9400-5003-11e9-86c5-a5bb8c5a2b5a.gif)

# Example Uses
Use this component inside other lightning components to create a UI or inside certain experiences since it is global in scope.  Examples of component usage will be added in a separate folder.

# Shoutouts
* SFDCPanther - for teaching me lightning components
* SFDCMonkey - for teaching me lightning components