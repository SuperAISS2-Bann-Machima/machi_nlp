import { CoreProvider, useController } from "./controller"
import { withController } from '../../hoc/withController'
import { makeStyles } from '@mui/styles'
import DetailCard from "../../components/common/DetailCard"
import { featureDetails } from '../../data/core'
import { Container, Grid } from "@mui/material"

function Core() {
    const controller = useController()
    const classes = useStyles()
    return (
        <>
            <Container>
                {/* Feature Detail */}
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
                {/* Feature Detail */}
            </Container>



        </>
    )
}

const useStyles = makeStyles((theme) => ({
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