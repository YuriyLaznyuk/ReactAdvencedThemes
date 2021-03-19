import React,{useState,useMemo} from 'react';

    const skills=['html','css', 'js', 'react','sass']
function UseMemoSkills(props) {
       const [searchSkill, setSearchSkill]=useState('');


       const searchResults=useMemo(()=>{
           return skills.filter(item=>item.includes(searchSkill))
       },[searchSkill])


    const inputSearch=e=>setSearchSkill(e.target.value);
    return (
        <div style={{marginTop:10, background:'#f1ebeb' }}>
            <h3>Search Skill</h3>
            <input type="text" placeholder='Search' onChange={inputSearch}/>
            <ul>
                {searchResults.map((item,index)=>
                <li  key={index}>{item}</li>)}
            </ul>



        </div>
    );
}

export default UseMemoSkills;