import React, { useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import '../assets/styles/registration.css';
import logo from '../assets/icons/logo.ico';
import profile from '../assets/icons/testimage.png';

export default function Registration_form() {
  // const navigate = useNavigate();
  const formArray = [1, 2, 3, 4]
  const [formStep, setFormStep] = useState(formArray[0])

  // setting state for form fields
  const [formData, setFormData] = useState({
    'oldApplicantId':'',
    'region': '',
    'district': '',
    'zoneNumber': '',
    'society': '',
    'image':null,
    'title': '',
    'surname': '',
    'givenName': '',
    'middleName': '',
    'dateOfBirth': '',
    'gender': '',
    'address': '',
    'hometown': '',
    'hometownRegion': '',
    'idNumber': '',
    'levelOfEducation': '',
    'contact': '',
    'altContact': '',
    'maritalStatus': '',
    'familySize': '',
    'nextOfKingFullname': '',
    'relationshipWithNOK': '',
    'nokContact': '', // end of Applicant's Personal data info
    'farmOwner': '',
    'farmSize': '',
    'numberOfLabourers': '',
    'farmLocation': '',
    'averageCropYield': '',
    'supportingBusiness': '',
    'buyerOfProduce': '',
    'reasonForChoosingBuyer': '', // end of farm details
    'fundInterest': '',
    'interestSpecify': '',
    'bankTransactingWith': '',
    'numberOfYears': '',
    'partOfAssociation': '',
    'associationSpecify': '', // end of financial info
  })

  // const [errors, setErrors] = useState({
  //   'region': '',
  //   'district': '',
  //   'zoneNumber': '',
  //   'society': '',
  //   'image': null,
  //   'title': '',
  //   'surname': '',
  //   'givenName': '',
  //   'dateOfBirth': '',
  //   'gender': '',
  //   'address': '',
  //   'hometown': '',
  //   'hometownRegion': '',
  //   'idNumber': '',
  //   'levelOfEducation': '',
  //   'contact': '',
  //   'maritalStatus': '',
  //   'familySize': '',
  //   'nextOfKingFullname': '',
  //   'relationshipWithNOK': '',
  //   'nokContact': '', // end of Applicant's Personal data info
  //   'farmOwner': '',
  //   'farmSize': '',
  //   'numberOfLabourers': '',
  //   'farmLocation': '',
  //   'averageCropYield': '',
  //   'buyerOfProduce': '',
  //   'reasonForChoosingBuyer': '', // end of farm details
  //   'fundInterest': '',
  //   'bankTransactingWith': '',
  //   'numberOfYears': '',
  //   'partOfAssociation': '', // end of financial info
  // })
  const [loading, setLoading] = useState(false);
  
  // Image handling code
  const inputRef = useRef(null);
  const [image, setImage] = useState('')
  const handleImageClick = () => {
    inputRef.current.click();
  }
  const handleImageChange = (event) => {
    setImage(event.target.files[0])
    setFormData({
      ...formData,
      image: event.target.files[0],
    });
  };
  const handleInputChange = (e) => {
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  // Forms validation
  // const validateForm = () => {
  //   let valid = true;
  //   const newErrors = { ...errors };

  //   // Validate region
  //   if (!formData.region.trim()) {
  //     newErrors.region = 'Region is required';
  //     valid = false;
  //   } else {
  //     newErrors.region = '';
  //   }

  //   // Validate region
  //   if (!formData.region.trim()) {
  //     newErrors.region = 'Region is required';
  //     valid = false;
  //   } else {
  //     newErrors.region = '';
  //   }
    

  //   setErrors(newErrors);
  //   return valid;
  // };
  // func for next & previous button
  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrfToken = document.cookie.match(/csrftoken=([^ ;]*)/)[1];
    try {
      // Simulate a delay for demonstration purposes
      await new Promise(resolve => setTimeout(resolve, 2000));
      const formDataForApi = new FormData();
      formDataForApi.append('oldApplicantId', formData.oldApplicantId);
      formDataForApi.append('region', formData.region);
      formDataForApi.append('district', formData.district);
      formDataForApi.append('zoneNumber', formData.zoneNumber);
      formDataForApi.append('society', formData.society);
      formDataForApi.append('image', formData.image);
      formDataForApi.append('title', formData.title);
      formDataForApi.append('surname', formData.surname);
      formDataForApi.append('givenName', formData.givenName);
      formDataForApi.append('middleName', formData.middleName);
      formDataForApi.append('dateOfBirth', formData.dateOfBirth);
      formDataForApi.append('gender', formData.gender);
      formDataForApi.append('address', formData.address);
      formDataForApi.append('hometown', formData.hometown);
      formDataForApi.append('hometownRegion', formData.hometownRegion);
      formDataForApi.append('idNumber', formData.idNumber);
      formDataForApi.append('levelOfEducation', formData.levelOfEducation);
      formDataForApi.append('contact', formData.contact);
      formDataForApi.append('altContact', formData.altContact);
      formDataForApi.append('maritalStatus', formData.maritalStatus);
      formDataForApi.append('familySize', formData.familySize);
      formDataForApi.append('nextOfKingFullname', formData.nextOfKingFullname);
      formDataForApi.append('relationshipWithNOK', formData.relationshipWithNOK);
      formDataForApi.append('nokContact', formData.nokContact);
      formDataForApi.append('farmOwner', formData.farmOwner);
      formDataForApi.append('farmSize', formData.farmSize);
      formDataForApi.append('numberOfLabourers', formData.numberOfLabourers);
      formDataForApi.append('farmLocation', formData.farmLocation);
      formDataForApi.append('averageCropYield', formData.averageCropYield);
      formDataForApi.append('supportingBusiness', formData.supportingBusiness);
      formDataForApi.append('buyerOfProduce', formData.buyerOfProduce);
      formDataForApi.append('reasonForChoosingBuyer', formData.reasonForChoosingBuyer);
      formDataForApi.append('fundInterest', formData.fundInterest);
      formDataForApi.append('interestSpecify', formData.interestSpecify);
      formDataForApi.append('bankTransactingWith', formData.bankTransactingWith);
      formDataForApi.append('numberOfYears', formData.numberOfYears);
      formDataForApi.append('partOfAssociation', formData.partOfAssociation);
      formDataForApi.append('associationSpecify', formData.associationSpecify);

      // Api endpoint calling 
      const apiUrl = 'api/member/';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'X-CSRFToken': csrfToken,
        },
        body: formDataForApi,
      });
      
      if (!response.ok) {
        console.error('Failed to submit applicant form');
      } else {
        // Resetting forms && navigation
        setImage("");
        setFormData({
          'oldApplicantId': '',
          'region': '',
          'district': '',
          'zoneNumber': '',
          'society': '',
          'image': null,
          'title': '',
          'surname': '',
          'givenName': '',
          'middleName': '',
          'dateOfBirth': '',
          'gender': '',
          'address': '',
          'hometown': '',
          'hometownRegion': '',
          'idNumber': '',
          'levelOfEducation': '',
          'contact': '',
          'altContact': '',
          'maritalStatus': '',
          'familySize': '',
          'nextOfKingFullname': '',
          'relationshipWithNOK': '',
          'nokContact': '', // end of Applicant's Personal data info
          'farmOwner': '',
          'farmSize': '',
          'numberOfLabourers': '',
          'farmLocation': '',
          'averageCropYield': '',
          'supportingBusiness': '',
          'buyerOfProduce': '',
          'reasonForChoosingBuyer': '', // end of farm details
          'fundInterest': '',
          'interestSpecify': '',
          'bankTransactingWith': '',
          'numberOfYears': '',
          'partOfAssociation': '',
          'associationSpecify': '', // end of financial info
        })
        window.location.reload(true); // reloading the same page to refresh the page
        console.log('Applicant form submitted and member created successfully'); //console logging message..
      }
    } catch (error) {
      console.error('Error submitting applicant form:', error);
    } finally {
      setLoading(false);
    }
    
  };
  
  const next = () => {
    setFormStep(formStep + 1)
  }
  const previous = () => {
    setFormStep(formStep - 1)
  }
  // Selection options //
  const Regions = [
    'Select here',
    'Ashanti Region',
    'Greater Accra Region', 
    'Bono Region',
    'Bono East Region',
    'Ahafo Region',
    'Western Region',
    'Western North Region',
    'Upper Region',
    'Eastern Region',
    'Upper East Region',
    'Upper West Region',
    'Northern Region Region',
    'North East Region Region',
    'Savannah Region Region',
  ]
  const ghanaDistricts = [
    'Select here',
    'Adansi South District',
    'Adansi Asokwa',
    'Adansi North District',
    'Afigya Kwabre North District',
    'Afigya Kwabre South',
    'Afigya Kwabre North District',
    'Afigya Kwabre South',
    'Ahafo Ano North Municipal',
    'Ahafo Ano South District',
    'Ahafo Ano South East',
    'Ahafo Ano South West',
    'Akrofuom',
    'Amansie Central District',
    'Amansie South',
    'Amansie West District',
    'Asante Akim Central Municipal',
    'Asante Akim North District',
    'Asante Akim South District',
    'Asokore Mampong Municipal',
    'Asokwa',
    'Atwima Kwanwoma District',
    'Atwima Mponua District',
    'Atwima Nwabiagya North',
    'Atwima Nwabiagya South District',
    'Bekwai Municipal',
    'Bosome Freho District',
    'Bosomtwe District',
    'Ejisu Municipal',
    'Ejura Sekyedumasi Municipal',
    'Juaben Municipal',
    'Kumasi Metropolitan',
    'Kwabre East District',
    'Kwadaso',
    'Mampong Municipal',
    'Obuasi East',
    'Obuasi Municipal',
    'Offinso Municipal',
    'Offinso North District',
    'Oforikrom',
    'Old Tafo',
    'Sekyere Afram Plains District',
    'Sekyere Central District',
    'Sekyere East District',
    'Sekyere Kumawu District',
    'Sekyere South District',
    'Suame',
    'Akuapim South(New)',
    'Abura / Asebu / Kwamankese',
    'Accra Metropolitan',
    'Ada West(New)',
    'Adaklu(New)',
    'Adansi North',
    'Adansi South',
    'Adentan municipal',
    'Afadjato(New)',
    'Afigya - Kwabre',
    'Afram Plains South(New)',
    'Agona East',
    'Agona West Municipal',
    'Agotime Ziope',
    'Ahafo Ano North',
    'Ahafo Ano South',
    'Ahanta West',
    'Ajumako / Enyan / Essiam',
    'Akatsi North(New)',
    'Akatsi South',
    'Akuapim North',
    'Akyemansa',
    'Amansie Upper',
    'Amansie West',
    'Aowin',
    'Asante Akim Upper Municipal',
    'Asante Akim North(New)',
    'Asante Akim South',
    'Ashaiman Municipal',
    'Asikuma / Odoben / Brakwa',
    'Asokore Mampong Municipal(New)',
    'Assin North Municipal',
    'Assin South',
    'Asunafo North Municipal',
    'Asunafo South',
    'Asuogyaman',
    'Asutifi',
    'Asutifi South(New)',
    'Atebubu - Amantin Municipal',
    'Atiwa',
    'Atwima Kwanwoma',
    'Atwima Mponua',
    'Atwima Nwabiagya',
    'Awutu - Senya',
    'Awutu - Senya - East(New)',
    'Ayensuano(New)',
    'Banda(New)',
    'Bawku Municipal',
    'Bawku West',
    'Bekwai Municipal',
    'Berekum Municipal',
    'Bia',
    'Bia East(New)',
    'Biakoye',
    'Bibiani / Anhwiaso / Bekwai',
    'Binduri(New)',
    'Birim Upper Municipal',
    'Birim North',
    'Birim South',
    'Bodi(New)',
    'Bole',
    'Bolgatanga Municipal',
    'Bongo',
    'Bosome Freho',
    'Builsa',
    'Builsa South(New)',
    'Bunkpurugu - Yunyoo',
    'Cape Coast Metropolitan',
    'Upper Gonja',
    'Upper Tongu',
    'Chereponi',
    'Daffiama Bussie Issa(New)',
    'Dangme East',
    'Dangme West',
    'Denkyembour(New)',
    'Dormaa East',
    'Dormaa Municipal',
    'Dormaa West(New)',
    'East Akim Municipal',
    'East Gonja',
    'East Mamprusi',
    'Effutu Municipal',
    'Ejisu - Juaben Municipal',
    'Ejura / Sekyedumase',
    'Ekumfi(New)',
    'Ellembele',
    'Fanteakwa',
    'Ga Upper(New)',
    'Ga East Municipal',

  ]
  return (
    <section className='min-h-screen bg-gray-100'>
      <div className='top_container hidde'>
        <div className='bg-green-600 p-1 w-full'></div>
        <div className='p-5 flex justify-center flex-col text-center'>
          <div className='flex-col justify-center gap-5'>
            <center><img src={logo} className='w-20 h-20' alt="logo" /></center>
            <p className='text-green-700 lg:text-4xl text-sm text-center font-bold'>GNACOFA ApplicantSHIP REGISTRATION PORTAL</p>
          </div>
          <h1 className=''><span className='text-red-500 truncate'>Note: </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h1>
        </div>
        {/* NavButtons */}
        <div className='container mx-auto'>
          <div className='flex justify-center items-center p-3'>
            {
              formArray.map((v, i) => <>
                <div className={`rounded-full  text-white flex items-center justify-center w-[35px] h-[35px] ${formStep - 1 === i || formStep - 1 === i + 1 || formStep === formArray.length ? 'bg-green-700' : 'bg-slate-400'}`}>{v}</div>
                {i !== formArray.length - 1 && <div className={`${formStep === i + 2 || formStep === formArray.length ? 'bg-green-700' : 'bg-slate-400'} w-[60px] lg:w-[200px] md:w-[85px] h-[1px]`}></div>}
              </>)
            }
          </div>
        </div>
      </div>
      {/* mainForms */}
      <div className='container mx-auto lg:px-'>
        <div className='bg-white rounded-lg shadow-green-500 lg:p-20'>
          <form onSubmit={handleSubmit} action='/register' enctype="multipart/form-data" method='POST'> 
            <div className='flex lg:flex-row md:flex-row flex-wrp gap-x-3 lg:px-20 lg:py-5'>
              {/* right side div */}
              <div className={`lg:w-[3750px] border-b border-black flex flex-col space-y-4 ${formStep === 4 || formStep !==1? 'hidden':'visible'} `}>
                <div className='lg:flex lg:flex-row grid grid-cols-1 p-3 w-full lg:gap-x-10'>
                  {/* image upload */}
                  <div className=''>
                    <div className='space-y-1 flex justify-center flex-col cursor'>
                      <p className='form_label text-center'>Select Memebers Image / Picture <span className='required_tag'>*</span></p>
                      <center>
                        <div className='w-[200px] rounded overflow-hidden'>
                          {image ? <img src={URL.createObjectURL(image)} alt="" className='rounded-md shadow-md' /> : <img src={profile} alt="" className='rounded-md' />}
                        </div>
                      </center>
                      <input type="file" name="image" id="" className='hidden' accept="image/*" onChange={handleImageChange} ref={inputRef} />
                      <button type='button' onClick={handleImageClick} className='p-2 lg:w-96 w-full bg-green-600 hover:bg-green-800 text-white flex justify-center gap-x-2 items-center'><span class="material-symbols-outlined">
                        add_a_photo
                      </span>Click here to select an Image</button>
                    </div>
                  </div>
                  {/* region selection */}
                  <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-5 p-2'>
                    <div className='space-y-5'>
                      <div className='space-y-2'>
                        <label htmlFor="" className='form_label'>GFX Number:</label>
                        <input type="text" name="oldApplicantId" value={formData.oldApplicantId} onChange={handleInputChange} id="oldApplicantId" maxlength='10' placeholder='GFX Number here' />
                      </div>
                      <div className='space-y-2'>
                        <label htmlFor="" className='form_label'>Select Applicant's Region of Registration:</label>
                        <select name='region' onChange={handleInputChange} value={formData.region} searchable className='form_select' placeholder='Select here'>
                          {Regions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='space-y-2'>
                        <label htmlFor="" className='form_label'>Select Applicant's District of Registration:</label>
                        <select name='district' value={formData.district} onChange={handleInputChange} searchable className='form_select' placeholder='Select here'>
                          {ghanaDistricts.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className='space-y-5'>
                      <div className='space-y-2'>
                        <label htmlFor="" className='form_label'>Enter Applicant's Zone Number:</label>
                        <input type="text" name="zoneNumber" value={formData.zoneNumber} onChange={handleInputChange} id="zoneNumber" placeholder='Enter zone number' />
                      </div>
                      <div className='space-y-2'>
                        <label htmlFor="" className='form_label'>Enter Applicant's Society:</label>
                        <input type="text" name="society" value={formData.society} onChange={handleInputChange} placeholder='Enter socity' />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              {/* left side bar */}
            </div>
            {formStep === 1 && (
              <section className='p-3 lg:p-5'>
                <div className=''>
                  <div className='lg:text-xl text-green-600 font-semibold mb-3 border-b border-black'><h1 className='p-2 w-[620px]'>Section A:-  Applicant's Personal Information</h1></div>
                  <div className='lg:p-10'>
                    <div className='space-y-5'>
                      <div className='space-y-2'>
                        <label htmlFor="" className='form_label'>Title:</label>
                        <select className='form_select' name="title" value={formData.title} onChange={handleInputChange}>
                          <option value="">---- select here ------</option>
                          <option value="Mr">Mr</option>
                          <option value="Mrs">Mrs</option>
                          <option value="Miss">Miss</option>
                        </select>
                        <small className='text-gray-400'></small>
                      </div>
                      <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-3'>
                        <div className='space-y-2'>
                          <label htmlFor="" className='form_label'>Surname / Family name:</label>
                          <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} />
                          <small className='text-gray-400 mt-3'>Surname</small>
                        </div>
                        <div className='space-y-2'>
                          <label htmlFor="" className='form_label'>Given name / Other name:</label>
                          <input type="text" name="givenName" value={formData.givenName} onChange={handleInputChange} />
                          <small className='text-gray-400 mt-3'>Given names or Other Names</small>
                        </div>
                        <div className='space-y-2'>
                          <label htmlFor="" className='form_label'>Middlename:</label>
                          <input type="text" name="middleName" value={formData.middleName} onChange={handleInputChange} />
                          <small className='text-gray-400 mt-3'>Middle name</small>
                        </div>
                      </div>
                      <div className='space-y-2'>
                        <label htmlFor="" className='form_label'>Date of Birth:</label>
                        <input type="date" className='w-full' name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} placeholder='dd/mm/yyyy' />
                        <small className='text-gray-400 mt-3'></small>
                      </div>
                      <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-3'>
                        <div className='space-y-2 w-full'>
                          <label htmlFor="" className='form_label'>Gender:</label>
                          <select name="gender" value={formData.gender} onChange={handleInputChange} className='form_select'>
                            <option value="">---- select here ------</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                          <small className='text-gray-400'></small>
                        </div>
                        <div className='space-y-2 w-full'>
                          <label htmlFor="" className='form_label'>Address:</label>
                          <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder='e.g.: HG123, AK-123-4567, Adum Avenue Street' />
                          <small className='text-gray-400 mt-3'></small>
                        </div>   
                      </div>
                      <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-3'>
                        <div className='space-y-2 w-full'>
                          <label htmlFor="" className='form_label'>Hometown:</label>
                          <input type="text" name="hometown" value={formData.hometown} onChange={handleInputChange} />
                          <small className='text-gray-400 mt-3'></small>
                        </div>
                        <div className='space-y-2 w-full'>
                          <label htmlFor="" className='form_label'>Hometown Region:</label>
                          <select className='form_select' name="hometownRegion" value={formData.hometownRegion} onChange={handleInputChange}  >
                            <option value="">---- select here ------</option>
                            <option value="Ashanti Region">Ashanti Region</option>
                            <option value="Bono Region">Bono Region</option>
                            <option value="Bono East Region">Bono East Region</option>
                            <option value="Ahafo Region">Ahafo Region</option>
                            <option value="Western Region">Western Region</option>
                            <option value="Western North Region">Western North Region</option>
                            <option value="Eastern Region">Eastern Region</option>
                            <option value="Volta Region">Volta Region</option>
                            <option value="Oti Region">Oti Region</option>
                            <option value="CentralRegion">Central Region</option>
                            <option value="Upper East Region">Upper East Region</option>
                            <option value="Upper West Region">Upper West Region</option>
                            <option value="North East Region">North East Region</option>
                            <option value="Northern Region">Northern Region</option>
                            <option value="Greater Accra Region">Greater Accra Region</option>
                            <option value="Savannah Region">Savannah Region</option>
                          </select>
                          <small className='text-gray-400'></small>
                        </div>
                      </div>
                      <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-3'>
                        <div className='space-y-2 w-full'>
                          <label htmlFor="" className='form_label'>Marital Status:</label>
                          <select name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange} className='form_select'>
                            <option value="">---- select here ------</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widow">Widow (Female) </option>
                            <option value="Widower">Widower (Male) </option>
                            <option value="Married">Married</option>
                            <option value="Single">Single</option>
                          </select>
                          <small className='text-gray-400'></small>
                        </div>
                        <div className='space-y-2 w-full'>
                          <label htmlFor="" className='form_label'>Family Size:</label>
                          <input type="number" name="familySize" value={formData.familySize} onChange={handleInputChange} placeholder='Family Size' />
                          <small className='text-gray-400 mt-3'></small>
                        </div>
                        <div className='space-y-2 w-full'>
                          <label htmlFor="" className='form_label'>ID Number:</label>
                          <input type="text" name="idNumber" value={formData.idNumber} onChange={handleInputChange} maxlength='15' className='upper' />
                          <small className='text-gray-400 mt-3'></small>
                        </div>
                        <div className='space-y-2 w-full'>
                          <label htmlFor="" className='form_label'>Level of Education:</label>
                          <select name="levelOfEducation" value={formData.levelOfEducation} onChange={handleInputChange} className='form_select'>
                            <option value="">---- select here ------</option>
                            <option value="Elementary">Elementary</option>
                            <option value="Primary Education">Primary Education</option>
                            <option value="Junior High School">Junior High School</option>
                            <option value="Secondary Education">Secondary School</option>
                            <option value="Tertiary Education">Tertiary Education</option>
                            <option value="Vocational/Technical Education">Vocational/Technical Education</option>
                            <option value="non-formal">No Formal Education</option>
                          </select>
                          <small className='text-gray-400'></small>
                        </div>
                      </div>
                      
                      <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-3'>
                        <div className='space-y-2 w-full'>
                          <label htmlFor="" className='form_label'>Applicants Contact Number:</label>
                          <input type="phone" name="contact" value={formData.contact} onChange={handleInputChange} placeholder='e.g.: 024 000 0000' />
                          <small className='text-gray-400 mt-3'></small>
                        </div>
                        <div className='space-y-2 w-full'>
                          <label htmlFor="" className='form_label'>Alternate Applicants Contact Number:</label>
                          <input type="text" name="altContact" value={formData.altContact} onChange={handleInputChange} placeholder='e.g.: 233240000000' />
                          <small className='text-gray-400 mt-3'></small>
                        </div>
                      </div>
                      <h1 className='text-xl font-bold py-2'>Next of Kins Information</h1>
                      <div className='space-y-2 w-full'>
                        <label htmlFor="" className='form_label'>Applicants Next of Kins Fullname:</label>
                        <input type="text" name="nextOfKingFullname" value={formData.nextOfKingFullname} onChange={handleInputChange} placeholder="Next of King's Fullname" />
                        <small className='text-gray-400 mt-3'></small>
                      </div>
                      <div className='space-y-2 w-full'>
                        <label htmlFor="" className='form_label'>Applicants relationship with Next of Kin:</label>
                        <select name="relationshipWithNOK" value={formData.relationshipWithNOK} onChange={handleInputChange} className='form_select' >
                          <option value="">---- select here ------</option>
                          <option value="Nana">Son</option>
                          <option value="Obaapanin">Daughter</option>
                          <option value="Mother">Mother</option>
                          <option value="Father">Father</option>
                          <option value="Brother">Brother</option>
                          <option value="Sister">Sister</option>
                          <option value="Aunty">Aunty</option>
                          <option value="Uncle">Uncle</option>
                          <option value="Niece">Niece</option>
                          <option value="Nephew">Nephew</option>
                          <option value="cousin">Cousin</option>
                          <option value="Friend">Friend</option>
                          <option value="Other Family Relative">Other Family Relative</option>
                        </select>
                        <small className='text-gray-400'></small>
                      </div>
                      <div className='space-y-2 w-full'>
                        <label htmlFor="" className='form_label'>Applicants Next of Kins Contact:</label>
                        <input type="phone" name="nokContact" value={formData.nokContact} onChange={handleInputChange} placeholder='Next of Kings Contact' />
                        <small className='text-gray-400 mt-3'></small>
                      </div>
                      {/* Nextbutton */}
                      <div className='py-4 flex justify-end gap-3'>
                        <button onClick={next} className='bg-green-500 p-2 w-96 rounded text-white hover:bg-green-700 disabled:bg-gray-400'>Next Step</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            {formStep === 2 && (
              <section className='p-3 lg:p-5'>
                <div className='p-2'>
                  <div className='lg:text-xl text-green-600 font-semibold mb-3 border-b border-black'><h1 className='p-2 w-[620px]'>Section B:-  Applicant's Farm Details</h1></div>
                  <div className=''>
                    <div className='space-y-5'>
                      <div className='space-y-2'>
                        <label htmlFor="" className='form_label'>Owner of the Farm:</label>
                        <select type="text" className='form_select' value={formData.farmOwner} name="farmOwner" onChange={handleInputChange} >
                          <option value="">---- select here ------</option>
                          <option value="family">Family</option>
                          <option value="self">Self</option>
                          <option value="Rented/Lease">Rented / Lease</option>
                          <option value="Crop Division(1,2,3)">Crop Division</option>
                        </select>
                        <small className='text-gray-400'></small>
                      </div>
                      <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-3'>
                        <div className='space-y-2'>
                          <label htmlFor="" className='form_label'>Size of the farm:</label>
                          <input type="text" name="farmSize" value={formData.farmSize} onChange={handleInputChange} placeholder='Farm Size (in acres)' /> 
                          <small className='text-gray-400 mt-3'></small>
                        </div>
                        <div className='space-y-2'>
                          <label htmlFor="" className='form_label'>Number of farm labourers working of the fields:</label>
                          <input type="text" name="numberOfLabourers" value={formData.numberOfLabourers} onChange={handleInputChange} maxlength='3' placeholder='Number of labourers' />
                          <small className='text-gray-400 mt-3'></small>
                        </div>
                        <div className='space-y-2'>
                          <label htmlFor="" className='form_label'>Location of the farm:</label>
                          <input type="text" name="farmLocation" value={formData.farmLocation} onChange={handleInputChange} placeholder='Farm Location' />
                          <small className='text-gray-400 mt-3'></small>
                        </div>
                      </div>
                      <div className='space-y-2'>
                        <label htmlFor="" className='form_label'>Average crop yield from the farm:</label>
                        <input type="text" name="averageCropYield" value={formData.averageCropYield} onChange={handleInputChange} placeholder='Average Cropy Yield' />
                        <small className='text-gray-400 mt-3'></small>
                      </div>
                      <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-3'>
                        <div className='space-y-2 w-full'>
                          <label htmlFor="" className='form_label'>Do you have any other supportive Business:</label>
                          <input type="text" name="supportingBusiness" value={formData.supportingBusiness} onChange={handleInputChange} placeholder='Buinsess supporting the farm' />
                          <small className='text-gray-400'></small>
                        </div>
                        <div className='space-y-2 w-full'>
                          <label htmlFor="" className='form_label'>Buyer of Produce:</label>
                          <input type="text" name="buyerOfProduce" value={formData.buyerOfProduce} onChange={handleInputChange} placeholder='buyer of produce' />
                          <small className='text-gray-400 mt-3'></small>
                        </div>
                      </div>
                      <div className='space-y-2 w-full'>
                        <label htmlFor="" className='form_label'>Reasons for your selected buyer?:</label>
                        <input type="text" name="reasonForChoosingBuyer" value={formData.reasonForChoosingBuyer} onChange={handleInputChange} placeholder='Reason for choosing this buyer' />
                        <small className='text-gray-400 mt-3'></small>
                      </div>
                      {/* button */}
                      <div className='py-4 flex justify-between gap-3'>
                        <button type='button' onClick={previous} className='bg-green-500 p-2 w-96 rounded text-white hover:bg-green-700 disabled:bg-gray-400'>Previous Step </button>
                        <button onClick={next} className='bg-green-500 p-2 w-96 rounded text-white hover:bg-green-700 disabled:bg-gray-400'>Next Step</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            {formStep === 3 && (
              <section className='p-3 lg:p-5'>
                <div className='p-2'>
                  <div className='lg:text-xl text-green-600 font-semibold mb-3 border-b border-black'><h1 className='p-2 w-[620px]'>Section C:-  Applicant's Financial Information</h1></div>
                  <div className=''>
                    <div className='space-y-5'>
                      <div className='space-y-2'>
                        <label htmlFor="" className='form_label'>Are you interested in GNACOFA Disburment Funds</label>
                        <select name="fundInterest" value={formData.fundInterest} onChange={handleInputChange} className='form_select'>
                          <option value="">---- select here ------</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        <small className='text-gray-400'></small>
                      </div>
                      <div className='space-y-2'>
                        <label htmlFor="" className='form_label'>if you anserwered yes, please specify usage of funds:</label>
                        <input name="interestSpecify" value={formData.interestSpecify} onChange={handleInputChange} placeholder='Please specify here' />
                        <small className='text-gray-400 mt-3'></small>
                      </div>
                      <div className='space-y-2'>
                        <label htmlFor="" className='form_label'>Bank Transacting With</label>
                        <input type="text" name="bankTransactingWith" value={formData.bankTransactingWith} onChange={handleInputChange} placeholder="Bank you're having transactions with" />
                        <small className='text-gray-400 mt-3'></small>
                      </div>
                      <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-3'>
                        <div className='space-y-2 w-full'>
                          <label htmlFor="" className='form_label'>Number of Years with Bank stated above</label>
                          <input type="number" name="numberOfYears" value={formData.numberOfYears} onChange={handleInputChange} placeholder='Years of transaction with bank stated' />
                        </div>
                        <div className='space-y-2 w-full'>
                          <label htmlFor="" className='form_label'>Are you part of Association?</label>
                          <select name="partOfAssociation" value={formData.partOfAssociation} onChange={handleInputChange} className='form_select' >
                            <option value="">---- select here ------</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                          <small className='text-gray-400 mt-3'></small>
                        </div>
                      </div>
                      <div className='space-y-2 w-full'>
                        <label htmlFor="" className='form_label'>if you anserwered yes, please specify:</label>
                        <input type="text" name="associationSpecify" value={formData.associationSpecify} onChange={handleInputChange} placeholder='please specify here' />
                        <small className='text-gray-400 mt-3'></small>
                      </div>
                      {/* button */}
                      <div className='py-4 flex justify-between gap-3'>
                        <button type='button' onClick={previous} className='bg-green-500 p-2 w-96 rounded text-white hover:bg-green-700 disabled:bg-gray-400'>Previous Step </button>
                        <button onClick={next} className='bg-green-500 p-2 w-96 rounded text-white hover:bg-green-700 disabled:bg-gray-400'>Next Step</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            {formStep === 4 && (
              <section className='p-3 lg:p-5'>
                <h1 className='text-3xl font-bold text-center'>Summay and Review of Applicants Details</h1>
                {/* <div className='flex justify-end items-center gap-x-2'>
                  <button className='lg:w-44 rounded-md bg-green-400 text-white p-2 flex items-center gap-x-5 justify-center'><span class="material-symbols-outlined">print</span>Print</button>
                </div> */}
                <div className='lg:flex lg:flex-row grid grid-cols-1 gap-x-3 lg:px-20 lg:py-5'>
                  <div className='border-r border-black'>
                    <div className='space-y-3'>
                      <div className='shadow-b-lg'>
                        <div className='lg:flex lg:flex-row grid grid-cols-1 p-3 lg:gap-x-10'>
                          {/* image upload */}
                          <div className=''>
                            <div className=''>
                              <center>
                                <div className='w-[200px] rounded overflow-hidden'>
                                  {image ? <img src={URL.createObjectURL(image)} alt="" className='rounded-md shadow-md' /> : <img src={profile} alt="" className='rounded-md' />}
                                </div>
                              </center>
                            </div>
                          </div>
                          {/* region selection */}
                          <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-5 p-2'>
                            <div className='space-y-5'>
                              <div className='space-y-2'>
                                <label htmlFor="" className='form_label'>GFX Number:</label>
                                <input type="text" name="oldApplicantId" value={formData.oldApplicantId} disabled id="oldApplicantId" placeholder='GFX Number here' />
                              </div>
                              <div className='space-y-2'>
                                <label htmlFor="" className='form_label'>Select Applicant's Region of Registration:</label>
                                <select name='region' disabled value={formData.region} searchable className='form_select' placeholder='Select here'>
                                  {Regions.map((option) => (
                                    <option key={option} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className='space-y-2'>
                                <label htmlFor="" className='form_label'>Select Applicant's District of Registration:</label>
                                <select name='district' value={formData.district} disabled searchable className='form_select' placeholder='Select here'>
                                  {ghanaDistricts.map((option) => (
                                    <option key={option} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className='space-y-5'>
                              <div className='space-y-2'>
                                <label htmlFor="" className='form_label'>Enter Applicant's Zone Number:</label>
                                <input type="text" name="zoneNumber" value={formData.zoneNumber} disabled id="zoneNumber" placeholder='Enter zone number' />
                              </div>
                              <div className='space-y-2'>
                                <label htmlFor="" className='form_label'>Enter Applicant's Society:</label>
                                <input type="text" name="society" value={formData.society} disabled placeholder='Enter socity' />
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='lg:h-[800px] overflow-y-scroll'>
                        {/* personal */}
                        <section className=''>
                          <div className='p-2'>
                            <div className='lg:text-xl text-green-600 font-semibold mb-3 border-b border-black'><h1 className='p-2 '>Section A:-  Applicant's Personal Information</h1></div>
                            <div className=''>
                              <div className='space-y-5'>
                                <div className='space-y-2'>
                                  <label htmlFor="" className='form_label'>Title:</label>
                                  <select className='form_select' name="title" value={formData.title} disabled>
                                    <option value="">---- select here ------</option>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                                  </select>
                                  <small className='text-gray-400'></small>
                                </div>
                                <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-3'>
                                  <div className='space-y-2'>
                                    <label htmlFor="" className='form_label'>Surname / Family name:</label>
                                    <input type="text" name="surname" value={formData.surname} disabled />
                                  </div>
                                  <div className='space-y-2'>
                                    <label htmlFor="" className='form_label'>Given name / Other name:</label>
                                    <input type="text" name="givenName" value={formData.givenName} disabled />
                                    <small className='text-gray-400 mt-3'>Given names or Other Names</small>
                                  </div>
                                  <div className='space-y-2'>
                                    <label htmlFor="" className='form_label'>Middlename:</label>
                                    <input type="text" name="middleName" value={formData.middleName} disabled />
                                    <small className='text-gray-400 mt-3'>Middle name</small>
                                  </div>
                                </div>
                                <div className='space-y-2'>
                                  <label htmlFor="" className='form_label'>Date of Birth:</label>
                                  <input type="date" className='w-full' name="dateOfBirth" value={formData.dateOfBirth} disabled />
                                  <small className='text-gray-400 mt-3'></small>
                                </div>
                                <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-3'>
                                  <div className='space-y-2 w-full'>
                                    <label htmlFor="" className='form_label'>Gender:</label>
                                    <select name="gender" value={formData.gender} disabled className=' form_select'>
                                      <option value="">---- select here ------</option>
                                      <option value="Male">Male</option>
                                      <option value="Female">Female</option>
                                    </select>
                                    <small className='text-gray-400'></small>
                                  </div>
                                  <div className='space-y-2 w-full'>
                                    <label htmlFor="" className='form_label'>Address:</label>
                                    <input type="text" name="address" value={formData.address} disabled />
                                    <small className='text-gray-400 mt-3'></small>
                                  </div>
                                </div>
                                <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-3'>
                                  <div className='space-y-2 w-full'>
                                    <label htmlFor="" className='form_label'>Hometown:</label>
                                    <input type="text" name="hometown" value={formData.hometown} disabled />
                                    <small className='text-gray-400 mt-3'></small>
                                  </div>
                                  <div className='space-y-2 w-full'>
                                    <label htmlFor="" className='form_label'>Hometown Region:</label>
                                    <select className='form_select' name="hometownRegion" value={formData.hometownRegion} disabled >
                                      <option value="">---- select here ------</option>
                                      <option value="Ashanti Region">Ashanti Region</option>
                                      <option value="Bono Region">Bono Region</option>
                                      <option value="Bono East Region">Bono East Region</option>
                                      <option value="Ahafo Region">Ahafo Region</option>
                                      <option value="Western Region">Western Region</option>
                                      <option value="Western North Region">Western North Region</option>
                                      <option value="Eastern Region">Eastern Region</option>
                                      <option value="Volta Region">Volta Region</option>
                                      <option value="Oti Region">Oti Region</option>
                                      <option value="CentralRegion">Central Region</option>
                                      <option value="Upper East Region">Upper East Region</option>
                                      <option value="Upper West Region">Upper West Region</option>
                                      <option value="North East Region">North East Region</option>
                                      <option value="Northern Region">Northern Region</option>
                                      <option value="Greater Accra Region">Greater Accra Region</option>
                                      <option value="Savannah Region">Savannah Region</option>
                                    </select>
                                    <small className='text-gray-400'></small>
                                  </div>
                                </div>
                                <div className='space-y-2 w-full'>
                                  <label htmlFor="" className='form_label'>Marital Status:</label>
                                  <select name="maritalStatus" value={formData.maritalStatus} disabled className='form_select'>
                                    <option value="">---- select here ------</option>
                                    <option value="Divorced">Divorced</option>
                                    <option value="Widow">Widow (Femaile) </option>
                                    <option value="Widower">Widower (Male) </option>
                                    <option value="Married">Married</option>
                                    <option value="Single">Single</option>
                                  </select>
                                  <small className='text-gray-400'></small>
                                </div>
                                <div className='space-y-2 w-full'>
                                  <label htmlFor="" className='form_label'>Family Size:</label>
                                  <input type="number" name="familySize" value={formData.familySize} disabled />
                                  <small className='text-gray-400 mt-3'></small>
                                </div>
                                <div className='space-y-2 w-full'>
                                  <label htmlFor="" className='form_label'>ID Number:</label>
                                  <input type="text" name="idNumber" value={formData.idNumber} disabled maxlength='15' className='upper' />
                                  <small className='text-gray-400 mt-3'></small>
                                </div>
                                <div className='space-y-2 w-full'>
                                  <label htmlFor="" className='form_label'>Marital Status:</label>
                                  <select name="levelOfEducation" value={formData.levelOfEducation} disabled className='form_select'>
                                    <option value="">---- select here ------</option>
                                    <option value="Elementary">Elementary</option>
                                    <option value="Primary Education">Primary Education</option>
                                    <option value="Junior High School">Junior High School</option>
                                    <option value="Secondary Education">Secondary School</option>
                                    <option value="Tertiary Education">Tertiary Education</option>
                                    <option value="Vocational/Technical Education">Vocational/Technical Education</option>
                                    <option value="non-formal">No Formal Education</option>
                                  </select>
                                  <small className='text-gray-400'></small>
                                </div>
                                <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-3'>
                                  <div className='space-y-2 w-full'>
                                    <label htmlFor="" className='form_label'>Applicants Contact Number:</label>
                                    <input type="phone" name="contact" value={formData.contact} disabled />
                                    <small className='text-gray-400 mt-3'></small>
                                  </div>
                                  <div className='space-y-2 w-full'>
                                    <label htmlFor="" className='form_label'>Alternate Applicants Contact Number:</label>
                                    <input type="text" name="altContact" value={formData.altContact} disabled />
                                    <small className='text-gray-400 mt-3'></small>
                                  </div>
                                </div>
                                <h1 className='text-xl font-bold py-2'>Next of Kins Information</h1>
                                <div className='space-y-2 w-full'>
                                  <label htmlFor="" className='form_label'>Applicants Next of Kins Fullname:</label>
                                  <input type="text" name="nextOfKingFullname" value={formData.nextOfKingFullname} disabled />
                                  <small className='text-gray-400 mt-3'></small>
                                </div>
                                <div className='space-y-2 w-full'>
                                  <label htmlFor="" className='form_label'>Applicants relationship with Next of Kin:</label>
                                  <select name="relationshipWithNOK" value={formData.relationshipWithNOK} disabled className='form_select' >
                                    <option value="">---- select here ------</option>
                                    <option value="Nana">Son</option>
                                    <option value="Obaapanin">Daughter</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Father">Father</option>
                                    <option value="Brother">Brother</option>
                                    <option value="Sister">Sister</option>
                                    <option value="Aunty">Aunty</option>
                                    <option value="Uncle">Uncle</option>
                                    <option value="Niece">Niece</option>
                                    <option value="Nephew">Nephew</option>
                                    <option value="cousin">Cousin</option>
                                    <option value="Friend">Friend</option>
                                    <option value="Other Family Relative">Other Family Relative</option>
                                  </select>
                                  <small className='text-gray-400'></small>
                                </div>
                                <div className='space-y-2 w-full'>
                                  <label htmlFor="" className='form_label'>Applicants Next of Kins Contact:</label>
                                  <input type="phone" name="nokContact" value={formData.nokContact} disabled />
                                  <small className='text-gray-400 mt-3'></small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        {/* farm details */}
                        <section className=''>
                          <div className='p-2'>
                            <div className='lg:text-xl text-green-600 font-semibold mb-3 border-b border-black'><h1 className='p-2 w-[620px]'>Section B:-  Applicant's Farm Details</h1></div>
                            <div className=''>
                              <div className='space-y-5'>
                                <div className='space-y-2'>
                                  <label htmlFor="" className='form_label'>Owner of the Farm:</label>
                                  <select type="text" className='form_select' value={formData.farmOwner} disabled >
                                    <option value="">---- select here ------</option>
                                    <option value="family">Family</option>
                                    <option value="self">Self</option>
                                    <option value="Rented/Lease">Rented / Lease</option>
                                    <option value="Crop Division(1,2,3)">Crop Division</option>
                                  </select>
                                  <small className='text-gray-400'></small>
                                </div>
                                <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-3'>
                                  <div className='space-y-2'>
                                    <label htmlFor="" className='form_label'>Size of the farm:</label>
                                    <input type="text" name="farmSize" value={formData.farmSize} disabled />
                                    <small className='text-gray-400 mt-3'></small>
                                  </div>
                                  <div className='space-y-2'>
                                    <label htmlFor="" className='form_label'>Number of farm labourers working of the fields:</label>
                                    <input type="text" name="numberOfLabourers" value={formData.numberOfLabourers} disabled />
                                    <small className='text-gray-400 mt-3'></small>
                                  </div>
                                  <div className='space-y-2'>
                                    <label htmlFor="" className='form_label'>Location of the farm:</label>
                                    <input type="text" name="farmLocation" value={formData.farmLocation} disabled />
                                    <small className='text-gray-400 mt-3'></small>
                                  </div>
                                </div>
                                <div className='space-y-2'>
                                  <label htmlFor="" className='form_label'>Average crop yield from the farm:</label>
                                  <input type="text" name="averageCropYield" value={formData.averageCropYield} disabled />
                                  <small className='text-gray-400 mt-3'></small>
                                </div>
                                <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-3'>
                                  <div className='space-y-2 w-full'>
                                    <label htmlFor="" className='form_label'>Do you have any other supportive Business:</label>
                                    <input type="text" name="supportingBusiness" value={formData.supportingBusiness} disabled />
                                    <small className='text-gray-400'></small>
                                  </div>
                                  <div className='space-y-2 w-full'>
                                    <label htmlFor="" className='form_label'>Buyer of Produce:</label>
                                    <input type="text" name="buyerOfProduce" value={formData.buyerOfProduce} disabled />
                                    <small className='text-gray-400 mt-3'></small>
                                  </div>
                                </div>
                                <div className='space-y-2 w-full'>
                                  <label htmlFor="" className='form_label'>Reasons for your selected buyer?:</label>
                                  <input type="text" name="reasonForChoosingBuyer" value={formData.reasonForChoosingBuyer} disabled />
                                  <small className='text-gray-400 mt-3'></small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        {/* financial details */}
                        <section className=''>
                          <div className='p-2'>
                            <div className='lg:text-xl text-green-600 font-semibold mb-3 border-b border-black'><h1 className='p-2 w-[620px]'>Section C:-  Applicant's Financial Information</h1></div>
                            <div className=''>
                              <div className='space-y-5'>
                                <div className='space-y-2'>
                                  <label htmlFor="" className='form_label'>Are you interested in GNACOFA Disburment Funds</label>
                                  <select name="fundInterest" value={formData.fundInterest} disabled className='form_select'>
                                    <option value="">---- select here ------</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                  </select>
                                  <small className='text-gray-400'></small>
                                </div>
                                <div className='space-y-2'>
                                  <label htmlFor="" className='form_label'>if you anserwered yes, please specify usage of funds:</label>
                                  <input name="interestSpecify" value={formData.interestSpecify} disabled />
                                  <small className='text-gray-400 mt-3'></small>
                                </div>
                                <div className='space-y-2'>
                                  <label htmlFor="" className='form_label'>Bank Transacting With</label>
                                  <input type="text" name="bankTransactingWith" value={formData.bankTransactingWith} disabled />
                                  <small className='text-gray-400 mt-3'></small>
                                </div>
                                <div className='lg:flex lg:flex-row grid grid-cols-1 lg:gap-x-3'>
                                  <div className='space-y-2 w-full'>
                                    <label htmlFor="" className='form_label'>Number of Years with Bank stated above</label>
                                    <input type="number" name="numberOfYears" value={formData.numberOfYears} disabled />
                                  </div>
                                  <div className='space-y-2 w-full'>
                                    <label htmlFor="" className='form_label'>Are you part of Association?</label>
                                    <select name="partOfAssociation" value={formData.partOfAssociation} disabled className='form_select' >
                                      <option value="">---- select here ------</option>
                                      <option value="yes">Yes</option>
                                      <option value="no">No</option>
                                    </select>
                                    <small className='text-gray-400 mt-3'></small>
                                  </div>
                                </div>
                                <div className='space-y-2 w-full'>
                                  <label htmlFor="" className='form_label'>if you anserwered yes, please specify:</label>
                                  <input type="text" name="associationSpecify" value={formData.associationSpecify} disabled  />
                                  <small className='text-gray-400 mt-3'></small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  {/* <div className='lg:w-[400px] p-5 gap-3 '>
                    <p className='font-bold'>Declaration</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis deleniti assumenda ex molestias vel saepe atque laudantium qui, non modi, id delectus voluptatem perferendis inventore alias numquam ullam nostrum quo.</p>
                    <article>I <span className='font-bold uppercase'></span> have read and understood the <a href="https://www.gnacofa.org" className='underline text-blue-400 hover:text-blue-700'>Terms & Agreement</a></article>
                  </div> */}
                </div>
                
                {/* button */}
                <div className='flex justify-between gap-3'>
                  <button type='button' onClick={previous} className='bg-green-500 p-2 w-96 rounded text-white hover:bg-green-700 disabled:bg-gray-400'>Previous Step </button>
                  <button type='submit' className='bg-green-500 p-2 w-96 rounded text-white hover:bg-green-700 disabled:bg-gray-400'>{loading ? 'Submitting...' : 'Submit'}</button>
                </div>
                
              </section>
            )}
          </form>
        </div>
        {/* Footer */}
        <div className='p-4 text-sm flex justify-between'>
          <h1 className=''><span className=''>Copyright@2023 </span>GNACOFA All right reserved</h1>
        </div>
      </div>
    </section>
  )
}
