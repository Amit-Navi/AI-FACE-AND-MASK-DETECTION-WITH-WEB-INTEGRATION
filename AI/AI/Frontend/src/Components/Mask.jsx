import React from 'react'
import "./Mask.css"
import { useLocation } from 'react-router-dom'

export default function Mask() {

    const locate = useLocation()
    console.log(locate.state)
    const data = [{
        name: "Virat kohli",
        name1: "VKmask.jpeg",
        age: 34,
        Aadhar_No: "1234 5678 9653"
    }, {

        name: "Tiger",
        name1: "Tiger.jpeg",
        age: 34,
        Aadhar_No: "1234 5678 9653"
    }]

    var images = []
    const importAll = (r) => {
        return r?.keys()?.reduce((acc, key) => {
            acc.push({ name: key.split("/").pop().split(".")[0], url: r(key) });
            return acc;
        }, []);
    };

    images = importAll(
        locate.state?.name == "VKmask.jpeg" ?
            require.context(
                "./ViratMask",
                false,
                /\.(png|jpe?g|jpg|svg)$/
            ) : locate.state?.name == "Tiger.jpeg" ? require.context(
                "./Tiger",
                false,
                /\.(png|jpe?g|jpg|svg)$/
            ) : null
    );

    return (
        <div className='Mask_details'>Output

            <p className="text-[4rem] pt-[2rem] text-red-600">
                Output Images With Names
            </p>

            {
                data && data?.filter((s) => s.name1 == locate?.state?.name)?.map((item, key) => {
                    return (
                        <>
                            <p>Name: {item?.name}</p>
                            <p>Age: {item?.age}</p>
                            <p>Aadhar_No: {item?.Aadhar_No}</p>
                        </>
                    )
                })
            }
            <div className="image_mask">
                <div className="grid grid-cols-3 gap-4">
                    {images
                        ? images.map((image, index) => {
                            // Check if the current index is divisible by 3 to create a new row
                            if (index % 3 === 0) {
                                return (
                                    <div key={index} className="flex flex-row">
                                        {images.slice(index, index + 3).map((img, imgIndex) => (
                                            <div key={imgIndex} className="ml-4">
                                                <img
                                                    className="w-64 h-64 rounded-md shadow-2xl"
                                                    src={img.url}
                                                    alt={`Image ${imgIndex}`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                );
                            }
                            // Return null for images that are part of an existing row
                            return null;
                        })
                        : null}
                </div>
            </div>


            {/* {
          (details && images.length != 0) ? details.map((item, key) => {
            return (
              <div>
                <h1 className="flex text-3xl justify-center ml-[63rem] ">Details</h1>
                <p className="text-2xl mt-[5rem]">Name- {item?.name}</p>
                <p className="text-2xl">Contact No - {item?.contact_no}</p>
                <p className="text-2xl">Aadhar Card Number - {item?.aadhar_no}</p>
                <p className="text-2xl">Address - {item?.address}</p>
              </div>
            );
          }) : null
        } */}
        </div>

    )
}
