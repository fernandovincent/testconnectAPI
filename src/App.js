import React, { Component } from "react";
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@material-ui/core";
import TouchAppRoundedIcon from "@material-ui/icons/TouchAppRounded";
import useStyles from "./styles";
import ListComp from "./ListComp";
import axios from "axios";
import qs from "querystring";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const api = "http://localhost:3001";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      berita: [],
      response: "",
      display: "none",
    };
  }

  // componentDidMount() {
  //   axios
  //     .get(api + "/tampilBerita")
  //     .then((res) => {
  //       const berita = res.data;
  //       this.setState({ berita });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  componentDidMount() {
    axios.get(api + "/tampilBerita").then((res) => {
      this.setState({
        berita: res.data.values,
      });
    });
  }

  render() {
    // const { berita } = this.state;
    // const classes = useStyles();

    return (
      // <div>
      //   <CssBaseline />
      //   <AppBar position="relative">
      //     <Toolbar>
      //       <TouchAppRoundedIcon />
      //       <Typography variant="h6">API Connect</Typography>
      //     </Toolbar>
      //   </AppBar>
      //   <div>
      //     <Container maxWidth="sm">
      //       <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
      //         Testing Connect API
      //       </Typography>
      //       <Typography variant="h5" align="center" color="textSecondary" paragraph>
      //         Hello everyone, this is testing to connect API with MySQL Database using React and Node.js
      //       </Typography>
      //     </Container>
      //   </div>
      //   {/*
      //   <Container className={classes.cardGrid} maxWidth="md">
      //     <Grid container spacing={4}>
      //       {cards.map((card) => (
      //         <Grid item key={card} xs={12} sm={6} md={4}>
      //           <Card className={classes.card}>
      //             <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image Title" />
      //             <CardContent className={classes.cardContent}>
      //               <Typography gutterBottom variant="h5">
      //                 Heading
      //               </Typography>
      //               <Typography>Lorem ipsum dolor sit amet. Lorom ipsom deler sit emet da sot em it dol tal kil pos kam tik tok.</Typography>
      //             </CardContent>
      //             <CardActions>
      //               <Button size="small" color="primary">
      //                 View
      //               </Button>
      //               <Button size="small" color="primary">
      //                 Edit
      //               </Button>
      //             </CardActions>
      //           </Card>
      //         </Grid>
      //       ))}
      //     </Grid>
      //   </Container>
      // </main> */}
      //   <Grid>
      //     {this.state.berita.map((berita) => (
      //       <>
      //         <main>
      //           <Container maxWidth="md">
      //             <Grid container spacing={4}>
      //               <Grid item xs={12} sm={6} md={4}>
      //                 <Card>
      //                   <CardMedia title="Image Title" />
      //                   <CardContent>
      //                     <Typography gutterBottom variant="h5">
      //                       {berita.judul_berita}
      //                     </Typography>
      //                     <Typography>{berita.isi_berita}</Typography>
      //                   </CardContent>
      //                   <CardActions>
      //                     <Button size="small" color="primary">
      //                       View
      //                     </Button>
      //                     <Button size="small" color="primary">
      //                       Edit
      //                     </Button>
      //                   </CardActions>
      //                 </Card>
      //               </Grid>
      //             </Grid>
      //           </Container>
      //         </main>
      //       </>
      //     ))}
      //   </Grid>
      // </div>
      <ListComp />
    );
  }
}

export default App;
