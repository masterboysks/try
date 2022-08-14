import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/logoHeader.png";
import { Input, Select, UploadPhoto } from "../../../components/fields";

const Form = () => {
  const arrayCountry = ["Nepal", "jhdsgf", "jdkhgfhds", "sjdhgfugfj"];
  const arrayProvince = ["Nepal", "jhdsgf", "jdkhgfhds", "sjdhgfugfj"];
  const arrayDistrict = ["Nepal", "jhdsgf", "jdkhgfhds", "sjdhgfugfj"];
  const arrayVdcMuncaliplity = ["Nepal", "jhdsgf", "jdkhgfhds", "sjdhgfugfj"];
  const arrayDateFormat = ["AD", "BS"];
  const [schoolName, setSchoolName] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [panNo, setPanNo] = useState("");
  const [eduRegistration, setEduRegistration] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [telephone, setTelephone] = useState("");
  const [alternative, setAlternative] = useState("");
  const [website, setWebsite] = useState("");
  const [mail, setMail] = useState("");
  const [country, setCountry] = useState("Select");
  const [province, setProvince] = useState("Select");
  const [district, setDistrict] = useState("Select");
  const [vdcMuncaliplity, setVdcMuncaliplity] = useState("Select");
  const [wardNo, setWardNo] = useState("");
  const [tole, setTole] = useState("");
  const [mapLink, setMapLink] = useState("");
  const [dateFormat, setDateFormat] = useState("Select");
  const [establishedDate, setEstablishedDate] = useState("");
  const [schoolLogo, setSchoolLogo] = useState("");
  const [schoolStamp, setSchoolStamp] = useState("");
  // error state
  const [errorSchoolName, setErrorSchoolName] = useState(false);
  const [errorRegistrationNo, setErrorRegistrationNo] = useState(false);
  const [errorPanNo, setErrorPanNo] = useState(false);
  const [errorEduRegistrationNo, setErrorEduRegistrationNo] = useState(false);
  const [errorMobileNo, setErrorMobileNo] = useState(false);
  const [errorTelephoneNo, setErrorTelephoneNo] = useState(false);
  const [errorCountry, setErrorCountry] = useState(false);
  const [errorProvince, setErrorProvince] = useState(false);
  const [errorDistrict, setErrorDistrict] = useState(false);
  const [errorVdcMuncaliplity, setErrorVdcMuncaliplity] = useState(false);
  const [errorWardNo, setErrorWardNo] = useState(false);
  const [errorToleNo, setErrorToleNo] = useState(false);
  const [errorDateFormat, setErrorDateFormat] = useState(false);
  const [errorEstablishedDate, setErrorEstablishedDate] = useState(false);
  const [errorSchoolLogo, setErrorSchoolLogo] = useState(false);
  const [errorSchoolStamp, setErrorSchoolStamp] = useState(false);
  //
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({
      schoolName,
      registrationNo,
      panNo,
      eduRegistration,
      postalCode,
      mobileNumber,
      telephone,
      alternative,
      website,
      mail,
      country,
      province,
      district,
      vdcMuncaliplity,
      wardNo,
      tole,
      mapLink,
      dateFormat,
      establishedDate,
      schoolLogo,
      schoolStamp,
    });
    let temp = false;
    schoolName || ((temp = true) && setErrorSchoolName(true));
    registrationNo || ((temp = true) && setErrorRegistrationNo(true));
    panNo || ((temp = true) && setErrorPanNo(true));
    eduRegistration || ((temp = true) && setErrorEduRegistrationNo(true));
    mobileNumber || ((temp = true) && setErrorMobileNo(true));
    telephone || ((temp = true) && setErrorTelephoneNo(true));
    wardNo || ((temp = true) && setErrorWardNo(true));
    tole || ((temp = true) && setErrorToleNo(true));
    establishedDate || ((temp = true) && setErrorEstablishedDate(true));
    schoolLogo || ((temp = true) && setErrorSchoolLogo(true));
    schoolStamp || ((temp = true) && setErrorSchoolStamp(true));
    country === "Select" && (temp = true) && setErrorCountry(true);
    province === "Select" && (temp = true) && setErrorProvince(true);
    district === "Select" && (temp = true) && setErrorDistrict(true);
    vdcMuncaliplity === "Select" &&
      (temp = true) &&
      setErrorVdcMuncaliplity(true);
    dateFormat === "Select" && (temp = true) && setErrorDateFormat(true);

    temp || navigate("/admin/organization-setup");
  };
  return (
    <form className="form-solid w-full my-6 rounded-md">
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div>
          <Input
            label="School/Collrge Name*"
            placeholder="XYZ school"
            error={errorSchoolName}
            setError={setErrorSchoolName}
            value={schoolName}
            setValue={setSchoolName}
          />
        </div>
        <div className="">
          <Input
            label="Registration no.*"
            placeholder="468456464584464"
            error={errorRegistrationNo}
            setError={setErrorRegistrationNo}
            value={registrationNo}
            setValue={setRegistrationNo}
          />
        </div>
        <div className="">
          <Input
            label="Pan no.*"
            placeholder="21445165412154"
            error={errorPanNo}
            setError={setErrorPanNo}
            value={panNo}
            setValue={setPanNo}
          />
        </div>

        <div className="">
          {" "}
          <Input
            label="Education reg. no*"
            placeholder="21445165412152154"
            error={errorEduRegistrationNo}
            setError={setErrorEduRegistrationNo}
            value={eduRegistration}
            setValue={setEduRegistration}
          />
        </div>
        <div className="">
          <Input
            label="Postal code"
            placeholder="33650"
            value={postalCode}
            setValue={setPostalCode}
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Mobile Number*"
            placeholder="214451654"
            error={errorMobileNo}
            setError={setErrorMobileNo}
            value={mobileNumber}
            setValue={setMobileNumber}
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Telephone Number*"
            placeholder="01-5521332"
            error={errorTelephoneNo}
            setError={setErrorTelephoneNo}
            value={telephone}
            setValue={setTelephone}
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Alternative Number"
            placeholder="01-5521335"
            value={alternative}
            setValue={setAlternative}
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Website"
            placeholder="www.xyz.com"
            value={website}
            setValue={setWebsite}
          />
        </div>
        <div className="">
          <Input
            label="Email"
            placeholder="mail@xyz.com.edu"
            value={mail}
            setValue={setMail}
          />
        </div>
        <div className="">
          <Select
            label="Country*"
            value={arrayCountry}
            error={errorCountry}
            setError={setErrorCountry}
            selected={country}
            setSelected={setCountry}
          />
        </div>
        <div className="">
          <Select
            label="Province*"
            value={arrayProvince}
            error={errorProvince}
            setError={setErrorProvince}
            selected={province}
            setSelected={setProvince}
          />
        </div>
        <div className="">
          <Select
            label="District*"
            value={arrayDistrict}
            error={errorDistrict}
            setError={setErrorDistrict}
            selected={district}
            setSelected={setDistrict}
          />
        </div>
        <div className="">
          <Select
            label="VDC/Municipality*"
            value={arrayVdcMuncaliplity}
            error={errorVdcMuncaliplity}
            setError={setErrorVdcMuncaliplity}
            selected={vdcMuncaliplity}
            setSelected={setVdcMuncaliplity}
          />
        </div>
        <div className="">
          <Input
            label="Ward no.*"
            error={errorWardNo}
            setError={setErrorWardNo}
            value={wardNo}
            setValue={setWardNo}
            placeholder="11"
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Tole.*"
            error={errorToleNo}
            setError={setErrorToleNo}
            value={tole}
            setValue={setTole}
            placeholder="XYZ"
          />
        </div>
        <div className="">
          <Input
            label="Google map link"
            value={mapLink}
            setValue={setMapLink}
            placeholder="Link here"
          />
        </div>
        <div className="">
          <Select
            label="AD/BS*"
            value={arrayDateFormat}
            error={errorDateFormat}
            setError={setErrorDateFormat}
            selected={dateFormat}
            setSelected={setDateFormat}
          />

          <span className="text-sm">
            Note:Selected date format will be used in whole system.
          </span>
        </div>
        <div className="">
          <Input
            label="Established date*"
            error={errorEstablishedDate}
            setError={setErrorEstablishedDate}
            value={establishedDate}
            setValue={setEstablishedDate}
            type="date"
          />
        </div>
        <div className="">
          <UploadPhoto
            label="School logo*"
            error={errorSchoolLogo}
            setError={setErrorSchoolLogo}
            value={schoolLogo}
            setValue={setSchoolLogo}
            id="school_logo"
          />
        </div>
        <div className="">
          <UploadPhoto
            label="School Stamp*"
            error={errorSchoolStamp}
            setError={setErrorSchoolStamp}
            value={schoolStamp}
            setValue={setSchoolStamp}
            id="school_stamp"
          />
        </div>
      </div>

      <div className="md:flex-row flex flex-col justify-between w-full my-6">
        <div className="w-44">
          *Note:Please upload logo of school as below
          <img src={logo} alt="" className="my-3" />
        </div>
        <div className=" w-fit my-auto">
          <Link
            to="#"
            className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
          >
            Cancel
          </Link>
          <div
            onClick={handleSubmit}
            className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
          >
            Save
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;

// import { Link } from "react-router-dom";
// import logo from "../../../../assets/logoHeader.png";

// const Form = () => {
//   return (
//     <form className="form-solid w-full my-6 rounded-md">
//       <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
//         <div>
//           <label className="my-6 text-sm" htmlFor="Student Id">
//             School/College Name*
//           </label>
//           <br />
//           <input
//             className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
//             type="text"
//             placeholder="XYZ school"
//           />
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Student Id">
//             Registration no.*
//           </label>
//           <br />
//           <input
//             className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
//             type="number"
//             placeholder="Registration number"
//           />
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Student Id">
//             Pan no.*
//           </label>
//           <br />
//           <input
//             className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
//             type="number"
//             placeholder="pan number"
//           />
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Student Id">
//             Education reg. no*
//           </label>
//           <br />
//           <input
//             className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
//             type="number"
//             placeholder="Registration number"
//           />
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Student Id">
//             Postal code
//           </label>
//           <br />
//           <input
//             className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
//             type="number"
//             placeholder="44600"
//           />
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Student Id">
//             Mobile Number*
//           </label>
//           <br />
//           <input
//             className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
//             type="number"
//             placeholder="Mobile number"
//           />
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Student Id">
//             Telephone Number*
//           </label>
//           <br />
//           <input
//             className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
//             type="number"
//             placeholder="Telephone number"
//           />
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Student Id">
//             Alternative Number
//           </label>
//           <br />
//           <input
//             className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
//             type="number"
//             placeholder="Telephone number"
//           />
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Student Id">
//             Website
//           </label>
//           <br />
//           <input
//             name="url"
//             className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
//             type="text"
//             placeholder="www.xyz.com"
//           />
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Student Id">
//             Email
//           </label>
//           <br />
//           <input
//             className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
//             type="text"
//             placeholder="mail@xyz.com.edu"
//           />
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Class / Semester">
//             Country*
//           </label>
//           <br />
//           <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
//             <option value="Test">Select</option>
//           </select>
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Faculty">
//             Province*
//           </label>
//           <br />
//           <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
//             <option value="Test">Select</option>
//           </select>
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Faculty">
//             District*
//           </label>
//           <br />
//           <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
//             <option value="Test">Select</option>
//           </select>
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Student Id">
//             VDC/Municipality*
//           </label>
//           <br />
//           <select
//             className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
//             type="text"
//           >
//             <option value="test">Select</option>
//           </select>
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Student Id">
//             Ward no.*
//           </label>
//           <br />
//           <input
//             className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
//             type="number"
//             placeholder="11"
//           />
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Student Id">
//             Tole*
//           </label>
//           <br />
//           <input
//             className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
//             type="text"
//             placeholder="XYZ"
//           />
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Student Id">
//             Google map link
//           </label>
//           <br />
//           <input
//             name="url"
//             className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
//             type="text"
//             placeholder="Link here"
//           />
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Faculty">
//             AD/BS*
//           </label>
//           <br />
//           <select
//             placeholder="BS"
//             className="w-full p-2 my-[6px]   cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm"
//           >
//             <option value="bs">BS</option>
//             <option value="ad">AD</option>
//           </select>
//           <span className="text-sm">
//             Note:Selected date format will be used in whole system.
//           </span>
//         </div>
//         <div className="">
//           <label className="my-6 text-sm" htmlFor="Student Id">
//             Established date*
//           </label>
//           <br />
//           <input
//             className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-40 text-primary-grey-700 text-sm"
//             type="date"
//           />
//         </div>
//         <div className="">
//           <label htmlFor="logo" className=" block text-sm">
//             School logo*
//           </label>
//           <div className="mt-[6px] sm:mt-0 sm:col-span-2">
//             <div className="text-primary-gray-700 flex items-center">
//               <span className=" w-12 h-12 overflow-hidden rounded-full">
//                 <svg
//                   className="w-full h-full text-gray-300"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//                 </svg>
//               </span>
//               <input
//                 type="file"
//                 className="text-primary-gray- hover:bg-gray-50 focus:outline-none focus:ring- focus:ring-offset-2 hidden px-3 py-2 ml-5 text-sm font-medium leading-4 bg-white rounded-md"
//                 name="file"
//                 id="logo"
//               />
//               <label
//                 htmlFor="logo"
//                 className="bg-primary-grey-200 cursor-pointer border-primary-field border-[1px] rounded ml-2 p-1 text-primary-grey-700"
//               >
//                 Choose a file to upload
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className="">
//           <label htmlFor="stamp" className=" block text-sm">
//             School Stamp*
//           </label>
//           <div className="mt-[6px] sm:mt-0 sm:col-span-2">
//             <div className="text-primary-gray-700 flex items-center">
//               <span className=" w-12 h-12 overflow-hidden rounded-full">
//                 <svg
//                   className="w-full h-full text-gray-300"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//                 </svg>
//               </span>
//               <input
//                 type="file"
//                 className="text-primary-gray- hover:bg-gray-50 focus:outline-none focus:ring- focus:ring-offset-2 hidden px-3 py-2 ml-5 text-sm font-medium leading-4 bg-white rounded-md"
//                 name="file"
//                 id="stamp"
//               />
//               <label
//                 htmlFor="stamp"
//                 className="bg-primary-grey-200 cursor-pointer border-primary-field border-[1px] rounded ml-2 p-1 text-primary-grey-700"
//               >
//                 Choose a file to upload
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="md:flex-row flex flex-col justify-between w-full my-6">
//         <div className="w-44">
//           *Note:Please upload logo of school as below
//           <img src={logo} alt="" className="my-3" />
//         </div>
//         <div className=" w-fit my-auto">
//           <Link
//             to="#"
//             className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
//           >
//             Cancel
//           </Link>
//           <Link
//             to={`#`}
//             className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
//           >
//             Save
//           </Link>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Form;
