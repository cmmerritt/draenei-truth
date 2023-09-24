import type {LinksFunction } from "@remix-run/node";

import styles from "~/styles/shared.css";
import spinningconstruction from "~/images/weskie41underconstruction.gif";
import webmaster from "~/images/slow-webmaster.gif";
import forklift from "~/images/construction.gif";
import papyrus from "~/images/constructionpapyrus.gif";
import background from "~/images/purplewaves.gif";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function Index() {
  return (
    <div style={{ backgroundImage : `url(${background})` }}>
      <h1 className = "title">Draenei-Truth.com</h1>
      <p className = "info">
        Your source for the truth about the Draenei and Azeroth
        <br />
        <br />
        The things THEY Don't want you to know !!
        <br />
        <br />
        Coming Soon
      </p>
      <img className = "construction-image" src={spinningconstruction} alt="spinning construction sign" />
      <br />
      <img className = "construction-image" src={forklift} alt="forklift" />
      <br />
      <img className = "construction-image" src={papyrus} alt="papyrus under construction" />
      <br />
      <img className = "construction-image" src={webmaster} alt="slow webmaster sign" />
    </div>
  );
}
