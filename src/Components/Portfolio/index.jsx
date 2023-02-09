import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import style from './Portfolio.module.css'

export default function MultiActionAreaCard() {
    const projects = [
        {
            title: "MIME",
            image: "https://images.unsplash.com/photo-1597225244660-1cd128c64284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80"
        },
        {
            title: "NETZERO",
            image: "https://cdn.pixabay.com/photo/2022/06/09/14/32/non-fungible-token-7252677_960_720.png"
        },
        {
            title: "NUMETRIC",
            image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
        },
        {
            title: "NITEX",
            image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        },
        {
            title: "SPEEDHOME",
            image: "https://cdn.pixabay.com/photo/2017/03/03/13/55/key-2114044_960_720.jpg"
        }]
    return (
        <>
            <h1 id="portfolio" className={`text-7xl heading font-semibold py-24 ml-96 ${style.heading}`}>Portfolio</h1>
            <div className="ml-96 flex flex-wrap border-b-2 pb-8">
                {
                    projects.map(item => <>
                        <Card sx={{ maxWidth: 345, maxHeight: 420, m: 1 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Website
                                </Button>
                            </CardActions>
                        </Card>
                    </>)
                }
            </div>
        </>
    );
}
