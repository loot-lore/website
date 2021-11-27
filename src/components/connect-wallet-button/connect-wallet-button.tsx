import React from "react";
// hooks
import { useWalletContext } from "../../hooks/wallet-context";
// MUI
import { Button, Box, Typography, Modal } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { LoadingButton } from "@mui/lab";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  color: "text.primary",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  borderRadius: 1,
  p: 4,
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 5,
  backgroundColor: "black",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
};

export const ConnectWalletButton: React.FC = () => {
  const {
    connectWallet,
    isConnected,
    disconnectWallet,
    displayName,
    account,
    balance,
  } = useWalletContext();

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(!openModal);

  const handleDisconnectWallet = () => {
    handleOpenModal();
    disconnectWallet();
  };

  if (!isConnected) {
    return (
      <Button variant="contained" color="info" onClick={connectWallet}>
        Connect wallet
      </Button>
    );
  }

  return (
    <>
      {displayName ? (
        <Box style={buttonContainerStyle}>
          <Typography fontSize={14} sx={{ mx: 3 }}>
            {balance} LOOT
          </Typography>
          <Button
            sx={{ boxShadow: 0 }}
            variant="contained"
            color="info"
            onClick={handleOpenModal}
          >
            {displayName}
          </Button>
        </Box>
      ) : (
        <LoadingButton loading variant="contained">
          Loading...
        </LoadingButton>
      )}
      <Modal
        open={openModal}
        onClose={handleOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Account
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {account}
          </Typography>
          <Button
            size="small"
            startIcon={<PowerSettingsNewIcon />}
            variant="outlined"
            color="error"
            onClick={handleDisconnectWallet}
          >
            Disconnect
          </Button>
        </Box>
      </Modal>
    </>
  );
};
