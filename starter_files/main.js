// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];




// -------- Your Code Goes Below this Line --------
let formFields  = document.getElementById( "fields" );

formData.forEach(function(fieldData) {

  let input     = document.createElement('input');

  input.setAttribute('type', fieldData.type);
  input.setAttribute('placeholder', fieldData.label);
  input.setAttribute('id', fieldData.id);

  if (fieldData.type === 'select'){
    let selectButton        = document.createElement('select');

    selectButton.setAttribute('placeholder', fieldData.label);

    formFields.appendChild(selectButton);

    fieldData.options.forEach(function(selectData) {
      let selectButtonContent = document.createElement('option');

      selectButtonContent.setAttribute('label', selectData.label);
      selectButtonContent.setAttribute('value', selectData.value);

      selectButton.appendChild(selectButtonContent);
    });
  }
      else if (fieldData.type === 'textarea'){
        let textAreaButton   = document.createElement('textarea');

        textAreaButton.setAttribute('placeholder', fieldData.label);
        
        formFields.appendChild(textAreaButton);
    } else {
      formFields.appendChild(input);
    }
});
