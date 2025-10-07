// import React, {useState, useEffect} from 'react'
// import { } from "react-icons/fa";
// import useFetch from '../../hooks/useFetch';
// import { useNavigate } from 'react-router-dom';

// const SearchBar = ()=>{

//    const[from,setFrom] = useState("");
//    const[to,setTo] =  useState("");

//    console.log(data)

//    const navigate = useNavigate();

//    useEffect(()=>{
//     if(data) {
//       navigate('/TrainHome',{state : data})
//       //navigate('/adminTrain',{state :data})
//     }
//    },[data,navigate])



//     return(
//         <div className='flex  items-center bg-white mt-4 lg:mt-[-52px] px-8 shadow-lg max-w-[1240px] max-l-[240px]  p-4 lg:text-left text-center h-full  items-center   mx-auto rounded-lg'>
//             <form className='flex flex-wrap lg:flex-row justify-between px-0'>
//             <div className='w-full md:w-1/2 lg:w-1/2 '>
//                 <label for = 'from' className='py-3'>From</label> <br/>
//                 <input type='text' list='from' className='border rounded-md  p-3 lg:w-[300px] w-full' placeholder='Hyderabad'
//                         value={from} onChange={(e)=>{setFrom(e.target.value)}}
//                 ></input>
//                     <datalist id='from'>
//                         <option value='Hyderabad'/>
//                         <option value = 'Mumbai'/>
//                         <option value = 'Delhi'/>
//                         <option value = 'Kolkata'/>
//                         <option value = 'Pune'/>
//                         <option value = 'Bangalore'/>
//                         <option value = 'Chennai'/>
//                     </datalist>
//             </div>

//           <div className='w-full md:w-1/2 lg:w-1/2 '>
//             <label for = 'to' className='py-3'>To</label><br/>
//             <input type='text' list='to' className='border rounded-md  p-3 lg:w-[300px] w-full' placeholder='Delhi'
//                     value={to} onChange={(e)=>{setTo(e.target.value)}}
//             ></input>
//                 <datalist id='to'>
//                 <option value='Jaipur'/>
//                         <option value = 'Srinagar'/>
//                         <option value = 'Coimbatore'/>
//                         <option value = 'Agra'/>
//                         <option value = 'Hyderabad'/>
//                         <option value = 'Shimla'/>
//                         <option value = 'Gwalior'/>
//             </datalist>
//           </div>

//           <div className='w-full md:w-1/2 lg:w-1/2'>
//             <label for = 'pickupDate' className='py-3'>Depature Date</label> <br/>
//             <input type='date' className='border rounded-md p-3 w-full lg:w-[300px]'/>
//           </div>

//           <div className='w-full md:w-1/2 lg:w-1/2'>
//             <label for = 'returnDate' className='py-3'>Return Date</label> <br/>
//             <input type='date' className='border rounded-md p-3 w-full lg:w-[300px]'/>
//           </div>

//           <div className='w-full md:w-1/2 lg:w-1/2 '>
//             <label for = 'to' className='py-3'>Class</label><br/>
//             <input type='text' list='nut' className='border rounded-md  p-3 lg:w-[300px] w-full' placeholder='First Class'></input>
//                 <datalist id='nut'>
//                 <option value='First Class'/>
//                 <option value = 'Second Class'/>
//                 <option value = 'Three Class'/>
//             </datalist>
//           </div>

//           <div className='w-full md:w-1/2 lg:w-1/2 '>
//             <label for = 'to' className='py-3'>Number Of Passengers</label><br/>
//             <input type='text'  className='border rounded-md  p-3 lg:w-[300px] w-full'></input>
                
//           </div>

//           <div className='mx-auto  hidden'>
//             <button type='submit' className='mt-10 inline-block flex justify-center float-right rounded-xl bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
//                 Search
//             </button>
          
//             </div>

//         </form>

      
      

//     </div>
//     )
// }

// export default SearchBar;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [data, setData] = useState(null); // <-- store fetched train data
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate('/TrainHome', { state: data });
    }
  }, [data, navigate]);

  const handleSearch = async (e) => {
    e.preventDefault(); // prevent form submission reload
    try {
      const response = await fetch(`http://localhost:4000/api/train/fetch/${from}/${to}`);
      if (!response.ok) throw new Error("Failed to fetch data");

      const result = await response.json();
      setData(result); // trigger useEffect to navigate
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch train data. Please try again.");
    }
  };

  return (
    <div className='flex items-center bg-white mt-4 px-8 shadow-lg max-w-[1240px] mx-auto rounded-lg p-4'>
      <form className='flex flex-wrap lg:flex-row justify-between w-full' onSubmit={handleSearch}>
        {/* From Input */}
        <div className='w-full md:w-1/2 lg:w-1/2'>
          <label htmlFor='from' className='py-3'>From</label> <br />
          <input
            type='text'
            list='from'
            className='border rounded-md p-3 lg:w-[300px] w-full'
            placeholder='Hyderabad'
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
          <datalist id='from'>
            <option value='Hyderabad' />
            <option value='Mumbai' />
            <option value='Delhi' />
            <option value='Kolkata' />
            <option value='Pune' />
            <option value='Bangalore' />
            <option value='Chennai' />
          </datalist>
        </div>

        {/* To Input */}
        <div className='w-full md:w-1/2 lg:w-1/2'>
          <label htmlFor='to' className='py-3'>To</label><br />
          <input
            type='text'
            list='to'
            className='border rounded-md p-3 lg:w-[300px] w-full'
            placeholder='Delhi'
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
          <datalist id='to'>
            <option value='Jaipur' />
            <option value='Srinagar' />
            <option value='Coimbatore' />
            <option value='Agra' />
            <option value='Hyderabad' />
            <option value='Shimla' />
            <option value='Kochi' />
          </datalist>
        </div>

        {/* Other Inputs */}
        <div className='w-full md:w-1/2 lg:w-1/2'>
          <label htmlFor='pickupDate' className='py-3'>Departure Date</label> <br />
          <input type='date' className='border rounded-md p-3 w-full lg:w-[300px]' />
        </div>

        <div className='w-full md:w-1/2 lg:w-1/2'>
          <label htmlFor='returnDate' className='py-3'>Return Date</label> <br />
          <input type='date' className='border rounded-md p-3 w-full lg:w-[300px]' />
        </div>

        <div className='w-full md:w-1/2 lg:w-1/2'>
          <label htmlFor='class' className='py-3'>Class</label><br />
          <input type='text' list='nut' className='border rounded-md p-3 lg:w-[300px] w-full' placeholder='First Class' />
          <datalist id='nut'>
            <option value='First Class' />
            <option value='Second Class' />
            <option value='Third Class' />
          </datalist>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/2'>
          <label htmlFor='passengers' className='py-3'>Number Of Passengers</label><br />
          <input type='number' className='border rounded-md p-3 lg:w-[300px] w-full' min="1" />
        </div>

        {/* Search Button */}
        <div className='w-full flex justify-center mt-6'>
          <button
            type='submit'
            className='rounded-xl bg-blue-600 px-8 py-3 text-white font-bold hover:bg-blue-700 transition duration-200'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
