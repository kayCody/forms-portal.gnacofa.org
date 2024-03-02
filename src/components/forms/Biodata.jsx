
export default function Biodata({handleInputChange, formData}) {
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
    'Central Region',
    'Eastern Region',
    'Upper East Region',
    'Upper West Region',
    'Northern Region Region',
    'North East Region Region',
    'Savannah Region Region',
  ]
  const ghanaDistricts = [
    'Select here',
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
    'Amansie Central',
    'Amansie West',
    'Aowin',
    'Asante Akim Central Municipal',
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
    'Birim Central Municipal',
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
    'Central Gonja',
    'Central Tongu',
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
    'Ga Central(New)',
    'Ga East Municipal',

  ]
  return (
    <section className='p-5'>
      <div className='text-3xl font-semibold mb-3 border-b border-black'><h1 className='p-2 w-[620px]'>Section A:-  Member's Personal Information</h1></div>
      <div className=''></div>
      {/* image -  */}
      <div className='space-y-10'>
        {/* input fields below */}
        <div className='flex justify-center items-center p-5 gap-x-10 text-green-500'>
          <div className=''>
            <label htmlFor="region" className='form_label text-black'>Select Region for Member <span className='required_tag'>*</span></label>
            <select name='region' onChange={handleInputChange} value={formData.region} searchable className='form_select' placeholder='Select here'>
              {Regions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className=''>
            <label htmlFor="district" className='form_label text-black'>Select District for Member <span className='required_tag'>*</span></label>
            {/* <Select onChange={handleInputChange} options={ghanaDistricts.map(district => ({ label: district, value: district }))} placeholder='Select District' /> */}
            <select name='district' value={formData.district} onChange={handleInputChange} searchable className='form_select' placeholder='Select here'>
              {ghanaDistricts.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className=''>
            <label htmlFor="Zone Number" className='form_label text-black'>Enter Zone for Member <span className='required_tag'>*</span></label>
            <input type="text" name="zoneNumber" value={formData.zoneNumber} onChange={handleInputChange} id="zoneNumber" placeholder='Enter zone number' />
          </div>
          <div className=''>
            <label htmlFor="region" className='form_label text-black'>Enter Zone for Member <span className='required_tag'>*</span></label>
            <input type="text" name="society" value={formData.society} onChange={handleInputChange} placeholder='Enter socity' />
          </div>
        </div>
      </div>
      {/* formDatra - BioData */}
      <div className='content_div'>
        <div className='space-y-4'>
          <div className='space-y-2 flex justify-center'>
            < imageUpload />
          </div>
          <div className='inner_div'>
            <p className='form_label'>Title <span className='required_tag'>*</span></p>
            <select name="title" value={formData.title} onChange={handleInputChange} className='form_select'>
              <option value="">---- select here ------</option>
              <option value="Nana">Nana</option>
              <option value="Obaapanin">Obaapanin</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
            </select>
          </div>
          <div className='inner_div'>
            <p className='form_label'>Family Name / Surname <span className='required_tag'>*</span></p>
            <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} placeholder='Family / Surname' />
          </div>
          <div className='inner_div'>
            <p className='form_label'>Given Name <span className='required_tag'>*</span>:</p>
            <input type="text" name="givenName" value={formData.givenName} onChange={handleInputChange} placeholder='Given / First Name' />
          </div>
          <div className='inner_div'>
            <p className='form_label'>Middle Name (if applicable):</p>
            <input type="text" name="middleName" value={formData.middleName} onChange={handleInputChange} placeholder='Middle Name' />
          </div>
          <div className='inner_div'>
            <p className='form_label'>Date of Birth <span className='required_tag'>*</span>:</p>
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} placeholder='dd/mm/yyyy' />
          </div>
          <div className='inner_div'>
            <p className='form_label'>Gender<span className='required_tag'>*</span></p>
            <select name="gender" value={formData.gender} onChange={handleInputChange} className='form_select'>
              <option value="">---- select here ------</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className='inner_div'>
            <p className='form_label'>Address (Preferably Digital Address)<span className='required_tag'>*</span></p>
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder='e.g.: HG123, AK-123-4567, Adum Avenue Street ' />
          </div>
          <div className='inner_div'>
            <p className='form_label'>Hometown<span className='required_tag'>*</span></p>
            <input type="text" name="hometown" value={formData.hometown} onChange={handleInputChange} placeholder='e.g.:Achirensua' />
          </div>
          <div className='inner_div'>
            <p className='form_label'>Hometown Region<span className='required_tag'>*</span></p>
            <select name="hometownRegion" value={formData.hometownRegion} onChange={handleInputChange} className='form_select' >
              <option value="">---- select here ------</option>
              <option value="Ashanti Region">Ashanti Region</option>
              <option value="Bono Region">Bono Region</option>
              <option value="Bono East Region">Bono East Region</option>
              <option value="Ahafo Region">Ahafo Region</option>
              <option value="Western Region">Western Region</option>
              <option value="Western North Region">Western North Region</option>
              <option value="Volta Region">Volta Region</option>
              <option value="Oti Region">Oti Region</option>
              <option value="Central Region">Central Region</option>
              <option value="Savannah Region">Savannah Region</option>
            </select>
          </div>

        </div>
        <div className='space-y-4'>
          <div className='inner_div'>
            <p className='form_label'>National Identification Number (Ghana Card)<span className='required_tag'>*</span></p>
            <input type="text" name="idNumber" value={formData.idNumber} onChange={handleInputChange} maxlength='15' className='upper' placeholder='e.g.: GHA-123456789-0' />
          </div>
          <div className='inner_div'>
            <p className='form_label'>Level of Education<span className='required_tag'>*</span></p>
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
          </div>
          <div className='inner_div'>
            <p className='form_label'>Mobile<span className='required_tag'>*</span></p>
            <input type="phone" name="contact" value={formData.contact} onChange={handleInputChange} placeholder='e.g.: 233240000000' />
          </div>
          <div className='inner_div'>
            <p className='form_label'>Alternate Mobile:</p>
            <input type="text" name="altContact" value={formData.altContact} onChange={handleInputChange} placeholder='e.g.: 233240000000' />
          </div>
          <div className='inner_div'>
            <p className='form_label'>Marital Status<span className='required_tag'>*</span></p>
            <select name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange} className='form_select'>
              <option value="">---- select here ------</option>
              <option value="Divorced">Divorced</option>
              <option value="Married">Married</option>
              <option value="Single">Single</option>
              <option value="Partner Deceased">Partner Deceased</option>
            </select>
          </div>
          <div className='inner_div'>
            <p className='form_label'>Family Size<span className='required_tag'>*</span></p>
            <input type="number" name="familySize" value={formData.familySize} onChange={handleInputChange} placeholder='Family Size' />
          </div>
          <fieldset className='space-y-3 border-2 p-2'>
            <legend className='text-green-700 ml-8'>information on Next of King</legend>
            <div className='inner_div'>
              <p className='form_label'>Full Name<span className='required_tag'>*</span></p>
              <input type="text" name="nextOfKingFullname" value={formData.nextOfKingFullname} onChange={handleInputChange} placeholder="Next of King's Fullname" />
            </div>
            <div className='inner_div'>
              <p className='form_label'>Relationship with (NOK)<span className='required_tag'>*</span></p>
              <select name="relationshipWithNOK" value={formData.relationshipWithNOK} onChange={handleInputChange} className='form_select' >
                <option value="">---- select here ------</option>
                <option value="Nana">Son</option>
                <option value="Obaapanin">Daughter</option>
                <option value="Mr">Mother</option>
                <option value="Mrs">Father</option>
                <option value="Mrs">Brother</option>
                <option value="Mrs">Sister</option>
                <option value="Mrs">Aunty</option>
                <option value="Mrs">Uncle</option>
                <option value="Mrs">Niece</option>
                <option value="Mrs">Nephew</option>
                <option value="Mrs">Cousin</option>
                <option value="Mrs">Friend</option>
                <option value="Mrs">Other Family Relative</option>
              </select>
            </div>
            <div className='inner_div'>
              <p className='form_label'>Mobile<span className='required_tag'>*</span></p>
              <input type="phone" name="nokContact" value={formData.nokContact} onChange={handleInputChange} placeholder='Next of Kings Contact' />
            </div>
          </fieldset>
        </div>
      </div>
    </section>
  )
}
