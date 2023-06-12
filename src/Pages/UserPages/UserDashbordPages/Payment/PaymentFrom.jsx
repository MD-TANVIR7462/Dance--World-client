import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Components/Provider/AuthProvider';
import useChart from '../../../../../Hooks/useChart';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const PaymentFrom = ({price,newPay}) => {
  const navigate = useNavigate()
  const { Chart, refetch } = useChart()
  const [clientSecret, setClientSecret] = useState("");
   const [cardError, setCardError] = useState('')
   const{User} = useContext(AuthContext)
   const stripe = useStripe();
   const [process,setprocess]=useState(false)
   const elements = useElements();
   const [tranjectionID,settrandjection]=useState('')


   useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("https://ass-12-server-mu.vercel.app/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({price}),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);






   const handleSubmit = async (event) => {

      event.preventDefault();
  
      if (!stripe || !elements) {

        return;
      }

      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }

      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setCardError(error.message);
      } else {
        // console.log('[PaymentMethod]', paymentMethod);
      }


      setprocess(true)
      const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: User?.displaName || "unknown",
              email: User?.email || "No-Email" 
            },
          },
        },
      );
if(confirmError){
  setCardError(confirmError.message);
}
setprocess(false)
if(paymentIntent.status === "succeeded"){
 settrandjection(paymentIntent.id)
 const tranjectId = paymentIntent.id

// Todo ==>> Agamikal eikhan theke kaj start korbo =====>>>>>>>Backend a data save delet and update student and enroll classes==========>>>>
const {_id,

  Availableseats,
  
  className,
  
  instructorEmail,
  
  insName,
  
  price,
  
  
students,
oldId,
  classImage,
  
  userName,
  
  userEmail } = newPay


const date = new Date()



const newdata = {bookamekID : _id,Availableseats : Availableseats-1,className,instructorEmail,insName,price,students : students+1,classImage,userName,userEmail,tranjectId,oldId,date}




fetch('https://ass-12-server-mu.vercel.app/paymentcomplete',{
  method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newdata),
})
.then(res=>res.json())
.then(data=>{
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Payment Succefully',
    showConfirmButton: false,
    timer: 1500
  })
  navigate('/dashboard/bookmarkedclasses')
  refetch()
})

}
    };
   return (
      <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit " className='btn btn-primary btn-sm ' disabled={!stripe || !clientSecret || process}>
        Pay
      </button>
      {
            cardError && <p className='text-red-800 p-4  mr-5'>{cardError}</p>
         }
         {
          tranjectionID && <p className='text-green-600 p-4  mr-5'>Trsnsection Compleate - {tranjectionID}</p>
         }
    </form>


   );
};

export default PaymentFrom;