import React,{useState, useCallback} from 'react';

function UseCallbackSkill(props) {
    const [skill, setSkill]=useState('')
    const [skills, setSkills]=useState(['html','css', 'js'])
    function inputChangeSkill(e) {
        setSkill(e.target.value)

    }
    function addSkill() {
        setSkills(skills.concat(skill))

    }

    const removeSkill=useCallback((skill)=>{
        setSkills(skills.filter(item=>item !==skill ))
    },[skills])

    return (
        <div style={{marginTop:20}}>
            <p>
            <input type="text" placeholder='InputSkill' onChange={inputChangeSkill}/>
            <button onClick={addSkill}>AddSkills</button>
            </p>
            <SkillList style={{marginTop:20, backgroundColor:'#86b9b8'}}
            skills={skills} removeSkill={removeSkill}/>
        </div>
    );
}

export default UseCallbackSkill;

const SkillList=React.memo(({skills, removeSkill})=>{

    return <div>
        <ul>
            {
                skills.map(item=>
            <li style={{listStyle:'none'}} key={item} onClick={()=>removeSkill(item)}>{item}</li>)
            }
        </ul>

    </div>
})