import { CoreProvider, useController } from "./controller"
import { withController } from '../../hoc/withController'
import { makeStyles } from '@mui/styles'
import DetailCard from "../../components/common/DetailCard"
import { featureDetails } from '../../data/core'
import { Container, Grid, Typography } from "@mui/material"
import cover from '../../assets/images/cover.png'
import { BACKGROUND, INFO, WHITE } from "../../constant/colors"
import Button from '../../components/common/Button'

function Core() {
    const controller = useController()
    const classes = useStyles()

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
                            <CoverButton title='Get Start' colorBtn={BACKGROUND} textColor={WHITE} />
                            <CoverButton title='Learn more' colorBtn={INFO} textColor={BACKGROUND} />
                        </div>
                    </div>
                </div>
                {/* Cover */}

                {/* Feature Detail */}
                <div>
                    <Container>
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
            </div>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    coverContainer: {
        backgroundImage: `url(${cover})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '85vh'
    },
    coverBox: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    coverHeader1: {
        fontFamily: 'Luckiest Guy',
        fontSize: 125,
        fontWeight: 'bold',
        color: BACKGROUND,
        lineHeight: 1,
    },
    coverHeader2: {
        fontFamily: 'Single Day',
        fontSize: 100,
        color: BACKGROUND
    },
    coverButtons: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
    },
    featureDetail: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            margin: 5
        }
    }
}))

export default withController(CoreProvider)(Core)