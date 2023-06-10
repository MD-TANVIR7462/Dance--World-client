import React, { useContext, useEffect, useState } from 'react';
import PopularCard from './PopularCard';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';



const PopulerClass = () => {
  const { User } = useContext(AuthContext);
  const navigate = useNavigate();
  const [classes, setClass] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/instractorclass')
      .then(res => res.json())
      .then(data => {
        if (data.length > 6) {
          setClass(data.slice(0, 6))
        }
        else {
          setClass(data)
        }

      })
  }, [])


  const handleSelect = (classes) => {
    
    const { Availableseats, className, email, image, instructor, price, students, _id } = classes;

    if (User) {
      const myCartdata = {
        Availableseats,
        className,
        instructorEmail: email,
        insName: instructor,
        oldId: _id,
        price,
        students,
        classImage: image,
        userName: User.displayName,
        userEmail: User.email,
        userPhoto: User.photoURL
      };

      fetch('http://localhost:5000/mybookmark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(myCartdata)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.statusbar === 'Already Bookmarked') {
          
            // toast.warn('🦄 Wow so easy!', {
            //   position: "top-right",
            //   autoClose: 5000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "dark",
            //   });
          
        
          
          }
        });
    } else {
      navigate('/login');
    }
  };





  const sortedClasses = classes.sort((a, b) => b.students - a.students);



  return (


    <section className="bg-gray-100 pt-32 pb-10">
      <div className="container mx-auto w-11/12 ">
        <h2 className="text-3xl font-bold text-center mb-16 ">Popular Classes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" >
          {
            sortedClasses.map(Singleclass => <PopularCard key={Singleclass._id} Singleclass={Singleclass} handleSelect={handleSelect}></PopularCard>)
          }
  
        </div>
        
      </div>
     
    </section>

  );
};

export default PopulerClass;