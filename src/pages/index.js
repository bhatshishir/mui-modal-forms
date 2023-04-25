import React from "react";
import Navbar from "@/components/navbar";
import { Button } from "@mui/material";
import Mymodal from "../components/modal";
import { useState } from "react";
import DialogModal from "@/components/DialogModal";

const Home = () => {
  const [open, setOpen] = useState(false);
console.log(open,'dialog');
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Navbar />
      <div>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Modal
        </Button>
      </div>
      <DialogModal open={open} handleClose={handleClose} />
      {/* <Mymodal/> */}
    </div>
  );
};

export default Home;
