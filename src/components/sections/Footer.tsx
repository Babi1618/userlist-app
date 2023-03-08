import { useAppContext } from "../../context/AppContext";
import { TabBar } from "../TabBar";

export const Footer = () => {
  const { isMobile } = useAppContext() as any;

  return (
    <div className="footer-container">
      {isMobile && <TabBar />} {/* TODO */}
      {/* {!isMobile && <Pagination />} */} {/* TODO*/}
    </div>
  );
};
