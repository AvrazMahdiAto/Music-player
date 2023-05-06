import React, {useState, useEffect} from 'react'
import "./sidbar.css";
import SidebarButton from './sidebarButton';
import { MdFavorite } from 'react-icons/md';

import {FaGripfire, FaPlay} from "react-icons/fa";
import {FaSignOutAlt} from "react-icons/fa";
import {IoLibrary} from "react-icons/io5";
import {MdSpaceDashboard} from "react-icons/md" ;
import apiClient from '../../Spotify';


export default function Sidebar() {
  const [image, setImage] = useState('https://img.ebay-kleinanzeigen.de/api/v1/prod-ads/images/93/93ebfb19-0044-493d-af19-985eb778b26e?rule=$_59.JPG');

  useEffect(() => {
    apiClient.get('me').then(
      (response) => {
        setImage(response.data.images[0].url);
      },
      (error) => {
        console.log(error.response.data);
      }
    );
  },[])
  return (
    <div className='sidebar-container'>
    <img src={image} className='profile-img' alt='profile' />


    <div className='clum'>
      <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />}/>
      <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />}/>
      <SidebarButton title="Player" to="/player" icon={<FaPlay />}/>
      <SidebarButton title="favorites" to="/favorites" icon={<MdFavorite />}/>
      <SidebarButton title="Library" to="/" icon={<IoLibrary />}/>
    </div>
    <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />}/>
    </div>

   
  )
};
