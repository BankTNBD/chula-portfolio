import { redirect } from 'next/navigation'
import Frame from "@/Components/Frame"
import { Grid2, ImageList, ImageListItem, AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material"
import { HomeRounded } from "@mui/icons-material"

export default function Page() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{backgroundColor: "white"}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            href='/'
                            sx={{ mr: 2, color: "var(--pink-main-color)" }}
                        >
                            <HomeRounded fontSize='large' />
                        </IconButton>

                    </Toolbar>
                </AppBar>
            </Box>
            <div style={{ padding: '20px' }}>

                <Grid2 container columns={{ xs: 2, sm: 2, md: 4, lg: 4 }} spacing={2}>
                    <Grid2 size={2}>
                        <Frame title="มัธยมศึกษาตอนต้น">
                            <ImageList cols={{ xs: 1, sm: 2, md: 1, lg: 2 }}>
                                <ImageListItem>
                                    <img
                                        src={"/assets/images/cert/porphor1-3-1.jpg"}
                                        alt={"ปพ1"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={"/assets/images/cert/porphor1-3-2.jpg"}
                                        alt={"ปพ1"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            </ImageList>
                        </Frame>
                    </Grid2>
                    <Grid2 size={2}>
                        <Frame title="มัธยมศึกษาตอนปลาย">
                            <ImageList cols={{ xs: 1, sm: 2, md: 1, lg: 2 }}>
                                <ImageListItem>
                                    <img
                                        src={"/assets/images/cert/porphor1-5-1.jpg"}
                                        alt={"ปพ1"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={"/assets/images/cert/porphor1-5-2.jpg"}
                                        alt={"ปพ1"}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            </ImageList>
                        </Frame>
                    </Grid2>
                </Grid2>
            </div>
        </>
    )
}