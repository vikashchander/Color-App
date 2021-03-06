import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

class PaletteMetaDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage:'form',
      open:true,
      newPaletteName: " "
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEmoji = this.handleEmoji.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }
  
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  handleEmoji(){
         this.setState({ stage: 'emoji'})
  }

  savePalette(emoji){
    console.log(emoji.native);
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native
    };
    this.props.handleSubmit(newPalette);
    this.setState({ stage: '' })
  }

  render() {
    const { newPaletteName } = this.state;
    const { handleHide } = this.props;

    return (
      <div>
        <Dialog open={this.state.stage === "emoji"} onClose={handleHide}>
          <DialogTitle id='form-dialog-title'>
            Choose a Palette Emoji
          </DialogTitle>
          <Picker title='Pick a Palette Emoji' onSelect={this.savePalette} />
        </Dialog>
        <Dialog
          open={this.state.stage === "form"}
          aria-labelledby='form-dialog-title'
          onClose={handleHide}
        >
          <DialogTitle id='form-dialog-title'>
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.handleEmoji}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new beautiful palette. Make sure
                it's unique!
              </DialogContentText>
              <TextValidator
                label='Palette Name'
                value={newPaletteName}
                name='newPaletteName'
                onChange={this.handleChange}
                fullWidth
                margin='normal'
                required ='true'
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter Palette Name", "Name already used"]}
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleHide} color='primary'>
              Cancel
            </Button>
            <Button variant='contained' color='primary' type='submit'>
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
    );
  }
}
export default PaletteMetaDialog;