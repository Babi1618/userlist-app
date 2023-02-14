import { useAppContext } from "../../context/AppContext";
import { Pagination } from "../Pagination";
import { TabBar } from "../TabBar";

export const Footer = () => {
  const { isMobile } = useAppContext() as any;

  return (
    <div className="footer-container">
      {isMobile && <TabBar />}
      {!isMobile && <Pagination />}
    </div>
  );
};
