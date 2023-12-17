import { FC } from "react";
import "./Sidebar.css";

const Sidebar: FC = () => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>MD Notes</h1>
        <button>New Note</button>
      </div>
      <div className="app-sidebar-notes">
        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
            <strong>Title</strong>
            <button>Delete</button>
          </div>
          <p>Note Contents</p>
          <small>Last update: xx/xx</small>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
