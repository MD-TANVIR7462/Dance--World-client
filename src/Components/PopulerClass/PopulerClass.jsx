import React from 'react';

const PopulerClass = () => {



  const data = [
    {
      "classId": 1,
      "className": "Hip Hop Dance",
      "students": 10,
      "image": "hiphop.jpg",
      "email" : 'mdtanvir7462@gmail.com'
    },
    {
      "classId": 2,
      "className": "Ballet",
      "students": 15,
      "image": "ballet.jpg",
      "email" : 'mdtanvir7463@gmail.com'
    },
    {
      "classId": 3,
      "className": "Contemporary Dance",
      "students": 17,
      "image": "contemporary.jpg",
      "email" : 'mdtanvir7464@gmail.com'
    },
    {
      "classId": 4,
      "className": "Salsa Dance",
      "students": 32,
      "image": "salsa.jpg",
      "email" : 'mdtanvir7465@gmail.com'
    },
    {
      "classId": 5,
      "className": "Jazz Dance",
      "students": 33,
      "image": "jazz.jpg",
      "email" : 'mdtanvir7466@gmail.com'
    },
    {
      "classId": 6,
      "className": "Tap Dance",
      "students": 41,
      "image": "tap.jpg",
      "email" : 'mdtanvir7467@gmail.com'
    }
  ]







  return (
    <div>
{
  data.map(singleData=>singleData.map)
}
    </div>
  );
};

export default PopulerClass;