import "./index.css";
const Tea = ({ title, image }) => {
  return (
    <div class="img-tile">
      <img src={image} alt="" />
      <h3>{title}</h3>
    </div>
  );
};

Tea.defaultProps={
  title:"7lib",
  image:"https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/72/6e/1a/726e1a9c-404b-4c23-67db-cc12a6525546/source/256x256bb.jpg"
}

export default Tea;
