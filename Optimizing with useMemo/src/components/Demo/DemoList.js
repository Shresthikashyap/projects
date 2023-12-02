import React,{useMemo} from 'react';

const DemoList = (props) => {
    const sortedList = useMemo(()=>{ 
        
        if(props.title === 'Sorted in Ascending Order'){
            return props.items.sort((a,b)=>a-b);
        }else{
            return props.items.sort((a,b)=>b-a);
        }
    },[props.items,props.title]);
    
    return (
        <div>
            <h2>{props.title}</h2>
            <ul className='text-align: center;'>
                {sortedList.map((item) =>{
                    return(
                        <li key={item}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DemoList