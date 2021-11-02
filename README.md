# Fnon-Provider

A convenient way to use some of [Material UI](https://material-ui.com/) Components.

### Please note that this is a personal package I created when I started working on a project with material UI and I thought it might help others who want to use some of the Material UI Components such as Dialogs and Snackerbars as I do in my project.

---

### For now, this provider includes MUI Dialogs and Snackbars, but I may add more components as my project goes on.

# Installation

```bash
npm i fnon-provider
```

# usage

### Add FnonProvider wrapper.

```js
import { createTheme, ThemeProvider } from "@material-ui/core";
import FnonProvider from "fnon-provider";

const theme = createTheme();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <FnonProvider>
      <App />
    </FnonProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
```

## 1 - Dialog :

```js
import { useFnon } from 'fnon-provider'


function App() {

  const [createDialog, closeDialog, createFullDialog, createSimpleDialog] = useFnon();

  // Create a dialog the normal way
  const onOpenDialog = () => {
    createDialog(
      {
        children: (
          <>
            <DialogTitle>This dialog is opened imperatively</DialogTitle>
            <DialogContent>Some content</DialogContent>
            <DialogActions>
              <Button color="primary" onClick={closeDialog}>Close</Button>
              <Button color="primary" onClick={onOpenDialog}>AnotherDilog</Button>
            </DialogActions>
          </>
        )
      }
    )
  }
  // Save time dialog
  const onYesNoDialog = () => {
    createSimpleDialog({
      title: 'Yes No Dialog',
      children: 'Do you wish to proceed?', // a string or you can put a react component
      theme:'error', // this is optional if you want to change the background color of the header, [primary,secondary,error,info,success and warning]
      buttons:null// it should be a react component// if not provided a two default Yes and No buttons will be added. and callback will fire when pressed.
      callback: (result) => console.log(result),// a callback function which returns a true if [Yes btn clicked] or false if cancel clicked.
      btnOkText : "Yes", // if you want to change the Yes text
      btnNoText : "No",// if you want to change the No text
      dialogProps: null // Material Ui Dialog props if you want ot change or add anything.
    })
  }

  const onOpenFullDialog = () => {
    createFullDialog({
      title: 'Test full dialog',
      children: (
        <>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut repudiandae voluptatum repellendus sequi, dolore est! Dolorum saepe sint commodi.</p>
          <Button color="primary" onClick={closeDialog}>Close</Button>
        </>
      ),
      buttons: (
        <>
          <Button autoFocus color="secondary" variant="contained">
            Delete
          </Button>
          <Button autoFocus color="inherit">
            save
          </Button>
        </>
      )
    }),
    dialogProps: null // Material Ui Dialog props if you want ot change or add anything.
  }

  return (
    <div className="App">
        <p>
          <Button color="secondary" variant="contained" onClick={onOpenDialog} >Dialog</Button>
        </p>
        <p>
          <Button color="secondary" variant="contained" onClick={onOpenFullDialog} >Create Full Dialog</Button>
        </p>
        <p>
          <Button color="secondary" variant="contained" onClick={onYesNoDialog} >Yes No Dialog</Button>
        </p>
    </div>
  )
}

```

## 2 - Snackbar :

```js
import { useFnon } from 'fnon-provider'


function App() {

  const [createSnackbar] = useFnon();

  const onCreateSnackBar = () => {
      createSnackbar({
        message: "Test adasfasdfasdf", // text
        children:null,  // you either want to add react component or simply type the message prop
        onClose:null , // optional function to notify you when snackbar is closed
        severity='erro',// it can be null or one of [error,info,success,warning]
        snackbarProps=null// if you need to add or override any of the snackprops
    })
  }

  return (
    <div className="App">
        <Button color="primary" variant="contained" onClick={onCreateSnackBar}>Create Snackbar</Button>
    </div>
  )
}

```

---

## License

The files included in this repository are licensed under the MIT license.
