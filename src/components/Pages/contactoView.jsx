import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import styles from "../../assets/styles/contactoStyles";
import MuiAlert from "@material-ui/lab/Alert";
import emailjs from "emailjs-com";

export default function Contacto() {
  const classes = styles();
  const [snackbarError, setSnackbarError] = useState(false);
  const [snackbarErrorMsg, setSnackbarErrorMsg] = useState("");
  const [snackbarSuccess, setSnackbarSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
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
      setText(newText);
    }
  };

  const emptyValidation = (text) => {
    let validation = false;
    for (var i = 0; i < text.length; i++) {
      const character = text[i];
      if (character !== "") {
        validation = true;
      }
    }
    return validation;
  };

  const handleSend = () => {
    if (
      !emptyValidation(name) &&
      !emptyValidation(email) &&
      !emptyValidation(phone)
    ) {
      setSnackbarErrorMsg("Todos los campos son obligatorios");
      setSnackbarError(true);
    } else {
      const validationName = emptyValidation(name);
      const validationEmail = emptyValidation(email);
      const validationPhone = emptyValidation(phone);
      if (!validationName) {
        setSnackbarErrorMsg("El nombre no puede estar vacío");
        setSnackbarError(true);
      }
      if (!validationEmail) {
        setSnackbarErrorMsg("El mail no puede estar vacío");
        setSnackbarError(true);
      }
      if (!validationPhone) {
        setSnackbarErrorMsg("El teléfono no puede estar vacío");
        setSnackbarError(true);
      }
      if (validationName && validationEmail && validationPhone) {
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
    params.mensaje = text;
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
        console.log(err.text);
        setLoader(false);
      }
    );
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setText("");
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
      className={classes.contactoGrid}
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
            al socio!
          </strong>
        </Typography>
        <Typography className={classes.contactText}>
          Contactaté con nuestra agrupación mediante el siguiente formulario:
        </Typography>
      </Grid>
      <Grid item>
        <div>
          <TextField
            value={name}
            placeholder="Nombre y apellido"
            onChange={handleChangeName}
            className={classes.texfield}
          />
          <TextField
            onChange={handleChangeEmail}
            value={email}
            placeholder="Email"
            className={classes.texfield}
          />
          <TextField
            value={phone}
            onChange={handleChangePhone}
            placeholder="Telefono"
            className={classes.texfield}
          />
        </div>
        <div style={{ marginTop: "15px", marginBottom: "15px" }}>
          <TextField
            value={text}
            fullWidth
            label="Comentario libre"
            multiline
            rows={7}
            onChange={handleChangeText}
          />
          <Grid container direction="row-reverse">
            <Grid item>
              {text.length < 1500 ? (
                <small>{text.length}/1500</small>
              ) : (
                <small style={{ color: "#FF0000" }}>{text.length}/1500</small>
              )}
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item>
        <Button className={classes.button} onClick={handleSend}>
          {loader ? (
            <CircularProgress size={20} />
          ) : (
            <Typography className={classes.buttonText}>Enviar</Typography>
          )}
        </Button>
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
          This is a success message!
        </Alert>
      </Snackbar>
    </Grid>
  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
