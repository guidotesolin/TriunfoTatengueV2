import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import styles from "../../assets/styles/opinionStyles";
import ShareInSocialMedia from "../utils/shareInSocialMediaView";

export default function Asamblea() {
  const classes = styles();

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justify="center"
      wrap="nowrap"
    >
      <Grid item>
        <Typography className={classes.tituloSeccion}>
          ASAMBLEA GENERAL EXTRAORDINARIA
        </Typography>
      </Grid>
      <Grid item style={{ textAlign: "center" }}>
        <img
          style={{ width:"80%", marginBottom: "20px" }}
          src="https://i.imgur.com/9vBB1Jr.jpg"
          alt="Convocatoria"
        />
      </Grid>

      <Grid item style={{ marginBottom: "10px" }}>
        <Typography className={classes.textoDesarrollo}>
          Orden propuesto:
        </Typography>
        <ol>
          <li>
            Aprobación convocatoria fuera de término estatutario de la asamblea
            por normativa vinculada a covid 19
          </li>
          <li>Lectura y aprobación del acta de asamblea anterior</li>
          <li>Designación de 2 (dos) asociados para firmar el acta</li>
          <li>
            Lectura y aprobación la memoria y balance del ejercicio n° 114
            cerrado al 30 de junio de 2020.
          </li>
        </ol>
        <Typography className={classes.textoDesarrollo}>
          Consideraciones sanitarias:
        </Typography>
        <ul>
          <li>
            El ingreso al recinto estará habilitado desde dos horas antes del
            horario previsto para el comienzo de la asamblea y la misma no podrá
            extenderse más allá de las 20hs.
          </li>
          <li>
            Se habilitarán dos ingresos para evitar aglomeración de personas,
            sobre Av. Lopez y Planes donde se dividirán de acuerdo a la Letra
            Inicial de su apellido A-M; N-Z
          </li>
          <li>
            En ambos ingresos habrá marcaciones en el piso para mantener la
            distancia social entre los asistentes mientras aguardan para el
            Ingreso. Se tomará la temperatura corporal, pudiendo ingresar todo
            aquel que la temperatura sea inferior a 37.5 grados.
          </li>
          <li>
            Todo asistente deberá llevar firmada una Declaración Jurada de Salud{" "}
            <strong>
              <a
                style={{ color: "#FF0000" }}
                href="https://www.clubaunion.com.ar/wp-content/uploads/2020/07/DDJJ-Anexo-resolucion-41-20.pdf"
              >
                descargar aquí
              </a>
            </strong>{" "}
            y también habrá en los ingresos para quienes no puedan hacerse de
            ella. Es condición obligatora para poder ingresar el llenado y la
            entrega de la misma.
          </li>
          <li>
            Para el ingreso se deberá tener cuota al día del mes de Febrero.
            Carnet de Socio y DNI
          </li>
          <li>
            Uso obligatorio y permanente de tapabocas entendiéndose como tapa
            nariz y boca
          </li>
        </ul>
        <Divider style={{ margin: "20px" }} />
        <Grid item style={{ textAlign: "center" }}>
          <Typography>
            Recorda que tanto a la asamblea como a votar pueden ir solamente los {" "}
            <strong>SOCIOS PLENOS</strong>.
          </Typography>
          <br />
          <Typography>
            Hoy en día son solamente $80 de diferencia entre la categoría
            adherente y pleno.
          </Typography>
          <br />
          <Typography>
            Queremos eliminar esta categoría en nuestra{" "}
            <strong>
              <a
                style={{ color: "#FF0000" }}
                href="https://triunfotatengue.com.ar/#/propuestas_estatuto"
              >
                propuesta de estatuto
              </a>
            </strong>
            , pero hoy en día es la unica forma de tener voz y voto.
          </Typography>
        </Grid>
        <Divider style={{ margin: "20px" }} />
        <Grid item style={{ textAlign: "center" }}>
          <Typography className={classes.tituloSeccion}>
            NOTA EN CONJUNTO CON GLORIOSO 89
          </Typography>
        </Grid>
        <Typography className={classes.textoDesarrollo}>
          En virtud de la Asamblea que se llevará a cabo el día 17/03/2021, y en
          la seguridad que dados los protocolos a cumplir, la cantidad de gente
          que va a concurrir y lo difícil que va a resultar en un espacio físico
          grande y con distanciamiento pedir la palabra, ser escuchado
          correctamente y poder expresarnos con la totalidad de los
          interrogantes que tenemos los socios del Club en diversos temas que
          nos preocupan, los integrantes de las agrupaciones Glorioso 89 y
          Triunfo Tatengue adelantamos por éste medio algunas preguntas que
          solicitamos sean respondidas en el desarrollo del punto de aprobación
          de Memoria y Balance, previo a cualquier moción de votación al
          respecto.
        </Typography>
        <Typography className={classes.textoDesarrollo}>
          Al respecto pedimos información detallada de:
        </Typography>
        <ol>
          <li className={classes.textoLista}>
            Importe venta de Diego Zabala. Fechas pactadas y fechas de efectivo
            pago de cuotas. Importe de cada una de ellas. En caso de haber
            importes vencidos impagos informe sobre acciones iniciadas al
            respecto.
          </li>
          <li className={classes.textoLista}>
            Igual información sobre las ventas de Emanuel Brítez y Damián
            Martínez.
          </li>
          <li className={classes.textoLista}>
            Importe cláusula rescisión de Yeimar Gómez Andrade. Importe real de
            venta. En caso de haber sido por una suma menor explicar con qué
            criterio se resolvió esto. También solicitamos detalles de la
            operación: cuotas, fechas de vencimiento, importe de cada una,
            cumplimiento de esos pagos, etc.
          </li>
          <li className={classes.textoLista}>
            Igual solicitud del punto 1 hacemos sobre la venta de Bruno y Mauro
            Pittón con detalle de cada uno de ellos. Además solicitamos
            información sobre cuáles eran los objetivos que debían cumplirse
            para que el pase de ambos se incremente en hasta 600.000 dólares. Si
            se cumplieron los mismos, y si dicha suma fue abonada.
          </li>
          <li className={classes.textoLista}>
            Informe de la venta de Mariano Gómez con detalle sobre montos,
            cuotas, importes, cumplimiento de las mismas, porcentaje que retiene
            Unión del jugador, etc.
          </li>
          <li className={classes.textoLista}>
            Ahorro que implicó la renuncia de Madelón y los 6 meses sin técnico
            dado que Ud. dijo que con eso “Unión se sacó el quini”. Pedimos se
            informe dónde fueron direccionados esos ahorros.
          </li>
          <li className={classes.textoLista}>
            Informe porqué, según la Memoria, en la Escuela de Fútbol practican
            chicos NO socios (aunque paguen una cuota superior). En nuestro
            criterio así no se fomenta la pertenencia al Club. ¿En otros
            deportes se utiliza el mismo criterio?
          </li>
          <li className={classes.textoLista}>
            Detalle por jugador de los $ 142.579.878,88 cobrados por ventas
            (Estado de flujo de efectivo).
          </li>
          <li className={classes.textoLista}>
            Detalle por jugador de los $ 38.341.474,12 pagados por compras
            (Estado de flujo de efectivo).
          </li>
          <li className={classes.textoLista}>
            Detalle por jugador de la utilidad por préstamos y transferencias de
            jugadores por $ 264.424.657,17 (Recursos-Anexo III).
          </li>
          <li className={classes.textoLista}>
            Detalle por jugador del Rubro Gastos por préstamos y ventas de
            jugadores por $ 35.276.413,42 (Anexo IV-Gastos).
          </li>
          <li className={classes.textoLista}>
            Detalle devoluciones dirigentes y/o aportantes financieros por $
            36.788.439,77 (Estado de Flujo de Efectivo).{" "}
          </li>
          <li className={classes.textoLista}>
            Detalle deudores por transferencias y préstamos de jugadores por $
            198.634.954,66 equivalentes a U$S 2.899.780,36 (Informe sobre
            Activos y Pasivos en Moneda Extranjera).{" "}
          </li>
          <li className={classes.textoLista}>
            Detalle deuda financiera No corriente por $ 53.234.065,47 (Nota
            complementaria 2.6).
          </li>
          <li className={classes.textoLista}>
            En Estado de Recursos y Gastos, en el ítem Resultados Financieros y
            por tenencia incluido RECPAM, en la columna al 30.06.20 se exponen $
            64.912.442,09 positivos, y al 30.06.19 $ 108.213.887,98 negativos.
            Se solicita informar por separado, en cada caso, los siguientes
            conceptos: Intereses positivos y negativos; Diferencias de cambio
            y/o cotizaciones positivas y negativas; RECPAM.
          </li>
          <li className={classes.textoLista}>
            En Anexo I, Bienes de Uso, en el rubro Mejoras sobre bienes de
            terceros, tiene un saldo de $ 28.971.245,72, con un aumento en el
            ejercicio de $ 830.077,80. ¿De qué inmuebles se trata; quienes son
            los propietarios; qué tipo de mejoras son; y cuáles son los
            contratos instrumentales con el Club?
          </li>
          <li className={classes.textoLista}>
            Detalle de lo expuesto en Nota Complementaria N* 4 especificando
            deuda en pesos de Paula Spahn, Horacio Spahn y de Celestino Spahn
            S.A., indicando saldos al inicio del ejercicio, importe al momento
            de su conversión a dólares, fechas de retiros, forma en que se
            efectivizaron los mismos y saldos faltantes de abonar, según
            criterio de la Comisión Directiva.
          </li>
          <li className={classes.textoLista}>
            Se exponga copia del acta de Comisión Directiva N* 3370 del
            06/01/2020. También solicitamos informe porqué no se respetó lo que
            había solicitado la Asamblea de socios respecto a que no se hagan
            retiros hasta que no se verifique la supuesta deuda.
          </li>
          <li className={classes.textoLista}>
            Informe el Sr. Spahn sobre porqué afirmó que no había efectuado
            ningún retiro del Club siendo que la auditoría determinó más de 180
            por algo más de $ 58.000.000, que utilizando el mismo formato de
            cálculo de la deuda tomando la cotización del dólar a cada fecha de
            la operación, suman más de 7.000.000 de dólares.
          </li>
          <li className={classes.textoLista}>
            Detalle de otras deudas con la familia y/o grupo Spahn.{" "}
          </li>
        </ol>
        <Typography className={classes.textoDesarrollo}>
          En la seguridad que Ud. es el primer interesado en brindar información
          a los socios, esperamos que pueda responder a todo lo aquí
          especificado, porque ello contribuirá a agilizar la Asamblea y poder
          llegar en el menor tiempo posible a la votación del punto considerado.
        </Typography>
        <Typography className={classes.textoDesarrollo}>
          Saludan atte:
        </Typography>
        <Typography className={classes.textoDesarrollo}>
          Leonardo F. Simonutti. Presidente Triunfo Tatengue
        </Typography>
        <Typography className={classes.textoDesarrollo}>
          Carlos Ghisolfo. Presidente Glorioso 89
        </Typography>
        <Grid item style={{ textAlign: "center" }}>
          <ShareInSocialMedia
            link="http://www.triunfotatengue.com.ar/#/Asamblea"
            title="Asamblea general"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
