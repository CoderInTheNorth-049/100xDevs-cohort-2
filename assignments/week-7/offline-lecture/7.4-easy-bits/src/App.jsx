// Import necessary modules and components from Recoil and CSS file
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationsCount } from './atoms'

// Main App component wrapped in RecoilRoot to provide Recoil state management
function App() {
  return (
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}

// MainApp component to render the application UI
function MainApp(){
  // Fetch values from Recoil state atoms
  const networkCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const messagesCount = useRecoilValue(messagingAtom)
  const notificationsCount = useRecoilValue(notificationsAtom)
  const totalNotifications = useRecoilValue(totalNotificationsCount)

  // Return the structure for the UI with buttons displaying different counts
  return (
    <>
      <button>Home</button>
      <button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>
      <button>Messaging ({messagesCount >= 100 ? "99+" : messagesCount})</button>
      <button>Notifications ({notificationsCount >= 100 ? "99+" : notificationsCount})</button>
      <button>Me ({totalNotifications})</button>
    </>
  )
}

// Export the App component as default export
export default App
