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

const book = document.querySelectorAll(".form-control, .form-check-input");
let bookdataArr = [];

const btnOnsubmit = document.querySelector("#submitForm");

btnOnsubmit.addEventListener("click", () => {
  // here adding eventlistener on clicking button

  let bookdata = {};

  book.forEach((element) => {
    const formName = element.getAttribute("aria-label");

    if (element.type === "checkbox") {
      bookdata[formName] = element.checked;
    } else {
      bookdata[formName] = element.value;
    }
  });
  bookdataArr.push(bookdata);
  //displaying pushed data
  const cardElm = document.querySelector(".displayCard");

  cardContent = "";
  bookdataArr.forEach((bookdata) => {
    cardContent = `
  
           <div class="card-body justify-content-center" style="width:18rem" >
               <h5 class="card-title">${bookdata.Title}</h5>
             <h5 class="card-text">${bookdata.Authur}</h5>
              <p class="card-text">${bookdata.Review}</p>
            <a href="#" class="btn btn-danger">delete</a>
            </div>
           
          `;
  });
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerHTML = cardContent;
  cardElm.appendChild(newCard);
  console.log(bookdataArr);
});















// =================GPT answers =============
