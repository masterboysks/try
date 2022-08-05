import React from "react";
import profile from "./profile.png";

const Profile = () => {
  return (
    <div className="md:flex ring-black ring-opacity-5 ring-1 form-solid lg:w-10/12 p-4 my-12 rounded-md shadow">
      <img
        src={profile}
        alt="Ranjit sherstha"
        className="md:mr-2 h-fit mx-auto rounded"
      />
      <div className="flex-1">
        <div className="md:grid-cols-2 gap-x-5 gap-y-2 grid grid-cols-1">
          <span className="md:text-start col-span-full text-primary-grey-700 text-lg font-medium text-center">
            Ranjit Sherstha
          </span>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Student ID:</span>
            <span className="text-primary-grey-700">1234</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Class/semester:</span>
            <span className="text-primary-grey-700">Nursery</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Roll no:</span>
            <span className="text-primary-grey-700">1</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Faculty:</span>
            <span className="text-primary-grey-700"></span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Status:</span>
            <span className="text-primary-grey-700">Active</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Section:</span>
            <span className="text-primary-grey-700">B</span>
          </div>
          <div className=" flex justify-between py-2">
            <span className="text-primary-grey-600">Addmission date:</span>
            <span className="text-primary-grey-700">2077/01/1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
