import { Input } from "@/components/ui/input";
import React from "react";
// import { useForm } from "react-hook-form";
import InputGroup from "./InputGroup";
//   methods for handling the form :::
// 🎯 React Form Handling - Complete Guide1️⃣ Controlled Components (Most Common) :::::
// function ControlledForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//       />
//       <input
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// ❌ Re-renders on every keystroke

// =================================================
// 2️⃣ Uncontrolled Components (Using Refs)
// DOM controls the form state.
// function UncontrolledForm() {
//   const nameRef = useRef();
//   const emailRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({
//       name: nameRef.current.value,
//       email: emailRef.current.value
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input ref={nameRef} name="name" />
//       <input ref={emailRef} name="email" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// ❌ Harder to validate in real-time
// ❌ Less control over form state
// ================================================
// 3️⃣ FormData API (Native Browser API)
// function FormDataExample() {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);

//     // Get individual values
//     const name = formData.get('name');

//     // Or convert to object
//     const data = Object.fromEntries(formData);
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" />
//       <input name="email" />
//       <input type="file" name="avatar" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// ❌ No real-time validation
// ❌ Less control
// ===================================================
// 4️⃣ React Hook Form (Most Popular Library)
// import { useForm } from 'react-hook-form';

// function HookFormExample() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         {...register('name', {
//           required: 'Name is required',
//           minLength: { value: 3, message: 'Min 3 characters' }
//         })}
//       />
//       {errors.name && <p>{errors.name.message}</p>}

//       <input
//         {...register('email', {
//           required: 'Email is required',
//           pattern: {
//             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//             message: 'Invalid email'
//           }
//         })}
//       />
//       {errors.email && <p>{errors.email.message}</p>}

//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// Pros:

// ✅ Minimal re-renders (uses uncontrolled components internally)
// ✅ Built-in validation
// ✅ Less boilerplate
// ✅ Great TypeScript support
// ✅ Easy integration with UI libraries

// Cons:

// ❌ Learning curve
// ❌ External dependency
// =================================================================
// 2. Form Validation
// Types of Validation:

// Client-side: Instant feedback (required, email format, min/max length)
// Server-side: Database checks (email already exists)
// Real-time: On every keystroke
// On blur: When user leaves field
// On submit: Before submitting
// =========================
// How do you optimize form performance?" Answers: Use React Hook Form (uncontrolled internally, fewer re-renders)
// Debounce validation for expensive operations
// Use useCallback for event handlers
// Memoize validation functions
// Avoid inline functions in JSX
// =========================================
// 2️⃣ "How do you handle form validation in React?"
// A) Manual validation (Controlled components)
// B) Using React Hook Form (easiest)
// C) HTML5 validation (simplest, but limited)

// ==============================================
//  "What's FormData API and when would you use it?"
// FormData = Native browser API to collect form data
// No state, no onChange! Just works! ✨
// ======================================================
// Controlled components = More work (write validation + optimize performance)
// React Hook Form = Less work (validation + performance handled for you)
// ===========================================================================
// What React Router Forms actually are

// React Router (v6.4+) introduced Data APIs:

// <Form>

// action()

// loader()
// useActionData()
export default function Form({ children, onSubmit, formStyle }) {
  return (
    <form className={formStyle} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
