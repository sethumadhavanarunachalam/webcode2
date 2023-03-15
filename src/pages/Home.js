import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/action/carsAction'
import {Row,Col} from 'antd'
import Spinner from '../components/Spinner.js'
import { Link } from 'react-router-dom';
const data = [{
  "id":1,
  "name":"Maruti Eeco",
  "image":"https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Eeco/9454/1675860064709/front-left-side-47.jpg?tr=w-456",
  "rentperhour":"400",
  "fueltype":"petrol/CNG",
  "bookedtimeslot":[],
  "capacity":"5,7"
},
{
  "id":2,
  "name":"Maruti Brezza",
  "image":"https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Brezza/8679/1675859019982/front-left-side-47.jpg?tr=w-456",
  "rentperhour":"600",
  "fueltype":"petrol",
  "bookedtimeslot":[],
  "capacity":"5"
},
{
  "id":3,
  "name":"Tata Nexon",
  "image":"https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/9667/1678099574664/front-left-side-47.jpg?tr=w-456",
  "rentperhour":"650",
  "fueltype":"petrol/Diesal",
  "bookedtimeslot":[],
  "capacity":"5"
},
{
  "id":4,
  "name":"Mahindra XUV300",
  "image":"https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV300/7239/1669701927953/front-left-side-47.jpg?tr=w-456",
  "rentperhour":"650",
  "fueltype":"petrol/CNG",
  "bookedtimeslot":[],
  "capacity":"5"
},
{
  "id":5,
  "name":"Hyundai Creta",
  "image":"https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/7695/1651645683867/front-left-side-47.jpg?tr=w-456",
  "rentperhour":"700",
  "fueltype":"petrol/CNG",
  "bookedtimeslot":[],
  "capacity":"5"
},
{
  "id":6,
  "name":"Maruti Brezza",
  "image":"https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Brezza/8679/1675859019982/front-left-side-47.jpg?tr=w-456",
  "rentperhour":"600",
  "fueltype":"petrol",
  "bookedtimeslot":[],
  "capacity":"5"
},
{
  "id":6,
  "name":"Tata Nexon",
  "image":"https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/9667/1678099574664/front-left-side-47.jpg?tr=w-456",
  "rentperhour":"650",
  "fueltype":"petrol/Diesal",
  "bookedtimeslot":[],
  "capacity":"5"
},
{
  "id":7,
  "name":"Mahindra XUV300",
  "image":"https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV300/7239/1669701927953/front-left-side-47.jpg?tr=w-456",
  "rentperhour":"650",
  "fueltype":"petrol/CNG",
  "bookedtimeslot":[],
  "capacity":"5"
},
{
  "id":8,
  "name":"Hyundai Creta",
  "image":"https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/7695/1651645683867/front-left-side-47.jpg?tr=w-456",
  "rentperhour":"700",
  "fueltype":"petrol/CNG",
  "bookedtimeslot":[],
  "capacity":"5"
}
];
function Home() {

  // const {cars}= useSelector(state=>state.carsReducer)
  const{loading}=useSelector(state=>state.alertReducer)
  const cars = data;
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllCars())
  },[])
  return(
   <DefaultLayout>
   {loading == true &&(<Spinner/>) } 

        <Row justify='center' gutter={16} className="mt-5">
          {cars.map(car=>{
            return <Col lg={5} sm={24} xs={24}>
              <div className='car p-2 bs1 mt-6'>
                <img src={car.image} className="carimg"/>
                <div className='car-content d-flex align-items-center justify-content-between'>
                  <div>
                    <p>{car.name}</p>
                    <p>{car.rentperhour} Rent Per Hour/-</p>
                  </div>
                  <div>
                    <button className='btn1'><Link to={`/booking/${cars.id}`}>Booknow</Link></button>
                  </div>
                </div>
              </div>
            </Col>
          })}
        </Row>
   </DefaultLayout>
  )
}

export default Home