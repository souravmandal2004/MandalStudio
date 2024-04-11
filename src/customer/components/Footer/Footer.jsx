import { Grid, Typography } from '@mui/material'
import React from 'react';
import Button from '@mui/material/Button';

function Footer() {
    return (
        <div>
            <Grid className="bg-black text-white text-center mt-10" container sx={{bgcolor:"black", color:"white", py:3}} >

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Company </Typography>
                    <div className='flex flex-col'>
                        <Button className='pb-5' variant='h6'> About </Button>
                        <Button className='pb-5' variant='h6'> Blog </Button>
                        <Button className='pb-5' variant='h6'> Press </Button>
                        <Button className='pb-5' variant='h6'> Jobs </Button>
                        <Button className='pb-5' variant='h6'> Partners </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Solutions </Typography>
                    <div className='flex flex-col'>
                        <Button className='pb-5' variant='h6'> Marketing </Button>
                        <Button className='pb-5' variant='h6'> Analytics</Button>
                        <Button className='pb-5' variant='h6'> Commerce </Button>
                        <Button className='pb-5' variant='h6'> Insights </Button>
                        <Button className='pb-5' variant='h6'> Support </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Documentation </Typography>
                    <div className='flex flex-col'>
                        <Button className='pb-5' variant='h6'> Guides </Button>
                        <Button className='pb-5' variant='h6'> API Status</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Legal </Typography>
                    <div className='flex flex-col'>
                        <Button className='pb-5' variant='h6'> Claim </Button>
                        <Button className='pb-5' variant='h6'> Privacy</Button>
                        <Button className='pb-5' variant='h6'> Terms</Button>
                    </div>
                </Grid>

                <Grid className='pt-20' item xs={12}>
                    <Typography variant='body2' component="p" align='center'>
                        &copy; 2024 My Company. All rights reserved.
                    </Typography>
                    <Typography variant='body2' component="p" align='center'>
                        Made with love by Mandal.
                    </Typography>

                </Grid>

            </Grid>
        </div>
    )
}

export default Footer;