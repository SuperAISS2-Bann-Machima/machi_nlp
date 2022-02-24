import { CoreProvider, useController } from "./controller"
import { withController } from '../../hoc/withController'
import { makeStyles } from '@mui/styles'
import DetailCard from "../../components/common/DetailCard"
import { featureDetails, featureOverviews, whyUs } from '../../data/core'
import { Container, Grid, Typography } from "@mui/material"
import cover from '../../assets/images/cover.png'
import { BACKGROUND, INFO, PRIMARY, SECONDARY, WHITE } from "../../constant/colors"
import Button from '../../components/common/Button'
import { useNavigate } from 'react-router-dom'

function Core() {
    const controller = useController()
    const classes = useStyles()
    const navigate = useNavigate()

    const CoverButton = ({ title, colorBtn, textColor, onClick = () => { } }) => (
        <Button
            title={title}
            colorBtn={colorBtn}
            textColor={textColor}
            onClick={onClick}
            sx={{ margin: 1, padding: 1 }}
        />
    )

    return (
        <>
            <div>
                {/* Cover */}
                <div className={classes.coverContainer}>
                    <div className={classes.coverBox}>
                        <Typography className={classes.coverHeader1}>
                            MACHI
                            <br />
                            QUEST
                        </Typography>
                        <Typography className={classes.coverHeader2}>
                            Fuh yoo~
                        </Typography>

                        <div className={classes.coverButtons}>
                            <CoverButton
                                title='Get Start'
                                colorBtn={BACKGROUND}
                                textColor={WHITE}
                                onClick={() => navigate('/products')}
                            />
                            <CoverButton
                                title='Learn more'
                                colorBtn={INFO}
                                textColor={BACKGROUND}
                                onClick={() => { document.getElementById('overview').scrollIntoView() }}
                            />
                        </div>
                    </div>
                </div>
                {/* Cover */}

                {/* Feature Overview */}
                <div id="overview" className={classes.overviewContainer}>
                    <Grid container >
                        {
                            featureOverviews.map((item, ind) => (
                                <Grid
                                    item
                                    key={ind}
                                    xs={12}
                                    md={4}
                                    className={classes.overviewGridItem}>
                                    <Typography className={classes.overviewValue} >{item.value}</Typography>
                                    <Typography className={classes.overviewTitle}>{item.title}</Typography>
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
                {/* Feature Overview */}

                {/* Feature Detail */}
                <div className={classes.featureDetailContainer}>
                    <Container sx={{ marginTop: 10 }}>
                        <div className={classes.featureDetailDescBox}>
                            <Typography
                                className={classes.featureDetailHeader}
                                variant='h3'
                            >
                                Features
                            </Typography>
                            <Typography
                                className={classes.featureDetailDesc}
                                variant='body1'
                            >
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </Typography>
                        </div>


                        <Grid container>
                            {
                                featureDetails.map((item, ind) => (
                                    <Grid
                                        key={ind}
                                        item
                                        className={classes.featureDetail}
                                        xs={12} md={4}>
                                        <DetailCard key={ind} title={item.title} desc={item.desc} icon={item.icon} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Container>
                </div>
                {/* Feature Detail */}

                {/* Why Us */}
                <div className={classes.yusContainer}>
                    <Container sx={{ my: 10 }}>
                        <div className={classes.yusLabels}>
                            <Typography className={classes.yusHeader1}>Why</Typography>
                            <Typography className={classes.yusHeader1}>Choose Our</Typography>
                            <Typography className={classes.yusHeader2}>Machi Quest</Typography>
                            <Typography className={classes.yusHeader3}>Fuh Yoo~</Typography>
                        </div>

                        <div className={classes.yusList}>
                            {
                                whyUs.map((item, ind) => {
                                    const title = `${ind + 1}. ${item.title}`
                                    return (
                                        <div key={ind} className={classes.yusListItem}>
                                            <Typography className={classes.yusListItemTitle}>{title}</Typography>
                                            <Typography className={classes.yusListItemDesc}>{item.desc}</Typography>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className={classes.yusGetStart}>
                            <Typography className={classes.yusHeader3}>
                                Start Generate Question
                            </Typography>

                            <Button
                                title="Get Start"
                                colorBtn={BACKGROUND}
                                sx={{ padding: 2, width: 225 }}
                                onClick={() => navigate('/products')}
                            />
                        </div>
                    </Container>
                </div>
                {/* Why Us */}

            </div>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    // Cover Style
    coverContainer: {
        backgroundImage: `url(${cover})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '92vh',
        boxSizing: 'border-box'
    },
    coverBox: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        }
    },
    coverHeader1: {
        fontFamily: 'Luckiest Guy',
        fontSize: 125,
        fontWeight: 'bold',
        color: BACKGROUND,
        lineHeight: 1,
        [theme.breakpoints.down('sm')]: {
            fontSize: 75
        }
    },
    coverHeader2: {
        fontFamily: 'Single Day',
        fontSize: 100,
        color: BACKGROUND,
        [theme.breakpoints.down('sm')]: {
            fontSize: 40
        }
    },
    coverButtons: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            marginTop: 50
        }
    },
    // Cover Style

    // Overview Style
    overviewContainer: {
        width: '100%',
        minHeight: 10,
        background: 'linear-gradient(45deg, rgba(34,38,104,1) 0%, rgba(34,38,104,1) 0%, rgba(99,144,203,1) 100%)'
    },
    overviewGridItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    overviewTitle: {
        fontFamily: 'Single Day',
        fontSize: 48,
        lineHeight: 1,
        color: WHITE
    },
    overviewValue: {
        fontFamily: 'Skranji',
        fontSize: 36,
        lineHeight: 1,
        color: WHITE
    },
    // Overview Style

    // Feature Detail
    featureDetailContainer: {
        backgroundColor: INFO,
        border: `1px solid ${INFO}`,
        paddingBottom: '50px'
    },
    featureDetail: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            margin: 5
        }
    },
    featureDetailDescBox: {
        margin: 'auto',
        marginBottom: 40,
        color: BACKGROUND,
        width: '60%',
    },
    featureDetailHeader: {
        textAlign: 'center',
        fontFamily: 'Prompt'
    },
    featureDetailDesc: {
        textAlign: 'center',
        fontFamily: 'Prompt'
    },
    // Feature Detail

    // Why Us
    yusContainer: {
        backgroundColor: WHITE,
        border: `1px solid ${WHITE}`,
        marginBottom: '200px'
    },
    yusLabels: {
        fontFamily: 'Prompt'
    },
    yusHeader1: {
        fontFamily: 'Prompt',
        fontSize: 52,
        color: BACKGROUND,
        lineHeight: 1.25
    },
    yusHeader2: {
        fontFamily: 'Prompt',
        fontSize: 48,
        color: PRIMARY,
        lineHeight: 0.75
    },
    yusHeader3: {
        fontFamily: 'Prompt',
        fontSize: 32,
        color: PRIMARY
    },
    yusList: {

    },
    yusListItem: {
        marginTop: 40
    },
    yusListItemTitle: {
        fontFamily: 'Prompt',
        fontSize: 26,
        fontWeight: 'bold',
        color: BACKGROUND,
        lineHeight: 1
    },
    yusListItemDesc: {
        fontFamily: 'Prompt',
        fontSize: 20,
        color: SECONDARY
    },
    yusGetStart: {
        marginTop: 125,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    yusGetStartButton: {

    }
    // Why Us
}))

export default withController(CoreProvider)(Core)