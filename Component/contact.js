import React from "react";
import {
  Grid,
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button
} from '@mui/material';

export default function Contact() {
    return (
      <>
      <div id = "Contact" style={{fontFamily: "calibri",color: "#fff", background: 'rgb(2,0,36)',background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(153,10,121,1) 40%, rgba(0,212,255,1) 100%)',paddingTop:'80px', fontSize: "40px", textAlign: 'center', fontWeight: '100%',width:'100%', height: '30em'}}>
        <h1>
         Have Query?
          Contact us Now!

        </h1>
        <div style={{height:'100%',width:'100%',display:'flex',flexDirection:'column'}}>
        <Grid container spacing={3} style={{ display:'flex',marginTop: '10px',marginLeft: '-250px', height: '10em'}}>
            <Grid item lg={16} >
              <Paper style={{marginLeft: '431px'}}>
                <Box>
                  {/* <iframe  style={{height: '7em'}}> */}
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="300px" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                   {/* </iframe> */}
                </Box>
              </Paper>
            </Grid>

          </Grid>
          <Grid style={{display:'flex'}} class="txt" item lg={6} >
            <Paper style={{marginRight: '499px',marginLeft: '410px',marginTop: '12px',width:'100vh'}}>
              <Box p={10} >
                <TextField
                  style={{width: "100%", marginRight: '10px'}}
                  helperText=" "
                  id="demo-helper-text-aligned-no-helper"
                  placeholder="Full name"
                  variant="outlined"
                />
                <TextField
                  style={{width: "100%"}}
                  helperText=" "
                  id="demo-helper-text-aligned-no-helper"
                  placeholder="Email"
                  variant="outlined"
                />

                <Box>
                  <TextField
                    fullWidth
                    id="fullWidth"
                    placeholder="Subject"
                    variant="outlined"
                  />
                </Box>
                
                <TextareaAutosize
                  style={{border: '1px solid gray', borderRadius: '5px', fontSize: '20px', width: "100%", marginTop:"15px"}}
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Message"
                />
                <Button style={{backgroundColor: 'skyblue'}} className="submit-frm">
                  Submit
                </Button>
              </Box>
            </Paper>
          </Grid>
        </div>
      </div>
      </>
    )
  }
