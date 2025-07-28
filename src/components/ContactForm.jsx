import React, { useState } from "react";
import address from "../assets/address.svg"
import email from "../assets/email.svg"
import phone from "../assets/phone.svg"
import contact from "../assets/contact.svg"

const ContactForm = () => {
    return (
<div className="mt-20" id="Contact">
  <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide ">
    Got a Question?
  </h2>
  <h3 className="text-center">We'd like to talk more about what you need</h3>

  <div className="flex flex-wrap justify-around mt-10 text-neutral-500 p-2 mb-20">
      
    <div className="p-3 text-center flex flex-col justify-center mb-4 borderBox w-48 h-40"> {/* Dimensioni fisse */}
      <img src={contact} alt="Contact" className="mx-auto mb-2 w-8 h-8"/>
      <h1 className="font-bold">Contact</h1>
      <p>Contact name</p> {/* Sostituisci con il link o testo reale */}
    </div>

    <div className="p-3 text-center flex flex-col justify-center mb-4 borderBox w-48 h-40 "> {/* Dimensioni fisse */}
      <a target="_blank" href="https://www.google.com/maps/place/Via+Antonio+Cantore,+48,+25128+Brescia+BS/@45.5549439,10.2175521,16z/data=!3m1!4b1!4m6!3m5!1s0x4781764e9bce4c7d:0x9941cb2e97979757!8m2!3d45.5549402!4d10.220127!16s%2Fg%2F11c24b2m2y?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D">
        <img src={address} alt="Address" className="mx-auto mb-2 w-8 h-8"/>
        <h1 className="font-bold">Address</h1>
        <p className="break-words">Address</p> {/* Sostituisci con l'indirizzo reale */}
      </a>
    </div>
    
    <div className="p-3 text-center flex flex-col justify-center mb-4 borderBox w-48 h-40"> {/* Dimensioni fisse */}
      <a href="mailto:gpasini@live.it">
        <img src={email} alt="Email" className="mx-auto mb-2 w-8 h-8"/>
        <h1 className="font-bold">Email</h1>
        <p className="break-words">email@email.it</p> 
      </a>
    </div>

    <div className="p-3 text-center flex flex-col justify-center mb-4 borderBox w-48 h-40"> {/* Dimensioni fisse */}
      <a href="tel:+393663032012">
        <img src={phone} alt="Phone" className="mx-auto mb-2 w-8 h-8"/>
        <h1 className="font-bold">Phone</h1>
        <p>+0000000000</p> {/* Sostituisci con il numero di telefono reale */}
      </a>
    </div>    
  </div>
</div>


    );
}

export default ContactForm

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     message: "",
//     privacyPolicy: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="mt-20 flex justify-between h-screen">
//       <form className="w-full max-w-lg" onSubmit={handleSubmit}>
//         <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide">Contact us</h2>

//         <div className="flex mb-4">
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             placeholder="First Name"
//             className="mr-2 w-full border p-2 text-black"
//           />
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             placeholder="Last Name"
//             className="w-full border p-2 text-black"
//           />
//         </div>

//         <div className="mb-4">
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="w-full border p-2 text-black"
//           />
//         </div>

//         <div className="mb-4">
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             placeholder="Phone Number"
//             className="w-full border p-2 text-black"
//           />
//         </div>

//         <div className="mb-4">
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Message"
//             className="w-full border p-2  h-32 text-black"
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-black text-white p-2 hover:bg-gray-800 transition mb-20"
//         >
//           SEND MESSAGE
//         </button>
//       </form>

//       <div className="ml-12 text-gray-700 flex flex-col justify-between h-full items-start w-1/3">
//         <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide">Get in Touch</h2>

//         <div className="flex-grow flex flex-col justify-center">
//           <p className="mb-4">
//             You need more information? Check what other people are saying about our product.
//             They are very happy with their purchase.
//           </p>
//           <p className="mb-2">
//             <strong>Phone:</strong> +1(424) 535 3523
//           </p>
//           <p className="mb-2">
//             <strong>Email:</strong> hello@mail.com
//           </p>
//           <p>
//             <strong>Support:</strong> <a href="#" className="text-blue-600 underline">Open Support Ticket</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
