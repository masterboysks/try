import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/logoHeader.png";
import { Input, Select, UploadPhoto } from "../../../components/fields";

const Form = () => {
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
    dateFormat || ((temp = true) && setErrorDateFormat(true));
    establishedDate || ((temp = true) && setErrorEstablishedDate(true));
    schoolLogo || ((temp = true) && setErrorSchoolLogo(true));
    schoolStamp || ((temp = true) && setErrorSchoolStamp(true));
    country === "Select" && (temp = true) && setErrorCountry(true);
    province === "Select" && (temp = true) && setErrorProvince(true);
    district === "Select" && (temp = true) && setErrorDistrict(true);
    vdcMuncaliplity === "Select" &&
      (temp = true) &&
      setErrorVdcMuncaliplity(true);

    temp || navigate("/admin/event-calender");
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
