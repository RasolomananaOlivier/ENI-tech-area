import { ReactComponent as GlobalIcon } from "../../../../assets/Globe.svg";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import StyleRoundedIcon from "@mui/icons-material/StyleRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

export const SideBarData = [
  {
    link: "/questions",
    icon: <QuestionAnswerRoundedIcon htmlColor="white" />,
    text: "Questions",
  },
  {
    link: "/tags",
    text: "Tags",
    icon: <StyleRoundedIcon htmlColor="white" />,
  },
  {
    link: "/users",
    text: "Users",
    icon: <PeopleAltRoundedIcon htmlColor="white" />,
  },
  {
    link: "/notifications",
    text: "Notifications",
    icon: <NotificationsRoundedIcon htmlColor="white" />,
  },
];
