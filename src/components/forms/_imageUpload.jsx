import { useRef, useState } from "react";
import profile from '../../assets/icons/dummy-profile-image.png';
export default function _imageUpload() {
  // Image handling code
  const inputRef = useRef(null);
  const [image, setImage] = useState('')
  const handleImageClick = () => {
    inputRef.current.click();
  }
  return (
    <div className='space-y-4 cursor'>
      <p className='form_label text-center'>Select Memebers Image / Picture <span className='required_tag'>*</span></p>
      <div className='w-[200px] h-[200px] rounded overflow-hidden ml-16'>
        {image ? <img src={URL.createObjectURL(image)} alt="" className='rounded-md' /> : <img src={profile} alt="" className='rounded-md' />}
      </div>
      <input type="file" name="image" id="" className='hidden'  ref={inputRef} />
      <button onClick={handleImageClick} className='p-2 w-full bg-green-600 hover:bg-green-800 text-white flex gap-x-2 items-center'><span class="material-symbols-outlined">
        add_a_photo
      </span>Click here to select an Image / Picture</button>
    </div>
  )
}
