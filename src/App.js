import React from "react";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";
import Message from "./components/Message";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: ` flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);
  // console.log(user)

  return (
    <div className={style.appContainer}>
      <h1 className="font-bold bg-green-900 rounded text-white ">
        Talking with your friend now!
      </h1>
      <section className={style.sectionContainer}>
        {/* navigation bar */}
        <Navbar />
        {user ? <Chat /> : null}
        {/* chatcomponents */}
      </section>
    </div>
  );
}

export default App;
