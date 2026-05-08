import styles from "./Sidebar.module.css";
function Sidebar() {
  const links = [
    { icon: "fa-chart-line", title: "Status" },
    { icon: "fa-users", title: "Users Management" },
    { icon: "fa-building", title: "Projects Management" },
    { icon: "fa-building", title: "Developers Management" },
    { icon: "fa-globe", title: "CMS" },
    { icon: "fa-message", title: "Live Chat" },
  ];
  return (
    <aside className={`min-vh-100 py-4 ${styles.sidebar}`}>
      <div className="title">Dashboard</div>
      <nav>
        {links.map((item) => (
          <div className="navItem">
            <i className={`fa-solid ${item.icon}`}></i>
            <span className="linkTitle">{item.title}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
