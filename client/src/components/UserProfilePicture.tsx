import { FileImage } from "phosphor-react"
import image_profile from "../image/image 1.png"
import { useState } from "react"

export default function UserProfilePicture({ nameUser }) {
    const [picture, setPicture] = useState('')
    const [errorSize, setErrorSize] = useState(false)
    const [errorName, setErrorName] = useState(false)

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-fuchsia-700 relative group">
                {
                    picture 
                    ? (<img src={picture} alt="" className="h-full w-full object-cover" />)
                    : (<img src={image_profile} alt="" className="h-full w-full object-cover" />) 
                }
                
                <label
                    htmlFor="pictureFile"
                    className="bg-black/50 w-full h-full absolute top-0 hidden cursor-pointer justify-center items-center group-hover:flex"
                >
                    <FileImage size={40} color={"#ffffff"} />
                </label>
                <input
                    type="file"
                    className="hidden"
                    id="pictureFile"
                    multiple={false}
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                        setErrorSize(false)
                        const files = e.target.files
                        
                        if (files && files.length > 0) {
                            const file = files[0]
                            const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
                            if (!allowedExtensions.exec(file.name)){
                                setErrorName(true)
                                return
                            }
                            else if(file.size > 2000000){
                                setErrorSize(true)
                                return
                            }
                            const reader = new FileReader()
                            reader.onload = () => { 
                                setPicture(reader.result as string)
                            };
                            reader.readAsDataURL(file);
                        }
                    }}
                />

            </div>
            {
                errorSize && <span className="text-rose-700">Limite de 2MB</span>
            }
            {
                errorName && <span className="text-rose-700">Apenas .png, .jpg e .jpeg</span>
            }
            
            <span className="font-bold text-2xl uppercase">{nameUser}</span>
        </div>
    )
}