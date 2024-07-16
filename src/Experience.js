function Experience(props) {
  return (
    <div class="block">
      <div class="pic">
        <img src={"assets/" + props.image} width="176px" height="235px" />
      </div>
      <br />
      <span className="text-space-r-2">
        <img src={`${process.env.PUBLIC_URL}/assets/star.png`} width={14} />
      </span> 
      <span  className="text-space-r-2">{props.rating}</span>

  
      <span className="text-grey text-space-r-2">({props.applicants})</span>
      <span className="text-grey"> • {props.country}</span>
      <br />
      {props.title}
      <p><b>From ${props.price}</b>/person</p>
    </div>
  );
}
export default Experience;
