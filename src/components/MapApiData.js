import React, {useState} from 'react'
import OrganizationList from './OrganizationList'

export default function MapApiData(props) {

    const [numberOfOrgs, setNumberOfOrgs] = useState(10)

    let organizations = props.data.items


//api provied 30 objects, this adds 10 more through a filtered search of the api call each time the "see more" button is clicked

    const showMore = (numberOfOrgs) => {
        if(numberOfOrgs < 30){
            setNumberOfOrgs(numberOfOrgs + 10)
        }
        
    }


    const filterResults = (x) => {
        
        let filteredOrgs = organizations.slice(0, x)
        let mapOverData = filteredOrgs.map((orgs, index)=> 
        <OrganizationList
        key={index}
        avatar={orgs.avatar_url}
        name={orgs.login}
        />
        )
        return mapOverData
    }
    

    return (
        <>
            <div className="header">
                <h3>Github Organization List</h3>
                <h5>Brought To You by The GitHub API</h5>
            </div>
            {filterResults(numberOfOrgs)}
           <div className="bottom-buttons">
           <button onClick={(e)=> {
               e.persist()
               showMore(numberOfOrgs)}}>Show More</button>  
           </div>
            
        </>
    )
}
