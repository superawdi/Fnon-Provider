import React, { useState, createContext, useRef, useContext } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Button, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

const FnonContext = createContext();

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const DialogContainer = ({ children, open, onClose, onKill, fullWidth = true, maxWidth = "sm",fullScreen = false, dialogProps  }) => {
    return (
        <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            fullScreen={fullScreen}
            open={open}
            onClose={onClose} onExit={onKill} {...dialogProps} TransitionComponent={Transition}>
            {children}
        </Dialog>
    )
}
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const SnackBarContainer = ({ message, children, open, onClose, severity, snackbarProps }) => {
    const anchorOrigin = {
        horizontal: 'center', vertical: 'bottom'
    };
    return (
        <Snackbar disableWindowBlurListener anchorOrigin={anchorOrigin} open={open} autoHideDuration={6000} {...snackbarProps} onClose={onClose} >
            {children ?? <Alert severity={severity}>{message}</Alert>}
        </Snackbar>
    )
}

const useStyle = makeStyles((theme) => {
    return {
        snackWrapper: {
            position: 'relative',
            '& .MuiSnackbar-root': {
                '&.MuiSnackbar-anchorOriginBottomCenter, &.MuiSnackbar-anchorOriginBottomLeft, &.MuiSnackbar-anchorOriginBottomRight': {
                    '&:nth-child(2)': {
                        'bottom': ((24 * 3) + 5) + 'px'
                    },
                    '&:nth-child(3)': {
                        'bottom': ((24 * 5) + 10) + 'px'
                    },
                    '&:nth-child(4)': {
                        'bottom': ((24 * 6) + 40) + 'px'
                    }
                },
                '&.MuiSnackbar-anchorOriginTopCenter, &.MuiSnackbar-anchorOriginTopLeft, &.MuiSnackbar-anchorOriginTopRight': {
                    '&:nth-child(2)': {
                        'top': ((24 * 3) + 5) + 'px'
                    },
                    '&:nth-child(3)': {
                        'top': ((24 * 5) + 10) + 'px'
                    },
                    '&:nth-child(4)': {
                        'top': ((24 * 6) + 40) + 'px'
                    }
                }

            }
        },
        fullDialogAppBar: {
            position: 'relative',
        },
        fullDialogTitle: {
            marginLeft: theme.spacing(2),
            flex: 1,
        },
        fullDialogButtons: {
            '& .MuiButtonBase-root + .MuiButtonBase-root': {
                marginLeft: '8px !important'
            }
        },
        dialogerror: {
            backgroundColor: theme.palette.error.main,
            color: '#fff'
        },
        dialogprimary: {
            backgroundColor: theme.palette.primary.main,
            color: '#fff'
        },
        dialoginfo: {
            backgroundColor: theme.palette.info.main,
            color: '#fff'
        },
        dialogsecondary: {
            backgroundColor: theme.palette.secondary.main,
            color: '#fff'
        },
        dialogsuccess: {
            backgroundColor: theme.palette.success.main,
            color: '#fff'
        },
        dialogwarning: {
            backgroundColor: theme.palette.warning.main,
            color: '#fff'
        },
    }
}

)

export default function FnonProvider({ children }) {
    const classes = useStyle();
    const [dialogs, setDialogs] = useState([]);
    const [snackbars, setSnackbars] = useState([]);
    const createDialog = (option) => {
        const dialog = { ...option, open: true };
        setDialogs((dialogs) => [...dialogs, dialog]);
    }
    const closeDialog = () => {
        setDialogs((dialogs) => {
            const latestDialog = dialogs.pop();
            // const index = dialogs.indexOf(latestDialog);
            if (!latestDialog) return dialogs;
            if (latestDialog.onClose) latestDialog.onClose();
            const g = [{ ...latestDialog, open: false }, ...dialogs];
            return g;
        });
        setTimeout(() => {
            if (dialogs.length > 0 && !dialogs.filter(c => c.open).length > 0) setDialogs([]);
        }, 5000);
    }
    const useFullDialog = ({ title, buttons, children, ...etc }) => {
        createDialog({
            children: (
                <>
                    <AppBar className={classes.fullDialogAppBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={closeDialog} aria-label="close">
                                <CloseIcon />
                            </IconButton><Typography variant="h6" className={classes.fullDialogTitle}>{title}</Typography>
                            <div className={classes.fullDialogButtons}>{buttons}</div>
                        </Toolbar>
                    </AppBar>
                    <DialogContent>{children}</DialogContent>
                </>
            ),
            fullScreen: true,
            ...etc
        });
    }
    const useSimpleDialog = ({ title, children, theme, callback, buttons, btnOkText = "Yes", btnNoText = "No", ...etc }) => {
        createDialog(
            {
                children: (
                    <>
                        <DialogTitle className={classes[`dialog${theme}`]}>{title}</DialogTitle>
                        <DialogContent>{children}</DialogContent>
                        <DialogActions>
                            {buttons ?? <>
                                <Button color="primary" onClick={() => {
                                    closeDialog();
                                    if (callback && typeof callback === 'function') callback(false);
                                }}>{btnNoText}</Button>
                                <Button color="primary" onClick={() => {
                                    closeDialog();
                                    if (callback && typeof callback === 'function') callback(true);
                                }}>{btnOkText}</Button>
                            </>}
                        </DialogActions>
                    </>
                ),
                ...etc
            }
        )
    }
    const createSnackbar = ({ message, children, onClose, severity, snackbarProps }) => {
        const snack = { message, children, onClose, severity, snackbarProps, open: true, id: new Date().getTime() };
        setSnackbars((snaks) => [...snaks, snack]);
    }
    const onSnackBarClose = (id) => {
        setSnackbars((snaks) => {
            const nSnaks = snaks.map(c => {
                if (c.id === id) {
                    c.open = false;
                }
                return c;
            });
            return nSnaks;
        });
        setTimeout(() => {
            if (snackbars.length > 0 && !snackbars.filter(c => c.open).length > 0) setSnackbars([]);
        }, 5000);
    }
    const contextValue = useRef([createDialog, closeDialog, createSnackbar, useFullDialog, useSimpleDialog]);
    return (
        <FnonContext.Provider value={contextValue.current}>
            {children}
            {dialogs.map((dialog, i) => <DialogContainer key={i} {...dialog} />)}
            {snackbars.length > 0 && <div className={classes.snackWrapper}>
                {snackbars.map((snak, i) => <SnackBarContainer key={i} {...snak} onClose={() => onSnackBarClose(snak.id,snak.onClose)} />)}
            </div>}
        </FnonContext.Provider>
    )
}

export const useFnon = () => useContext(FnonContext);
