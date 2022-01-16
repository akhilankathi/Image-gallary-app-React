const Image =({data})=>{
return <span >
        {data.map((image) =><span key={image.id}>
        <span >
        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
       height="200" width="250" alt={image.title}/>
        </span> </span>
        )} </span>
       
        

}
export default Image