import React, { Component } from 'react';
import './card.css';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/*
    This is a reusable-card component from the material-ui
    card component. It will provide information 
    through props to display data.
*/

class CardComponent extends Component {
    render() {
        const {image, text} = this.props;
        return(
            <div>
            <Card className="card-container">
                <CardActionArea>
                    <CardMedia>
                        {image}
                    </CardMedia>
                </CardActionArea>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    {text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
            </div>
        );
    }
}

export default CardComponent;