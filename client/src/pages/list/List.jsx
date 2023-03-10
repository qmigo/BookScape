import React from 'react'
import { useLocation } from 'react-router-dom'
import HeaderList from '../../components/HeaderList/HeaderList'
import Navbar from '../../components/Navbar/Navbar'
import SearchListItems from '../../components/SearchListItems/SearchListItems'
import SideBarSearch from '../../components/SideBarSearch/SideBarSearch'
import Footer from '../../components/Footer/Footer'
import MailList from '../../components/MailList/MailList'
import './list.css'

const List = () => {
  
  return (
    <div>
      <Navbar></Navbar>
      <HeaderList></HeaderList>
      <div className="searchContainer">
        <SideBarSearch></SideBarSearch>
        <div className="listResults">
          <SearchListItems/>
          <SearchListItems/>
          <SearchListItems/>
          <SearchListItems/>
          <SearchListItems/>
          <SearchListItems/>
          <SearchListItems/>
          <SearchListItems/>
          <SearchListItems/>
          <SearchListItems/>
        </div>
      </div>
      <MailList></MailList>
      <Footer></Footer>
    </div>
  )
}

export default List
