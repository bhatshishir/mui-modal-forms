import { Dialog } from '@mui/material'
import React from 'react'
import Forms from './Forms'

const DialogModal = (props) => {
  return (
    <>
    <Dialog  open={props.open} onClose={props.handleClose}>
        <Forms handleClose={props.handleClose}/>
    </Dialog>
    </>
  ) 
}

export default DialogModal