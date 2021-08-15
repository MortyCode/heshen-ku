
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

import BasePage from '../components/BasePage';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));

  
function HomePage(props) {

    const classes = useStyles();

    return (
      <BasePage content="products" history ={props.history} >

        <div className={classes.root}>
                <Paper elevation={3} >
                        <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        >
                        JAVA
                        </Button>
                </Paper>
        </div>
        </BasePage>

    );

}
export default HomePage;
