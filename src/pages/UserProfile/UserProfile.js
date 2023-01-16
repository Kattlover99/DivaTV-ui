import React from "react";
import { Sidebar } from "../../components";
import { useAuth } from "../../Context/AuthProvider";
import "./UserProfile.css";
const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div className="main-page-container">
      <Sidebar />
      <div className="main-page flex-vt">
        <div className="flex-vt account-details-container">
          <p className="text-lg">Account details</p>
          <p className="text-sm">
            Name : {user.firstName} {user.lastName}
          </p>
          <p className="text-sm">Email : {user.email}</p>
        </div>
      </div>
    </div>
  );
};
export { UserProfile };
