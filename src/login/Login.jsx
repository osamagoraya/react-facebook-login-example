import React, { useEffect } from 'react';
import { accountService } from '_services';
import { Card, CardContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

function Login({ history }) {
    useEffect(() => {
        // redirect to home if already logged in
        if (accountService.accountValue) {
            history.push('/');
        }        
    }, [history]);

    return (
        <div className="col-md-12 mt-5 text-center">
            <Card style={{ marginTop: "20%"}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Algotargat
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Let check what is your best audience to work with but first - we need to give Algotarget - permission to review your audince.
                    </Typography>
                </CardContent>
                <CardActions>
                    <button style={{marginLeft: "43%"}} className="btn btn-primary btn-sm" onClick={accountService.login}>
                        <i className="fa fa-facebook mr-1"></i>
                            Login with Facebook
                    </button>
                </CardActions>
            </Card>
        </div>
    );
}

export { Login };