import { Menu } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";
import { navigationMenu, renderMenuItem } from "../../utilities/navigationMenu";
import { getOpenKeys } from "../../utilities/helper";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import { useAppDispatch } from "../../../app/store";
import { resetFilter } from "../../../app/features/filterSlice";

const LayoutMenu: React.FC = () => {
  const location = useLocation();
  const defaultOpenKeys = getOpenKeys(navigationMenu, location.pathname);
  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <section
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          placeContent: "space-between",
        }}
      >
        <div>
          <TopSection />
          <Menu
            className='custom-menu'
            mode='inline'
            onClick={() => dispatch(resetFilter())}
            items={navigationMenu.map(renderMenuItem)}
            selectedKeys={[location.pathname]}
            defaultOpenKeys={defaultOpenKeys}
          />
        </div>

        <BottomSection />
      </section>
    </React.Fragment>
  );
};

export default LayoutMenu;
