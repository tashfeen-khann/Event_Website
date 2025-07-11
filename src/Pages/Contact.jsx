import React, { useState, useEffect } from 'react';
import bride from '../assets/imgs/bride.webp';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Thank-You'); 
  };


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fianceFirstName: '',
    fianceLastName: '',
    email: '',
    telephone: '',
    guestCount: '',
    location: '',
    budget: '',
    additionalDetails: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [touched, setTouched] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched({
      ...touched,
      [id]: true
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.telephone.trim()) {
      errors.telephone = 'Telephone Number is required';
      isValid = false;
    } else if (!/^\d{11}$/.test(formData.telephone)) {
      errors.telephone = 'Telephone Number is invalid';
      isValid = false;
    }

    if (!formData.guestCount.trim()) {
      errors.guestCount = 'Guest count is required';
      isValid = false;
    }

    if (!formData.budget.trim()) {
      errors.budget = 'Budget is required';
      isValid = false;
    }

    setFormErrors(errors);
    setIsFormValid(isValid);
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Submit the form
      alert('Form submitted successfully!');
    }
  };

  // Inline styles
  const styles = {
    h6: { fontSize: '0.9rem' ,marginTop:'15px'},
    h4: { fontSize: '1rem' },
    label: { fontSize: '0.8rem',marginTop:'10px' },
    input: { fontSize: '0.8rem' },
    textarea: { fontSize: '0.8rem', marginBottom: '15px' },
    button: {
      fontSize: '15px',
      marginBottom: '1rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block'
    }
  };

  return (
    <>
      <div>
        <h2 style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Cormorant Garamond', marginTop: '15px' }}>
          We can't wait to meet you
        </h2>
      </div>
      <div className="container mt-4" style={{ width: '950px' }}>
        <div className="row">
          <div className="col-md-6">
            <img
              src={bride}
              alt="Bride"
              className="img-fluid"
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
          </div>
          <div className="col-md-6 ">
            <form onSubmit={handleSubmit}>
              <h6 style={styles.h6}>WHO IS GETTING MARRIED?</h6>
              <div className="form-group">
                <label htmlFor="firstName" style={styles.label}>Your First Name *</label>
                <input
                  type="text"
                  className={`form-control ${touched.firstName && formErrors.firstName ? 'is-invalid' : ''}`}
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  style={styles.input}
                />
                {touched.firstName && formErrors.firstName && (
                  <div className="invalid-feedback" style={styles.label}>{formErrors.firstName}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="lastName" style={styles.label}>Your Last Name *</label>
                <input
                  type="text"
                  className={`form-control ${touched.lastName && formErrors.lastName ? 'is-invalid' : ''}`}
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  style={styles.input}
                />
                {touched.lastName && formErrors.lastName && (
                  <div className="invalid-feedback" style={styles.label}>{formErrors.lastName}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="fianceFirstName" style={styles.label}>Your Fiancé’s First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fianceFirstName"
                  value={formData.fianceFirstName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  style={styles.input}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fianceLastName" style={styles.label}>Your Fiancé’s Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fianceLastName"
                  value={formData.fianceLastName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  style={styles.input}
                />
              </div>
              <h6 style={styles.h6}>CONTACT INFORMATION</h6>
              <div className="form-group">
                <label htmlFor="email" style={styles.label}>Your E-Mail Address *</label>
                <input
                  type="email"
                  className={`form-control ${touched.email && formErrors.email ? 'is-invalid' : ''}`}
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  style={styles.input}
                />
                {touched.email && formErrors.email && (
                  <div className="invalid-feedback" style={styles.label}>{formErrors.email}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="telephone" style={styles.label}>Your Telephone Number *</label>
                <input
                  type="tel"
                  className={`form-control ${touched.telephone && formErrors.telephone ? 'is-invalid' : ''}`}
                  id="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  style={styles.input}
                />
                {touched.telephone && formErrors.telephone && (
                  <div className="invalid-feedback" style={styles.label}>{formErrors.telephone}</div>
                )}
              </div>
              <h4 style={styles.h6}>EVENT INFORMATION</h4>
              <div className="form-group">
                <label htmlFor="guestCount" style={styles.label}>What is your anticipated guest count?</label>
                <input
                  type="number"
                  className={`form-control ${touched.guestCount && formErrors.guestCount ? 'is-invalid' : ''}`}
                  id="guestCount"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  style={styles.input}
                />
                {touched.guestCount && formErrors.guestCount && (
                  <div className="invalid-feedback" style={styles.label}>{formErrors.guestCount}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="location" style={styles.label}>Do you have a location, venue, or time of year in mind?</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  style={styles.input}
                />
              </div>
              <div className="form-group">
                <label htmlFor="budget" style={styles.label}>
                  What is your anticipated wedding budget? Please note, our planning services begin at $4000.
                </label>
                <input
                  type="text"
                  className={`form-control ${touched.budget && formErrors.budget ? 'is-invalid' : ''}`}
                  id="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  style={styles.input}
                />
                {touched.budget && formErrors.budget && (
                  <div className="invalid-feedback" style={styles.label}>{formErrors.budget}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="additionalDetails" style={styles.label}>
                  Please share any additional details or requests that will help us better understand your wedding vision.
                </label>
                <textarea
                  className="form-control"
                  id="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  rows="4"
                  style={styles.textarea}
                />
              </div>
              <button type="submit" className="btn btn-dark" style={styles.button} disabled={!isFormValid} onClick={handleClick}> 
                Send 
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
