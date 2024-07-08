import './Form1.css'
import { useFormik } from 'formik'
const Form1 = () => {

  const initialValues = {
    name: '',
    email: '',
    password: '',
  }

  const onSubmit = (values) => {
    console.log(values)
    // this will reset the form after form 
    formik.handleReset();
  }

  const validate = (values) => {
    const error = {};
    if (!values.name) {
      error.name = 'Required';
    }
    if (!values.email) {
      error.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      error.email = 'Invalid email address';
    }
    if(!values.password){
      error.password = 'Required'
    }
    return error;
  }


  const formik = useFormik(
    {
      initialValues,
      onSubmit,
      validate,
    });

  return (
    <div>
      <header style={{ padding: "10px", backgroundColor: "#a2a2a2" }}>
        <h1 style={{ textAlign: "center" }}>welcome to learn about the formik</h1>
      </header>
      <main>
        <div className="form_container">
          <form action="" onSubmit={formik.handleSubmit}>

            {/* name */}
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
            {
              formik.errors.name && formik.touched.name ? <div className='err'>{formik.errors.name}</div> : null
            }


            {/* email */}
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
            {
              formik.errors.email && formik.touched.email ? <div className='err'>{formik.errors.email}</div> : null
            }



            {/* password */}
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />

            {
              formik.errors.password && formik.touched.password ? <div className='err'>{formik.errors.password}</div> : null
            }

            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Form1
