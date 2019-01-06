import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    cssRoot: {
        color: theme.palette.getContrastText('#5f2c11'),
        backgroundColor: '#5f2c11',
        '&:hover': {
        backgroundColor: '#3c1703',
        },
    }
});



class Modal extends Component {
    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const { classes } = this.props;
        return (
        <div>
            <Button variant="contained" 
            className={classNames(classes.margin, classes.cssRoot)}
            disabled={this.props.btnStatus} onClick={this.handleOpen}>{this.props.btnTitle}</Button>
            <Dialog
            modal={false}
            open={this.state.open}
            onClose={this.handleClose}
            >
            <DialogContent>
            {this.props.children}
            </DialogContent>
            </Dialog>
        </div>
        );
    }
}

export default withStyles(styles)(Modal);