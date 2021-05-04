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

  // EmailJS params
  const serviceID = "default_service";
  const templateID = "paginaweb";
  const userID = "user_Hm8cr2VjV88hTCqnBiG5L";

  const sendMail = () => {
    setLoader(true);
    const params = {};
    params.nombre = name;
    params.mail = email;
    params.telefono = phone;
    params.mensaje = message;
    emailjs.send(serviceID, templateID, params, userID).then(
      () => {
        setSnackbarSuccess(true);
        resetForm();
        setLoader(false);
      },
      (err) => {
        setSnackbarErrorMsg(
          "Un error ha ocurrido cuando el mensaje se estaba enviando. Por favor comuniquese directamente con cualquiera nuestras redes sociales"
        );
        setSnackbarError(true);
        console.log(err.message);
        setLoader(false);
      }
    );
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const closeSuccessSnackbar = () => {
    setSnackbarSuccess(false);
  };

  const closeErrorSnackbar = () => {
    setSnackbarError(false);
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
        <Typography className={classes.contactText}>
          <strong>
            ¡Todas las opiniones son bienvenidas, llegó el momento de escuchar
            al hincha!
          </strong>
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
              className={classes.texfield}
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
                  className={classes.texfield}
                  InputProps={{ disableUnderline: true }}
                  fullWidth={true}
                />
              </Grid>
              <Grid item className={classes.mediumGrid}>
                <TextField
                  value={phone}
                  onChange={handleChangePhone}
                  placeholder="Telefono"
                  className={classes.texfield}
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
              className={classes.texfield}
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
          buttonText={"Contactarse"}
          onClickFunction={handleSend}
          loader={loader}
        />
      </Grid>
      <Snackbar
        open={snackbarError}
        autoHideDuration={6000}
        onClose={closeErrorSnackbar}
      >
        <Alert onClose={closeErrorSnackbar} severity="error">
          {snackbarErrorMsg}
        </Alert>
      </Snackbar>
      <Snackbar
        open={snackbarSuccess}
        autoHideDuration={6000}
        onClose={closeSuccessSnackbar}
      >
        <Alert onClose={closeSuccessSnackbar} severity="success">
          ¡Gracias por ponerte en contacto con nuestra agrupación! Su consulta
          ha sido enviada. A la brevedad nos estaremos comunicando
        </Alert>
      </Snackbar>
    </Grid>
  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
