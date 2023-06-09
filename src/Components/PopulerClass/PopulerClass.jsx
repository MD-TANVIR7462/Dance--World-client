import React, { useEffect, useState } from 'react';
import PopularCard from './PopularCard';


const PopulerClass = () => {
  const [classes, setClass] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/instractorclass')
      .then(res => res.json())
      .then(data => {
        if(data.length >6){
          setClass(data.slice(0,6))
        }
        else{
                  setClass(data)
                }
        
      })
  }, [])



  // [
  //   {
  //     "classId": 1,
  //     "className": "Hip Hop Dance",
  //     "instractor": "MD TAJUL ISLAM TANVIR",
  //     "seats" : 50,
  //     "students": 10,
  //     "image": "https://i.ibb.co/R3JQHhZ/240-F-449068256-e-Nw-BShm-GCE799k-KCy-Kl5agb-Vc-Nwuk72-G.jpg",
  //     "email": "mdtanvir7462@gmail.com",
  //     "price": 200
  //   },
  //   {
  //     "classId": 2,
  //     "className": "Ballet",
  //     "instractor": "MD Evan",
  //     "seats" : 50,
  //     "students": 15,
  //     "image": "https://i.ibb.co/80G2CVN/web-ae-gracedance-courtesy.jpg",
  //     "email": "mdtanvir7463@gmail.com",
  //     "price": 180
  //   },
  //   {
  //     "classId": 3,
  //     "className": "Contemporary Dance",
  //     "instractor": "MD TANVIR",
  //     "seats" : 50,
  //     "students": 17,
  //     "image": "https://i.ibb.co/n8Gs4RT/240-F-538866550-55-G0l7-Q8y-Hfp-Q5-NIQ7-K95-ZVt-FYc-Mvgg-C.jpg",
  //     "email": "mami@gmail.com",
  //     "price": 220
  //   },
  //   {
  //     "classId": 4,
  //     "className": "Salsa Dance",
  //     "instractor": "Md Tanvir",
  //     "seats" : 50,
  //     "students": 9,
  //     "image": "https://i.ibb.co/5T8mC7Z/240-F-277242783-Ub83l-Wi91s2-Vnm-RIhmk-D6q3n-Z3ogtb-JE.jpg",
  //     "email": "new@gmail.com",
  //     "price": 230
  //   },
  //   {
  //     "classId": 5,
  //     "className": "Jazz Dance",
  //     "instractor": "Md Tanvir",
  //     "seats" : 50,
  //     "students": 7,
  //     "image": "https://i.ibb.co/f1FKb9X/asian-dancers-standing-one-foot-1098-22135.jpg",
  //     "email": "new@gmail.com",
  //     "price": 190
  //   },
  //   {
  //     "classId": 6,
  //     "className": "belly Dance",
  //     "instractor": "Md Tanvir",
  //     "seats" : 50,
  //     "students": 11,
  //     "image": "https://i.ibb.co/g9BpmWZ/sm-ballet-crop.jpg",
  //     "email": "new@gmail.com",
  //     "price": 250
  //   },
  //   {
  //     "classId": 7,
  //     "className": "Tap Dance",
  //     "instractor": "MD TAJUL ISLAM TANVIR",
  //     "seats" : 50,
  //     "students": 6,
  //     "image": "https://i.ibb.co/kyRzQy8/240-F-257036699-P75-JW1i77y6uk-Iof-LXs-Q6-Zsg-F7-Hh2-Lg-I.jpg",
  //     "email": "new@gmail.com",
  //     "price": 88
  //   },
  //   {
  //     "classId": 8,
  //     "className": "stylish Dance",
  //     "instractor": "	Md salib",
  //     "seats" : 50,
  //     "students": 14,
  //     "image": "https://i.ibb.co/g9BpmWZ/sm-ballet-crop.jpg",
  //     "email": "mdtareqaziz11234@gmail.com",
  //     "price": 231
  //   }
  // ]


  const sortedClasses = classes.sort((a, b) => b.students - a.students);
  


  return (
  

<section className="bg-gray-100 pt-32 pb-10">
<div className="container mx-auto w-11/12 ">
  <h2 className="text-3xl font-bold text-center mb-16 ">Popular Classes</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" >
{
  sortedClasses.map(Singleclass => <PopularCard key={Singleclass._id} Singleclass={Singleclass}></PopularCard>)
}
    </div>
</div>
</section>

  );
};

export default PopulerClass;