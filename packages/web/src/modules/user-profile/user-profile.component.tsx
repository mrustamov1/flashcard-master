import { useState } from "react"
import { images } from "../../assets"
import styles from "./user-profile.module.css"
import { useNavigate } from "react-router-dom"
// import { Chart } from "./chart/chart.component"
// import { Settings } from "./settings/setting.component"
// import { Progress } from "./progress/progress.component"
import { Input } from "../../ui-components/input/input.component"

export function UserProfile() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate()
  const [hover, setHover] = useState(false)
  const [hoverEdit, setHoverEdit] = useState(false)
  const [selectedTab, setSelectedTab] = useState("profile")

  // ---------------------------------------------------------------------------
  // tabs
  // ---------------------------------------------------------------------------
  const tabs = [
    { label: "Profile", key: "profile" },
    // { label: "Settings", key: "settings" },
    // { label: "Progress", key: "progress" },
    // { label: "Chart", key: "chart" },
  ]

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------
  function renderContent() {
    switch (selectedTab) {
      case "profile":
        return (
          <section className={styles.userCard}>
            <div className={styles.card}>
              <div className={styles.userSideBar}>
                <img src={images.UserProfileLogo} alt="User" />
                <h1>Muhammad Rustamov</h1>{" "}
                <div
                  className={hoverEdit ? styles.hovered : styles.default}
                  onMouseEnter={() => setHoverEdit(true)}
                  onMouseLeave={() => setHoverEdit(false)}
                >
                  <h3 style={{ color: "#FFFFFF" }}>Edit</h3>
                  <i
                    style={{ color: "#FFFFFF" }}
                    className={
                      hoverEdit ? "fa-solid fa-pen" : "fa-solid fa-edit"
                    }
                  ></i>
                </div>
              </div>
              <div className={styles.personalInfo}>
                <span className={styles.infoTitle}>Personal information</span>
                <div className={styles.inputs}>
                  <Input label="Name" type="text" placeholder="Name..." />
                  <Input label="Surname" type="text" placeholder="Surname..." />
                  <Input label="Email" type="email" placeholder="Email..." />
                  <Input label="Phone number" type="tel" placeholder="(+)" />
                  <Input label="Role" type="text" placeholder="Role..." />
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
        )
      // case "settings":
      //   return <Settings />
      // case "progress":
      //   return <Progress />
      // case "chart":
      //   return <Chart />
      default:
        return null
    }
  }

  // ---------------------------------------------------------------------------
  return (
    <main className={styles.content}>
      <i
        onClick={() => navigate(-1)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ cursor: "pointer" }}
        className={
          hover ? "fa-solid fa-chevrons-left" : "fa-light fa-chevrons-left"
        }
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
  )
}
