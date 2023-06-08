import React from 'react';

const PopulerClass = () => {



  const data = [{
    "instructorId": 1, "instructorName": "Emma Smith", "classId": 1, "students": 75, "Instractorimage": "instructor_emma.jpg", "classes": [{ "classId": 1, "className": "Hip Hop Dance", "students": 75, "image": "https://i.ibb.co/NKNKThW/Jinjo17-Credit-Belinda-Lawley-1.jpg" }, { "classId": 2, "className": "Ballet", "students": 68, "image": "https://i.ibb.co/g9BpmWZ/sm-ballet-crop.jpg" }]
  },
  {
    "instructorId": 2,
    "instructorName": "Json Roy",
    "classId": 1,
    "students": 75,
    "Instractorimage": "instructor_emma.jpg",
    "classes": [
      {
        "classId": 3,
        "className": "Contemporary Dance",
        "students": 62,
        "image": "https://i.ibb.co/zSJwX1h/ASWD-F2018-1-1280x720.jpg"
      },
      {
        "classId": 4,
        "className": "Salsa Dance",
        "students": 59,
        "image": "https://i.ibb.co/xfZgG6S/360-F-234300230-Fab1u-Rx6-Si-L3s-ULFg-SX1wu0e-IEyr-KBe-Q.jpg"
      }
    ]
  },
  {
    "instructorId": 3,
    "instructorName": "John Doe",
    "classId": 2,
    "students": 80,
    "Instractorimage": "instructor_john.jpg",
    "classes": [
      {
        "classId": 5,
        "className": "Tap Dance",
        "students": 72,
        "image": "https://i.ibb.co/2j2GwR1/tap-dance.jpg"
      },
      {
        "classId": 6,
        "className": "Jazz Dance",
        "students": 65,
        "image": "https://i.ibb.co/JQkwKSM/jazz-dance.jpg"
      }
    ]
  },
  {
    "instructorId": 4,
    "instructorName": "Sarah Johnson",
    "classId": 3,
    "students": 60,
    "Instractorimage": "instructor_sarah.jpg",
    "classes": [
      {
        "classId": 7,
        "className": "Pole Dance",
        "students": 55,
        "image": "https://i.ibb.co/9nrmpx3/pole-dance.jpg"
      },
      {
        "classId": 8,
        "className": "Zumba Fitness",
        "students": 58,
        "image": "https://i.ibb.co/J5Ynm1r/zumba-fitness.jpg"
      }
    ]
  },
  {
    "instructorId": 5,
    "instructorName": "David Wilson",
    "classId": 4,
    "students": 70,
    "Instractorimage": "instructor_david.jpg",
    "classes": [
      {
        "classId": 9,
        "className": "Breakdance",
        "students": 66,
        "image": "https://i.ibb.co/RCSb6w4/breakdance.jpg"
      },
      {
        "classId": 10,
        "className": "Latin Ballroom",
        "students": 64,
        "image": "https://i.ibb.co/wgFWS1Y/latin-ballroom.jpg"
      }
    ]
  },
  {
    "instructorId": 6,
    "instructorName": "Maira Winslet",
    "classId": 4,
    "students": 70,
    "Instractorimage": "instructor_david.jpg",
    "classes": [
      {
        "classId": 9,
        "className": "Breakdance",
        "students": 66,
        "image": "https://i.ibb.co/RCSb6w4/breakdance.jpg"
      },
      {
        "classId": 10,
        "className": "Latin Ballroom",
        "students": 64,
        "image": "https://i.ibb.co/wgFWS1Y/latin-ballroom.jpg"
      }
    ]
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