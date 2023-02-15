import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Heading from '../Heading'
// import style from './Portfolio.module.css'

export default function MultiActionAreaCard() {
    const projects = [
        {
            title: "MIME",
            image: "https://images.unsplash.com/photo-1597225244660-1cd128c64284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80",
            link: "https://foundationfinder.getmime.com/",
            detail: "Created the complete frontend and integrated the APIs for Skin Tone Matching, Personalized Recommendations, Shade finder Quiz, Review plus rating, etc Implemented unit test cases for code testing and optimizing."
        },
        {
            title: "NETZERO",
            image: "https://cdn.pixabay.com/photo/2022/06/09/14/32/non-fungible-token-7252677_960_720.png",
            link: "https://www.netzerogame.io/",
            detail: "It is the NFT game built on Binance Smart Chain with an aim to increase awareness of the effect greenhouse gas emissions, deforestation and living a more sustainable lifestyle. Created the complete frontend and integrated the APIs. Created the two game modes: The Biosphere Mode or the Infinite Runner Mode"
        },
        {
            title: "NUMETRIC",
            image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
            link: "https://numetric.work/",
            detail: "Platform which allows the user to generate professional invoices, manage payment, inventory, generate accounting reports. Being a backend developer, I created few APIs with the help of Node.js/Express.js and to do Unit testing with respect to all the possible scenarios.● PayPal Invoicing and PayPal subscription plan."
        },
        {
            title: "NITEX",
            image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
            link: "https://nitex.com/",
            detail: "Platform which provides an end-to-end outsourcing platform that empowers SME apparel brands and individual entrepreneurs. I worked as a full-time developer for the team and involved in various in-house and client project."
        },
        {
            title: "SPEEDHOME",
            image: "https://cdn.pixabay.com/photo/2017/03/03/13/55/key-2114044_960_720.jpg",
            link: "https://speedhome.com/",
            detail: `Is the safest and fastest Malaysia leading property rental platform. I involved in the platform re-development and worked on the frontend part of it.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`
        }]
    return (
        <>
            <Heading heading="Portfolio"/>
            <div className="flex flex-wrap border-b-2 pb-8">
                {
                    projects.map(item => <>
                        <a href={item.link} target="_blank">
                            <Card sx={{ maxWidth: 345, maxHeight: 523, minHeight: 522.14, m: 1 }} className="drop-shadow-xl">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        minHeight="200"
                                        image={item.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{minHeight: 160}}>
                                            {item.detail}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <a href={item.link} target="_blank">
                                        <Button size="small" color="primary">
                                            Website
                                        </Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </a>
                    </>)
                }
            </div>
        </>
    );
}
