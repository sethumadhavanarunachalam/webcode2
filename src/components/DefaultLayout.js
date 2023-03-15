import React from 'react'
import { Menu, Dropdown, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
function DefaultLayout(props) {
  const menu = (
    <Menu>
    <Menu.Item>
        <Link to="/home">
         Home
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/booking">
         Booking
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/login">
         ADMIN
        </Link>
      </Menu.Item>
      <Menu.Item>
      <Link to="/profile">
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item>
      <Link to="/login">
          Logout
        </Link>
      </Menu.Item>
    </Menu>)
  return (
    <div>
      <div className='header bs1'>
           <div className='d-flex justify-content-between'>
                <h1>Rentahh</h1>
                <Dropdown overlay={menu} placement="bottomLeft">
                <button>Sethu</button></Dropdown>
           </div>
      </div>
      <div className='content '>
            {props.children}
      </div>

      


    </div>
  )
}

export default DefaultLayout