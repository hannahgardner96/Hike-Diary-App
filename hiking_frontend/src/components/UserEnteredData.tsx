export const UserEnteredData = ({hike}) => {
    return (
        <div className = "user-entered=data">
            <h6>{hike.hike_name} Address: {hike.hike_address}</h6>
            <h6>Hike Date: {hike.hike_date}</h6>
            <h6>{hike.hike_description}</h6>
        </div>
    )
}