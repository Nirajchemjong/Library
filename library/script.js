// // importing values in js variables..

// // console.log(content.classList.add("niraj"));
// // console.log(content);

// // let arry = [];

// // for (let key in content) {
// //   arry.map((item, i) => {
// //     return (arry = content[key]);
// //   });
// // }

// // console.log(arry);

// // // Get the form elements using querySelectorAll
// // const formElements = document.querySelectorAll(
// //   ".form-control, .form-check-input"
// // );

// // // Create an array to store the values
// // const formValues = [];

// // // Iterate over the form elements and get their values
// // formElements.forEach((element) => {
// //   if (element.type === "checkbox") {
// //     formValues.push(element.checked);
// //   } else {
// //     formValues.push(element.value);
// //   }
// // });

// // // Log the form values array
// // console.log("Form Values:", formValues);

// // Create an object to store the form values
// const formData = {};

// // Get the "Submit" button element

// const submitButton = document.getElementById("submitForm");

// // Add event listener to the "Submit" button
// submitButton.addEventListener("click", function () {
//   // Get the form elements using querySelectorAll
//   const formElements = document.querySelectorAll(
//     ".form-control, .form-check-input"
//   );

//   // Iterate over the form elements and assign their values to the formData object
//   formElements.forEach((element) => {
//     const fieldName = element.getAttribute("aria-label");
//     if (element.type === "checkbox") {
//       formData[fieldName] = element.checked;
//     } else {
//       formData[fieldName] = element.value;
//     }
//   });

//   // Log the formData object
//   console.log("Form Data:", formData);

//   // You can perform further operations with the form data here
// });

// ======================Starting Again from Start =============
