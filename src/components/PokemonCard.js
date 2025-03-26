import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import {Box} from "@mui/material";

const PokemonCard=({item})=>{
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <Box>
                    <img src={item.sprites.front_default}/>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        nombre:{item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        peso:{item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        tipo: {item.types[0].type.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}
export default PokemonCard