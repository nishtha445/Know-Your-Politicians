import React,{useState} from 'react'
import Politicians from './Politicians'
import PoliticianCard from './PoliticianCard';
import Navbar from './Navbar';
const uniqueList=[
    ...new Set(
        Politicians.map((curElem)=>{
            return curElem.party
        })
    ),
    "All",
];
export const AllPoliticians=()=>{
    const [menuData,setMenuData]=useState(Politicians)
    const [menuList]=useState(uniqueList)
    const filterItem=(party)=>{
        if(party==="All"){
            setMenuData(Politicians);
            return;
        }
        const updatedList=Politicians.filter((curElem)=>{
            return curElem.party===party;
        });
        setMenuData(updatedList);
    };
    return (
        <>
        
      <Navbar filterItem={filterItem} menuList={menuList}/> 
    <PoliticianCard menuData={menuData}/>
        </>
    )
}

export default AllPoliticians;
