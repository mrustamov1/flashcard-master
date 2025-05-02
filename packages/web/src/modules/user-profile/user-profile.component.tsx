import { useState, useEffect } from "react";
import styles from "./user-profile.module.css";
import { useNavigate } from "react-router-dom";
// import { Chart } from "./chart/chart.component"
import user from "../../assets/user-profile.png";
// import { Settings } from "./settings/setting.component"
// import { Progress } from "./progress/progress.component"
import { Input } from "../../ui-components/input/input.component";

export function UserProfile() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [hoverEdit, setHoverEdit] = useState(false);
  const [selectedTab, setSelectedTab] = useState("profile");
  const [userDetails, setUserDetails] = useState<any>(null); // To store user details
  const [loading, setLoading] = useState(true); // Loading state

  // Load user details from localStorage when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("userDetails");
    if (storedUser) {
      setUserDetails(JSON.parse(storedUser)); // Set the user data from localStorage
    } else {
      setUserDetails(null); // If no user data, set it as null
    }
    setLoading(false); // Finished loading, so set loading to false
  }, []);

  const tabs = [
    { label: "Profile", key: "profile" },
    // { label: "Settings", key: "settings" },
    // { label: "Progress", key: "progress" },
    // { label: "Chart", key: "chart" },
  ];

  const renderContent = () => {
    if (loading) return <div>Loading...</div>; // Show loading state while data is being fetched
    if (!userDetails) return <div>No user data found</div>; // Handle case where no user data is available

    switch (selectedTab) {
      case "profile":
        return (
          <section className={styles.userCard}>
            <div className={styles.card}>
              <div className={styles.userSideBar}>
                <img src={user} alt="User" />
                <h1>{userDetails.name}</h1> {/* Display name from localStorage */}
                <h1>{userDetails.surname}</h1> {/* Display surname from localStorage */}
                <div
                  className={hoverEdit ? styles.hovered : styles.default}
                  onMouseEnter={() => setHoverEdit(true)}
                  onMouseLeave={() => setHoverEdit(false)}
                >
                  <h3 style={{ color: "#FFFFFF" }}>Edit</h3>
                  <i
                    style={{ color: "#FFFFFF" }}
                    className={hoverEdit ? "fa-solid fa-pen" : "fa-solid fa-edit"}
                  ></i>
                </div>
              </div>
              <div className={styles.personalInfo}>
                <span className={styles.infoTitle}>Personal information</span>
                <div className={styles.inputs}>
                  <Input
                    label="Name"
                    type="text"
                    placeholder="Name..."
                    defaultValue={userDetails.name} // Pre-fill the name field
                  />
                  <Input
                    label="Surname"
                    type="text"
                    placeholder="Surname..."
                    defaultValue={userDetails.surname} // Pre-fill the surname field
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="Email..."
                    defaultValue={userDetails.email} // Pre-fill the email field
                  />
                  <Input
                    label="Phone number"
                    type="tel"
                    placeholder="(+)"
                  />
                  <Input
                    label="Role"
                    type="text"
                    placeholder="Role..."
                  />
                  <Input
                    label="Profession"
                    type="textarea"
                    placeholder="Profession..."
                  />
                </div>
                <div>
                  <label className={styles.aboutMeLabel} htmlFor="">
                    About me
                  </label>
                  <textarea
                    rows={7}
                    placeholder="Tell me something about yourself"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      // case "settings":
      //   return <Settings />
      // case "progress":
      //   return <Progress />
      // case "chart":
      //   return <Chart />
      default:
        return null;
    }
  };

  return (
    <main className={styles.content}>
      <i
        onClick={() => navigate(-1)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ cursor: "pointer" }}
        className={hover ? "fa-solid fa-chevrons-left" : "fa-light fa-chevrons-left"}
      ></i>
      <section className={styles.userHeaderInfo}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={styles.headerDirection}
            onClick={() => setSelectedTab(tab.key)}
            style={{
              color: selectedTab === tab.key ? "#6c63ff" : "#212121",
            }}
          >
            <span>{tab.label}</span>
          </div>
        ))}
      </section>
      {renderContent()}
    </main>
  );
}
