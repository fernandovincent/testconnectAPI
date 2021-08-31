import React, { PureComponent } from "react";
import axios from "axios";
import qs from "querystring";
import { Typography, AppBar, Table, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@material-ui/core";
import useStyles from "./styles";

const api = "http://localhost:3001";
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// eslint-disable-next-line react-hooks/rules-of-hooks
// const classes = useStyles();

class ListComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      berita: [],
      response: "",
      display: "none",
    };
  }

  componentDidMount() {
    axios.get(api + "/tampilBerita").then((res) => {
      this.setState({
        berita: res.data.values,
      });
    });
  }

  render() {
    return (
      <>
        <main>
          {/* <div className={classes.container}>
            <Container maxWidth="sm">
              <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                Testing Connect API
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Hello everyone, this is testing to connect API with MySQL Database using React and Node.js
              </Typography>
            </Container>
          </div> */}
          <Table className="table-bordered">
            <thead>
              <tr>
                <th>ID Berita</th>
                <th>Judul Berita</th>
                <th>Isi Berita</th>
                <th>Cover Berita</th>
              </tr>
            </thead>
            <tbody>
              {this.state.berita.map((berita) => (
                <tr key={berita.id_berita}>
                  <td>{berita.id_berita}</td>
                  <td>{berita.judul_berita}</td>
                  <td>{berita.isi_berita}</td>
                  <td>{berita.cover_berita}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {this.state.berita.map((berita) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia} image={berita.cover_berita} title="Image Title" />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5">
                        {berita.judul_berita}
                      </Typography>
                      <Typography>{berita.isi_berita}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container> */}
        </main>
      </>
    );
  }
}

export default ListComp;
