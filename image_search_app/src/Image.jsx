const Image =({data})=>{
return <div>
    <div >
        {data.map((image) =><div key={image.id}>
        <span >
        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
       height="200" width="250" alt={image.title}/>
        </span>
        </div>)}
        </div>
</div>
}
export default Image