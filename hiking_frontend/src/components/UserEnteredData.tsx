export const UserEnteredData = ({hike}) => {
    return (
        <div className = "user-entered=data">
            <h6 className = "user-data-text" id = "entry-address">{hike.hike_name} Address: {hike.hike_address}</h6>
            <h6 className = "user-data-text" id = "entry-date">Hike Date: {hike.hike_date}</h6>
            <h6 className = "user-data-text" >{hike.hike_description}</h6>
        </div>
    )
}