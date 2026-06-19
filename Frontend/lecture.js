// قبل
<span className={`badge rounded-pill bg-info ${styles.badge}`}>3</span>;

// بعد
import { useState } from "react";

const Navbar = ({ adminName = "Super Admin", adminImg }) => {
  const [notifCount, setNotifCount] = useState(3);

  return (
    // ...
    <span className={`badge rounded-pill bg-info ${styles.badge}`}>
      {notifCount}
    </span>
    // ...
  );
};

// part 2
<div className={styles.notifIcon}>
  <i className="fa-solid fa-bell"></i>
  <span className={`badge rounded-pill bg-info ${styles.badge}`}>
    {notifCount}
  </span>
</div>;

{
  /* زرار مؤقت للشرح — هنمسحه بعدين */
}
<button onClick={() => setNotifCount(notifCount + 1)}>
  Simulate New Notification
</button>;

// Zone 3: Action Handler
function handleNewNotification() {
  setNotifCount(notifCount + 1);
}

<button onClick={handleNewNotification}>Simulate New Notification</button>;

// part 3
const [stats, setStats] = useState([
  { id: 1, count: "120", title: "Projects" },
  { id: 2, count: "12", title: "Developers" },
  { id: 3, count: "1200", title: "Users" },
  { id: 4, count: "120", title: "Blogs" },
]);

// جوه الـ return
{
  stats.map((item) => (
    <div className="col-12 col-sm-6 col-lg-3" key={item.id}>
      <StatusCard count={item.count} title={item.title} />
    </div>
  ));
}

// part 4
const [users, setUsers] = useState([
  { id: 1, first: "Mark", last: "Otto", handle: "@mdo" },
  { id: 2, first: "Jacob", last: "Thornton", handle: "@fat" },
  { id: 3, first: "John", last: "Doe", handle: "@social" },
]);

// جوه الـ tbody
<tbody>
  {users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.first}</td>
      <td>{user.last}</td>
      <td>{user.handle}</td>
    </tr>
  ))}
</tbody>;

const handleDeleteUser = (userId) => {
  const newUserArr = users.filter((u) => u.id !== userId);
  setUsers(newUserArr);
};

<td>
  <button
    className="btn btn-danger btn-sm"
    onClick={() => handleDeleteUser(user.id)}
  >
    Delete
  </button>
</td>;
