import React from "react";
import { Grid } from "@material-ui/core";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

export default function SocialMediaShare(props) {
  const { link, title } = props;
  return (
    <Grid style={{ marginTop: "15px" }}>
      <FacebookShareButton url={link} quote={title} hashtag="#TriunfoTatengue">
        <FacebookIcon size={36} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={link} title={title} via={"TriunfoTatengue"}>
        <TwitterIcon size={36} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton url={link} title={title}>
        <WhatsappIcon size={36} round={true} />
      </WhatsappShareButton>
      <TelegramShareButton url={link} title={title}>
        <TelegramIcon size={36} round={true} />
      </TelegramShareButton>
      <LinkedinShareButton url={link} title={title}>
        <LinkedinIcon size={36} round={true} />
      </LinkedinShareButton>
    </Grid>
  );
}
