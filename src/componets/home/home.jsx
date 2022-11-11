


function home() {
    return (
      <div>
        <p>This is home</p>
      
      </div>
    );
  }
  
  export default home;



  // const validationSchema = yup.object({
  //   email: yup
  //     .string('Enter your email')
  //     .email('Enter a valid email')
  //     .required('Email is required'),
  //   password: yup
  //     .string('Enter your password')
  //     .min(8, 'Password should be of minimum 8 characters length')
  //     .required('Password is required'),
  // });



  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: (values) => {
  //     console.log("values", values)
  //   },
  // });

  // return (
  //   <div className='loginForm'>

  //     <form onSubmit={formik.handleSubmit}>
  //       <label htmlFor="">Enter Email </label>
  //       <input
  //         id="email"
  //         name="email"
  //         label="Email"
  //         value={formik.values.email}
  //         onChange={formik.handleChange}

  //       />

  //       {(formik.touched.email && Boolean(formik.errors.email)) ?
  //         <span style={{ color: "red" }}>{formik.errors.email}</span> :
  //         null}

  //       <br />

  //       <label htmlFor="">Enter Password </label>
  //       <input
  //         id="password"
  //         name="password"
  //         label="Password"
  //         type="password"
  //         value={formik.values.password}
  //         onChange={formik.handleChange}

  //       />
  //       {(formik.touched.password && Boolean(formik.errors.password)) ?
  //         <span style={{ color: "red" }}>{formik.errors.password}</span> :
  //         null}
  //       <br />

  //       <button color="primary" variant="contained" fullWidth type="submit">
  //         Submit
  //       </button>
  //     </form>
