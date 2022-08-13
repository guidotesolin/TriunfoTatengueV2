import React, { useState } from "react";
import styles from "../../assets/styles/contactoStyles";
import { Grid, TextField, Typography, Snackbar } from "@material-ui/core";
import emailjs from "emailjs-com";
import MuiAlert from "@material-ui/lab/Alert";
import SendButton from "../utils/buttonOnClickView";
// Functions
import ValidateEmpty from "../utils/functions/validateEmpty";
import ValidateMail from "../utils/functions/validateEmail";
import ValidatePhone from "../utils/functions/validatePhone";
// Configuration email js
import ConfigFile from "../utils/emailCredentials";

export default function Contacto() {
  const classes = styles();
  const [snackbarError, setSnackbarError] = useState(false);
  const [snackbarErrorMsg, setSnackbarErrorMsg] = useState("");
  const [snackbarSuccess, setSnackbarSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleChangeName = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  const handleChangeEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handleChangePhone = (event) => {
    const newPhone = event.target.value;
    setPhone(newPhone);
  };

  const handleChangeText = (event) => {
    const newText = event.target.value;
    if (newText.length < 1501) {
      setMessage(newText);
    }
  };

  const handleSend = () => {
    const validationName = ValidateEmpty(name);
    const validationEmail = ValidateEmpty(email);
    const validationEmailFormat = ValidateMail(email);
    const validationPhone = ValidateEmpty(phone);
    const validationPhoneFormat = ValidatePhone(phone);
    const validationMesagge = ValidateEmpty(message);
    if (
      !validationName &&
      !validationEmail &&
      !validationEmailFormat &&
      !validationMesagge
    ) {
      setSnackbarErrorMsg("Todos los campos son obligatorios");
      setSnackbarError(true);
    } else {
      if (!validationName) {
        setSnackbarErrorMsg("El nombre no puede estar vacío");
        setSnackbarError(true);
      }
      if (!validationEmail) {
        setSnackbarErrorMsg("El mail no puede estar vacío");
        setSnackbarError(true);
      }
      if (!validationEmailFormat) {
        setSnackbarErrorMsg("Ingrese un formato de email válido");
        setSnackbarError(true);
      }
      if (!validationPhoneFormat) {
        setSnackbarErrorMsg(
          "El teléfono solo debe estar compuesto por números. No deje espacios en blanco"
        );
        setSnackbarError(true);
      }
      if (!validationPhone) {
        setSnackbarErrorMsg("El teléfono no puede estar vacío");
        setSnackbarError(true);
      }

      if (!validationMesagge) {
        setSnackbarErrorMsg("Ingrese su consulta por favor");
        setSnackbarError(true);
      }
      if (
        validationName &&
        validationEmail &&
        validationEmailFormat &&
        validationPhone &&
        validationPhoneFormat &&
        validationMesagge
      ) {
        sendMail();
      }
    }
  };

  const sendMail = () => {
    setLoader(true);
    const params = {};
    params.nombre = name;
    params.mail = email;
    params.telefono = phone;
    params.mensaje = message;
    // EmailJS params
    const { serviceID, templateID, userID } = ConfigFile();
    emailjs.send(serviceID, templateID, params, userID).then(
      () => {
        setSnackbarSuccess(true);
        resetForm();
        setLoader(false);
      },
      (err) => {
        const error =
          "Error de servidor. Comuniquese por cualquiera nuestras redes sociales";
        setSnackbarErrorMsg(error);
        console.log(err);
        setLoader(false);
        setSnackbarError(true);
      }
    );
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Grid item>
        <Typography className={classes.tituloSeccion}>CONTACTO </Typography>
        <Typography className={classes.contactText}>
          Somos la nueva generación que va a cambiar el club.
        </Typography>
        <Typography className={classes.contactText}>
          ¿Querés sumarte?
        </Typography>
        <Typography className={classes.contactText}>
          ¿Tenés alguna duda respecto a nuestro proyecto?
        </Typography>
        <Typography className={classes.contactText}>
          ¿Querés acercarnos alguna idea o propuesta?
        </Typography>
        <Typography className={classes.blueText}>
          ¡Todas las opiniones son bienvenidas, llegó el momento de escuchar al
          hincha!
        </Typography>
        <Typography className={classes.contactText}>
          Contactaté con nuestra agrupación mediante el siguiente formulario o
          mandanos a alguna de nuestras redes sociales
        </Typography>
      </Grid>
      <Grid item className={classes.fieldsGrid}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.fieldsContainer}
        >
          <Grid item className={classes.fieldsContainer}>
            <TextField
              value={name}
              placeholder="Nombre y apellido"
              onChange={handleChangeName}
              style={{
                marginTop: "15px",
                paddingLeft: "10px",
                background: "#FFFFFF",
                paddingTop: "2px",
                borderWidth: "1px",
                borderColor: "#ef233c",
                borderStyle: "solid",
                borderRadius: "5px",
                transition: "border .3s",
                "&:hover": {
                  outline: "none",
                  border: "2px solid #FF0000",
                },
              }}
              InputProps={{ disableUnderline: true }}
              fullWidth={true}
            />
          </Grid>
          <Grid item className={classes.fieldsContainer}>
            <Grid container spacing={2} justify="space-between">
              <Grid item className={classes.mediumGrid}>
                <TextField
                  onChange={handleChangeEmail}
                  value={email}
                  placeholder="Email"
                  style={{
                    marginTop: "15px",
                    paddingLeft: "10px",
                    background: "#FFFFFF",
                    paddingTop: "2px",
                    borderWidth: "1px",
                    borderColor: "#ef233c",
                    borderStyle: "solid",
                    borderRadius: "5px",
                    transition: "border .3s",
                    "&:hover": {
                      outline: "none",
                      border: "2px solid #FF0000",
                    },
                  }}
                  InputProps={{ disableUnderline: true }}
                  fullWidth={true}
                />
              </Grid>
              <Grid item className={classes.mediumGrid}>
                <TextField
                  value={phone}
                  onChange={handleChangePhone}
                  placeholder="Telefono"
                  style={{
                    marginTop: "15px",
                    paddingLeft: "10px",
                    background: "#FFFFFF",
                    paddingTop: "2px",
                    borderWidth: "1px",
                    borderColor: "#ef233c",
                    borderStyle: "solid",
                    borderRadius: "5px",
                    transition: "border .3s",
                    "&:hover": {
                      outline: "none",
                      border: "2px solid #FF0000",
                    },
                  }}
                  fullWidth={true}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.fieldsContainer}>
            <TextField
              value={message}
              onChange={handleChangeText}
              placeholder="Dejanos tu opinión, propuesta o comentario. ¡Queremos escucharte!"
              style={{
                marginTop: "15px",
                paddingLeft: "10px",
                background: "#FFFFFF",
                paddingTop: "2px",
                borderWidth: "1px",
                borderColor: "#ef233c",
                borderStyle: "solid",
                borderRadius: "5px",
                transition: "border .3s",
                "&:hover": {
                  outline: "none",
                  border: "2px solid #FF0000",
                },
              }}
              InputProps={{ disableUnderline: true }}
              fullWidth
              multiline
              rows={7}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row-reverse">
            <Grid item>
              <small className={message.length < 1500 ? null : classes.redText}>
                {message.length}/1500
              </small>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <SendButton
          buttonText="Contactarse"
          onClickFunction={handleSend}
          loader={loader}
        />
      </Grid>
      <Snackbar
        open={snackbarError}
        autoHideDuration={6000}
        onClose={() => setSnackbarError(false)}
      >
        <Alert onClose={() => setSnackbarError(false)} severity="error">
          {snackbarErrorMsg}
        </Alert>
      </Snackbar>
      <Snackbar
        open={snackbarSuccess}
        autoHideDuration={6000}
        onClose={() => setSnackbarSuccess(false)}
      >
        <Alert onClose={() => setSnackbarSuccess(false)} severity="success">
          ¡Gracias por ponerte en contacto! A la brevedad nos estaremos
          comunicando.
        </Alert>
      </Snackbar>
    </Grid>
  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
