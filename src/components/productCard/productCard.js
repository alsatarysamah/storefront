import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import "./productCard.css"
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function ProductCard(props) {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  // let arr=props.element.filter(()=>element.)
console.log("eeeeeeeeeeeeeeee",props?.element);
  return (
    <Card className="productCard" sx={{ maxWidth: 345 }} >
      <CardHeader
      className="header"
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props?.element?.name[0].toUpperCase()}
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={`${props?.element?.name}`}
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="src/components/productCard/product.png"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text">
          description: {`${props?.element?.description}`}
        </Typography>
        <Typography variant="body2" color="text">
          price: {`${props?.element?.price}`}
        </Typography>
        <Typography variant="body2" color="text">
          inventoryCount: {`${props?.element?.inventoryCount}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* <FavoriteIcon /> */}
        </IconButton>
        <IconButton aria-label="share"></IconButton>
      </CardActions>
    </Card>
  );
}
