import React from 'react'

export default function dumm() {
  return (
    <div>
      <div className='lg:flex lg:flex-row justify-center  border-t-2 pt-4 border-green-600 items-center lg:gap-x-10 gap-y-4'>
        <div className=''>
          <p className='form_label'><span className='required_tag'>*</span>Region:</p>
          <select name="regions"  id="" className='form_select'>
            <option value="">--------------</option>
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
        <div className=''>
          <p className='form_label'><span className='required_tag'>*</span>District:</p>
          <select name="district"  id="" className='form_select'>
            <option value="">--------------</option>
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
        <div className=''>
          <p className='form_label'><span className='required_tag'>*</span>Zone:</p>
          <div className='form_field'>
            <input type="text" name="zone" id="zone"  />
          </div>
        </div>
        <div className=''>
          <p className='form_label'><span className='required_tag'>*</span>Society:</p>
          <div className='form_field'>
            <input type="text" name="society" id="society"  />
          </div>
        </div>
      </div>
      <div className='outter_content_div'>
        <button className='heading_btn'>PART A - MEMBERS PROFILE INFORMATION</button>
        <div className='content_div'>
          <div className='space-y-5 p-2'>
            <div className='flex justify-start'>
              <div className='space-y-2'>
                <div class="h-44 w-44 border"></div>
                <input type="file" name="" id="" />
              </div>
            </div>
            <div className='inner_div'>
              <p className='form_label'><span className='required_tag'>*</span>Title:</p>
              <select name="district"  id="" className='form_select'>
                <option value="">--------------</option>
                <option value="Nana">Nana</option>
                <option value="Obaapanin">Obaapanin</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
              </select>
            </div>
            <div className='inner_div'>
              <p className='form_label'><span className='required_tag'>*</span>Family Name / Surname:</p>
              <div className='form_field'>
                <input type="text" name="surname" id="surname"  />
              </div>
            </div>
            <div className='inner_div'>
              <p className='form_label'><span className='required_tag'>*</span>Given Name:</p>
              <div className='form_field'>
                <input type="text" name="givenname" id="givenname"  />
              </div>
            </div>
            <div className='inner_div'>
              <p className='form_label'>Middle Name (if applicable):</p>
              <div className='form_field'>
                <input type="text" name="middlename" id="middlename"  />
              </div>
            </div>
            <div className='inner_div'>
              <p className='form_label'>*Date of Birth:</p>
              <div className='form_field'>
                <input type="date" name="middlename" id="middlename"  />
              </div>
            </div>
            <div className='inner_div'>
              <p className='form_label'><span className='required_tag'>*</span>Gender:</p>
              <select name="gender"  id="" className='form_select'>
                <option value="">--------------</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className='inner_div'>
              <p className='form_label'><span className='required_tag'>*</span>Address (Preferably Digital Address):</p>
              <div className='form_field'>
                <input type="text" name="address" id="address"  />
              </div>
            </div>
            <div className='inner_div'>
              <p className='form_label'><span className='required_tag'>*</span>Hometown:</p>
              <div className='form_field'>
                <input type="text" name="homwtown" id="hometown"  />
              </div>
            </div>
            <div className='inner_div'>
              <p className='form_label'><span className='required_tag'>*</span>Hometown Region:</p>
              <select name="hometown_region"  id="" className='form_select'>
                <option value="">--------------</option>
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
          <div className='space-y-5 p-2'>
            <div className='inner_div'>
              <p className='form_label'><span className='required_tag'>*</span>National Identification Number (Ghana Card):</p>
              <div className='form_field'>
                <input type="text" name="id_number" id="id_number"  />
              </div>
            </div>
            <div className='inner_div'>
              <p className='form_label'><span className='required_tag'>*</span>Level of Education:</p>
              <select name="marital_status"  id="" className='form_select'>
                <option value="">--------------</option>
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
              <p className='form_label'><span className='required_tag'>*</span>Mobile:</p>
              <div className='form_field'>
                <input type="phone" name="contact" id="contact"  />
              </div>
            </div>
            <div className='inner_div'>
              <p className='form_label'>Alternate Mobile:</p>
              <div className='form_field'>
                <input type="text" name="alt_contact" id="alt_contact"  />
              </div>
            </div>
            <div className='inner_div'>
              <p className='form_label'><span className='required_tag'>*</span>Marital Status:</p>
              <select name="marital_status"  id="" className='form_select'>
                <option value="">--------------</option>
                <option value="Divorced">Divorced</option>
                <option value="Married">Married</option>
                <option value="Single">Single</option>
                <option value="Partner Deceased">Partner Deceased</option>
              </select>
            </div>
            <div className='inner_div'>
              <p className='form_label'><span className='required_tag'>*</span>Family Size:</p>
              <div className='form_field'>
                <input type="number" name="family_size" id="family_size"  />
              </div>
            </div>
            <fieldset className='space-y-5 border-2 p-2'>
              <legend className='text-green-700 ml-8'>information on Next of King</legend>
              <div className='inner_div'>
                <p className='form_label'><span className='required_tag'>*</span>Full Name:</p>
                <div className='form_field'>
                  <input type="phone" name="contact" id="contact"  />
                </div>
              </div>
              <div className='inner_div'>
                <p className='form_label'><span className='required_tag'>*</span>Relationship with (NOK):</p>
                <select name="district"  id="" className='form_select'>
                  <option value="">--------------</option>
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
                <p className='form_label'><span className='required_tag'>*</span>Mobile:</p>
                <div className='form_field'>
                  <input type="phone" name="nok_contact" id="nok_contact"  />
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <div className='outter_content_div'>
        <button className='heading_btn'>PART B - FARM INFORMATION</button>
        <div className='content_div'>
          <div className='space-y-5 p-2'>
            <div className='inner_div'>
              <p className='form_label'><span className='required_tag'>*</span>Number of Farm:</p>
              <div className='form_field'>
                <input type="number" name="number_of_farm" id="number_of_farm"  />
              </div>
            </div>
          </div>
          <div className='space-y-5 p-2'>
            <fieldset className='border-2 p-2 space-y-5'>
              <legend className='ml-5'>Other Farm Information</legend>
              <div className='inner_div'>
                <p className='form_label'><span className='required_tag'>*</span>Total Farming years:</p>
                <div className='form_field'>
                  <input type="number" name="total_farming_years" id="total_farming_years" value=''  />
                </div>
              </div>
              <div className='inner_div'>
                <p className='form_label'><span className='required_tag'>*</span>Average Cocoa Crop Yield:</p>
                <div className='form_field'>
                  <input type="text" name="average_crop_yield" id="average_crop_business"  />
                </div>
              </div>
              <div className='inner_div'>
                <p className='form_label'><span className='required_tag'>*</span>Previous Business Engaged in before farming:</p>
                <div className='form_field'>
                  <input type="text" name="previous_business" id="previous_business"  />
                </div>
              </div>
              <div className='inner_div'>
                <p className='form_label'><span className='required_tag'>*</span>Any current Business Engaged in aside farming:</p>
                <div className='form_field'>
                  <input type="text" name="additional_business" id="additional_business"  />
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <div className='outter_content_div'>
        <button className='heading_btn'>PART C - FINANCIAL INFORMATION</button>
        <div className='content_div'>
          <div className='space-y-5 p-2'>
            <div className='inner_div'>
              <p className='form_label'><span className='required_tag'>*</span>Are Part of an Association Other than GNACOFA:</p>
              <select name="part_of_association"  id="" className='form_select'>
                <option value="">--------------</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className='inner_div hidden'>
              <p className='form_label italic'><span className='required_tag'>*</span>if you anserwered yes, please specify:</p>
              <div className='form_field'>
                <input type="number" name="association_specify" id="association_specify" value=''  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='outter_content_div'>
        <button className='heading_btn'>PART D - DECLARATIONON</button>
        <div className='content_div'>
        </div>
      </div>
      <div className='submit_section'></div>



      <form enctype="multipart/form-data" className="w-full">
        {formStep === 1 && (
          <div className='lg:flex lg:flex-row justify-center   border-t-2 pt-4 border-green-600 items-center lg:gap-x-10 gap-y-4'>
            <div className=''>
              <p className='form_label'><span className='required_tag'>*</span>Region:</p>
              <select name="regions" id="" className='form_select' >
                <option value="">--------------</option>
                <option value="Ashanti">Ashanti Region</option>
                <option value="Bono">Bono Region</option>
                <option value="BonoEast">Bono East Region</option>
                <option value="Ahafo">Ahafo Region</option>
                <option value="Western">Western Region</option>
                <option value="WesternNorth">Western North Region</option>
                <option value="Volta">Volta Region</option>
                <option value="Oti">Oti Region</option>
                <option value="Central">Central Region</option>
                <option value="Savannah">Savannah Region</option>
              </select>
              {errors.regions && (
                <p className='text-xs mt-2 text-red-600'>{errors.regions.message}</p>
              )}
            </div>
            <div className=''>
              <p className='form_label'><span className='required_tag'>*</span>District:</p>
              <select name="district" id="" className='form_select'>
                <option value="">--------------</option>
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
            <div className=''>
              <p className='form_label'><span className='required_tag'>*</span>Zone:</p>
              <div className='form_field'>
                <input type="text" name="zone" id="zone" />
              </div>
            </div>
            <div className=''>
              <p className='form_label'><span className='required_tag'>*</span>Society:</p>
              <div className='form_field'>
                <input type="text" name="society" id="society" />
              </div>
            </div>
          </div>
        )}
        {formStep === 2 && (
          <section className=''>
            <button className='heading_btn'>PART A - MEMBERS PROFILE INFORMATION</button>
            <div className='content_div'>
              <div className='space-y-3'>
                <div className='inner_div'>
                  <p className='form_label'>Click to upload Member Image <span className='required_tag'>*</span></p>
                  <div className='form_field'>
                    <input type="file" name="image" id="image" />
                  </div>
                </div>
                <div className='inner_div'>
                  <p className='form_label'>Title <span className='required_tag'>*</span></p>
                  <select name="district" id="" className='form_select'>
                    <option value="">--------------</option>
                    <option value="Nana">Nana</option>
                    <option value="Obaapanin">Obaapanin</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                  </select>
                </div>
                <div className='inner_div'>
                  <p className='form_label'>Family Name / Surname <span className='required_tag'>*</span></p>
                  <div className='form_field'>
                    <input type="text" name="surname" id="surname" />
                  </div>
                </div>
                <div className='inner_div'>
                  <p className='form_label'>Given Name <span className='required_tag'>*</span>:</p>
                  <div className='form_field'>
                    <input type="text" name="givenname" id="givenname" />
                  </div>
                </div>
                <div className='inner_div'>
                  <p className='form_label'>Middle Name (if applicable):</p>
                  <div className='form_field'>
                    <input type="text" name="middlename" id="middlename" />
                  </div>
                </div>
                <div className='inner_div'>
                  <p className='form_label'>Date of Birth <span className='required_tag'>*</span>:</p>
                  <div className='form_field'>
                    <input type="date" name="middlename" id="middlename" />
                  </div>
                </div>
                <div className='inner_div'>
                  <p className='form_label'><span className='required_tag'>*</span>Gender:</p>
                  <select name="gender" id="" className='form_select'>
                    <option value="">--------------</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className='inner_div'>
                  <p className='form_label'><span className='required_tag'>*</span>Address (Preferably Digital Address):</p>
                  <div className='form_field'>
                    <input type="text" name="address" id="address" />
                  </div>
                </div>
                <div className='inner_div'>
                  <p className='form_label'><span className='required_tag'>*</span>Hometown:</p>
                  <div className='form_field'>
                    <input type="text" name="homwtown" id="hometown" />
                  </div>
                </div>
                <div className='inner_div'>
                  <p className='form_label'><span className='required_tag'>*</span>Hometown Region:</p>
                  <select name="hometown_region" id="" className='form_select'>
                    <option value="">--------------</option>
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
              <div className='space-y-3'>
                <div className='inner_div'>
                  <p className='form_label'><span className='required_tag'>*</span>National Identification Number (Ghana Card):</p>
                  <div className='form_field'>
                    <input type="text" name="id_number" id="id_number" />
                  </div>
                </div>
                <div className='inner_div'>
                  <p className='form_label'><span className='required_tag'>*</span>Level of Education:</p>
                  <select name="marital_status" id="" className='form_select'>
                    <option value="">--------------</option>
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
                  <p className='form_label'><span className='required_tag'>*</span>Mobile:</p>
                  <div className='form_field'>
                    <input type="phone" name="contact" id="contact" />
                  </div>
                </div>
                <div className='inner_div'>
                  <p className='form_label'>Alternate Mobile:</p>
                  <div className='form_field'>
                    <input type="text" name="alt_contact" id="alt_contact" />
                  </div>
                </div>
                <div className='inner_div'>
                  <p className='form_label'><span className='required_tag'>*</span>Marital Status:</p>
                  <select name="marital_status" id="" className='form_select'>
                    <option value="">--------------</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Married">Married</option>
                    <option value="Single">Single</option>
                    <option value="Partner Deceased">Partner Deceased</option>
                  </select>
                </div>
                <div className='inner_div'>
                  <p className='form_label'><span className='required_tag'>*</span>Family Size:</p>
                  <div className='form_field'>
                    <input type="number" name="family_size" id="family_size" />
                  </div>
                </div>
                <fieldset className='space-y-3 border-2 p-2'>
                  <legend className='text-green-700 ml-8'>information on Next of King</legend>
                  <div className='inner_div'>
                    <p className='form_label'><span className='required_tag'>*</span>Full Name:</p>
                    <div className='form_field'>
                      <input type="phone" name="contact" id="contact" />
                    </div>
                  </div>
                  <div className='inner_div'>
                    <p className='form_label'><span className='required_tag'>*</span>Relationship with (NOK):</p>
                    <select name="district" id="" className='form_select'>
                      <option value="">--------------</option>
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
                    <p className='form_label'><span className='required_tag'>*</span>Mobile:</p>
                    <div className='form_field'>
                      <input type="phone" name="nok_contact" id="nok_contact" />
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </section>
        )}
        {formStep === 3 && (
          <section className=''>
            <button className='heading_btn'>PART B - FARM INFORMATION</button>
            <div className='content_div'>
              <div className='space-y-5 p-2'>
                <div className='inner_div'>
                  <p className='form_label'><span className='required_tag'>*</span>Number of Farm:</p>
                  <div className='form_field'>
                    <input type="number" name="number_of_farm" id="number_of_farm" />
                  </div>
                </div>
              </div>
              <div className='space-y-5 p-2'>
                <fieldset className='border-2 p-2 space-y-5'>
                  <legend className='ml-5'>Other Farm Information</legend>
                  <div className='inner_div'>
                    <p className='form_label'><span className='required_tag'>*</span>Total Farming years:</p>
                    <div className='form_field'>
                      <input type="number" name="total_farming_years" id="total_farming_years" value='' />
                    </div>
                  </div>
                  <div className='inner_div'>
                    <p className='form_label'><span className='required_tag'>*</span>Average Cocoa Crop Yield:</p>
                    <div className='form_field'>
                      <input type="text" name="average_crop_yield" id="average_crop_business" />
                    </div>
                  </div>
                  <div className='inner_div'>
                    <p className='form_label'><span className='required_tag'>*</span>Previous Business Engaged in before farming:</p>
                    <div className='form_field'>
                      <input type="text" name="previous_business" id="previous_business" />
                    </div>
                  </div>
                  <div className='inner_div'>
                    <p className='form_label'><span className='required_tag'>*</span>Any current Business Engaged in aside farming:</p>
                    <div className='form_field'>
                      <input type="text" name="additional_business" id="additional_business" />
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </section>
        )}
        {formStep === 4 && (
          <section className=''>
            <button className='heading_btn'>PART C - FINANCIAL INFORMATION</button>
            <div className='content_div'>
              <div className='space-y-5 p-2'>
                <div className='inner_div'>
                  <p className='form_label'><span className='required_tag'>*</span>Are Part of an Association Other than GNACOFA:</p>
                  <select name="part_of_association" id="" className='form_select'>
                    <option value="">--------------</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className='inner_div hidden'>
                  <p className='form_label italic'><span className='required_tag'>*</span>if you anserwered yes, please specify:</p>
                  <div className='form_field'>
                    <input type="number" name="association_specify" id="association_specify" value='' />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {formStep === 5 && (
          <section className=''>
            <button className='heading_btn'>PART D - DECLARATIONON</button>
            <div className='content_div'>
            </div>
          </section>
        )}
        {/* Submit section */}
        {renderBtn()}
      </form>
    </div>
  )
}
