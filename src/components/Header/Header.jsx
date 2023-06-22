import HeaderAbout from "./Details/HeaderAbout";
import HeaderDefault from "./Details/HeaderDefault";
import HeaderHome from "./Details/HeaderHome";

function Header(props) {
  let pageType = props.pageType;
  if (pageType === "Home") {
    return <HeaderHome />;
  } else if (pageType === "About") {
    return <HeaderAbout />;
  } else {
    return <HeaderDefault />;
  }
}

export default Header;
