import React from 'react'
import "./Output.css"
import { useLocation } from 'react-router-dom';

export default function Output({ props }) {
  var images = []
  const locate = useLocation();
  const details = [];
  console.log(locate.state);

  const data = [{
    name: "Sharukh Khan ",
    name1: "Sharukh.jpg",
    age: 53,
    Aadhar_No: "1234 5678 9653"
  }, {
    name: "Pollard",
    name1: "Pollard.jpeg",
    age: 45,
    Aadhar_No: "1234 5678 9653"
  }, {
    name: "Virat",
    name1: "Virat.jpg",
    age: 35,
    Aadhar_No: "1234 5678 9653"
  }, {
    name: "Akhsay Kumar",
    name1: "Akshay.jpg",
    age: 55,
    Aadhar_No: "1234 5678 9653"
  }]

  const importAll = (r) => {
    return r?.keys()?.reduce((acc, key) => {
      acc.push({ name: key.split("/").pop().split(".")[0], url: r(key) });
      return acc;
    }, []);
  };

  images = importAll(
    locate.state.name == "Akshay.jpg" ?
      require.context(
        "./Akshay",
        false,
        /\.(png|jpe?g|jpg|svg)$/
      ) : locate.state.name == "Pollard.jpeg" ?
        require.context(
          "./Pollard",
          false,
          /\.(png|jpe?g|jpg|svg)$/
        ) : locate.state.name == "Sharukh.jpg" ?
          require.context(
            "./Sharukh",
            false,
            /\.(png|jpe?g|jpg|svg)$/
          ) : locate.state.name == "Virat.jpg" ?
            require.context(
              "./Virat",
              false,
              /\.(png|jpe?g|jpg|svg)$/
           
            ) : null
  );

  return (
    <div>
      <p className="text-[4rem] pt-[2rem] text-red-600">
        Output Images With Names
      </p>

      {
        images?.length > 0 ?
          data && data?.filter((s) => s.name1 == locate?.state?.name)?.map((item, key) => {
            return (


              <div className='Details'>
                <p>Name: {item?.name}</p>
                <p>Age: {item?.age}</p>
                <p>Aadhar_No: {item?.Aadhar_No}</p>
              </div>
            )
          }) : <div>
            <h1 className='text-white'>Data Not Found</h1>
          </div>
      }

      <div className="grid grid-cols-3 gap-[2rem]">
        {
          images?.length > 0 ?
            images
              ? images?.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    className="h-auto rounded-md shadow-2xl"
                    src={image.url}
                    alt={`Image ${index}`}
                  />
                </div>
              ))
              : null : null}
      </div>


    </div>
  )
}
