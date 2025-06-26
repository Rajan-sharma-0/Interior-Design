import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import "./UserInfo.css";
import Footer from '../../Components/Footer/Footer'; 

function UserInfo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    address: "",
    city: "",
    state: "",
    country: "",
    Pincode: "",
  });

  const [profileImage, setProfileImage] = useState("image/avator.avif");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const REACT_APP_API = process.env.REACT_APP_API;


  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      console.error("Token not found or expired");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${REACT_APP_API}/user/detail`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        setFormData({
          firstName: response.data.first_name || "",
          lastName: response.data.last_name || "",
          email: response.data.email || "",
          contactNo: response.data.contact_no || "",
          address: response.data.address || "",
          city: response.data.city || "",
          state: response.data.state || "",
          country: response.data.country || "",
          Pincode: response.data.Pincode || "",
        });

        setProfileImage(response.data.profile_image || "image/avator.avif");
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to load user data.");
      }
    };

    // Fetch user info from API
    fetchUserData();

    // Alternatively, you could check for `user-info` from localStorage here if it's set after Google login
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    if (userInfo) {
      setFormData({
        firstName: userInfo.firstName || "",
        lastName: userInfo.lastName || "",
        email: userInfo.email || "",
        contactNo: userInfo.contactNo || "",
        address: userInfo.address || "",
        city: userInfo.city || "",
        state: userInfo.state || "",
        country: userInfo.country || "",
        Pincode: userInfo.Pincode || "",
      });
      setProfileImage(userInfo.profileImage || "image/avator.avif");
    }
  }, []);  // Empty dependency array ensures this runs once on mount

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storedToken = localStorage.getItem("token");

      if (!storedToken) {
        console.error("Token not found or expired");
        return;
      }

      const updatedData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        contact_no: formData.contactNo,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        Pincode: formData.Pincode,
      };

      const response = await axios.patch(
        `${REACT_APP_API}/user/detail`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Profile updated successfully!");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error("Failed to update user data");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Failed to update profile. Please try again.");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const checkInputs = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  return (
    <div className="main-container">
       
      <div className="main-div">
    <Sidebar/>
        <section className="main-section">
          <div className="ma-in">
            <h1 className="p-1">My Profile</h1>
          </div>
          <div className="image-person">
            <label htmlFor="file-input" className="img-photo-label">
              <img src={profileImage} className="img-" alt="Profile" />
            </label>
            {successMessage && <p className="success-message">{successMessage}</p>}
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>

          <form className="profile-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  readOnly
                  disabled
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactNo">Contact No.</label>
                <input
                  type="tel"
                  id="contactNo"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group full-width">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Pincode">Pincode</label>
                <input
                  type="text"
                  id="Pincode"
                  name="Pincode"
                  value={formData.Pincode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {error && <p className="error-message">{error}</p>}

            <div className="submit-btn">
              <button type="submit" className="form-btn" disabled={!checkInputs()}>
                Save Changes
              </button>
            </div>
          </form>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default UserInfo;